"use client";

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Lenis from 'lenis';

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    lenisRef.current = lenis;
    window.globalLenis = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      window.globalLenis = null;
    };
  }, []);

  useEffect(() => {
    // Wait for the exit transition and DOM mounting before scrolling
    if (lenisRef.current) {
      if (window.location.hash) {
        const hash = window.location.hash.substring(1);
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            const offset = 80;
            const top = element.getBoundingClientRect().top + window.scrollY - offset;
            lenisRef.current?.scrollTo(top, { duration: 1.5, immediate: false });
          }
        }, 250); // Snappy scroll matching the 0.6s page transition entry
      } else {
        lenisRef.current.scrollTo(0, { immediate: true });
      }
    }
  }, [pathname]);

  return <>{children}</>;
}
