"use client";

import { useRef, useCallback } from "react";
import gsap from "gsap";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
  as?: "button" | "a" | "div";
  href?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
}

/**
 * 21st.dev-style Magnetic Button
 * The element softly follows the cursor within its bounds.
 */
export function MagneticButton({
  children,
  className = "",
  strength = 0.35,
  as: Tag = "div",
  href,
  target,
  rel,
  onClick,
}: MagneticButtonProps) {
  const ref = useRef<any>(null);

  const onMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      const el = ref.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) * strength;
      const dy = (e.clientY - cy) * strength;

      gsap.to(el, {
        x: dx,
        y: dy,
        duration: 0.4,
        ease: "power2.out",
        overwrite: "auto",
      });
    },
    [strength]
  );

  const onMouseLeave = useCallback(() => {
    gsap.to(ref.current, {
      x: 0,
      y: 0,
      duration: 0.6,
      ease: "elastic.out(1, 0.5)",
      overwrite: "auto",
    });
  }, []);

  const commonProps = {
    ref,
    onMouseMove,
    onMouseLeave,
    className,
    onClick,
  };

  if (Tag === "a") {
    return (
      <a
        {...(commonProps as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        href={href}
        target={target}
        rel={rel}
      >
        {children}
      </a>
    );
  }

  if (Tag === "button") {
    return (
      <button
        {...(commonProps as React.ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {children}
      </button>
    );
  }

  return <div {...commonProps}>{children}</div>;
}
