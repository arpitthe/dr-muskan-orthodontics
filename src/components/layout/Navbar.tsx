"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { scrollToSection } from "@/lib/scrollTo";
import { Magnetic } from "@/components/ui/motion/Magnetic";

const navLinks = [
  { name: "Home", href: "home" },
  { name: "About", href: "about" },
  { name: "Services", href: "services" },
  { name: "Research", href: "research" },
  { name: "Transformations", href: "transformations" },
  { name: "Blog", href: "blog" },
  { name: "Contact", href: "contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);
  const router = useRouter();

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    if (pathname !== "/") {
      setActiveSection("");
    } else {
      setActiveSection("home");
    }
  }

  useEffect(() => {
    // Only detect active section on the homepage
    if (pathname !== "/") {
      return;
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Intersection detection for active nav highlight
      const sections = navLinks.map((l) => document.getElementById(l.href)).filter(Boolean) as HTMLElement[];
      let current = "home";
      for (const section of sections) {
        const top = section.getBoundingClientRect().top;
        if (top <= 120) current = section.id;
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Trigger initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const handleNavClick = (href: string) => {
    if (pathname !== "/") {
      router.push(`/#${href}`);
    } else {
      scrollToSection(href);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-6",
        isScrolled
          ? "bg-navy-950/50 backdrop-blur-3xl py-4 shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand */}
        <Magnetic strength={0.2}>
          <button
            onClick={() => handleNavClick("home")}
            className="flex flex-col items-start leading-none group cursor-pointer bg-transparent border-none"
          >
            <span className="text-2xl font-bold tracking-tighter text-white group-hover:text-premium-gold transition-colors duration-500 text-left">
              DR. MUSKAN SINGH
            </span>
            <span className="text-[9px] font-bold tracking-[0.4em] text-premium-gold/80 uppercase pt-1.5 group-hover:text-premium-gold transition-colors duration-500">
              Orthodontics &amp; Dentofacial
            </span>
          </button>
        </Magnetic>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Magnetic key={link.name} strength={0.3}>
              <button
                onClick={() => handleNavClick(link.href)}
                className={cn(
                  "relative text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-500 hover:text-premium-gold hover:tracking-[0.3em] bg-transparent border-none cursor-pointer",
                  activeSection === link.href ? "text-premium-gold" : "text-white/70"
                )}
              >
                {link.name}
                {activeSection === link.href && (
                  <motion.div
                    layoutId="activeNavDot"
                    className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-premium-gold"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            </Magnetic>
          ))}
          <Magnetic strength={0.2}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="gold"
                size="sm"
                onClick={() => handleNavClick("book")}
                className="ml-4 px-8 rounded-full shadow-[0_10px_30px_rgba(197,160,89,0.2)] cursor-pointer"
              >
                Book Now
              </Button>
            </motion.div>
          </Magnetic>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-white/80 hover:text-premium-gold transition-colors"
          >
            <AnimatePresence mode="wait" initial={false}>
              {isMobileMenuOpen ? (
                <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <X size={28} />
                </motion.span>
              ) : (
                <motion.span key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Menu size={28} />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
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
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className={cn(
                      "text-2xl font-premium-serif transition-colors block text-left w-full bg-transparent border-none cursor-pointer",
                      activeSection === link.href ? "text-premium-gold" : "text-white hover:text-premium-gold"
                    )}
                  >
                    {link.name}
                  </button>
                </motion.div>
              ))}
              <hr className="border-white/5" />
              <a
                href="tel:+917028714568"
                className="flex items-center gap-4 text-premium-gold font-medium"
              >
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                  <Phone size={18} />
                </div>
                <span className="tracking-widest font-bold">+91 70287 14568</span>
              </a>
              <motion.div whileTap={{ scale: 0.97 }}>
                <Button
                  variant="gold"
                  onClick={() => handleNavClick("book")}
                  className="w-full h-14 rounded-full font-bold uppercase tracking-widest text-xs cursor-pointer"
                >
                  Book Consultation
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
