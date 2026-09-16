"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/Button";

const navLinks = [
  { name: "Services", href: "#services" },
  { name: "Industries", href: "#industries" },
  { name: "Insights", href: "#insights" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed -top-10 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-white/85 backdrop-blur-md border-b border-(--vnet-silver-light) pt-[calc(env(safe-area-inset-top)+3.5rem)] pb-4"
          : "bg-transparent pt-[calc(env(safe-area-inset-top)+4rem)] pb-6"
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="#top" className="flex items-center gap-2 z-50">
          <div className="h-10 w-auto relative flex items-center">
             <img src="/vnetservices/logo-with-text.png" alt="VNet" className="h-10 w-auto object-contain" />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-medium tracking-wide transition-colors duration-300 hover:text-(--vnet-violet)",
                scrolled ? "text-(--foreground)" : "text-(--foreground)"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-4 z-50">
          <div className="hidden lg:block">
            <Link href="#contact">
              <Button size="sm" variant={scrolled ? "primary" : "primary"}>
                Let's Talk
              </Button>
            </Link>
          </div>
          <button
            className="lg:hidden p-2 text-(--foreground)"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white flex flex-col pt-[calc(env(safe-area-inset-top)+6rem)] px-6 pb-12 overflow-y-auto"
          >
            <nav className="flex flex-col gap-6 text-2xl font-semibold">
              {navLinks.map((link, i) => (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                  key={link.name}
                >
                  <Link
                    href={link.href}
                    className="block py-2 text-(--foreground) hover:text-(--vnet-violet)"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-12"
            >
              <Link href="#contact" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full">Let's Talk</Button>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
