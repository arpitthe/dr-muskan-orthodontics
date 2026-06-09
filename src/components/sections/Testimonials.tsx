"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Quote, Play } from "lucide-react";
import InfiniteMenu from "@/components/ui/motion/InfiniteMenu";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Invisalign Patient",
    review: "Dr. Muskan is incredibly detail-oriented. My aligner treatment was smooth, and the results are better than I imagined. Highly recommend!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=300&h=300"
  },
  {
    name: "Rahul Verma",
    role: "Metal Braces",
    review: "The care I received for my complex bite issue was exceptional. Dr. Muskan explained every step clearly and made the process comfortable.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300&h=300"
  },
  {
    name: "Ananya Iyer",
    role: "Clear Braces",
    review: "Professional, gentle, and modern. The clinic uses the latest technology which made my treatment much faster than expected.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300&h=300"
  },
  {
    name: "Vikram Malhotra",
    role: "Retainer Therapy",
    review: "Superb experience! The retainer checkups and hygiene workflows are top-notch. Very clean and professional clinic.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300&h=300"
  },
  {
    name: "Meera Sen",
    role: "Ceramic Braces",
    review: "My ceramic braces were completely discreet and highly effective. Dr. Muskan's aesthetic precision is gold-standard.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300&h=300"
  },
  {
    name: "Siddharth Roy",
    role: "Smile Design",
    review: "Fascinating technology. The digital smile planning and facial harmony analysis showed me my final result before we even started.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1620122303020-43ec4b6cf7f8?auto=format&fit=crop&q=80&w=300&h=300"
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
                  <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
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

      <div className="container mx-auto px-6 relative z-10">
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
