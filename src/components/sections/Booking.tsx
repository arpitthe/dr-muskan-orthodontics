"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, User, Phone, Mail, MessageSquare, Send, CheckCircle2, Loader2, AlertCircle, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { supabase } from "@/lib/supabase";
import { sendEmail } from "@/lib/emailjs";
import { SpotlightCard } from "@/components/ui/motion/SpotlightCard";

const treatmentTypes = [
  "Clear Aligners",
  "Traditional Metal Braces",
  "Ceramic Braces",
  "Smile Design",
  "Orthodontic Consultation",
  "Dentofacial Orthopedics",
  "Retainers",
  "Preventive Dental Care",
  "Other",
];

export function Booking() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedTreatment, setSelectedTreatment] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  React.useEffect(() => {
    // 1. Listen for custom events (SPA internal)
    const handleScrollEvent = (e: Event) => {
      const customEvent = e as CustomEvent<{ sectionId: string; value: string }>;
      const { sectionId, value } = customEvent.detail;
      if (sectionId === "book" && value) {
        setTimeout(() => {
          setSelectedTreatment(value);
        }, 0);
      }
    };
    window.addEventListener("scrollToSectionTriggered", handleScrollEvent);

    // 2. Check for query parameters (Cross-page/Direct links)
    const params = new URLSearchParams(window.location.search);
    const treatmentParam = params.get("treatment");
    if (treatmentParam) {
      // Find matching treatment type (case-insensitive)
      const matched = treatmentTypes.find(t => t.toLowerCase() === treatmentParam.toLowerCase());
      if (matched) {
        setTimeout(() => {
          setSelectedTreatment(matched);
        }, 0);
      }
    }

    return () => window.removeEventListener("scrollToSectionTriggered", handleScrollEvent);
  }, []);

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
    } catch (err) {
      const errorObj = err as Error;
      console.error("Booking Error:", errorObj);
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
        <SpotlightCard className="max-w-3xl mx-auto bg-white/[0.03] backdrop-blur-3xl rounded-[3rem] shadow-[0_40px_100px_rgba(0,0,0,0.6)] border border-white/10 p-10 md:p-16 relative overflow-hidden ring-1 ring-white/5">
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay bg-[url('/textures/noise.svg')]" />
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-premium-gold/10 rounded-full blur-[80px]" />
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-navy-500/10 rounded-full blur-[80px]" />

          <div className="relative z-10 text-center mb-12">
            <h3 className="text-4xl md:text-5xl font-premium-serif text-white mb-4 leading-tight tracking-tight">
              Begin Your <span className="serif-italic text-premium-gold">Success</span> Story
            </h3>
            <p className="text-white/50 max-w-xl mx-auto text-sm md:text-base font-light leading-relaxed">
              Schedule your private consultation with Dr. Muskan Singh and take the first step towards your elite smile.
            </p>
          </div>

          <div className="relative z-10">
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
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
                      <label className="text-[10px] font-bold text-premium-gold/80 uppercase tracking-[0.3em] flex items-center gap-3">
                        <User className="w-3.5 h-3.5" />
                        Patient Designation
                      </label>
                      <input 
                        required
                        name="name"
                        type="text" 
                        placeholder="e.g. Alexander Knight"
                        className="w-full bg-navy-950/40 border border-white/10 hover:border-white/20 focus:border-premium-gold focus:ring-2 focus:ring-premium-gold/20 focus:bg-navy-950/80 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 outline-none transition-all duration-300"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-bold text-premium-gold/80 uppercase tracking-[0.3em] flex items-center gap-3">
                        <Phone className="w-3.5 h-3.5" />
                        Contact Number
                      </label>
                      <input 
                        required
                        name="phone"
                        type="tel" 
                        placeholder="+91"
                        className="w-full bg-navy-950/40 border border-white/10 hover:border-white/20 focus:border-premium-gold focus:ring-2 focus:ring-premium-gold/20 focus:bg-navy-950/80 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 outline-none transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-3">
                      <label className="text-[10px] font-bold text-premium-gold/80 uppercase tracking-[0.3em] flex items-center gap-3">
                        <Mail className="w-3.5 h-3.5" />
                        Direct Email
                      </label>
                      <input 
                        required
                        name="email"
                        type="email" 
                        placeholder="alexander@luxury.com"
                        className="w-full bg-navy-950/40 border border-white/10 hover:border-white/20 focus:border-premium-gold focus:ring-2 focus:ring-premium-gold/20 focus:bg-navy-950/80 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 outline-none transition-all duration-300"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-bold text-premium-gold/80 uppercase tracking-[0.3em] flex items-center gap-3">
                        <Calendar className="w-3.5 h-3.5" />
                        Preferred Date
                      </label>
                      <input 
                        required
                        name="date"
                        type="date" 
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className={`w-full bg-navy-950/40 border border-white/10 hover:border-white/20 focus:border-premium-gold focus:ring-2 focus:ring-premium-gold/20 focus:bg-navy-950/80 rounded-2xl px-6 py-4 outline-none transition-all duration-300 [color-scheme:dark] ${
                          selectedDate ? "text-white" : "text-white/20"
                        }`}
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-bold text-premium-gold/80 uppercase tracking-[0.3em]">Selection of Care</label>
                    <div className="relative">
                      <select 
                        required
                        name="treatment"
                        value={selectedTreatment}
                        onChange={(e) => setSelectedTreatment(e.target.value)}
                        className={`w-full bg-navy-950/40 border border-white/10 hover:border-white/20 focus:border-premium-gold focus:ring-2 focus:ring-premium-gold/20 focus:bg-navy-950/80 rounded-2xl px-6 py-4 outline-none transition-all duration-300 appearance-none cursor-pointer ${
                          selectedTreatment ? "text-white" : "text-white/20"
                        }`}
                      >
                        <option value="" className="bg-navy-950 text-white/50">Select a specialized treatment</option>
                        {treatmentTypes.map(t => <option key={t} value={t} className="bg-navy-950 text-white">{t}</option>)}
                      </select>
                      <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-premium-gold/80">
                        <ChevronDown className="w-5 h-5" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-bold text-premium-gold/80 uppercase tracking-[0.3em] flex items-center gap-3">
                      <MessageSquare className="w-3.5 h-3.5" />
                      Smile Aspirations
                    </label>
                    <textarea 
                      name="message"
                      placeholder="Share your goals for facial harmony and alignment..."
                      rows={4}
                      className="w-full bg-navy-950/40 border border-white/10 hover:border-white/20 focus:border-premium-gold focus:ring-2 focus:ring-premium-gold/20 focus:bg-navy-950/80 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 outline-none transition-all duration-300 resize-none font-light"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    variant="gold" 
                    className="w-full h-16 text-xs font-bold uppercase tracking-[0.4em] shadow-[0_20px_50px_rgba(197,160,89,0.3)] group overflow-hidden relative btn-shine"
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
        </SpotlightCard>
      </div>
    </section>
  );
}
