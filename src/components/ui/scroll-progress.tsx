"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/**
 * Thin scroll-progress bar at the top of the viewport.
 * Inspired by 21st.dev reading progress components.
 */
export function ScrollProgressBar() {
  const barRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.to(barRef.current, {
      scaleX: 1,
      ease: "none",
      scrollTrigger: {
        trigger: document.documentElement,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.3,
      },
    });

    // Set initial scaleX
    gsap.set(barRef.current, { scaleX: 0, transformOrigin: "left" });
  });

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] h-[2px] pointer-events-none">
      <div
        ref={barRef}
        className="h-full w-full bg-gradient-to-r from-blue-500 via-indigo-400 to-purple-500 origin-left"
        style={{ transform: "scaleX(0)" }}
      />
    </div>
  );
}
