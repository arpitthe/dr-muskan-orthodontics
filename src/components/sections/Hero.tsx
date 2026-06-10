"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { scrollToSection } from "@/lib/scrollTo";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);

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
          <div className="absolute inset-0 bg-premium-navy" />
        </video>

        {/* Cinematic Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-premium-navy/80 via-transparent to-premium-navy" />
        <div className="absolute inset-0 bg-premium-navy/40 backdrop-blur-[1px]" />
      </motion.div>

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

          <h1 className="text-7xl lg:text-9xl font-premium-serif text-white leading-[0.9] select-none tracking-tighter">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="block"
            >
              Precision <span className="serif-italic font-light">Artistry</span>
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="block text-premium-gold/90"
            >
              Sculpting <span className="serif-italic font-light text-white">Smiles</span>
            </motion.span>
          </h1>
        </motion.div>
      </div>

      {/* Cinematic Scroll Indicator — scrolls to About */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        onClick={() => scrollToSection("about")}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4 group cursor-pointer"
        aria-label="Scroll to About section"
      >
        <span className="text-[8px] font-bold text-white/30 uppercase tracking-[0.4em] group-hover:text-premium-gold/60 transition-colors duration-500">Scroll to Discover</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-16 bg-gradient-to-b from-premium-gold/50 to-transparent shadow-[0_0_10px_rgba(197,160,89,0.5)]"
        />
      </motion.button>

      {/* Grain Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-30 mix-blend-overlay bg-[url('/textures/noise.svg')]" />
    </section>
  );
}
