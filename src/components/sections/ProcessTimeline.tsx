"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const steps = [
  { id: "01", title: "Research & Discovery", desc: "In-depth research into your business, users, and technical landscape before any work begins." },
  { id: "02", title: "Idea Validation", desc: "Stress-testing the concept against real constraints and goals before committing engineering time." },
  { id: "03", title: "UX & UI Design", desc: "Designing and prototyping the experience around how your users actually work." },
  { id: "04", title: "Development", desc: "Agile, transparent engineering with regular checkpoints as the system is built." },
  { id: "05", title: "Testing & QA", desc: "Rigorous quality assurance to catch issues before they ever reach production." },
  { id: "06", title: "Maintenance & Support", desc: "Ongoing support after launch to keep systems reliable as your business evolves." }
];

export function ProcessTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="py-32 bg-white relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <p className="text-sm font-semibold tracking-widest uppercase text-(--vnet-charcoal)/70 mb-4">Methodology</p>
          <h2 className="text-4xl md:text-5xl font-bold text-(--foreground)">How VNet Works</h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line background */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-(--vnet-silver-light) -translate-x-1/2"></div>
          
          {/* Animated fill line */}
          <motion.div 
            style={{ height: lineHeight }}
            className="absolute left-6 md:left-1/2 top-0 w-px bg-(--vnet-violet) -translate-x-1/2 origin-top"
          ></motion.div>

          <div className="flex flex-col gap-12 md:gap-24 relative">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={step.id} className="flex flex-col md:flex-row items-start md:items-center relative">
                  
                  {/* Left Content */}
                  <div className={`hidden md:block w-1/2 pr-16 text-right ${isEven ? "" : "md:order-2 md:pl-16 md:pr-0 md:text-left"}`}>
                    <h3 className="text-2xl font-bold text-(--foreground) mb-3">{step.title}</h3>
                    <p className="text-(--vnet-charcoal)">{step.desc}</p>
                  </div>

                  {/* Center Node */}
                  <div className="absolute left-6 md:left-1/2 top-1 md:top-1/2 w-4 h-4 rounded-full bg-white border-2 border-(--vnet-violet) -translate-x-1/2 md:-translate-y-1/2 z-10"></div>
                  
                  {/* Mobile & Alt Side Content */}
                  <div className={`pl-16 w-full md:hidden`}>
                     <span className="text-sm font-bold text-(--vnet-violet) block mb-1">{step.id}</span>
                     <h3 className="text-2xl font-bold text-(--foreground) mb-2">{step.title}</h3>
                     <p className="text-(--vnet-charcoal)">{step.desc}</p>
                  </div>

                  {/* Desktop Right Side Number */}
                  <div className={`hidden md:flex w-1/2 pl-16 items-center ${isEven ? "" : "md:order-1 md:justify-end md:pr-16 md:pl-0"}`}>
                    <span className="text-6xl font-light text-(--vnet-silver-light)">{step.id}</span>
                  </div>
                  
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
