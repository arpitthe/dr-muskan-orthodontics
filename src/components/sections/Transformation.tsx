"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { MoveHorizontal, Sparkles, ArrowRight } from "lucide-react";
import Image from "next/image";
import { scrollToSection } from "@/lib/scrollTo";

const GalleryItem = ({ title, before, after }: { title: string, before: string, after: string }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = "touches" in e ? e.touches[0].clientX : e.clientX;
    const position = ((x - rect.left) / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, position)));
  };

  return (
    <div className="relative group p-6 bg-white/[0.03] backdrop-blur-xl rounded-[2.5rem] border border-white/10 shadow-2xl transition-all duration-700 hover:bg-white/[0.05]">
      <div 
        ref={containerRef}
        className="relative aspect-[16/11] rounded-2xl overflow-hidden cursor-ew-resize select-none ring-1 ring-white/10 touch-none group/slider"
        style={{ aspectRatio: "16 / 11" }}
        onMouseMove={handleMove}
        onTouchMove={handleMove}
      >
        {/* After Image */}
        <div className="absolute inset-0">
          <Image 
            src={after} 
            alt="After treatment"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center text-white/[0.03] font-bold uppercase tracking-[0.6em] text-4xl select-none z-10">
            Singh Artistry
          </div>
        </div>

        {/* Before Image (Transitioning) */}
        <div 
          className="absolute inset-0 border-r border-premium-gold/50 z-20"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <div className="absolute inset-0">
            <Image 
              src={before} 
              alt="Before treatment"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover brightness-[0.85] saturate-[0.8]"
            />
            <div className="absolute inset-0 flex items-center justify-center text-white/[0.05] font-bold uppercase tracking-[0.6em] text-4xl select-none z-10">
              Initial Case
            </div>
          </div>
        </div>

        {/* Slider Handle */}
        <div 
          className="absolute top-0 bottom-0 w-[2px] bg-gradient-to-b from-premium-gold/40 via-premium-gold to-premium-gold/40 shadow-[0_0_15px_rgba(197,160,89,0.7)] z-20"
          style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-premium-navy/90 rounded-full shadow-[0_0_20px_rgba(197,160,89,0.5)] flex items-center justify-center border border-premium-gold/50 text-premium-gold transition-all duration-300 group-hover/slider:scale-110 group-hover/slider:border-premium-gold group-active/slider:scale-95">
            <MoveHorizontal className="w-5 h-5" />
          </div>
        </div>

        {/* Labels */}
        <div className="absolute top-6 left-6 bg-navy-950/80 backdrop-blur-md border border-white/10 px-4 py-1.5 rounded-full text-[9px] font-bold text-white/70 uppercase tracking-[0.2em] shadow-xl">
          Initial State
        </div>
        <div className="absolute top-6 right-6 bg-premium-gold/90 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full text-[9px] font-bold text-premium-navy uppercase tracking-[0.2em] shadow-xl">
          Final Result
        </div>
      </div>
      
      <div className="mt-8 flex items-center justify-between px-2">
        <h4 className="text-2xl font-premium-serif text-white group-hover:text-premium-gold transition-colors duration-500">{title}</h4>
        <div className="flex items-center gap-3 text-premium-gold/60 text-[10px] font-bold uppercase tracking-[0.2em]">
          <Sparkles className="w-4 h-4" />
          <span>Real Transformation</span>
        </div>
      </div>
    </div>
  );
};

export function Transformation() {
  return (
    <section id="transformations" className="relative py-40 bg-premium-navy overflow-hidden">
      {/* Cinematic Overlays */}
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-24 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto lg:mx-0"
          >
            <div className="flex justify-center lg:justify-start mb-8">
              <div className="inline-block px-4 py-1.5 rounded-full border border-premium-gold/20 bg-premium-gold/5">
                <span className="text-[10px] font-bold tracking-[0.4em] text-premium-gold uppercase">Clinical Mastery</span>
              </div>
            </div>
            <h3 className="text-5xl md:text-6xl lg:text-8xl font-premium-serif text-white tracking-tight leading-[0.9]">
              Before & After <span className="serif-italic font-light text-premium-gold">Success</span>
            </h3>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/50 font-light text-base md:text-lg max-w-sm leading-relaxed mx-auto lg:mx-0"
          >
            Witness the clinical precision and aesthetic harmony achieved in our recent orthodontic transformations.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <GalleryItem 
              title="Aesthetic Space Closure" 
              before="/ortho-placeholder-before.jpg" 
              after="/ortho-placeholder-after.jpg" 
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <GalleryItem 
              title="Precision Aligner Therapy" 
              before="/ortho-placeholder-before-2.jpg" 
              after="/ortho-placeholder-after-2.jpg" 
            />
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 flex flex-col items-center gap-8"
        >
          <button 
            onClick={() => scrollToSection("book")}
            className="group flex flex-col items-center gap-6 cursor-pointer"
          >
            <div className="h-20 px-16 bg-white text-premium-navy rounded-full font-bold text-sm tracking-[0.4em] uppercase hover:bg-premium-gold hover:text-white transition-all duration-700 shadow-2xl flex items-center gap-6 relative overflow-hidden btn-shine">
               <div className="absolute inset-0 bg-premium-gold translate-y-full group-hover:translate-y-0 transition-transform duration-700 -z-10" />
               START YOUR TRANSFORMATION
               <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </div>
            <span className="text-[10px] font-bold text-white/30 uppercase tracking-[0.5em] group-hover:text-premium-gold transition-colors">Private Consultation Waiting</span>
          </button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-32 pt-16 border-t border-white/5 text-center"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-24">
            {[
              { label: "Clinic Average", value: "14 Months" },
              { label: "Digital Precision", value: "99.9%" },
              { label: "Patient Satisfaction", value: "Gold Standard" }
            ].map((item, idx) => (
              <motion.div 
                key={item.label} 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + (idx * 0.1) }}
                className="text-center group cursor-default"
              >
                <div className="text-[10px] font-bold text-premium-gold/50 uppercase tracking-[0.4em] mb-3 group-hover:text-premium-gold transition-all duration-500">
                  {item.label}
                </div>
                <div className="text-3xl font-premium-serif text-white tracking-tight">{item.value}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
