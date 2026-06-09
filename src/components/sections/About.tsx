"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase, CheckCircle2 } from "lucide-react";
import { Counter } from "@/components/ui/Counter";
import { scrollToSection } from "@/lib/scrollTo";

const timeline = [
  {
    year: "2025 - Present",
    title: "Dental Officer",
    institution: "District Hospital, Khandwa",
    icon: Briefcase,
    description: "Leading comprehensive dental care initiatives and managing complex orthodontic cases with a blend of traditional and modern techniques.",
  },
  {
    year: "2024 - 2025",
    title: "Clinical Orthodontist",
    institution: "Ampa Orthodontics, Mumbai",
    icon: Briefcase,
    description: "Specialized in digital orthodontics and aligner workflows, managing high volumes of aesthetic orthodontic cases.",
  },
  {
    year: "2022 - 2024",
    title: "M.D.S in Orthodontics",
    institution: "People's Dental Academy, Bhopal",
    icon: GraduationCap,
    description: "Advanced clinical training and research in Dentofacial Orthopedics and biomechanical principles.",
  },
  {
    year: "2021 - 2022",
    title: "Documentation Specialist",
    institution: "Inventus Knowledge Solutions",
    icon: Briefcase,
    description: "Refining clinical documentation processes to enhance patient outcomes and record accuracy.",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-32 bg-premium-navy overflow-hidden">
      {/* Cinematic Background Elements */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay bg-[url('/textures/noise.svg')]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-24 items-center mb-32">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:w-1/2"
          >
            <div className="relative group">
              <div className="absolute -top-6 -left-6 w-32 h-32 border-t border-l border-premium-gold/40 transition-all duration-700 group-hover:-top-8 group-hover:-left-8" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b border-r border-premium-gold/40 transition-all duration-700 group-hover:-bottom-8 group-hover:-right-8" />
              <div className="relative rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.3)] ring-1 ring-white/10">
                <Image
                  src="/images/drmuskan.jpeg"
                  alt="Dr. Muskan Singh"
                  width={1000}
                  height={1200}
                  className="w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-[2000ms]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-premium-navy/80 via-transparent to-transparent opacity-60" />
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex justify-center lg:justify-start mb-8">
                <div className="inline-block px-4 py-1.5 rounded-full border border-premium-gold/20 bg-premium-gold/5">
                  <span className="text-[10px] font-bold tracking-[0.4em] text-premium-gold uppercase">The Art of Care</span>
                </div>
              </div>

              <motion.h3 
                initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-5xl md:text-6xl lg:text-8xl font-premium-serif text-white leading-[0.95] mb-10 tracking-tight text-center lg:text-left"
              >
                Dr. Muskan <span className="serif-italic font-light text-premium-gold">Singh</span>
              </motion.h3>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 mb-12">
                <span className="text-sm font-bold text-white tracking-[0.2em] uppercase">MDS Orthodontics</span>
                <div className="hidden sm:block w-16 h-px bg-gradient-to-r from-premium-gold to-transparent" />
                <span className="text-white/40 italic font-medium">Smile Specialist</span>
              </div>

              <p className="text-lg md:text-xl text-white/70 font-light leading-relaxed mb-12 max-w-xl text-center lg:text-left mx-auto lg:mx-0">
                With a passion for creating facial harmony and a commitment to clinical perfection,
                Dr. Muskan Singh specializes in transforming smiles through <span className="text-white font-medium">advanced orthodontics</span>
                and dentofacial orthopedics.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6 mb-16 justify-items-center lg:justify-items-start">
                {[
                  "Digital Aligner Specialist",
                  "Advanced Braces Technology",
                  "Dentofacial Orthopedics",
                  "Evidence-Based Strategy",
                ].map((skill, idx) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center gap-4 group w-full max-w-xs justify-center lg:justify-start"
                  >
                    <div className="w-6 h-6 rounded-full border border-premium-gold/30 flex items-center justify-center group-hover:bg-premium-gold/20 transition-all flex-shrink-0">
                      <CheckCircle2 className="w-3 h-3 text-premium-gold" />
                    </div>
                    <span className="text-xs font-bold text-white/90 tracking-widest uppercase text-left">{skill}</span>
                  </motion.div>
                ))}
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-12 py-12 border-t border-white/5 text-center lg:text-left">
                {[
                  { label: "Success Stories", value: 500, suffix: "+" },
                  { label: "Expertise Years", value: 10, suffix: "+" },
                  { label: "Digital Designs", value: 250, suffix: "+" },
                  { label: "Research Papers", value: 6, suffix: "" },
                ].map((stat, idx) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex flex-col items-center lg:items-start"
                  >
                    <div className="text-4xl font-bold text-white mb-2 tracking-tighter">
                      <Counter value={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-[9px] font-bold text-premium-gold uppercase tracking-[0.2em] leading-tight opacity-70">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8 mt-16"
              >
                <button
                  onClick={() => scrollToSection("book")}
                  className="h-16 px-12 bg-white text-premium-navy rounded-full font-bold text-xs tracking-[0.3em] uppercase hover:bg-premium-gold hover:text-white transition-all duration-500 shadow-xl group cursor-pointer flex items-center gap-4 w-full sm:w-auto justify-center"
                >
                  Request Consultation
                  <div className="w-8 h-8 rounded-full bg-premium-navy/5 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                </button>

                <button
                  onClick={() => scrollToSection("services")}
                  className="text-[10px] font-bold text-white uppercase tracking-[0.4em] hover:text-premium-gold transition-colors duration-500 flex items-center justify-center gap-4 group cursor-pointer py-2"
                >
                  View Clinical Solutions
                  <div className="hidden sm:block w-10 h-px bg-white/20 group-hover:w-16 group-hover:bg-premium-gold transition-all duration-500" />
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="pt-32 border-t border-white/5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-24"
          >
            <h2 className="text-4xl lg:text-5xl font-premium-serif text-white mb-6">A Journey of Excellence</h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-premium-gold to-transparent mx-auto" />
          </motion.div>

          <div className="relative max-w-5xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-white/20 via-white/5 to-transparent hidden md:block" />

            <div className="space-y-24">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  className={`flex flex-col md:flex-row items-center gap-12 ${index % 2 === 1 ? "md:flex-row-reverse" : ""
                    }`}
                >
                  <div className="md:w-1/2 text-center md:text-right px-4">
                    <div className={`md:flex flex-col ${index % 2 === 1 ? "md:items-start" : "md:items-end"}`}>
                      <span className="text-premium-gold font-bold text-xs tracking-widest uppercase mb-4 opacity-70 block">{item.year}</span>
                      <h4 className="text-2xl font-bold text-white mb-4 tracking-tight group-hover:text-premium-gold transition-colors">{item.title}</h4>
                      <div className={`flex items-center gap-3 mb-6 ${index % 2 === 1 ? "" : "md:flex-row-reverse text-right"}`}>
                        <div className="w-8 h-px bg-white/10" />
                        <span className="text-white/60 font-medium tracking-wide">{item.institution}</span>
                      </div>
                      <p className={`text-white/40 text-sm leading-relaxed max-w-sm font-light ${index % 2 === 1 ? "md:text-left" : "md:text-right"}`}>
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="relative z-10 flex items-center justify-center">
                    <div className="w-16 h-16 bg-navy-900 border border-white/10 rounded-2xl flex items-center justify-center shadow-2xl relative group overflow-hidden">
                      <div className="absolute inset-0 bg-premium-gold opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                      <item.icon className="w-7 h-7 text-premium-gold transform transition-transform group-hover:scale-110" />
                    </div>
                  </div>

                  <div className="md:w-1/2 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
