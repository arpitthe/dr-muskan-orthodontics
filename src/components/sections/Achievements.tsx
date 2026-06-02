"use client";

import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Trophy, GraduationCap, Microscope, Award } from "lucide-react";

const publications = [
  {
    type: "Book",
    title: "Artificial Intelligence in Orthodontics",
    publisher: "Lambert Academic Publishing",
    icon: BookOpen,
  },
  {
    type: "Research Paper",
    title: "Comparison of stress distribution induced by Kilroy Spring : A finite Element Analysis.",
    publisher: "FEM Analysis Specialty",
    icon: Microscope,
  },
  {
    type: "Perspective",
    title: "Class II Carriere Motion Appliance: Maxillary Molar Distalization.",
    publisher: "Orthodontic Clinical Perspectives",
    icon: Microscope,
  },
  {
    type: "Journal Article",
    title: "FEM Analysis of Frictional force.",
    publisher: "Ain Shams Dental Journal (ASDJ)",
    icon: BookOpen,
  },
  {
    type: "Research Study",
    title: "Comparison of Anchorage Control in Treatment of Class II Malocclusion.",
    publisher: "FEM Comparative Study",
    icon: Microscope,
  },
];

const honors = [
  {
    title: "Best Paper Award",
    event: "26th IOS Convention, Lucknow",
    description: "Won 1st prize for the best paper presentation among national level participants.",
    icon: Trophy,
  },
  {
    title: "National Scholarship",
    event: "Prevest Dentpro Spark Program",
    description: "Secured a rank in the top 50 students across India.",
    icon: GraduationCap,
  },
];

export function Achievements() {
  return (
    <section id="research" className="relative py-40 bg-premium-navy overflow-hidden">
      {/* Cinematic Background */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-24">
          {/* Awards & Honors Side */}
          <div className="lg:w-2/5">
            <div className="inline-block px-4 py-1.5 rounded-full border border-premium-gold/20 bg-premium-gold/5 mb-8">
              <span className="text-[10px] font-bold tracking-[0.4em] text-premium-gold uppercase">Academic Prestige</span>
            </div>
            <h3 className="text-5xl lg:text-7xl font-premium-serif text-white tracking-tight mb-12 leading-[0.9]">
              Honors & <span className="serif-italic font-light text-premium-gold">Distinctions</span>
            </h3>
            
            <div className="space-y-8">
              {honors.map((honor, index) => (
                <motion.div
                  key={honor.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 1 }}
                  className="bg-white/5 backdrop-blur-3xl p-10 rounded-[2rem] border border-white/10 shadow-2xl group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="w-14 h-14 bg-navy-900 border border-white/10 rounded-2xl flex items-center justify-center mb-8 shadow-xl relative z-10 group-hover:border-premium-gold/30 transition-colors">
                    <honor.icon className="w-6 h-6 text-premium-gold" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-3 relative z-10">{honor.title}</h4>
                  <div className="text-[10px] font-bold text-premium-gold uppercase tracking-[0.2em] mb-6 relative z-10">{honor.event}</div>
                  <p className="text-white/40 text-sm leading-relaxed font-light relative z-10">{honor.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="mt-16 p-10 rounded-[2.5rem] bg-navy-950 border border-white/5 text-white relative overflow-hidden group shadow-2xl"
            >
              <div className="relative z-10">
                <div className="w-12 h-12 bg-premium-gold/20 rounded-full flex items-center justify-center mb-6">
                  <Award className="w-6 h-6 text-premium-gold" />
                </div>
                <h4 className="text-2xl font-premium-serif mb-4">Clinical Excellence</h4>
                <p className="text-white/40 text-sm leading-relaxed font-light">
                  Recognized for pioneering contribution to <span className="text-white/70 italic">innovation</span> in Orthodontic treatment strategies and patient interaction models.
                </p>
              </div>
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-premium-gold/5 rounded-full blur-[80px]" />
            </motion.div>
          </div>

          {/* Publications Side */}
          <div className="lg:w-3/5">
            <h3 className="text-3xl font-premium-serif text-white/90 mb-12 flex items-center gap-6">
              Scientific Publications
              <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" />
            </h3>
            
            <div className="grid grid-cols-1 gap-6">
              {publications.map((pub, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                  whileHover={{ x: 15 }}
                  className="group flex flex-col md:flex-row md:items-center gap-8 p-8 bg-white/[0.02] border border-white/5 rounded-2xl hover:border-premium-gold/30 hover:bg-white/[0.04] transition-all duration-500 cursor-pointer shadow-xl"
                >
                  <div className="w-16 h-16 rounded-2xl bg-navy-900 border border-white/10 flex items-center justify-center group-hover:bg-premium-gold group-hover:border-premium-gold transition-all duration-700 relative overflow-hidden">
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
                    <pub.icon className="w-7 h-7 text-premium-gold group-hover:text-white transition-colors relative z-10" />
                  </div>
                  <div className="flex-1">
                    <div className="text-[9px] font-bold text-premium-gold uppercase tracking-[0.4em] mb-2">{pub.type}</div>
                    <h4 className="text-xl font-bold text-white mb-2 leading-snug">{pub.title}</h4>
                    <p className="text-sm text-white/30 font-light italic">{pub.publisher}</p>
                  </div>
                  <div className="hidden md:flex opacity-0 group-hover:opacity-100 transition-all duration-700 -translate-x-4 group-hover:translate-x-0">
                    <div className="w-10 h-10 rounded-full border border-premium-gold/40 flex items-center justify-center">
                      <div className="w-2 h-2 bg-premium-gold rounded-full animate-pulse shadow-[0_0_10px_rgba(197,160,89,0.8)]" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 1 }}
              className="mt-12 flex items-center gap-6 text-white/30 text-[10px] font-bold uppercase tracking-[0.3em]"
            >
              <div className="flex -space-x-3">
                {[1,2,3].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-premium-navy bg-navy-800 flex items-center justify-center text-[9px] text-premium-gold shadow-lg font-bold">
                    P{i}
                  </div>
                ))}
              </div>
              <div className="h-px w-12 bg-white/10" />
              <span>Contribute to over 10+ published research initiatives</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
