import { NextResponse } from "next/server";

// Cache configuration: Revalidate every 1 hour (3600 seconds)
export const revalidate = 3600;

const images = [
  "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=800", // Dentistry / clinical
  "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800", // Patient / Braces
  "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800", // AI / Technology
  "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=800", // Adults / Aesthetics
];

function getStableImage(title: string) {
  let hash = 0;
  for (let i = 0; i < title.length; i++) {
    hash = title.charCodeAt(i) + ((hash << 5) - hash);
  }
  const index = Math.abs(hash) % images.length;
  return images[index];
}

function formatDate(pubDate: string) {
  const match = pubDate.match(/(\d+)\s+([A-Za-z]+)\s+(\d{4})/);
  if (match) {
    const [, day, month, year] = match;
    return `${month} ${day}, ${year}`;
  }
  return pubDate;
}

function getCategory(title: string, description: string) {
  const content = (title + " " + description).toLowerCase();
  if (content.includes("orthodontic") || content.includes("aligner") || content.includes("braces")) {
    return "Orthodontics";
  }
  if (content.includes("ai") || content.includes("technology") || content.includes("digital") || content.includes("deep learning") || content.includes("algorithm")) {
    return "Medical Tech";
  }
  if (content.includes("hygiene") || content.includes("gum") || content.includes("clean") || content.includes("periodontal") || content.includes("bacteria")) {
    return "Oral Care";
  }
  if (content.includes("heart") || content.includes("blood pressure") || content.includes("systemic") || content.includes("alzheimer") || content.includes("brain")) {
    return "Systemic Health";
  }
  return "Clinical Research";
}

function decodeEntities(str: string) {
  return str
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&rsquo;/g, "'")
    .replace(/&ldquo;/g, '"')
    .replace(/&rdquo;/g, '"')
    .replace(/&ndash;/g, "–")
    .replace(/&mdash;/g, "—")
    .trim();
}

export async function GET() {
  try {
    const response = await fetch("https://www.sciencedaily.com/rss/health_medicine/dentistry.xml", {
      next: { revalidate: 3600 }
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch RSS: ${response.statusText}`);
    }

    const xml = await response.text();
    const itemsMatch = xml.match(/<item>([\s\S]*?)<\/item>/g);

    if (!itemsMatch) {
      return NextResponse.json([]);
    }

    const updates = itemsMatch.map((itemXml) => {
      const rawTitle = itemXml.match(/<title>([\s\S]*?)<\/title>/)?.[1] || "";
      const rawLink = itemXml.match(/<link>([\s\S]*?)<\/link>/)?.[1] || "";
      const rawPubDate = itemXml.match(/<pubDate>([\s\S]*?)<\/pubDate>/)?.[1] || "";
      const rawDesc = itemXml.match(/<description>([\s\S]*?)<\/description>/)?.[1] || "";

      const title = decodeEntities(rawTitle);
      const excerpt = decodeEntities(rawDesc);
      let articleUrl = decodeEntities(rawLink);
      const date = formatDate(rawPubDate);
      const category = getCategory(title, excerpt);
      const image = getStableImage(title);

      // Resolve 404 issue on ScienceDaily for mocked future year links
      if (articleUrl.includes("sciencedaily.com") && (articleUrl.includes("/2026/") || articleUrl.includes("/2025/"))) {
        articleUrl = `https://www.sciencedaily.com/search/?keyword=${encodeURIComponent(title)}`;
      }

      return {
        title,
        category,
        date,
        excerpt,
        image,
        articleUrl,
      };
    });

    return NextResponse.json(updates.slice(0, 10));
  } catch (error) {
    console.error("Error fetching live dental news:", error);
    // Return empty array so client can gracefully fall back to pre-defined static news
    return NextResponse.json([]);
  }
}
