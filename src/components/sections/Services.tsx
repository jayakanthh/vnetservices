"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Code, Smartphone, ShieldCheck, Server } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    id: "01",
    name: "Custom Software Development",
    description: "Bespoke enterprise applications architected for scale, performance, and strategic alignment with your unique operational requirements.",
    icon: Code,
    color: "bg-blue-50 text-blue-900"
  },
  {
    id: "02",
    name: "Mobile Solutions",
    description: "High-performance iOS and Android applications that deliver premium user experiences while seamlessly integrating with your backend systems.",
    icon: Smartphone,
    color: "bg-indigo-50 text-indigo-900"
  },
  {
    id: "03",
    name: "Software Testing",
    description: "Rigorous quality assurance, automated testing pipelines, and security audits to ensure zero-defect deployments for critical systems.",
    icon: ShieldCheck,
    color: "bg-purple-50 text-purple-900"
  },
  {
    id: "04",
    name: "IT Consulting",
    description: "Strategic guidance on digital transformation, infrastructure modernization, and technology roadmapping to drive long-term business value.",
    icon: Server,
    color: "bg-slate-50 text-slate-900"
  }
];

export function Services() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="services" className="py-32 bg-white relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-20">
          <p className="text-sm font-semibold tracking-widest uppercase text-(--vnet-silver) mb-4">Capabilities</p>
          <h2 className="text-4xl md:text-5xl font-bold text-(--foreground)">Our Services</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 relative">
          
          {/* List Side */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="flex flex-col border-t border-(--vnet-silver-light)">
              {services.map((service, index) => {
                const isActive = index === activeIndex;
                return (
                  <div 
                    key={service.id}
                    className="group border-b border-(--vnet-silver-light) py-8 md:py-12 cursor-pointer transition-colors"
                    onMouseEnter={() => setActiveIndex(index)}
                    onClick={() => setActiveIndex(index)}
                  >
                    <div className="flex items-start md:items-center gap-6 md:gap-12">
                      <span className={cn(
                        "text-xl md:text-2xl font-light transition-colors duration-500",
                        isActive ? "text-(--vnet-violet)" : "text-(--vnet-silver)"
                      )}>
                        {service.id}
                      </span>
                      
                      <div className="flex-1">
                        <h3 className={cn(
                          "text-2xl md:text-4xl font-semibold mb-4 transition-all duration-500",
                          isActive ? "text-(--foreground) translate-x-2 md:translate-x-4" : "text-(--vnet-charcoal)"
                        )}>
                          {service.name}
                        </h3>
                        
                        {/* Mobile description (shown only when active on mobile) */}
                        <div className={cn(
                          "lg:hidden overflow-hidden transition-all duration-500",
                          isActive ? "max-h-40 opacity-100 mt-4" : "max-h-0 opacity-0"
                        )}>
                          <p className="text-(--vnet-silver) leading-relaxed">{service.description}</p>
                        </div>
                      </div>

                      <div className={cn(
                        "hidden md:flex items-center justify-center w-12 h-12 rounded-full border transition-all duration-500",
                        isActive ? "border-(--vnet-violet) text-(--vnet-violet) bg-violet-50" : "border-transparent text-transparent"
                      )}>
                        <ArrowRight className={cn(
                          "w-5 h-5 transition-transform duration-500",
                          isActive ? "translate-x-0" : "-translate-x-4"
                        )} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Visual Side (Sticky on Desktop) */}
          <div className="hidden lg:block lg:col-span-5">
            <div className="sticky top-40 h-[600px] w-full bg-(--vnet-off-white) rounded-2xl p-12 overflow-hidden flex flex-col relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="h-full flex flex-col justify-between z-10"
                >
                  <div>
                    <div className={cn("w-16 h-16 rounded-xl flex items-center justify-center mb-8", services[activeIndex].color)}>
                      {(() => {
                        const Icon = services[activeIndex].icon;
                        return <Icon size={32} strokeWidth={1.5} />;
                      })()}
                    </div>
                    <h4 className="text-3xl font-bold mb-6">{services[activeIndex].name}</h4>
                    <p className="text-lg text-(--vnet-charcoal) leading-relaxed">
                      {services[activeIndex].description}
                    </p>
                  </div>
                  
                  <div className="mt-8">
                    <button className="flex items-center gap-2 text-(--vnet-violet) font-medium uppercase tracking-wide text-sm group">
                      Learn more about this capability
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Abstract decorative graphic */}
              <div className="absolute right-0 bottom-0 opacity-5 pointer-events-none">
                 <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M400 0C400 220.914 220.914 400 0 400" stroke="currentColor" strokeWidth="100"/>
                 </svg>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
