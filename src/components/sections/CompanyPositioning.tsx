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
      className="py-32 md:py-48 bg-(--vnet-off-white) overflow-hidden relative"
    >
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          style={{ y, opacity }}
          className="max-w-5xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-(--foreground) mb-12 leading-tight">
            Technology should <br className="hidden md:block" />
            <span className="text-(--vnet-violet)">work for your business</span>, <br className="hidden md:block" />
            not the other way around.
          </h2>
          
          <div className="w-24 h-1 bg-(--vnet-silver-light) mx-auto mb-12"></div>
          
          <p className="text-xl md:text-2xl text-(--vnet-charcoal) max-w-3xl mx-auto leading-relaxed font-light">
            VNet Services provides custom software development and IT consulting that aligns perfectly with your strategic objectives. We abstract away technical complexity, allowing you to focus on your core strengths while we build the digital foundation for your next phase of growth.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
