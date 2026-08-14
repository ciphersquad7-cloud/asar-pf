"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface CounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

/**
 * Animated number counter triggered on scroll.
 * Inspired by 21st.dev analytics/stats components.
 */
export function GSAPCounter({
  end,
  suffix = "",
  prefix = "",
  duration = 2,
  className = "",
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      const obj = { val: 0 };

      const tween = gsap.to(obj, {
        val: end,
        duration,
        ease: "power2.out",
        paused: true,
        onUpdate: () => {
          el.textContent = `${prefix}${Math.round(obj.val).toLocaleString()}${suffix}`;
        },
      });

      ScrollTrigger.create({
        trigger: el,
        start: "top 85%",
        once: true,
        onEnter: () => tween.play(),
      });

      el.textContent = `${prefix}0${suffix}`;
    },
    { scope: ref }
  );

  return (
    <span ref={ref} className={className}>
      {prefix}0{suffix}
    </span>
  );
}
