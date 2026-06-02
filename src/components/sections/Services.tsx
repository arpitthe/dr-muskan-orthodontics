"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Sparkles, 
  Smile, 
  ShieldCheck, 
  Stethoscope, 
  Activity, 
  Users, 
  Settings, 
  RefreshCcw,
  ArrowUpRight
} from "lucide-react";

const services = [
  {
    title: "Clear Aligners",
    description: "Virtually invisible and removable aligners for a comfortable and aesthetic teeth straightening experience.",
    icon: Sparkles,
    color: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    title: "Metal Braces",
    description: "Highly effective and reliable traditional braces for precise control and correction of complex dental issues.",
    icon: Settings,
    color: "bg-slate-50",
    iconColor: "text-slate-600",
  },
  {
    title: "Ceramic Braces",
    description: "A discreet alternative to metal braces using tooth-colored brackets that blend in naturally with your teeth.",
    icon: ShieldCheck,
    color: "bg-orange-50",
    iconColor: "text-orange-600",
  },
  {
    title: "Smile Design",
    description: "Digital smile planning to achieve facial harmony and the perfect aesthetic balance for your unique features.",
    icon: Smile,
    color: "bg-gold-50",
    iconColor: "text-premium-gold",
  },
  {
    title: "Orthodontic Consultation",
    description: "Comprehensive initial assessment and personalized treatment planning using advanced diagnostic tools.",
    icon: Stethoscope,
    color: "bg-navy-50",
    iconColor: "text-premium-navy",
  },
  {
    title: "Dentofacial Orthopedics",
    description: "Specialized care focusing on guiding facial growth and development during childhood and adolescence.",
    icon: Activity,
    color: "bg-green-50",
    iconColor: "text-green-600",
  },
  {
    title: "Retainers",
    description: "Custom-fitted appliances to map and maintain your new smile after successful orthodontic treatment.",
    icon: RefreshCcw,
    color: "bg-purple-50",
    iconColor: "text-purple-600",
  },
  {
    title: "Preventive Dental Care",
    description: "Early intervention strategies to avoid future orthodontic complications and maintain oral health.",
    icon: Users,
    color: "bg-teal-50",
    iconColor: "text-teal-600",
  },
];

export function Services() {
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

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
            className="flex flex-col md:flex-row md:items-end justify-between gap-12"
          >
            <div className="max-w-3xl">
              <div className="inline-block px-4 py-1.5 rounded-full border border-premium-gold/20 bg-premium-gold/5 mb-8">
                <span className="text-[10px] font-bold tracking-[0.4em] text-premium-gold uppercase">Clinical Excellence</span>
              </div>
              <h3 className="text-6xl lg:text-8xl font-premium-serif text-white leading-[0.9] tracking-tight">
                Specialized <span className="serif-italic font-light text-premium-gold">Ortho</span> Solutions
              </h3>
            </div>
            <div className="md:text-right">
              <p className="text-white/50 font-light text-lg max-w-sm ml-auto leading-relaxed">
                Experience the fusion of medical precision and aesthetic mastery with our curated range of treatments.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="relative border-t border-white/10 mt-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
              className="group relative border-b border-white/10 hover:bg-white/[0.02] transition-colors duration-700 cursor-pointer"
            >
              <div className="flex items-center justify-between py-14 px-4 md:px-12">
                <div className="flex items-center gap-12 md:gap-24">
                  <span className="text-xs font-bold text-premium-gold tracking-widest opacity-30 group-hover:opacity-100 transition-opacity">
                    {index < 9 ? `0${index + 1}` : index + 1}
                  </span>
                  <div className="flex flex-col gap-3">
                    <h4 className="text-3xl md:text-5xl font-premium-serif text-white group-hover:translate-x-4 transition-transform duration-700 ease-[0.16, 1, 0.3, 1]">
                      {service.title}
                    </h4>
                    <p className="text-sm text-white/40 font-light max-w-md opacity-0 group-hover:opacity-100 group-hover:translate-x-4 transition-all duration-700 delay-75">
                      {service.description}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-6">
                  <div className="hidden lg:flex flex-col items-end opacity-0 group-hover:opacity-100 transition-all duration-700 translate-x-4 group-hover:translate-x-0">
                    <span className="text-[10px] font-bold text-premium-gold uppercase tracking-[0.3em] mb-1">Clinical Procedure</span>
                    <span className="text-[9px] text-white/30 uppercase tracking-[0.1em]">Details & Assessment</span>
                  </div>
                  <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-premium-gold group-hover:border-premium-gold transition-all duration-700 transform group-hover:rotate-45 relative overflow-hidden shadow-2xl">
                    <div className="absolute inset-x-0 bottom-0 top-full bg-white/20 group-hover:top-0 transition-all duration-700" />
                    <ArrowUpRight className="w-6 h-6 text-white relative z-10" />
                  </div>
                </div>
              </div>

              {/* Mobile Preview Overlay */}
              <div className="md:hidden overflow-hidden h-0 group-hover:h-56 transition-all duration-700 px-8">
                <div className="w-full h-full rounded-2xl bg-white/5 mb-8 flex items-center justify-center relative overflow-hidden group/m">
                  <service.icon className="w-16 h-16 text-premium-gold/20 group-hover/m:scale-110 transition-transform duration-1000" />
                  <div className="absolute bottom-6 left-6 text-left">
                    <span className="text-[10px] font-bold text-premium-gold uppercase tracking-widest block mb-1">Available Treatment</span>
                    <span className="text-sm font-bold text-white uppercase">{service.title}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating Dynamic Preview (Desktop) */}
        <AnimatePresence>
          {hoveredService !== null && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                rotate: 0,
                x: mousePosition.x - 450,
                y: mousePosition.y - 180
              }}
              exit={{ opacity: 0, scale: 0.9, rotate: 2 }}
              transition={{ type: "spring", damping: 30, stiffness: 200, mass: 0.5 }}
              className="fixed z-50 pointer-events-none hidden lg:block w-[380px] h-[500px] rounded-[2.5rem] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.5)] ring-1 ring-white/20 bg-navy-900 group/p"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent z-10" />
              <div className="w-full h-full flex flex-col items-center justify-center p-12 text-center relative">
                <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
                
                <div className="w-24 h-24 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center mb-10 group-hover/p:bg-premium-gold/10 transition-colors duration-700 relative">
                  <div className="absolute inset-0 bg-premium-gold/20 blur-2xl opacity-0 group-hover/p:opacity-50 transition-opacity" />
                  {React.createElement(services[hoveredService].icon, {
                    className: "w-10 h-10 text-premium-gold relative z-10"
                  })}
                </div>
                
                <span className="text-[10px] font-bold text-premium-gold uppercase tracking-[0.5em] mb-6 block">Singh Orthodontics</span>
                <h5 className="font-premium-serif text-4xl text-white mb-6 leading-tight">
                  {services[hoveredService].title}
                </h5>
                <p className="text-sm text-white/50 leading-relaxed font-light">
                  {services[hoveredService].description}
                </p>
                
                <div className="mt-12 flex items-center gap-4">
                  <div className="w-10 h-px bg-white/10" />
                  <span className="text-[9px] font-bold text-white/30 uppercase tracking-widest">Medical Aesthetics</span>
                  <div className="w-10 h-px bg-white/10" />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
