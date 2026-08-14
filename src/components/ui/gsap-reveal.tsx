"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface GSAPRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  from?: "bottom" | "left" | "right" | "top" | "fade";
  distance?: number;
  stagger?: boolean;
}

export function GSAPReveal({
  children,
  className = "",
  delay = 0,
  duration = 0.7,
  from = "bottom",
  distance = 40,
  stagger = false,
}: GSAPRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      const targets = stagger ? el.children : el;

      const fromVars: gsap.TweenVars = { opacity: 0 };
      if (from === "bottom") fromVars.y = distance;
      if (from === "top") fromVars.y = -distance;
      if (from === "left") fromVars.x = -distance;
      if (from === "right") fromVars.x = distance;

      const toVars: gsap.TweenVars = {
        opacity: 1,
        y: 0,
        x: 0,
        duration,
        ease: "power3.out",
        delay,
        stagger: stagger ? 0.1 : 0,
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          toggleActions: "play none none none",
          once: true,
        },
      };

      gsap.fromTo(targets, fromVars, toVars);
    },
    { scope: ref }
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
