"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const industries = [
  { name: "Software", description: "End-to-end product engineering for SaaS and enterprise platforms, from architecture through ongoing release management." },
  { name: "Hospitality", description: "Guest-facing booking and loyalty experiences backed by integrated property and reservation management systems." },
  { name: "Energy", description: "Operational dashboards and smart infrastructure tooling that turn field and sensor data into decisions." },
  { name: "Financial Services", description: "Secure, compliant fintech applications and careful modernization of legacy core banking and trading systems." },
  { name: "Insurance", description: "Faster claims processing and self-service customer portals that cut manual handling without cutting corners on compliance." },
  { name: "Retail", description: "Omnichannel commerce platforms with real-time inventory and supply chain visibility across every sales channel." },
  { name: "Telecommunications", description: "Network operations portals and customer billing systems built to handle scale, uptime, and regulatory demands." },
  { name: "Healthcare", description: "HIPAA-compliant patient systems and interoperable health data platforms that connect providers, payers, and patients." },
  { name: "Education", description: "Learning management and student engagement platforms that scale from a single classroom to district-wide rollout." }
];

export function Industries() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="industries" className="py-32 bg-(--vnet-charcoal) text-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-24">
          <div className="max-w-xl">
            <p className="text-sm font-semibold tracking-widest uppercase text-(--vnet-silver-light)/70 mb-4">Industries</p>
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
                    <p className="text-(--vnet-silver-light)/70">{industry.description}</p>
                  </div>

                  {/* Mobile always visible description */}
                  <div className="md:hidden mt-3">
                    <p className="text-sm text-(--vnet-silver-light)/70">{industry.description}</p>
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
