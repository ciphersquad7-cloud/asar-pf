"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

interface MarqueeProps {
  items: string[];
  speed?: number;
  className?: string;
  itemClassName?: string;
  direction?: "left" | "right";
}

/**
 * Infinite horizontal marquee using GSAP for buttery smooth performance.
 * Inspired by 21st.dev marquee/ticker components.
 */
export function GSAPMarquee({
  items,
  speed = 40,
  className = "",
  itemClassName = "",
  direction = "left",
}: MarqueeProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const track = trackRef.current;
      if (!track) return;

      const totalWidth = track.scrollWidth / 2;

      gsap.to(track, {
        x: direction === "left" ? -totalWidth : totalWidth,
        duration: totalWidth / speed,
        ease: "none",
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize((x: number) => {
            const mod = Math.abs(totalWidth);
            return direction === "left"
              ? ((parseFloat(x.toString()) % mod) - mod) % -mod
              : ((parseFloat(x.toString()) % mod) + mod) % mod;
          }),
        },
      });
    },
    { scope: containerRef }
  );

  // Duplicate items for seamless loop
  const doubled = [...items, ...items];

  return (
    <div
      ref={containerRef}
      className={`overflow-hidden ${className}`}
      style={{ maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)" }}
    >
      <div ref={trackRef} className="flex gap-8 w-max will-change-transform">
        {doubled.map((item, i) => (
          <span
            key={i}
            className={`whitespace-nowrap flex-shrink-0 ${itemClassName}`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
