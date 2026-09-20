"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });
    
    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Handle anchor links for smooth scrolling with Lenis
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");
      
      if (
        anchor && 
        anchor.hash && 
        anchor.hash.startsWith("#") && 
        anchor.origin === window.location.origin
      ) {
        // Only intercept if the anchor points to the CURRENT page.
        if (anchor.pathname === window.location.pathname) {
          e.preventDefault();
          
          if (anchor.hash === "#top") {
            lenis.scrollTo(0, {
              duration: 1.5,
              easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
            });
            window.history.pushState(null, "", window.location.pathname);
          } else {
            const targetElement = document.querySelector(anchor.hash);
            if (targetElement) {
              lenis.scrollTo(anchor.hash, {
                offset: -80, // Offset for navbar
                duration: 1.5,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
              });
              window.history.pushState(null, "", anchor.hash);
            }
          }
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      lenis.destroy();
      document.removeEventListener("click", handleAnchorClick);
    };
  }, []);

  // Force resize calculation when pathname changes
  useEffect(() => {
    if (lenisRef.current) {
      // Small timeout to allow DOM to paint the new page content
      setTimeout(() => {
        lenisRef.current?.resize();
        // Also scroll to top on navigation to simulate native browser behavior
        if (!window.location.hash) {
          lenisRef.current?.scrollTo(0, { immediate: true });
        }
      }, 100);
    }
  }, [pathname]);

  return <>{children}</>;
}
