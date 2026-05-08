"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: 2.5 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300 border-b-4 border-transparent",
        scrolled ? "bg-retro-bg/90 backdrop-blur-md border-retro-red shadow-[0_4px_0_0_#AB1509] py-2" : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <a href="#" className="font-serif font-bold text-xl md:text-2xl text-retro-red tracking-wider uppercase">
          IQBAALE
        </a>

        <nav className="hidden md:flex gap-6">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-retro-red font-semibold uppercase text-sm tracking-wide hover:underline decoration-2 underline-offset-4 transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <button
          className="md:hidden text-retro-red p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="space-y-1.5">
            <motion.span animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }} className="block w-6 h-0.5 bg-retro-red"></motion.span>
            <motion.span animate={{ opacity: isOpen ? 0 : 1 }} className="block w-6 h-0.5 bg-retro-red"></motion.span>
            <motion.span animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0 }} className="block w-6 h-0.5 bg-retro-red"></motion.span>
          </div>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-retro-bg border-b-4 border-retro-red overflow-hidden shadow-[0_4px_0_0_#AB1509]"
          >
            <nav className="flex flex-col p-4 gap-4">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-retro-red font-bold uppercase text-lg hover:pl-2 transition-all"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
