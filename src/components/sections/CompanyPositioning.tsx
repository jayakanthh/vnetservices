"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function CompanyPositioning() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section 
      ref={containerRef} 
      className="py-14 md:py-20 bg-(--vnet-off-white) overflow-hidden relative"
    >
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          style={{ y, opacity }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-(--foreground) mb-4 leading-snug">
            Technology should <span className="text-(--vnet-violet)">work for your business</span>, not the other way around.
          </h2>

          <p className="text-base md:text-lg text-(--vnet-charcoal) max-w-xl mx-auto leading-relaxed font-light">
            Custom software and IT consulting aligned to your strategic objectives — we handle the technical complexity so you can focus on growth.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
