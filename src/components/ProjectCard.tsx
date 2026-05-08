"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

export default function ProjectCard({ title, description, image, link }: ProjectCardProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-full p-4 bg-retro-bg retro-border retro-shadow-hover transition-shadow"
    >
      <div 
        style={{ transform: "translateZ(50px)" }}
        className="w-full h-48 relative border-2 border-retro-red mb-4 overflow-hidden"
      >
        <Image src={image} alt={title} fill unoptimized sizes="(max-width: 768px) 100vw, 33vw" className="object-cover grayscale hover:grayscale-0 transition-all duration-300" />
      </div>
      <div style={{ transform: "translateZ(30px)" }}>
        <h3 className="font-serif font-bold text-xl uppercase mb-2 line-clamp-1">{title}</h3>
        <p className="text-sm line-clamp-3 mb-4">{description}</p>
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 bg-retro-red text-retro-bg font-bold text-sm uppercase retro-border hover:bg-transparent hover:text-retro-red transition-colors"
        >
          View Details
        </a>
      </div>
    </motion.div>
  );
}
