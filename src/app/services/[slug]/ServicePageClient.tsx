"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { 
  ArrowLeft, 
  CheckCircle2, 
  ChevronRight, 
  Sparkles,
  Calendar,
  ShieldCheck,
  Star
} from "lucide-react";
import { servicesData } from "@/data/servicesData";
import { Button } from "@/components/ui/Button";
import { SpotlightCard } from "@/components/ui/motion/SpotlightCard";

interface ServicePageClientProps {
  slug: string;
}

export default function ServicePageClient({ slug }: ServicePageClientProps) {
  const router = useRouter();
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return null;
  }

  const Icon = service.icon;

  return (
    <main className="min-h-screen bg-premium-navy text-white selection:bg-premium-gold/30">
      {/* Background Texture */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-0" />

      {/* Navigation Bar */}
      <nav className="fixed top-0 inset-x-0 h-24 z-50 flex items-center justify-between px-8 bg-premium-navy/50 backdrop-blur-3xl shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
        <Link 
          href="/#services"
          className="flex items-center gap-4 group text-[10px] font-bold uppercase tracking-[0.4em] hover:text-premium-gold transition-colors"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-2 transition-transform" />
          Clinical Solutions
        </Link>
        <div className="flex items-center gap-8">
          <Link href={`/?treatment=${encodeURIComponent(service.title)}#book`}>
            <Button variant="gold" className="h-10 px-6 text-[9px] font-bold tracking-[0.2em] shadow-[0_10px_30px_rgba(197,160,89,0.2)] btn-shine">
              RESERVE APPOINTMENT
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover opacity-40 scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-premium-navy via-premium-navy/60 to-transparent" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-premium-gold/20 bg-premium-gold/5 mb-8">
              <Sparkles className="w-3 h-3 text-premium-gold" />
              <span className="text-[10px] font-bold tracking-[0.4em] text-premium-gold uppercase">Boutique Orthodontics</span>
            </div>
            <h1 className="text-7xl lg:text-9xl font-premium-serif leading-none tracking-tight mb-8">
              {service.title.split(' ')[0]} <span className="serif-italic font-light text-premium-gold">{service.title.split(' ').slice(1).join(' ')}</span>
            </h1>
            <p className="text-xl text-white/60 font-light max-w-2xl mx-auto leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        >
          <span className="text-[9px] font-bold text-white/30 uppercase tracking-[0.5em]">Discover Excellence</span>
          <div className="w-px h-12 bg-gradient-to-b from-premium-gold/40 to-transparent" />
        </motion.div>
      </section>

      {/* Content Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
            {/* Left: Detailed Info */}
            <div className="lg:col-span-7 space-y-24">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-premium-serif mb-12 text-white/90">Clinical Philosophy</h2>
                <div className="space-y-8 text-lg font-light text-white/50 leading-loose">
                  <p>{service.fullDescription}</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl font-premium-serif mb-12 text-white/90">The Treatment Cycle</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  {service.process.map((p, idx) => (
                    <div key={idx} className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 group hover:bg-white/[0.04] transition-all duration-700">
                      <span className="text-2xl font-premium-serif text-premium-gold/40 mb-4 block">{p.step}</span>
                      <h4 className="text-xl font-bold text-white mb-4 uppercase tracking-widest">{p.title}</h4>
                      <p className="text-sm text-white/40 leading-relaxed font-light">{p.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right: Benefits & Sidebar */}
            <div className="lg:col-span-5 sticky top-40 space-y-12">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <SpotlightCard className="p-12 rounded-[2.5rem] bg-gradient-to-b from-white/[0.05] to-transparent border border-white/10 backdrop-blur-3xl shadow-2xl overflow-hidden relative">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Icon className="w-24 h-24" />
                </div>
                
                <h3 className="text-2xl font-premium-serif mb-10 tracking-wide">Premium Benefits</h3>
                <div className="space-y-6">
                  {service.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-4">
                      <div className="w-6 h-6 rounded-full bg-premium-gold/10 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-3 h-3 text-premium-gold" />
                      </div>
                      <span className="text-sm font-medium text-white/70 tracking-wide uppercase">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-16 pt-10 border-t border-white/5 space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">Technology Level</span>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-2 h-2 text-premium-gold fill-premium-gold" />)}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">Clinical Precision</span>
                    <span className="text-[10px] font-bold text-premium-gold uppercase tracking-[0.2em]">Grade A+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">Starting Price</span>
                    <span className="text-[10px] font-bold text-premium-gold uppercase tracking-[0.2em]">{service.price}</span>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>

              <div 
                className="p-12 rounded-[2.5rem] bg-premium-gold text-premium-navy shadow-[0_30px_60px_rgba(197,160,89,0.3)] group cursor-pointer overflow-hidden relative" 
                onClick={() => router.push(`/?treatment=${encodeURIComponent(service.title)}#book`)}
              >
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
                <div className="relative z-10">
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] mb-4 block">Call to Action</span>
                  <h4 className="text-3xl font-premium-serif mb-6 leading-tight">Initiate Your <br /> Transformation</h4>
                  <div className="flex items-center gap-3 group-hover:translate-x-2 transition-transform duration-500">
                    <span className="text-xs font-bold uppercase tracking-widest">Book Now</span>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
                <Calendar className="absolute -bottom-4 -right-4 w-32 h-32 opacity-10 group-hover:opacity-20 transition-opacity" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Quote */}
      <section className="py-40 bg-navy-950/50">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <ShieldCheck className="w-16 h-16 text-premium-gold mx-auto mb-10 opacity-50" />
            <h2 className="text-4xl lg:text-6xl font-premium-serif italic text-white/90 mb-12 leading-tight">
              &quot;We don&apos;t just align teeth; we architect facial harmony with clinical precision.&quot;
            </h2>
            <div className="flex flex-col items-center gap-4">
              <span className="text-sm font-bold text-premium-gold tracking-[0.5em] uppercase">Dr. Muskan Singh</span>
              <span className="text-[10px] text-white/30 uppercase tracking-widest">MDS Orthodontics & Dentofacial Orthopedics</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer Minimal */}
      <footer className="py-12 border-t border-white/5 bg-navy-950">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-[9px] font-bold text-white/20 uppercase tracking-[0.4em]">
            &copy; 2025 Singh Orthodontics. Luxury Tier Clinical Care.
          </div>
          <div className="flex gap-8">
            {["Privacy", "Terms", "Consultation"].map(t => (
              <span key={t} className="text-[9px] font-bold text-white/20 uppercase tracking-[0.2em] hover:text-white transition-colors cursor-pointer">{t}</span>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}
