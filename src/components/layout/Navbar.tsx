"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Research", href: "#research" },
  { name: "Transformations", href: "#transformations" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-6",
        isScrolled
          ? "bg-navy-950/40 backdrop-blur-2xl py-4 border-b border-white/5"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link 
          href="/" 
          className="flex flex-col items-start leading-none group"
        >
          <span className="text-2xl font-bold tracking-tighter text-white group-hover:text-premium-gold transition-colors duration-500">
            DR. MUSKAN SINGH
          </span>
          <span className="text-[9px] font-bold tracking-[0.4em] text-premium-gold/80 uppercase pt-1.5 group-hover:text-premium-gold transition-colors duration-500">
            Orthodontics & Dentofacial
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-12">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/70 transition-all duration-500 hover:text-premium-gold hover:tracking-[0.3em]"
            >
              {link.name}
            </Link>
          ))}
          <Button variant="gold" size="sm" className="ml-6 px-8 rounded-full shadow-[0_10px_30px_rgba(197,160,89,0.2)]">
            Book Now
          </Button>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-white/80 hover:text-premium-gold transition-colors"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="lg:hidden absolute top-full left-6 right-6 bg-navy-900/90 backdrop-blur-3xl border border-white/10 mt-4 overflow-hidden rounded-[2rem] shadow-[0_30px_60px_rgba(0,0,0,0.5)] z-50 ring-1 ring-white/5"
          >
            <div className="flex flex-col p-10 space-y-8">
              {navLinks.map((link, idx) => (
                <motion.div 
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-2xl font-premium-serif text-white hover:text-premium-gold transition-colors block"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <hr className="border-white/5" />
              <div className="flex items-center gap-4 text-premium-gold font-medium">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                  <Phone size={18} />
                </div>
                <span className="tracking-widest font-bold">+91 70287 14568</span>
              </div>
              <Button variant="gold" className="w-full h-14 rounded-full font-bold uppercase tracking-widest text-xs">
                Book Consultation
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
