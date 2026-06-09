"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function LoadingProgress() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const startTime = Date.now();
    const duration = 2600; // total animation time in ms (reduced loading time)

    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const ratio = Math.min(elapsed / duration, 1);
      
      // Map time ratio to progress percentage based on animation phases
      let currentProgress = 0;
      if (ratio < 0.46) {
        // Phase 1: Logo is drawing (0% -> 50% progress)
        currentProgress = (ratio / 0.46) * 50;
      } else if (ratio < 0.92) {
        // Phase 2: Cursive signature is writing (50% -> 90% progress)
        const subRatio = (ratio - 0.46) / 0.46;
        currentProgress = 50 + subRatio * 40;
      } else {
        // Phase 3: Final subtext fade-in and stabilize (90% -> 100% progress)
        const subRatio = (ratio - 0.92) / 0.08;
        currentProgress = 90 + subRatio * 10;
      }

      setProgress(Math.round(currentProgress));

      if (ratio < 1) {
        requestAnimationFrame(updateProgress);
      } else {
        setTimeout(() => {
          setIsVisible(false);
        }, 300); // Snappy finish after reaching 100%
      }
    };

    const animId = requestAnimationFrame(updateProgress);
    return () => cancelAnimationFrame(animId);
  }, []);

  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = "hidden";
      window.globalLenis?.stop();
      
      const interval = setInterval(() => {
        if (window.globalLenis) {
          window.globalLenis.stop();
        }
      }, 100);

      return () => {
        clearInterval(interval);
        document.body.style.overflow = "";
        window.globalLenis?.start();
      };
    } else {
      document.body.style.overflow = "";
      window.globalLenis?.start();
    }
  }, [isVisible]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.6, ease: "easeInOut" }
          }}
          className="fixed inset-0 z-[9999] bg-premium-navy flex flex-col items-center justify-center"
        >
          {/* Subtle noise texture */}
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay bg-[url('/textures/noise.svg')]" />
          
          <div className="relative flex flex-col items-center max-w-lg p-8 text-center">
            {/* Animated Tooth + Smile + Sparkle SVG Logo (Increased scale from w-28 to w-36/w-40) */}
            <svg viewBox="0 0 100 100" className="w-36 h-36 md:w-40 md:h-40 mb-10 relative z-10 filter drop-shadow-[0_0_20px_rgba(197,160,89,0.18)]">
              <defs>
                <linearGradient id="goldGradientLoader" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#c5a059" />
                  <stop offset="50%" stopColor="#e5c07b" />
                  <stop offset="100%" stopColor="#9e7a3b" />
                </linearGradient>
              </defs>
              
              {/* Outer Tooth Shape */}
              <motion.path
                id="tooth-contour"
                d="M 50 20 C 42 12, 25 15, 25 35 C 25 55, 38 75, 38 85 C 38 87, 42 90, 45 90 C 47 90, 48 83, 50 83 C 52 83, 53 90, 55 90 C 58 90, 62 87, 62 85 C 62 75, 75 55, 75 35 C 75 15, 58 12, 50 20"
                stroke="url(#goldGradientLoader)"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              />

              {/* Tooth Drawing Glow Particle */}
              <circle r="2.5" fill="#e5c07b" className="filter drop-shadow-[0_0_6px_#e5c07b]" opacity="0">
                <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.05;0.95;1" dur="1.2s" fill="freeze" />
                <animateMotion dur="1.2s" repeatCount="1" fill="freeze">
                  <mpath href="#tooth-contour" />
                </animateMotion>
              </circle>

              {/* Smile contour */}
              <motion.path
                id="smile-contour"
                d="M 32 46 Q 50 60 68 46"
                stroke="url(#goldGradientLoader)"
                strokeWidth="1.8"
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 0.5, duration: 0.6, ease: "easeInOut" }}
              />

              {/* Smile Drawing Glow Particle */}
              <circle r="2" fill="#e5c07b" className="filter drop-shadow-[0_0_6px_#e5c07b]" opacity="0">
                <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.05;0.95;1" begin="0.5s" dur="0.6s" fill="freeze" />
                <animateMotion begin="0.5s" dur="0.6s" repeatCount="1" fill="freeze">
                  <mpath href="#smile-contour" />
                </animateMotion>
              </circle>

              {/* Diamond Sparkle at (68, 28) */}
              <motion.path
                id="sparkle-contour"
                d="M 68 28 Q 68 23 73 23 Q 68 23 68 18 Q 68 23 63 23 Q 68 23 68 28"
                stroke="url(#goldGradientLoader)"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 1.0, duration: 0.4, ease: "easeInOut" }}
              />

              {/* Sparkle Drawing Glow Particle */}
              <circle r="1.5" fill="#e5c07b" className="filter drop-shadow-[0_0_6px_#e5c07b]" opacity="0">
                <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.05;0.95;1" begin="1.0s" dur="0.4s" fill="freeze" />
                <animateMotion begin="1.0s" dur="0.4s" repeatCount="1" fill="freeze">
                  <mpath href="#sparkle-contour" />
                </animateMotion>
              </circle>
            </svg>

            {/* Handwriting Signature Reveal Container */}
            <div className="relative inline-block mt-2">
              <motion.h2
                initial={{ clipPath: "inset(0 100% 0 0)" }}
                animate={{ clipPath: "inset(0 0% 0 0)" }}
                transition={{ delay: 1.2, duration: 1.2, ease: "linear" }}
                className="font-cursive text-5xl md:text-6xl text-premium-gold select-none tracking-wide text-center leading-none"
              >
                Dr. Muskan Singh
              </motion.h2>

              {/* The Glowing Writing Tip */}
              <motion.div
                initial={{ left: "0%", y: 0, opacity: 0 }}
                animate={{ 
                  left: "100%", 
                  y: [0, -10, 8, -8, 6, -10, 10, -6, 6, -4, 4, 0],
                  opacity: [0, 1, 1, 0]
                }}
                transition={{
                  left: { delay: 1.2, duration: 1.2, ease: "linear" },
                  y: { delay: 1.2, duration: 1.2, ease: "easeInOut", repeat: 1, repeatType: "mirror" },
                  opacity: { delay: 1.1, duration: 1.3, times: [0, 0.05, 0.95, 1] }
                }}
                className="absolute top-1/2 -mt-1 w-3 h-3 rounded-full bg-premium-gold shadow-[0_0_12px_#e5c07b,0_0_6px_#c5a059] pointer-events-none"
              />
            </div>

            {/* Subtext Reveal */}
            <motion.p
              initial={{ opacity: 0, letterSpacing: "0.2em", y: 5 }}
              animate={{ opacity: 0.6, letterSpacing: "0.4em", y: 0 }}
              transition={{ delay: 2.2, duration: 0.4, ease: "easeOut" }}
              className="font-sans text-[10px] md:text-[11px] text-white tracking-[0.4em] uppercase font-bold mt-5 select-none"
            >
              Orthodontics &amp; Dentofacial
            </motion.p>

            {/* Muted progress info */}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              transition={{ delay: 0.3 }}
              className="mt-14 text-[9px] font-bold text-premium-gold tracking-[0.4em] uppercase select-none"
            >
              Sculpting Smiles... {progress}%
            </motion.span>

            {/* Progress line */}
            <div className="w-56 h-[1px] bg-white/5 rounded-full mt-3 overflow-hidden relative">
              <div
                style={{ width: `${progress}%` }}
                className="absolute top-0 bottom-0 left-0 bg-premium-gold shadow-[0_0_8px_rgba(197,160,89,0.8)] transition-all duration-75 ease-out"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
