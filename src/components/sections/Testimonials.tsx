"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Quote, Play } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Invisalign Patient",
    review: "Dr. Muskan is incredibly detail-oriented. My aligner treatment was smooth, and the results are better than I imagined. Highly recommend!",
    rating: 5,
  },
  {
    name: "Rahul Verma",
    role: "Metal Braces",
    review: "The care I received for my complex bite issue was exceptional. Dr. Muskan explained every step clearly and made the process comfortable.",
    rating: 5,
  },
  {
    name: "Ananya Iyer",
    role: "Clear Braces",
    review: "Professional, gentle, and modern. The clinic uses the latest technology which made my treatment much faster than expected.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-40 bg-premium-navy overflow-hidden">
      {/* Cinematic Background Elements */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-24 gap-12">
          <div className="lg:w-1/2">
            <div className="inline-block px-4 py-1.5 rounded-full border border-premium-gold/20 bg-premium-gold/5 mb-8">
              <span className="text-[10px] font-bold tracking-[0.4em] text-premium-gold uppercase">Patient Stories</span>
            </div>
            <h3 className="text-5xl lg:text-7xl font-premium-serif text-white leading-[0.95] tracking-tight">
              Testimonials <br /> 
              <span className="serif-italic font-light text-premium-gold">of Excellence</span>
            </h3>
          </div>
          <div className="lg:w-1/2">
            <p className="text-white/40 max-w-xl text-lg font-light leading-relaxed">
              Real feedback from patients who have transformed their smiles and 
              lives through our <span className="text-white/70 italic">bespoke orthodontic care</span>.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-32">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="p-12 bg-white/[0.03] backdrop-blur-3xl rounded-[3rem] border border-white/10 relative group hover:bg-white/[0.05] hover:border-premium-gold/30 hover:-translate-y-2 transition-all duration-700 shadow-2xl"
            >
              <Quote className="absolute top-10 right-10 w-16 h-16 text-premium-gold/5 group-hover:text-premium-gold/10 transition-all duration-700 rotate-12 group-hover:rotate-0" />
              
              <div className="flex gap-1.5 mb-10">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-premium-gold text-premium-gold shadow-[0_0_15px_rgba(197,160,89,0.5)]" />
                ))}
              </div>

              <p className="text-white/80 text-xl leading-relaxed mb-12 font-light italic">
                "{t.review}"
              </p>

              <div className="flex items-center gap-6 pt-10 border-t border-white/5">
                <div className="w-16 h-16 rounded-2xl bg-navy-900 border border-white/10 flex items-center justify-center font-premium-serif text-2xl text-premium-gold shadow-xl group-hover:bg-premium-gold group-hover:text-white transition-all duration-700">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-1">{t.name}</h4>
                  <p className="text-[10px] text-premium-gold uppercase font-bold tracking-[0.2em]">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Video Testimonial Placeholder */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-w-6xl mx-auto aspect-video rounded-[4rem] overflow-hidden group shadow-[0_50px_100px_rgba(0,0,0,0.6)] ring-1 ring-white/10"
        >
          <div className="absolute inset-0 bg-premium-navy/60 group-hover:bg-premium-navy/30 transition-all duration-1000 z-10" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-105" />
          
          <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
            <button className="w-32 h-32 bg-white/10 backdrop-blur-3xl border border-white/20 rounded-full flex items-center justify-center shadow-2xl relative group/btn overflow-hidden transition-all duration-700 hover:scale-110">
              <div className="absolute inset-0 bg-premium-gold opacity-0 group-hover/btn:opacity-100 transition-opacity duration-700" />
              <Play className="w-10 h-10 text-white relative z-10 ml-2 group-hover/btn:fill-white transition-all" />
            </button>
            <div className="mt-12 text-center text-white">
              <h4 className="text-4xl font-premium-serif mb-4 leading-tight">Patient <span className="serif-italic text-premium-gold">Success</span> Story</h4>
              <p className="text-[11px] text-white/50 font-bold uppercase tracking-[0.5em]">Watch The Elite Transformation Journey</p>
            </div>
          </div>
          
          <div className="absolute bottom-12 left-12 right-12 flex justify-between items-center z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700">
             <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent mx-4" />
             <div className="text-[10px] text-white/30 uppercase tracking-[0.2em]">Cinematic Production</div>
             <div className="h-px flex-1 bg-gradient-to-l from-white/20 to-transparent mx-4" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
