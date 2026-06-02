"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, User, Phone, Mail, MessageSquare, Send, CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { supabase } from "@/lib/supabase";
import { sendEmail } from "@/lib/emailjs";

const treatmentTypes = [
  "Clear Aligners",
  "Metal Braces",
  "Ceramic Braces",
  "Smile Design",
  "Orthodontic Consultation",
  "Dentofacial Orthopedics",
  "Other",
];

export function Booking() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      phone: formData.get("phone") as string,
      email: formData.get("email") as string,
      date: formData.get("date") as string,
      treatment: formData.get("treatment") as string,
      message: formData.get("message") as string,
    };

    try {
      const { error: sbError } = await supabase
        .from("appointments")
        .insert([data]);

      if (sbError) throw sbError;
      await sendEmail(data);
      setIsSuccess(true);
    } catch (err: any) {
      console.error("Booking Error:", err);
      setError("Failed to process your request. Please check your connection or try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="book" className="relative py-40 bg-premium-navy overflow-hidden">
      {/* Cinematic Background Elements */}
      
      
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-premium-gold/5 rounded-full blur-[150px] -z-10" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-navy-500/5 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto bg-white/[0.03] backdrop-blur-3xl rounded-[3rem] shadow-[0_40px_100px_rgba(0,0,0,0.6)] border border-white/10 overflow-hidden flex flex-col lg:flex-row ring-1 ring-white/5">
          {/* Info Side */}
          <div className="lg:w-2/5 bg-navy-950 p-16 text-white flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-premium-gold/10 rounded-full blur-[80px]" />
            
            <div className="relative z-10">
              <div className="inline-block px-4 py-1.5 rounded-full border border-premium-gold/20 bg-premium-gold/5 mb-10">
                <span className="text-[10px] font-bold tracking-[0.4em] text-premium-gold uppercase">Concierge</span>
              </div>
              <h3 className="text-5xl font-premium-serif mb-8 leading-[1.1] tracking-tight">
                Begin Your <span className="serif-italic text-premium-gold">Success</span> Story
              </h3>
              <p className="text-white/50 leading-relaxed mb-12 text-lg font-light">
                Ready for a transformation? Schedule your private consultation with Dr. Muskan Singh 
                and take the first step towards your elite smile.
              </p>

              <div className="space-y-10">
                <div className="flex items-center gap-6 group/item">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center transition-all group-hover/item:bg-premium-gold/20 group-hover/item:border-premium-gold/30">
                    <Phone className="w-5 h-5 text-premium-gold" />
                  </div>
                  <div>
                    <div className="text-[10px] text-premium-gold/60 uppercase font-bold tracking-widest mb-1">Direct Line</div>
                    <a href="tel:+917028714568" className="text-xl font-medium hover:text-premium-gold transition-colors">+91 70287 14568</a>
                  </div>
                </div>
                <div className="flex items-center gap-6 group/item">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center transition-all group-hover/item:bg-premium-gold/20 group-hover/item:border-premium-gold/30">
                    <Mail className="w-5 h-5 text-premium-gold" />
                  </div>
                  <div>
                    <div className="text-[10px] text-premium-gold/60 uppercase font-bold tracking-widest mb-1">Clinic Email</div>
                    <a href="mailto:muskan.singh2212@gmail.com" className="text-lg font-medium hover:text-premium-gold transition-colors break-all">muskan.singh2212@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-20 pt-12 border-t border-white/10 relative z-10">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-premium-gold/20 flex items-center justify-center">
                    <CheckCircle2 className="w-3 h-3 text-premium-gold" />
                  </div>
                  <span className="text-xs font-bold text-white/70 tracking-widest uppercase">Expert Orthodontic Care</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-premium-gold/20 flex items-center justify-center">
                    <CheckCircle2 className="w-3 h-3 text-premium-gold" />
                  </div>
                  <span className="text-xs font-bold text-white/70 tracking-widest uppercase">Modern Digital Workflows</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:w-3/5 p-16 relative">
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  onSubmit={handleSubmit}
                  className="space-y-10"
                >
                  {error && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-5 bg-red-500/10 border border-red-500/20 rounded-2xl flex items-center gap-4 text-red-400 text-sm"
                    >
                      <AlertCircle className="w-5 h-5 flex-shrink-0" />
                      <p className="font-medium tracking-wide">{error}</p>
                    </motion.div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-3">
                      <label className="text-[10px] font-bold text-premium-gold uppercase tracking-[0.3em] flex items-center gap-3">
                        <User className="w-3 h-3" />
                        Patient Designation
                      </label>
                      <input 
                        required
                        name="name"
                        type="text" 
                        placeholder="e.g. Alexander Knight"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 outline-none focus:border-premium-gold/50 focus:bg-white/[0.08] transition-all"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-bold text-premium-gold uppercase tracking-[0.3em] flex items-center gap-3">
                        <Phone className="w-3 h-3" />
                        Contact Number
                      </label>
                      <input 
                        required
                        name="phone"
                        type="tel" 
                        placeholder="+91"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 outline-none focus:border-premium-gold/50 focus:bg-white/[0.08] transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-3">
                      <label className="text-[10px] font-bold text-premium-gold uppercase tracking-[0.3em] flex items-center gap-3">
                        <Mail className="w-3 h-3" />
                        Direct Email
                      </label>
                      <input 
                        required
                        name="email"
                        type="email" 
                        placeholder="alexander@luxury.com"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 outline-none focus:border-premium-gold/50 focus:bg-white/[0.08] transition-all"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-bold text-premium-gold uppercase tracking-[0.3em] flex items-center gap-3">
                        <Calendar className="w-3 h-3" />
                        Preferred Date
                      </label>
                      <input 
                        required
                        name="date"
                        type="date" 
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white outline-none focus:border-premium-gold/50 focus:bg-white/[0.08] transition-all [color-scheme:dark]"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-bold text-premium-gold uppercase tracking-[0.3em]">Selection of Care</label>
                    <div className="relative">
                      <select 
                        required
                        name="treatment"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white outline-none focus:border-premium-gold/50 focus:bg-white/[0.08] transition-all appearance-none cursor-pointer"
                      >
                        <option value="" className="bg-navy-900">Select a specialized treatment</option>
                        {treatmentTypes.map(t => <option key={t} value={t} className="bg-navy-900">{t}</option>)}
                      </select>
                      <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-premium-gold">
                        <Loader2 className="w-4 h-4 rotate-45" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-bold text-premium-gold uppercase tracking-[0.3em] flex items-center gap-3">
                      <MessageSquare className="w-3 h-3" />
                      Smile Aspirations
                    </label>
                    <textarea 
                      name="message"
                      placeholder="Share your goals for facial harmony and alignment..."
                      rows={4}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 outline-none focus:border-premium-gold/50 focus:bg-white/[0.08] transition-all resize-none font-light"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    variant="gold" 
                    className="w-full h-16 text-xs font-bold uppercase tracking-[0.4em] shadow-[0_20px_50px_rgba(197,160,89,0.3)] group overflow-hidden relative"
                    disabled={isSubmitting}
                  >
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
                    {isSubmitting ? (
                      <div className="flex items-center gap-4 relative z-10">
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Securing Slot...</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-4 relative z-10">
                        <Send className="w-4 h-4" />
                        <span>Confirm Private Booking</span>
                      </div>
                    )}
                  </Button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center p-12"
                >
                  <div className="w-32 h-32 bg-premium-gold/10 border border-premium-gold/20 rounded-full flex items-center justify-center mb-10 relative">
                    <div className="absolute inset-0 bg-premium-gold/20 blur-3xl animate-pulse" />
                    <CheckCircle2 className="w-16 h-16 text-premium-gold relative z-10" />
                  </div>
                  <h3 className="text-5xl font-premium-serif text-white mb-6">Reservation Secured</h3>
                  <p className="text-white/50 mb-12 max-w-sm font-light leading-relaxed">
                    Thank you for your trust in Singh Orthodontics. Our clinic concierge will personally contact you shortly to finalize your premium appointment details.
                  </p>
                  <Button 
                    variant="outline" 
                    className="border-white/10 text-white hover:bg-white/5 tracking-[0.3em] h-14 px-10 rounded-full border border-white/10 uppercase text-[10px]"
                    onClick={() => setIsSuccess(false)}
                  >
                    Request Modification
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
