
"use client";

import { useEffect, useRef, useState } from "react";

type ScrollRevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
  once?: boolean;
};

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 700,
  once = true,
}: ScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          if (once) {
            observer.unobserve(entry.target);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [once]);

  const transforms = {
    up: "translate3d(0, 32px, 0)",
    down: "translate3d(0, -32px, 0)",
    left: "translate3d(32px, 0, 0)",
    right: "translate3d(-32px, 0, 0)",
    none: "translate3d(0, 0, 0)",
  };

  return (
    <div
      ref={elementRef}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible
          ? "translate3d(0, 0, 0)"
          : transforms[direction],
        transitionProperty: "opacity, transform",
        transitionDuration: `${duration}ms`,
        transitionDelay: isVisible ? `${delay}ms` : "0ms",
        transitionTimingFunction: "cubic-bezier(0.2, 0.7, 0.2, 1)",
        willChange: isVisible ? "auto" : "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
