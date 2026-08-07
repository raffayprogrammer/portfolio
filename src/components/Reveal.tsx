"use client";

import { useCallback, useState, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Stagger delay in ms — pass index * 60 for grids. */
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "article";
};

/**
 * Fades + lifts its children in the first time they scroll into view.
 *
 * The observer is attached from a ref callback rather than an effect, so the
 * element is watched the moment it mounts and React 19 handles the teardown.
 * The animation itself lives in globals.css (.reveal / .is-visible), which is
 * also where prefers-reduced-motion short-circuits it to "always visible".
 */
export default function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: RevealProps) {
  const [visible, setVisible] = useState(false);

  const attach = useCallback((node: HTMLElement | null) => {
    if (!node) return;

    // No observer support (very old browsers): show the content rather than
    // leaving it permanently transparent.
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // reveal once, never re-hide
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={attach as never}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
