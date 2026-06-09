"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Image from "next/image";
import InfiniteMenu from "@/components/ui/motion/InfiniteMenu";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Invisalign Patient",
    review: "Dr. Muskan is incredibly detail-oriented. My aligner treatment was smooth, and the results are better than I imagined. Highly recommend!",
    rating: 5,
    image: "/images/testimonial-priya.jpg"
  },
  {
    name: "Rahul Verma",
    role: "Metal Braces",
    review: "The care I received for my complex bite issue was exceptional. Dr. Muskan explained every step clearly and made the process comfortable.",
    rating: 5,
    image: "/images/testimonial-rahul.jpg"
  },
  {
    name: "Ananya Iyer",
    role: "Clear Braces",
    review: "Professional, gentle, and modern. The clinic uses the latest technology which made my treatment much faster than expected.",
    rating: 5,
    image: "/images/testimonial-ananya.jpg"
  },
  {
    name: "Vikram Malhotra",
    role: "Retainer Therapy",
    review: "Superb experience! The retainer checkups and hygiene workflows are top-notch. Very clean and professional clinic.",
    rating: 5,
    image: "/images/testimonial-vikram.jpg"
  },
  {
    name: "Meera Sen",
    role: "Ceramic Braces",
    review: "My ceramic braces were completely discreet and highly effective. Dr. Muskan's aesthetic precision is gold-standard.",
    rating: 5,
    image: "/images/testimonial-meera.jpg"
  },
  {
    name: "Siddharth Roy",
    role: "Smile Design",
    review: "Fascinating technology. The digital smile planning and facial harmony analysis showed me my final result before we even started.",
    rating: 5,
    image: "/images/testimonial-siddharth.jpg"
  },
];

const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

export function Testimonials() {
  const [highlightedName, setHighlightedName] = React.useState<string | null>(null);

  React.useEffect(() => {
    const handleHighlight = (e: Event) => {
      const customEvent = e as CustomEvent<{ name: string }>;
      const name = customEvent.detail.name;
      setHighlightedName(name);
      
      // Auto-remove highlight after 4 seconds
      const timer = setTimeout(() => {
        setHighlightedName(null);
      }, 4000);
      return () => clearTimeout(timer);
    };
    window.addEventListener("highlightTestimonial", handleHighlight);
    return () => window.removeEventListener("highlightTestimonial", handleHighlight);
  }, []);

  const highlightedIndex = React.useMemo(() => {
    return testimonials.findIndex(t => t.name === highlightedName);
  }, [highlightedName]);

  const menuItems = testimonials.map((t) => ({
    image: t.image,
    link: `#testimonials-marquee`,
    title: t.name,
    description: `Read review for ${t.role.toUpperCase()}`
  }));

  return (
    <section id="testimonials" className="relative py-40 bg-premium-navy overflow-hidden">
      {/* Cinematic Background Elements */}

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-12 text-center lg:text-left">
          <div className="lg:w-1/2 mx-auto lg:mx-0">
            <div className="flex justify-center lg:justify-start mb-8">
              <div className="inline-block px-4 py-1.5 rounded-full border border-premium-gold/20 bg-premium-gold/5">
                <span className="text-[10px] font-bold tracking-[0.4em] text-premium-gold uppercase">Patient Stories</span>
              </div>
            </div>
            <h3 className="text-4xl md:text-5xl lg:text-7xl font-premium-serif text-white leading-[0.95] tracking-tight">
              Testimonials <br className="hidden lg:block" /> 
              <span className="serif-italic font-light text-premium-gold">of Excellence</span>
            </h3>
          </div>
          <div className="lg:w-1/2 max-w-xl mx-auto lg:mx-0">
            <p className="text-white/40 text-base md:text-lg font-light leading-relaxed">
              Real feedback from patients who have transformed their smiles and 
              lives through our <span className="text-white/70 italic">bespoke orthodontic care</span>.
            </p>
          </div>
        </div>
      </div>

      {/* Infinite Scrolling Ticker (Full Width) */}
      <div id="testimonials-marquee" className="relative w-full overflow-hidden mb-28 py-6 select-none">
        {/* Soft edge blur overlays */}
        <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-premium-navy to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-premium-navy to-transparent z-20 pointer-events-none" />

        <div 
          className={`animate-marquee-loop ${highlightedName ? 'paused' : ''}`}
          style={highlightedName && highlightedIndex !== -1 ? {
            transform: `translateX(calc(50vw - (var(--card-step) * ${highlightedIndex}) - var(--card-center)))`,
            transition: 'transform 1s cubic-bezier(0.16, 1, 0.3, 1)'
          } : undefined}
        >
          {duplicatedTestimonials.map((t, index) => (
            <div
              key={index}
              className={`w-[360px] md:w-[440px] p-10 bg-white/[0.03] backdrop-blur-3xl rounded-[3rem] border relative group hover:bg-white/[0.05] transition-all duration-500 shadow-2xl flex-shrink-0 whitespace-normal flex flex-col justify-between h-[360px] ${
                highlightedName === t.name 
                  ? "border-premium-gold bg-premium-gold/10 scale-105 shadow-[0_0_50px_rgba(197,160,89,0.3)]" 
                  : "border-white/10 hover:border-premium-gold/30 hover:-translate-y-1.5"
              }`}
            >
              <div>
                <Quote className="absolute top-10 right-10 w-16 h-16 text-premium-gold/5 group-hover:text-premium-gold/10 transition-all duration-700 rotate-12 group-hover:rotate-0" />
                
                <div className="flex gap-1.5 mb-8">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-premium-gold text-premium-gold shadow-[0_0_15px_rgba(197,160,89,0.5)]" />
                  ))}
                </div>

                <p className="text-white/80 text-lg leading-relaxed mb-8 font-light italic">
                  &ldquo;{t.review}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-6 pt-6 border-t border-white/5">
                <div className="w-14 h-14 rounded-2xl bg-navy-900 border border-white/10 overflow-hidden relative shadow-xl group-hover:scale-105 transition-all duration-500 flex items-center justify-center">
                  <Image 
                    src={t.image} 
                    alt={t.name} 
                    width={56} 
                    height={56} 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">{t.name}</h4>
                  <p className="text-[10px] text-premium-gold uppercase font-bold tracking-[0.2em]">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <style>{`
          #testimonials-marquee {
            --card-step: 480px;
            --card-center: 220px;
          }
          @media (max-width: 768px) {
            #testimonials-marquee {
              --card-step: 400px;
              --card-center: 180px;
            }
          }
          @keyframes marquee-horizontal {
            0% { transform: translateX(0); }
            100% { transform: translateX(-33.3333%); }
          }
          .animate-marquee-loop {
            display: flex;
            gap: 2.5rem;
            width: max-content;
            animation: marquee-horizontal 55s linear infinite;
          }
          .animate-marquee-loop:hover {
            animation-play-state: paused;
          }
          .animate-marquee-loop.paused {
            animation: none !important;
          }
        `}</style>
      </div>

      {/* 3D Smile Sphere Selector */}
      <div className="container mx-auto px-6 relative z-10 mb-32">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h4 className="text-2xl font-premium-serif text-white mb-4">
            Interactive <span className="serif-italic text-premium-gold">Smile</span> Orbit
          </h4>
          <p className="text-white/40 text-[10px] font-bold uppercase tracking-[0.25em] mb-8 leading-relaxed max-w-md mx-auto">
            Drag the 3D sphere to browse reviews. Click the arrow to locate their clinical testimonial.
          </p>
        </div>
        
        <div className="relative w-full max-w-3xl mx-auto h-[450px] md:h-[500px] overflow-hidden">
          <InfiniteMenu items={menuItems} scale={1.1} />
        </div>
      </div>


    </section>
  );
}
