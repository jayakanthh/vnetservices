"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function VisualBreak() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], ["-10%", "5%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["5%", "-10%"]);
  const x3 = useTransform(scrollYProgress, [0, 1], ["-5%", "10%"]);

  return (
    <section ref={containerRef} className="py-24 md:py-40 bg-(--vnet-violet-dark) text-white overflow-hidden relative">
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="flex flex-col gap-2 md:gap-6 relative z-10 whitespace-nowrap">
        <motion.h2 
          style={{ x: x1 }}
          className="text-7xl md:text-[10rem] font-bold tracking-tighter opacity-80"
        >
          TECHNOLOGY.
        </motion.h2>
        <motion.h2 
          style={{ WebkitTextStroke: "2px rgba(255,255,255,0.5)", x: x2 }}
          className="text-7xl md:text-[10rem] font-bold tracking-tighter text-transparent"
        >
          INNOVATION.
        </motion.h2>
        <motion.h2 
          style={{ x: x3 }}
          className="text-7xl md:text-[10rem] font-bold tracking-tighter text-(--vnet-violet-light)"
        >
          INTEGRATION.
        </motion.h2>
      </div>
    </section>
  );
}
