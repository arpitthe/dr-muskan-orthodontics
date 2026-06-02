import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import emailjs from "@emailjs/browser";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://placeholder.supabase.co";
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder";
const supabase = createClient(supabaseUrl, supabaseKey);

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // 1. Save to Supabase
    const { error: sbError } = await supabase
      .from("appointments")
      .insert([body]);

    if (sbError) throw sbError;

    // Note: EmailJS is typically client-side, for server-side mailing 
    // you would use Nodemailer or similar. Since the user requested 
    // EmailJS, we'll suggest staying with client-side or use a server-side equivalent.
    
    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("API Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
