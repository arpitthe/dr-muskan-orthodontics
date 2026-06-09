"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Instagram, 
  Linkedin, 
  Twitter, 
  ExternalLink 
} from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="relative py-40 bg-premium-navy overflow-hidden">
      {/* Cinematic Overlays */}
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-premium-gold/5 rounded-full blur-[150px] -z-10" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="text-center lg:text-left">
            <div className="flex justify-center lg:justify-start mb-8">
              <div className="inline-block px-4 py-1.5 rounded-full border border-premium-gold/20 bg-premium-gold/5">
                <span className="text-[10px] font-bold tracking-[0.4em] text-premium-gold uppercase">Geographic Location</span>
              </div>
            </div>
            <h3 className="text-5xl lg:text-7xl font-premium-serif text-white mb-12 leading-[0.95] tracking-tight">
              Visit Our <br className="hidden lg:block" />
              <span className="serif-italic font-light text-premium-gold">Flagship Clinic</span>
            </h3>
            
            <div className="space-y-6 mb-16">
              {[
                { icon: MapPin, label: "Clinic Address", text: "Ward No. 35, Lal Chowki, Nagchun Road, Khandwa (M.P) 450001" },
                { icon: Phone, label: "Direct Phone", text: "+91 70287 14568" },
                { icon: Mail, label: "Official Email", text: "muskan.singh2212@gmail.com" }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.8 }}
                  className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8 p-8 sm:p-10 rounded-[2.5rem] bg-white/[0.03] backdrop-blur-3xl border border-white/5 group hover:border-premium-gold/30 hover:bg-white/[0.05] transition-all duration-500 shadow-xl text-center sm:text-left"
                >
                  <div className="w-16 h-16 rounded-2xl bg-navy-900 border border-white/10 flex items-center justify-center shadow-2xl group-hover:bg-premium-gold group-hover:border-premium-gold transition-all duration-700 flex-shrink-0">
                    <item.icon className="w-6 h-6 text-premium-gold group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold text-premium-gold uppercase tracking-[0.3em] mb-2">{item.label}</h4>
                    <p className="text-lg md:text-xl text-white/70 leading-relaxed font-light group-hover:text-white transition-colors">
                      {item.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex gap-6 justify-center lg:justify-start">
              {[Instagram, Linkedin, Twitter].map((Icon, i) => (
                <motion.button 
                  key={i}
                  whileHover={{ scale: 1.1, translateY: -5 }}
                  className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:bg-premium-gold hover:text-white hover:border-premium-gold transition-all duration-500 shadow-xl"
                >
                  <Icon className="w-5 h-5" />
                </motion.button>
              ))}
            </div>
          </div>

          <div className="h-[400px] sm:h-[500px] lg:h-[700px] rounded-[3rem] lg:rounded-[4rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.6)] border border-white/10 bg-navy-900 relative group ring-1 ring-white/5 w-full">
            {/* Google Maps Cinematic Wrapper */}
            <iframe
              src="https://maps.google.com/maps?q=21.8256,76.3262&hl=en&z=15&output=embed"
              className="absolute inset-0 w-full h-full border-0 opacity-60 group-hover:opacity-100 transition-all duration-1000 transform group-hover:scale-105 filter invert-[90%] hue-rotate-[180deg] brightness-[80%] contrast-[120%]"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute inset-0 bg-premium-navy/40 group-hover:bg-transparent transition-all duration-1000 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-premium-navy via-transparent to-transparent opacity-60 pointer-events-none" />
            
            <a 
              href="https://share.google/QteoenM1ZzwpA22Jx"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-6 left-6 right-6 md:bottom-12 md:left-12 md:right-12 bg-white/[0.03] backdrop-blur-2xl border border-white/10 p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-0 group/card overflow-hidden hover:border-premium-gold/30 hover:bg-white/[0.05] transition-all duration-500 cursor-pointer text-center sm:text-left"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-700" />
              <div className="relative z-10">
                <h4 className="text-xl md:text-2xl font-premium-serif text-white mb-2">Get Directions</h4>
                <p className="text-[10px] text-premium-gold uppercase tracking-[0.4em] font-bold">Open in Google Maps</p>
              </div>
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 10 }}
                className="w-12 h-12 md:w-16 md:h-16 bg-premium-gold rounded-full flex items-center justify-center text-white shadow-[0_10px_30px_rgba(197,160,89,0.5)] relative z-10 flex-shrink-0"
              >
                <ExternalLink className="w-5 h-5 md:w-6 md:h-6" />
              </motion.div>
            </a>

            {/* Cinematic Overlay Text */}
            <div className="absolute top-12 left-12 opacity-30 pointer-events-none hidden sm:block">
              <div className="text-[10px] font-bold text-white uppercase tracking-[1em]">Coordinate: 21.8256° N, 76.3262° E</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
