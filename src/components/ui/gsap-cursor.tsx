"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

/**
 * 21st.dev-inspired custom GSAP cursor:
 * - Small dot that snaps directly to cursor
 * - Larger ring that lags behind with ease
 * Hidden on mobile/touch devices via CSS media query
 */
export function GSAPCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const moveCursor = (e: MouseEvent) => {
      // Dot follows instantly
      gsap.to(dot, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.05,
        ease: "none",
        overwrite: "auto",
      });

      // Ring lags behind
      gsap.to(ring, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.35,
        ease: "power2.out",
        overwrite: "auto",
      });
    };

    // Scale up ring on hoverable elements
    const onHoverStart = () => {
      gsap.to(ring, { scale: 2, opacity: 0.7, duration: 0.2, ease: "power2.out" });
      gsap.to(dot, { scale: 0.5, duration: 0.2, ease: "power2.out" });
    };

    const onHoverEnd = () => {
      gsap.to(ring, { scale: 1, opacity: 1, duration: 0.3, ease: "power2.out" });
      gsap.to(dot, { scale: 1, duration: 0.2, ease: "power2.out" });
    };

    window.addEventListener("mousemove", moveCursor);

    const hoverEls = document.querySelectorAll(
      "a, button, [role='button'], .magnetic"
    );
    hoverEls.forEach((el) => {
      el.addEventListener("mouseenter", onHoverStart);
      el.addEventListener("mouseleave", onHoverEnd);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      hoverEls.forEach((el) => {
        el.removeEventListener("mouseenter", onHoverStart);
        el.removeEventListener("mouseleave", onHoverEnd);
      });
    };
  });

  return (
    <>
      {/* Only shown on pointer: fine (non-touch) devices */}
      <div
        ref={dotRef}
        className="cursor-dot hidden pointer-fine:block"
        style={{ transform: "translate(-50%, -50%)" }}
      />
      <div
        ref={ringRef}
        className="cursor-ring hidden pointer-fine:block"
        style={{ transform: "translate(-50%, -50%)" }}
      />
    </>
  );
}
