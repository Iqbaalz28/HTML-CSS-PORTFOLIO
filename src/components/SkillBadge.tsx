"use client";
import { motion } from "framer-motion";
import Image from "next/image";

interface SkillBadgeProps {
  name: string;
  image: string;
  index: number;
}

export default function SkillBadge({ name, image, index }: SkillBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ y: -5, scale: 1.05 }}
      className="flex flex-col items-center justify-center p-4 bg-retro-bg retro-border retro-shadow-hover gap-3"
    >
      <div className="w-12 h-12 relative grayscale hover:grayscale-0 transition-all duration-300">
        <Image src={image} alt={name} fill unoptimized sizes="48px" className="object-contain" />
      </div>
      <span className="font-bold text-xs text-center uppercase">{name}</span>
    </motion.div>
  );
}
