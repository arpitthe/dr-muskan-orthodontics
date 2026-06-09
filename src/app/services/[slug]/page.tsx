import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { servicesData } from "@/data/servicesData";
import ServicePageClient from "./ServicePageClient";
import { Button } from "@/components/ui/Button";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found | Dr. Muskan Singh",
    };
  }

  return {
    title: `${service.title} | Dr. Muskan Singh Premium Orthodontics`,
    description: service.description,
    openGraph: {
      title: `${service.title} | Dr. Muskan Singh`,
      description: service.description,
      images: [{ url: service.image }],
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen bg-premium-navy flex flex-col items-center justify-center text-white p-6">
        <h1 className="text-4xl font-premium-serif mb-6 text-premium-gold">Service Not Found</h1>
        <p className="text-white/50 mb-12">The clinical service you are looking for is not available.</p>
        <Link href="/">
          <Button variant="outline" className="border-white/10 text-white hover:bg-white/5 tracking-[0.3em] uppercase text-[10px]">
            Return to Portfolio
          </Button>
        </Link>
      </div>
    );
  }

  return <ServicePageClient slug={slug} />;
}
