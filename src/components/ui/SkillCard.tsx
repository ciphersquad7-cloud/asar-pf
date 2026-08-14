"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { skillIconMap, type SkillMeta } from "@/components/ui/skill-icons";
import { TbCode } from "react-icons/tb";

interface SkillPillProps {
  name: string;
  index: number;
}

export function SkillPill({ name }: SkillPillProps) {
  const meta: SkillMeta | undefined = skillIconMap[name];
  const IconComponent = meta?.icon || TbCode;
  const brandColor = meta?.color || "#38bdf8";

  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const handleMouseLeave = () => {
    mouseX.set(-100);
    mouseY.set(-100);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ y: -4, scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className="doppelrand-shell !p-1 group h-full cursor-pointer relative overflow-hidden"
    >
      <div className="doppelrand-core p-6 h-full flex flex-col items-center justify-center relative overflow-hidden transition-colors duration-300 group-hover:border-white/20 bg-[#08080c]">
        {/* 21st.dev Dynamic Interactive Cursor Spotlight */}
        <motion.div
          className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[calc(2rem-0.375rem)]"
          style={{
            background: useTransform(
              [springX, springY],
              ([x, y]) =>
                `radial-gradient(180px circle at ${x}px ${y}px, ${brandColor}25, transparent 80%)`
            ),
          }}
        />

        {/* Ambient Brand Core Glow */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-15 transition-opacity duration-500 pointer-events-none rounded-[calc(2rem-0.375rem)]"
          style={{
            background: `radial-gradient(circle at center, ${brandColor} 0%, transparent 70%)`,
          }}
        />

        {/* Large Icon Box */}
        <div
          className="relative z-10 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 shadow-lg"
          style={{
            backgroundColor: meta?.bgColor || "rgba(255, 255, 255, 0.05)",
          }}
        >
          <IconComponent
            size={36}
            color={brandColor}
            className="transition-transform duration-300"
            style={{ filter: `drop-shadow(0 0 12px ${brandColor}60)` }}
          />
        </div>

        {/* Skill Name */}
        <span className="relative z-10 text-sm font-bold text-zinc-300 group-hover:text-white transition-colors text-center tracking-wide font-mono">
          {name}
        </span>
      </div>
    </motion.div>
  );
}

