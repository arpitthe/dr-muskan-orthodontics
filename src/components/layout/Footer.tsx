"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Instagram, 
  Facebook, 
  Linkedin, 
  Phone, 
  Mail, 
  MessageCircle, 
  MapPin, 
  ArrowUpRight,
  Globe
} from "lucide-react";

const socialLinks = [
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "Facebook", icon: Facebook, href: "#" },
];

const navigationLinks = [
  { name: "The Clinic", href: "#about" },
  { name: "Procedures", href: "#services" },
  { name: "Transformations", href: "#transformations" },
  { name: "Clinical Journal", href: "#blog" },
  { name: "Contact", href: "#contact" },
];

export function Footer() {
  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    },
  };

  return (
    <footer className="bg-premium-navy text-white pt-32 pb-12 overflow-hidden border-t border-white/[0.03]">
      <div className="container mx-auto px-6">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-32"
        >
          {/* Brand Identity Section */}
          <motion.div variants={itemVariants} className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <Link href="/" className="inline-block group mb-10">
                <h4 className="text-4xl lg:text-5xl font-premium-serif leading-tight">
                  Dr. Muskan <span className="serif-italic block text-premium-gold/90">Singh</span>
                </h4>
              </Link>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-px bg-premium-gold/30" />
                <span className="text-[10px] font-bold text-premium-gold tracking-[0.4em] uppercase">
                  MDS Orthodontics
                </span>
              </div>
              <p className="text-lg text-navy-200/70 font-light leading-relaxed max-w-sm mb-12">
                Specializing in facial harmony and the clinical art of orthodontic transformation.
              </p>
            </div>

            {/* Premium Social Orbit */}
            <div className="flex gap-8">
              {socialLinks.map((social) => (
                <Link 
                  key={social.name}
                  href={social.href}
                  className="group relative"
                  aria-label={social.name}
                >
                  <div className="absolute -inset-2 bg-premium-gold/0 group-hover:bg-premium-gold/5 rounded-full transition-all duration-500 scale-50 group-hover:scale-100" />
                  <social.icon className="w-5 h-5 text-navy-200 group-hover:text-premium-gold transition-all duration-500 translate-y-0 group-hover:-translate-y-1" />
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Navigation Matrix */}
          <motion.div variants={itemVariants} className="lg:col-span-3">
            <h5 className="text-[10px] font-bold text-premium-gold tracking-[0.3em] uppercase mb-12 opacity-80">
              Navigation
            </h5>
            <ul className="space-y-6">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="group flex items-center gap-2 text-sm text-navy-100/60 hover:text-white transition-all duration-300"
                  >
                    <span className="relative">
                      {link.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-px bg-premium-gold transition-all duration-500 group-hover:w-full" />
                    </span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-500" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact & Consultation Concierge */}
          <motion.div variants={itemVariants} className="lg:col-span-4 lg:pl-12 flex flex-col justify-between">
            <div>
              <h5 className="text-[10px] font-bold text-premium-gold tracking-[0.3em] uppercase mb-12 opacity-80">
                Patient Inquiries
              </h5>
              <div className="space-y-8">
                <a 
                  href="tel:+917028714568" 
                  className="group flex items-start gap-4 hover:translate-x-1 transition-transform duration-500"
                >
                  <Phone className="w-4 h-4 mt-1 text-premium-gold/60 group-hover:text-premium-gold" />
                  <div>
                    <span className="block text-[10px] font-bold text-navy-400 uppercase tracking-widest mb-1">Inquiry Line</span>
                    <span className="text-lg font-bold text-white group-hover:text-premium-gold transition-colors">+91 70287 14568</span>
                  </div>
                </a>
                <a 
                  href="mailto:muskan.singh2212@gmail.com" 
                  className="group flex items-start gap-4 hover:translate-x-1 transition-transform duration-500"
                >
                  <Mail className="w-4 h-4 mt-1 text-premium-gold/60 group-hover:text-premium-gold" />
                  <div>
                    <span className="block text-[10px] font-bold text-navy-400 uppercase tracking-widest mb-1">Electronic Mail</span>
                    <span className="text-lg font-bold text-white group-hover:text-premium-gold transition-colors underline decoration-premium-gold/20 underline-offset-8 group-hover:decoration-premium-gold">muskan.singh@gmail.com</span>
                  </div>
                </a>
              </div>
            </div>

            {/* WhatsApp Concierge Button */}
            <div className="mt-16">
              <Link 
                href="https://wa.me/917028714568"
                target="_blank"
                className="group inline-flex items-center gap-4 bg-white/[0.03] border border-white/10 hover:border-premium-gold/40 rounded-2xl px-8 py-5 transition-all duration-500 hover:bg-white/[0.06]"
              >
                <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center border border-green-500/20 group-hover:scale-110 transition-transform duration-500">
                  <MessageCircle className="w-6 h-6 text-green-500" />
                </div>
                <div>
                  <span className="block text-[8px] font-bold text-premium-gold uppercase tracking-[0.3em] mb-1">24/7 Consultation</span>
                  <span className="text-sm font-bold tracking-wide">Concierge WhatsApp</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-white/20 group-hover:text-premium-gold group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500" />
              </Link>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Refinement */}
        <div className="pt-12 border-t border-white/[0.03] flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-8 text-[9px] font-bold text-navy-400 uppercase tracking-[0.25em]">
            <span>© 2024 Dr. Muskan Singh</span>
            <span className="hidden md:inline w-1 h-1 bg-premium-gold/30 rounded-full" />
            <Link href="#" className="hover:text-white transition-colors">Privacy Council</Link>
            <span className="hidden md:inline w-1 h-1 bg-premium-gold/30 rounded-full" />
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
          
          <div className="flex items-center gap-4 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <span className="text-[9px] font-bold text-premium-gold uppercase tracking-[0.4em] translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
              Return to Peak
            </span>
            <div className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center group-hover:border-premium-gold/50 transition-colors duration-500">
              <Globe className="w-4 h-4 text-navy-400 group-hover:text-premium-gold animate-spin-slow" />
            </div>
          </div>
        </div>
      </div>

      {/* Cinematic Background Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center -z-10 opacity-[0.02] pointer-events-none">
        <h2 className="text-[25vw] font-premium-serif leading-none select-none">
          Singh
        </h2>
      </div>
    </footer>
  );
}
