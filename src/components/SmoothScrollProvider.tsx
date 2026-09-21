"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const SCROLLBAR_HIDE_DELAY = 1500;
const NAVBAR_OFFSET = 80;

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const thumbRef = useRef<HTMLDivElement | null>(null);
  const hideTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    // Custom auto-hide scrollbar, driven by native scroll position
    function updateThumb() {
      const thumb = thumbRef.current;
      if (!thumb) return;

      const viewportHeight = window.innerHeight;
      const contentHeight = document.documentElement.scrollHeight;
      const maxScroll = contentHeight - viewportHeight;
      if (maxScroll <= 0) return;

      const thumbHeight = Math.max((viewportHeight / contentHeight) * viewportHeight, 40);
      const maxThumbTravel = viewportHeight - thumbHeight;
      const progress = window.scrollY / maxScroll;
      const thumbTop = progress * maxThumbTravel;

      thumb.style.height = `${thumbHeight}px`;
      thumb.style.transform = `translateY(${thumbTop}px)`;
      thumb.style.opacity = "1";

      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
      hideTimeoutRef.current = setTimeout(() => {
        if (thumbRef.current) thumbRef.current.style.opacity = "0";
      }, SCROLLBAR_HIDE_DELAY);
    }

    updateThumb();
    window.addEventListener("scroll", updateThumb, { passive: true });
    window.addEventListener("resize", updateThumb);

    // Handle anchor links, offsetting for the fixed navbar
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");

      if (
        anchor &&
        anchor.hash &&
        anchor.hash.startsWith("#") &&
        anchor.origin === window.location.origin &&
        anchor.pathname === window.location.pathname
      ) {
        if (anchor.hash === "#top") {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
          window.history.pushState(null, "", window.location.pathname);
          return;
        }

        const targetElement = document.querySelector(anchor.hash);
        if (targetElement) {
          e.preventDefault();
          const top = targetElement.getBoundingClientRect().top + window.scrollY - NAVBAR_OFFSET;
          window.scrollTo({ top, behavior: "smooth" });
          window.history.pushState(null, "", anchor.hash);
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      window.removeEventListener("scroll", updateThumb);
      window.removeEventListener("resize", updateThumb);
      document.removeEventListener("click", handleAnchorClick);
      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
    };
  }, []);

  // Scroll to top on route change, simulating native browser behavior
  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo({ top: 0 });
    }
  }, [pathname]);

  return (
    <>
      {children}
      <div
        ref={thumbRef}
        aria-hidden="true"
        className="fixed right-1 top-0 w-1.5 rounded-full bg-(--vnet-silver) opacity-0 pointer-events-none transition-opacity duration-300 z-[60]"
        style={{ height: 40 }}
      />
    </>
  );
}
