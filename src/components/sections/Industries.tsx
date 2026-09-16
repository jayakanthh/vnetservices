"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const industries = [
  { name: "Software", description: "Product engineering and lifecycle management for SaaS and enterprise platforms." },
  { name: "Gaming", description: "High-performance backend infrastructure and engaging player experiences." },
  { name: "Hospitality", description: "Guest-centric digital platforms and integrated property management systems." },
  { name: "Energy", description: "Data-driven operational tools and smart infrastructure management." },
  { name: "Financial Services", description: "Secure, compliant fintech applications and legacy modernization." },
  { name: "Insurance", description: "Streamlined claims processing and modern customer portals." },
  { name: "Retail", description: "Omnichannel commerce solutions and supply chain visibility." },
  { name: "Telecommunications", description: "Network management portals and customer billing solutions." },
  { name: "Healthcare", description: "Compliant patient systems and interoperable health data platforms." },
  { name: "Education", description: "Scalable learning management and student engagement platforms." }
];

export function Industries() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="industries" className="py-32 bg-(--vnet-charcoal) text-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-24">
          <div className="max-w-xl">
            <p className="text-sm font-semibold tracking-widest uppercase text-(--vnet-silver) mb-4">Industries</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Sector Expertise</h2>
            <p className="text-(--vnet-silver-light) text-lg">We apply cross-industry insights to solve complex domain-specific challenges.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-0 border-t border-(--vnet-silver)/20">
          {industries.map((industry, index) => {
            const isHovered = hoveredIndex === index;
            const isDimmed = hoveredIndex !== null && hoveredIndex !== index;

            return (
              <div 
                key={industry.name}
                className="group relative border-b border-(--vnet-silver)/20 py-8 cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="flex flex-col">
                  <h3 className={cn(
                    "text-3xl md:text-4xl font-light transition-all duration-500",
                    isHovered ? "text-white translate-x-4" : "text-(--vnet-silver-light)",
                    isDimmed ? "opacity-30" : "opacity-100"
                  )}>
                    {industry.name}
                  </h3>
                  
                  {/* Desktop hover description */}
                  <div className={cn(
                    "hidden md:block overflow-hidden transition-all duration-500 pl-4",
                    isHovered ? "max-h-20 opacity-100 mt-4" : "max-h-0 opacity-0"
                  )}>
                    <p className="text-(--vnet-silver)">{industry.description}</p>
                  </div>

                  {/* Mobile always visible description */}
                  <div className="md:hidden mt-3">
                    <p className="text-sm text-(--vnet-silver)">{industry.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
