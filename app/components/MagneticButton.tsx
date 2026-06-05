"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "motion/react";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "outline";
  strength?: number;
};

/**
 * Button/link that subtly leans toward the cursor while hovered,
 * then springs back to center on leave. Disabled under reduced motion.
 */
export default function MagneticButton({
  href,
  children,
  variant = "solid",
  strength = 0.35,
}: Props) {
  const ref = useRef<HTMLAnchorElement>(null);
  const reduce = useReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 250, damping: 18, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 250, damping: 18, mass: 0.4 });

  const handleMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (reduce) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set(relX * strength);
    y.set(relY * strength);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  const base =
    "inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-medium transition-colors";
  const styles =
    variant === "solid"
      ? "bg-fg text-bg hover:bg-accent"
      : "border border-border text-fg hover:border-accent hover:text-accent";

  // Open external links (http/https, e.g. WhatsApp) in a new tab so the
  // portfolio stays open; keep anchors and mailto in the same tab.
  const external = href.startsWith("http");

  return (
    <motion.a
      ref={ref}
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x: springX, y: springY }}
      className={`${base} ${styles}`}
    >
      {children}
    </motion.a>
  );
}
