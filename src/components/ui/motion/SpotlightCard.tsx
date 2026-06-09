"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  glowSize?: number;
}

export function SpotlightCard({
  children,
  className = "",
  glowColor = "rgba(197, 160, 89, 0.12)", // Premium gold glow
  glowSize = 350,
  ...props
}: SpotlightCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 150 };
  const glowX = useSpring(mouseX, springConfig);
  const glowY = useSpring(mouseY, springConfig);

  const background = useTransform(
    [glowX, glowY],
    ([x, y]) => `radial-gradient(${glowSize}px circle at ${x}px ${y}px, ${glowColor}, transparent 80%)`
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { left, top } = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className={`group relative overflow-hidden rounded-inherit ${className}`}
      {...props}
    >
      {/* Radial glow background layer */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-inherit opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        style={{
          background,
        }}
      />
      
      {/* Content wrapper */}
      <div className="relative z-10 h-full w-full">{children}</div>
    </div>
  );
}
