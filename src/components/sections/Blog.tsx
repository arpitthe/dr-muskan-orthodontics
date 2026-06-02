"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const posts = [
  {
    title: "Braces vs Aligners: Which is right for you?",
    category: "Orthodontics",
    date: "May 15, 2026",
    excerpt: "Understanding the key differences, pros, and cons of traditional braces and modern clear aligners.",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Maintaining Oral Hygiene with Braces",
    category: "Smile Care",
    date: "April 28, 2026",
    excerpt: "A comprehensive guide on how to keep your teeth and gums healthy while wearing orthodontic appliances.",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "The Science of Smile Design",
    category: "Technology",
    date: "April 10, 2026",
    excerpt: "How digital workflows and facial analysis help us create the perfectly balanced smile for our patients.",
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=800",
  },
];

export function Blog() {
  return (
    <section id="blog" className="relative py-32 bg-premium-navy overflow-hidden">
      {/* Cinematic Overlays */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-12">
          <div className="md:w-1/2">
            <div className="inline-block px-4 py-1.5 rounded-full border border-premium-gold/20 bg-premium-gold/5 mb-8">
              <span className="text-[10px] font-bold tracking-[0.4em] text-premium-gold uppercase">Clinical Insights</span>
            </div>
            <h3 className="text-5xl lg:text-7xl font-premium-serif text-white tracking-tight leading-[0.9]">
              Dental <span className="serif-italic font-light text-premium-gold">Intelligence</span>
            </h3>
          </div>
          <div className="md:w-1/2 md:text-right">
            <button className="text-[10px] font-bold text-white uppercase tracking-[0.4em] flex items-center gap-4 md:ml-auto group py-3 px-8 rounded-full border border-white/10 hover:bg-white/5 transition-all">
              EXPLORE ARCHIVE
              <ArrowRight className="w-3 h-3 text-premium-gold transition-transform group-hover:translate-x-2" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {posts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[16/11] rounded-2xl overflow-hidden mb-8 shadow-2xl ring-1 ring-white/10">
                <div className="absolute inset-0 bg-premium-navy/40 group-hover:bg-transparent transition-colors duration-700 z-10" />
                <Image 
                  src={post.image} 
                  alt={post.title}
                  width={800}
                  height={500}
                  className="w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-[1500ms] grayscale-[0.2] group-hover:grayscale-0" 
                />
                <div className="absolute top-6 left-6 z-20">
                  <span className="px-4 py-1.5 bg-white/10 backdrop-blur-xl border border-white/10 rounded-full text-[9px] font-bold text-white uppercase tracking-[0.2em]">
                    {post.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-premium-navy to-transparent opacity-40" />
              </div>
              
              <div className="px-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-px bg-premium-gold/30" />
                  <span className="text-[10px] text-premium-gold font-bold uppercase tracking-widest">{post.date}</span>
                </div>
                <h4 className="text-2xl md:text-3xl font-premium-serif text-white mb-6 group-hover:text-premium-gold transition-colors duration-500 leading-tight">
                  {post.title}
                </h4>
                <p className="text-white/40 text-sm leading-relaxed mb-8 line-clamp-2 font-light">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-4 text-[10px] font-bold text-white uppercase tracking-[0.3em] group-hover:gap-6 transition-all duration-500">
                  READ CASE STUDY
                  <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-premium-gold/10 group-hover:border-premium-gold transition-all duration-500">
                    <ArrowRight className="w-3 h-3 text-premium-gold" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
