"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { MessageSquare, Calendar, Star, ArrowDown } from "lucide-react";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);

  const springConfig = { damping: 15, stiffness: 100 };
  const smoothY = useSpring(y, springConfig);

  const stats = [
    { label: "Patient Care", value: "Gold Standard", icon: Star },
    { label: "Digital Workflow", value: "State-of-the-Art", icon: Calendar },
  ];

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden bg-premium-navy"
    >
      {/* Background Video Layer */}
      <motion.div
        style={{ scale, opacity }}
        className="absolute inset-0 z-0"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-60 grayscale-[0.3]"
        >
          <source 
            src="/videos/ortho.mp4" 
            type="video/mp4" 
          />
          {/* Fallback for optimization if video is slow */}
          <div className="absolute inset-0 bg-premium-navy" />
        </video>

        {/* Cinematic Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-premium-navy/80 via-transparent to-premium-navy" />
        <div className="absolute inset-0 bg-premium-navy/40 backdrop-blur-[1px]" />
      </motion.div>

      {/* Floating Glassmorphism Cards (Layered Depth) */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, -200]) }}
          className="container mx-auto h-full relative"
        >
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 1, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-[20%] left-6 lg:left-0 hidden md:block"
          >
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-2xl">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-10 h-10 rounded-full bg-premium-gold/20 flex items-center justify-center">
                  <Star className="w-5 h-5 text-premium-gold" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-premium-gold uppercase tracking-widest">Aesthetic Mastery</div>
                  <div className="text-sm font-bold text-white">Clinical Perfection</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-[25%] right-6 lg:right-0 hidden md:block"
          >
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-2xl">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-premium-gold uppercase tracking-widest">Expert Consultation</div>
                  <div className="text-sm font-bold text-white">Available Now</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Primary Content Layer */}
      <div className="container mx-auto px-6 relative z-20 text-center">
        <motion.div
          style={{ y: textY, opacity }}
          className="max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="inline-block mb-10"
          >
            <span className="text-[10px] font-bold tracking-[0.6em] text-premium-gold uppercase px-8 py-3 rounded-full border border-premium-gold/20 backdrop-blur-sm">
              The Art of Orthodontics
            </span>
          </motion.div>

          <h1 className="text-7xl lg:text-9xl font-premium-serif text-white leading-[0.9] mb-12 select-none tracking-tighter">
            <motion.span
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="block"
            >
              Precision <span className="serif-italic font-light">Artistry</span>
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="block text-premium-gold/90"
            >
              Sculpting <span className="serif-italic font-light text-white">Smiles</span>
            </motion.span>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-16"
          >
            <Button size="lg" className="h-16 px-12 text-sm font-bold tracking-widest bg-white text-premium-navy hover:bg-premium-gold hover:text-white transition-all duration-500 rounded-full shadow-[0_0_40px_rgba(255,255,255,0.1)] group">
              INITIATE JOURNEY
              <ArrowDown className="w-4 h-4 ml-2 animate-bounce group-hover:scale-110" />
            </Button>

            <div className="flex -space-x-3 items-center group cursor-pointer">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-premium-navy overflow-hidden ring-2 ring-premium-gold/20">
                  <Image
                    src={`https://images.unsplash.com/photo-${i === 1 ? '1594824476967-48c8b964273f' : i === 2 ? '1559839734-2b71ef159950' : '1622253692010-333f2da6031d'}?auto=format&fit=crop&q=80&w=100`}
                    alt="Success Stories"
                    width={40}
                    height={40}
                  />
                </div>
              ))}
              <div className="pl-6 text-left">
                <div className="text-[10px] font-bold text-premium-gold uppercase tracking-widest leading-none mb-1">500+ Transformations</div>
                <div className="text-xs text-white/60 font-medium">Witness Excellence</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Cinematic Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4"
      >
        <span className="text-[8px] font-bold text-white/30 uppercase tracking-[0.4em]">Scroll to Discover</span>
        <div className="w-px h-16 bg-gradient-to-b from-premium-gold/50 to-transparent shadow-[0_0_10px_rgba(197,160,89,0.5)]" />
      </motion.div>

      {/* Grain Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-30 mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </section>
  );
}
