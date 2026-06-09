"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { 
  Sparkles, 
  ArrowUpRight
} from "lucide-react";
import { scrollToSection } from "@/lib/scrollTo";
import { servicesData } from "@/data/servicesData";
import { Magnetic } from "@/components/ui/motion/Magnetic";

export function Services() {
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);
  const [cardHeight, setCardHeight] = useState(320);
  const [scale, setScale] = useState(1);
  const router = useRouter();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const cardRef = React.useCallback((node: HTMLDivElement | null) => {
    if (node) {
      setCardHeight(node.getBoundingClientRect().height);
    }
  }, []);

  const cardWidth = 200;

  // Scale down the card if the window height is too small to fit it comfortably
  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        const threshold = cardHeight + 80;
        if (window.innerHeight < threshold) {
          setScale(Math.max(0.75, window.innerHeight / threshold));
        } else {
          setScale(1);
        }
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [cardHeight]);

  const targetX = typeof window !== "undefined" 
    ? Math.max(20, Math.min(window.innerWidth - cardWidth - 20, mousePosition.x - cardWidth / 2))
    : mousePosition.x - cardWidth / 2;

  // Position the card above the cursor if in the bottom half of the viewport,
  // and below the cursor if in the top half, to prevent it from going offscreen
  // or blocking the cursor itself.
  const targetY = typeof window !== "undefined" 
    ? (mousePosition.y > window.innerHeight / 2
        ? Math.max(20, mousePosition.y - cardHeight - 20)
        : Math.min(window.innerHeight - cardHeight - 20, mousePosition.y + 20))
    : mousePosition.y + 20;

  return (
    <section 
      id="services" 
      className="relative py-32 bg-premium-navy overflow-hidden" 
      onMouseMove={handleMouseMove}
    >
      {/* Mesh Gradient Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-premium-gold/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-navy-500/20 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 text-center lg:text-left"
          >
            <div className="max-w-3xl mx-auto lg:mx-0">
              <div className="flex justify-center lg:justify-start mb-8">
                <div className="inline-block px-4 py-1.5 rounded-full border border-premium-gold/20 bg-premium-gold/5">
                  <span className="text-[10px] font-bold tracking-[0.4em] text-premium-gold uppercase">Clinical Excellence</span>
                </div>
              </div>
              <h3 className="text-5xl md:text-6xl lg:text-8xl font-premium-serif text-white leading-[0.9] tracking-tight">
                Specialized <span className="serif-italic font-light text-premium-gold">Ortho</span> Solutions
              </h3>
            </div>
            <div className="lg:text-right max-w-sm mx-auto lg:mx-0">
              <p className="text-white/50 font-light text-base md:text-lg leading-relaxed">
                Experience the fusion of medical precision and aesthetic mastery with our curated range of treatments.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="relative border-t border-white/10 mt-12">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
              onClick={() => router.push(`/services/${service.slug}`)}
              className="group relative border-b border-white/10 hover:bg-white/[0.02] transition-colors duration-700 cursor-pointer"
            >
              <div className="flex items-center justify-between py-14 px-4 md:px-12">
                <div className="flex items-center gap-12 md:gap-24">
                  <span className="text-xs font-bold text-premium-gold tracking-widest opacity-30 group-hover:opacity-100 transition-opacity">
                    {index < 9 ? `0${index + 1}` : index + 1}
                  </span>
                  <div className="flex flex-col gap-3">
                    <Link href={`/services/${service.slug}`} className="block" onClick={(e) => e.stopPropagation()}>
                      <h4 className="text-3xl md:text-5xl font-premium-serif text-white group-hover:translate-x-4 transition-transform duration-700 ease-[0.16, 1, 0.3, 1] hover:text-premium-gold transition-colors flex flex-wrap items-baseline gap-4">
                        <span>{service.title}</span>
                      </h4>
                    </Link>
                    <p className="text-sm text-white/40 font-light max-w-md opacity-0 group-hover:opacity-100 group-hover:translate-x-4 transition-all duration-700 delay-75">
                      {service.description}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-6">
                  <div className="hidden lg:flex flex-col items-end opacity-0 group-hover:opacity-100 transition-all duration-700 translate-x-4 group-hover:translate-x-0">
                    <Magnetic strength={0.3}>
                      <Link 
                        href={`/services/${service.slug}`}
                        className="text-[10px] font-bold text-premium-gold uppercase tracking-[0.3em] mb-1 hover:text-white transition-colors cursor-pointer py-1 block"
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                      >
                        Clinical Procedure
                      </Link>
                    </Magnetic>
                    <Magnetic strength={0.2}>
                      <span 
                        className="text-[9px] text-white/30 uppercase tracking-[0.1em] hover:text-premium-gold transition-colors cursor-pointer py-1"
                        onClick={(e) => {
                          e.stopPropagation();
                          scrollToSection("book", 80, service.title);
                        }}
                      >
                        Book Fast Assessment →
                      </span>
                    </Magnetic>
                  </div>
                  <Magnetic strength={0.4}>
                    <Link 
                      href={`/services/${service.slug}`}
                      className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-premium-gold group-hover:border-premium-gold transition-all duration-700 transform group-hover:rotate-45 relative overflow-hidden shadow-2xl cursor-pointer block"
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                    >
                      <div className="absolute inset-x-0 bottom-0 top-full bg-white/20 group-hover:top-0 transition-all duration-700" />
                      <ArrowUpRight className="w-6 h-6 text-white relative z-10" />
                    </Link>
                  </Magnetic>
                </div>
              </div>

              {/* Mobile Preview Overlay */}
              <div className="md:hidden overflow-hidden h-0 group-hover:h-56 transition-all duration-700 px-8">
                <div className="w-full h-full rounded-2xl bg-white/5 mb-8 flex items-center justify-center relative overflow-hidden group/m">
                  {React.createElement(service.icon, {
                    className: "w-16 h-16 text-premium-gold/20 group-hover/m:scale-110 transition-transform duration-1000"
                  })}
                  <div className="absolute bottom-6 left-6 text-left">
                    <span className="text-[10px] font-bold text-premium-gold uppercase tracking-widest block mb-1">Available Treatment</span>
                    <span className="text-sm font-bold text-white uppercase">{service.title}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating Dynamic Preview (Desktop) */}
      {mounted && typeof document !== "undefined" && createPortal(
        <AnimatePresence>
          {hoveredService !== null && (
            <motion.div
              ref={cardRef}
              initial={{ 
                opacity: 0, 
                scale: scale * 0.7, 
                rotate: -3,
                x: targetX,
                y: targetY
              }}
              animate={{ 
                opacity: 1, 
                scale: scale,
                rotate: 0,
                x: targetX,
                y: targetY
              }}
              exit={{ 
                opacity: 0, 
                scale: scale * 0.7, 
                rotate: 3,
                x: targetX,
                y: targetY
              }}
              transition={{ type: "spring", damping: 25, stiffness: 280, mass: 0.5 }}
              className="fixed top-0 left-0 z-50 pointer-events-none hidden lg:flex items-center justify-center w-[200px] rounded-full overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.4)] ring-1 ring-premium-gold/30 bg-navy-950/95 backdrop-blur-xl py-4 px-6 text-center"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-premium-gold/10 via-transparent to-premium-gold/10 pointer-events-none" />
              <div className="relative z-10 flex flex-col items-center justify-center">
                <span className="text-sm font-semibold text-premium-gold tracking-wide font-sans">
                  {servicesData[hoveredService].price}
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
}

