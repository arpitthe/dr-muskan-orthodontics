"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ExternalLink, Clock } from "lucide-react";
import Image from "next/image";
import { SpotlightCard } from "@/components/ui/motion/SpotlightCard";

const posts = [
  {
    title: "Braces vs Aligners: Which is right for you?",
    category: "Orthodontics",
    date: "May 15, 2026",
    excerpt: "Understanding the key differences, pros, and cons of traditional braces and modern clear aligners.",
    image: "/images/clear-aligners.jpg",
    articleUrl: "https://aaoinfo.org/?s=parents+guide+to+clear+aligners"
  },
  {
    title: "Maintaining Oral Hygiene with Braces",
    category: "Smile Care",
    date: "April 28, 2026",
    excerpt: "A comprehensive guide on how to keep your teeth and gums healthy while wearing orthodontic appliances.",
    image: "/images/ceramic-braces.jpg",
    articleUrl: "https://aaoinfo.org/?s=brushing+and+flossing+with+braces"
  },
  {
    title: "The Science of Smile Design",
    category: "Technology",
    date: "April 10, 2026",
    excerpt: "How digital workflows and facial analysis help us create the perfectly balanced smile for our patients.",
    image: "/images/preventive-care.jpg",
    articleUrl: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4606515/"
  },
];

const liveUpdates = [
  {
    title: "AAO Recommends First Orthodontic Screening by Age 7",
    category: "Clinical Guideline",
    date: "June 2026",
    excerpt: "Early evaluation allows Dr. Singh to detect subtle problems with jaw growth and emerging teeth while baby teeth are still present. Early detection helps prevent complex treatments later.",
    image: "/images/preventive-care.jpg",
    articleUrl: "https://aaoinfo.org/?s=clinical+guidelines"
  },
  {
    title: "Optimal Hygiene Workflows for Clear Aligner Systems",
    category: "Patient Tip",
    date: "May 2026",
    excerpt: "Discover the golden rules of Aligner hygiene. Learn how to clean your trays, avoid staining, and maintain gum health during your transformation cycle.",
    image: "/images/clear-aligners.jpg",
    articleUrl: "https://aaoinfo.org/?s=parents+guide+to+clear+aligners"
  },
  {
    title: "Artificial Intelligence in Cephalometric and Aligner Planning",
    category: "Medical Tech",
    date: "April 2026",
    excerpt: "How deep learning algorithms and convolutional neural networks are enhancing diagnostic accuracy, landmark tracing, and treatment velocity forecasting in orthodontics.",
    image: "/images/smile-design.jpg",
    articleUrl: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10153835/"
  },
  {
    title: "The Rise of Adult Orthodontics: Aesthetic Solutions for Professionals",
    category: "Industry News",
    date: "March 2026",
    excerpt: "Over 25% of orthodontic patients are adults. Explore how modern invisible aligners and ceramic solutions fit seamlessly into professional lifestyles.",
    image: "/images/ceramic-braces.jpg",
    articleUrl: "https://aaoinfo.org/?s=orthodontic+treatment+for+adults"
  }
];

export function Blog() {
  const [updates, setUpdates] = useState(liveUpdates);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<"all" | "blogs" | "live">("all");

  useEffect(() => {
    async function fetchLiveNews() {
      try {
        const res = await fetch("/api/dental-news");
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data) && data.length > 0) {
            setUpdates(data);
          }
        }
      } catch (err) {
        console.error("Failed to load live dental news:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchLiveNews();
  }, []);

  // Format articles to a unified structure
  const clinicalBlogs = posts.map((p) => ({
    ...p,
    isLive: false,
  }));

  const liveNews = updates.map((u) => ({
    ...u,
    isLive: true,
  }));

  const displayedArticles = React.useMemo(() => {
    if (activeTab === "blogs") {
      return clinicalBlogs;
    }
    if (activeTab === "live") {
      return liveNews.slice(0, 9); // limit to 9 for grid layout symmetry
    }
    // "all": show the 3 clinical blogs first, then the latest 6 live news items
    return [...clinicalBlogs, ...liveNews.slice(0, 6)];
  }, [activeTab, updates]);

  return (
    <section id="blog" className="relative py-32 bg-premium-navy overflow-hidden">
      {/* Cinematic Overlays */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay bg-[url('/textures/noise.svg')]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8 relative border-b border-white/5 pb-12 text-center lg:text-left">
          <div className="max-w-2xl mx-auto lg:mx-0">
            <div className="flex justify-center lg:justify-start mb-6">
              <div className="inline-block px-4 py-1.5 rounded-full border border-premium-gold/20 bg-premium-gold/5">
                <span className="text-[10px] font-bold tracking-[0.4em] text-premium-gold uppercase">Exclusive Insights</span>
              </div>
            </div>
            <h3 className="text-5xl lg:text-7xl font-premium-serif text-white tracking-tight leading-[0.9]">
              Dental <span className="serif-italic font-light text-premium-gold">Blogs</span>
            </h3>
            <p className="text-sm font-light text-white/50 tracking-wide mt-6 leading-relaxed max-w-lg mx-auto lg:mx-0">
              Explore professional clinical cases, smile design guidelines, and real-time orthodontic research updates.
            </p>
          </div>

          {/* Interactive Filtering Tabs */}
          <div className="flex flex-wrap gap-3 p-1.5 rounded-[2rem] bg-white/[0.02] border border-white/5 mx-auto lg:mx-0 lg:self-end items-center relative z-20 justify-center">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-6 py-3 rounded-full text-[10px] font-bold uppercase tracking-[0.15em] transition-all duration-500 cursor-pointer ${
                activeTab === "all"
                  ? "bg-premium-gold text-premium-navy shadow-[0_10px_20px_rgba(197,160,89,0.2)]"
                  : "text-white/60 hover:text-white hover:bg-white/5"
              }`}
            >
              All Articles
            </button>
            <button
              onClick={() => setActiveTab("blogs")}
              className={`px-6 py-3 rounded-full text-[10px] font-bold uppercase tracking-[0.15em] transition-all duration-500 cursor-pointer ${
                activeTab === "blogs"
                  ? "bg-premium-gold text-premium-navy shadow-[0_10px_20px_rgba(197,160,89,0.2)]"
                  : "text-white/60 hover:text-white hover:bg-white/5"
              }`}
            >
              Clinical Blogs
            </button>
            <button
              onClick={() => setActiveTab("live")}
              className={`px-6 py-3 rounded-full text-[10px] font-bold uppercase tracking-[0.15em] transition-all duration-500 cursor-pointer flex items-center gap-2 ${
                activeTab === "live"
                  ? "bg-premium-gold text-premium-navy shadow-[0_10px_20px_rgba(197,160,89,0.2)]"
                  : "text-white/60 hover:text-white hover:bg-white/5"
              }`}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              Live Research Feed
            </button>
          </div>

          {loading && (activeTab === "live" || activeTab === "all") && (
            <div className="absolute right-0 top-0 flex items-center gap-2 text-[9px] font-bold text-white/30 uppercase tracking-[0.2em] animate-pulse">
              Refreshing live feed...
            </div>
          )}
        </div>

        {/* Unified Articles Grid */}
        <motion.div 
          layout 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
        >
          <AnimatePresence mode="popLayout">
            {displayedArticles.map((article, index) => (
              <motion.div
                key={article.title}
                layout
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 30, scale: 0.95 }}
                transition={{ 
                  duration: 0.6, 
                  ease: [0.16, 1, 0.3, 1],
                  delay: (index % 3) * 0.05 
                }}
                className="h-full"
              >
                <a
                  href={article.articleUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full cursor-pointer group"
                >
                  <SpotlightCard className="p-6 bg-white/[0.01] border border-white/5 rounded-[2.5rem] hover:bg-white/[0.03] transition-all duration-700 shadow-2xl h-full flex flex-col justify-between relative overflow-hidden">
                    <div>
                      {/* Image container */}
                      <div className="relative aspect-[16/11] rounded-2xl overflow-hidden mb-8 shadow-2xl ring-1 ring-white/10">
                        <div className="absolute inset-0 bg-premium-navy/40 group-hover:bg-transparent transition-colors duration-700 z-10" />
                        <Image 
                          src={article.image} 
                          alt={article.title}
                          width={800}
                          height={500}
                          className="w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-[1500ms] grayscale-[0.2] group-hover:grayscale-0" 
                        />
                        
                        <div className="absolute top-6 left-6 z-20 flex flex-wrap gap-2 max-w-[90%]">
                          {article.isLive && (
                            <span className="px-3 py-1 bg-red-500/90 backdrop-blur-xl border border-red-400/20 rounded-full text-[8px] font-bold text-white uppercase tracking-[0.2em] flex items-center gap-1.5 animate-pulse">
                              <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                              Live News
                            </span>
                          )}
                          <span className="px-4 py-1.5 bg-white/10 backdrop-blur-xl border border-white/10 rounded-full text-[9px] font-bold text-white uppercase tracking-[0.2em]">
                            {article.category}
                          </span>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-premium-navy to-transparent opacity-40" />
                      </div>
                      
                      {/* Text details */}
                      <div className="px-2">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-8 h-px bg-premium-gold/30" />
                          <span className="text-[10px] text-premium-gold font-bold uppercase tracking-widest">{article.date}</span>
                        </div>
                        <h4 className="text-2xl md:text-3xl font-premium-serif text-white mb-6 group-hover:text-premium-gold transition-colors duration-500 leading-tight line-clamp-2">
                          {article.title}
                        </h4>
                        <p className="text-white/40 text-sm leading-relaxed mb-8 line-clamp-3 font-light">
                          {article.excerpt}
                        </p>
                      </div>
                    </div>

                    {/* Bottom CTA */}
                    <div className="px-2 pb-2 mt-auto">
                      <div className="flex items-center gap-4 text-[10px] font-bold text-white uppercase tracking-[0.3em] group-hover:gap-6 transition-all duration-500">
                        <span>{article.isLive ? "Read Research Source" : "Read Full Blog"}</span>
                        <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-premium-gold/10 group-hover:border-premium-gold transition-all duration-500">
                          {article.isLive ? (
                            <ExternalLink className="w-3.5 h-3.5 text-premium-gold" />
                          ) : (
                            <ArrowRight className="w-3 h-3 text-premium-gold" />
                          )}
                        </div>
                      </div>
                    </div>
                  </SpotlightCard>
                </a>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
