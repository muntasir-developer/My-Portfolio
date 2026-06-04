"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import ParticleCanvas from "./ParticleCanvas";
import TypedText from "./TypedText";
import MagneticButton from "./MagneticButton";

const NAME = "Md Muntasir";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.045, delayChildren: 0.1 },
  },
};

const letter: Variants = {
  hidden: { y: "0.5em", opacity: 0 },
  show: {
    y: "0em",
    opacity: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeUp: Variants = {
  hidden: { y: 16, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden"
    >
      <ParticleCanvas />

      {/* gentle vignette so text stays legible over the canvas */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,var(--bg)_100%)]"
      />

      <div className="relative mx-auto w-full max-w-6xl px-6 py-32 sm:px-10">
        <motion.p
          initial={reduce ? false : "hidden"}
          animate="show"
          variants={fadeUp}
          className="mb-6 text-xs uppercase tracking-[0.25em] text-muted"
        >
          Full-stack developer · Marketing mind
        </motion.p>

        <motion.h1
          aria-label={NAME}
          initial={reduce ? false : "hidden"}
          animate="show"
          variants={container}
          className="font-serif text-6xl leading-[1.02] tracking-tight sm:text-8xl md:text-[8.5rem]"
        >
          {NAME.split(" ").map((word, wi) => (
            <span
              key={wi}
              aria-hidden="true"
              className="mr-[0.22em] inline-block whitespace-nowrap last:mr-0"
            >
              {word.split("").map((char, ci) => (
                <motion.span key={ci} variants={letter} className="inline-block">
                  {char}
                </motion.span>
              ))}
            </span>
          ))}
        </motion.h1>

        <motion.p
          initial={reduce ? false : "hidden"}
          animate="show"
          variants={fadeUp}
          transition={{ delay: 0.7 }}
          className="mt-8 max-w-xl text-lg text-muted sm:text-xl"
        >
          <TypedText
            text="I build modern web experiences with a marketing mind."
            startDelay={reduce ? 0 : 900}
          />
        </motion.p>

        <motion.div
          initial={reduce ? false : "hidden"}
          animate="show"
          variants={fadeUp}
          transition={{ delay: 0.9 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <MagneticButton href="#work" variant="solid">
            View work
          </MagneticButton>
          <MagneticButton href="#contact" variant="outline">
            Hire me
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
