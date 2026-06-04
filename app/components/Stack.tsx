"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import Reveal from "./Reveal";

const items = [
  "JavaScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Supabase",
  "MongoDB",
];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const pill: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.92 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Stack() {
  const reduce = useReducedMotion();
  return (
    <section id="stack" className="scroll-mt-24 border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:px-10 sm:py-32">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.25em] text-muted">
            03 — Stack
          </p>
          <h2 className="mt-3 font-serif text-4xl tracking-tight sm:text-5xl">
            Tools I reach for.
          </h2>
        </Reveal>

        <motion.ul
          initial={reduce ? false : "hidden"}
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={container}
          className="mt-10 flex flex-wrap gap-3 sm:gap-4"
        >
          {items.map((item) => (
            <motion.li
              key={item}
              variants={pill}
              className="cursor-default rounded-full border border-border bg-surface px-5 py-2.5 text-sm text-fg/90 transition-colors hover:border-accent hover:text-accent sm:text-base"
            >
              {item}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
