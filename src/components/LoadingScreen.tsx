"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onComplete();
    }, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: "-100%" }}
      transition={{ duration: 0.8, ease: "easeInOut", delay: 1.8 }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-retro-red text-retro-bg overflow-hidden"
    >
      <div className="bg-noise mix-blend-overlay opacity-20"></div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center"
      >
        <motion.h1 
          className="text-4xl md:text-6xl font-bold font-serif text-center uppercase tracking-widest border-4 border-retro-bg p-6"
          initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
          animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
          transition={{ duration: 1, delay: 0.3, ease: "circInOut" }}
        >
          Iqbal Rizky Maulana
        </motion.h1>
        <motion.p
          className="mt-4 text-sm md:text-base font-sans tracking-widest uppercase"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          System Initializing...
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
