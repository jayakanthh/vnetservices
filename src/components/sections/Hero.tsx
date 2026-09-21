"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/Button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-white">
      {/* Background Graphic elements representing the "interwoven V" / networks */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20 overflow-hidden">
        <motion.svg
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute right-0 top-0 w-[800px] h-[800px] text-(--vnet-violet)"
          viewBox="0 0 800 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, ease: "easeInOut" }}
            d="M 600,0 C 600,200 200,400 400,800"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="10 10"
          />
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, delay: 0.2, ease: "easeInOut" }}
            d="M 800,200 C 500,200 400,500 600,800"
            stroke="currentColor"
            strokeWidth="1"
          />
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, delay: 0.4, ease: "easeInOut" }}
            d="M 400,0 L 800,800"
            stroke="currentColor"
            strokeWidth="4"
            className="text-(--vnet-silver-light)"
          />
          {/* Abstract V intersections */}
          <motion.circle
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, delay: 2.5 }}
            cx="485"
            cy="425"
            r="8"
            fill="currentColor"
          />
        </motion.svg>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden mb-6"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-(--foreground) leading-[1.1]">
              Technology <br />
              <span className="text-(--vnet-violet)">Built Around</span> <br />
              Your Business.
            </h1>
          </motion.div>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="text-lg md:text-xl text-(--vnet-charcoal) max-w-2xl mb-10 leading-relaxed border-l-2 border-(--vnet-silver) pl-6"
          >
            We engineer sophisticated digital solutions, integrating modern technology with strategic vision to transform how established organizations operate and scale.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href="#contact">
              <Button size="lg" withArrow className="w-full sm:w-auto">
                Let's Talk
              </Button>
            </a>
            <a href="#services">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                Explore Our Services
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
