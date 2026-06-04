"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "motion/react";
import { links, isPlaceholder, linkProps } from "../data/site";

export default function ProjectCard() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  // cursor position within the card, normalized to -0.5..0.5
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotX = useSpring(useTransform(my, [-0.5, 0.5], [5, -5]), {
    stiffness: 200,
    damping: 20,
  });
  const rotY = useSpring(useTransform(mx, [-0.5, 0.5], [-5, 5]), {
    stiffness: 200,
    damping: 20,
  });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <div className="[perspective:1400px]">
      <motion.div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={
          reduce
            ? undefined
            : { rotateX: rotX, rotateY: rotY, transformStyle: "preserve-3d" }
        }
        className="group grid overflow-hidden rounded-2xl border border-border bg-surface transition-shadow duration-300 hover:shadow-2xl hover:shadow-black/40 md:grid-cols-2"
      >
        {/* ---- Preview: an Instagram-style DM that auto-replies on hover ---- */}
        <div className="relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1b1a17] to-[#0c0c0b] p-6 sm:p-10">
          <div className="w-full max-w-xs rounded-2xl border border-border bg-bg/80 p-4 shadow-xl backdrop-blur">
            {/* header */}
            <div className="flex items-center gap-3 border-b border-border pb-3">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-accent to-[#7d5a1f] text-xs font-semibold text-bg">
                @
              </span>
              <div className="leading-tight">
                <p className="text-sm font-medium text-fg">AutoDM</p>
                <p className="flex items-center gap-1 text-[11px] text-muted">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                  Auto-reply active
                </p>
              </div>
            </div>

            {/* messages */}
            <div className="space-y-2 pt-3">
              <div className="max-w-[80%] rounded-2xl rounded-tl-sm bg-surface px-3 py-2 text-xs text-fg">
                Hey, is this still available? 👀
              </div>
              <div className="ml-auto max-w-[85%] translate-y-2 rounded-2xl rounded-tr-sm bg-accent px-3 py-2 text-xs text-bg opacity-0 transition-all delay-100 duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                Thanks for reaching out! 👋
              </div>
              <div className="ml-auto max-w-[85%] translate-y-2 rounded-2xl rounded-tr-sm bg-accent px-3 py-2 text-xs text-bg opacity-0 transition-all delay-300 duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                Here&apos;s the link to grab it →
              </div>
            </div>
          </div>
        </div>

        {/* ---- Details ---- */}
        <div className="flex flex-col justify-center gap-4 p-7 sm:p-10">
          <h3 className="font-serif text-3xl tracking-tight sm:text-4xl">
            AutoDM
          </h3>
          <p className="font-mono text-xs uppercase tracking-wider text-accent">
            Next.js · Supabase · Meta Graph API
          </p>
          <p className="text-muted">
            An Instagram DM automation tool — real authentication, a live
            third-party API, and a database working together. A developer&apos;s
            build with a marketer&apos;s intent.
          </p>

          <div className="mt-2 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
            <a
              href={links.autodmDemo}
              {...linkProps(links.autodmDemo)}
              className="font-medium text-fg transition-colors hover:text-accent"
            >
              Live demo ↗
              {isPlaceholder(links.autodmDemo) && (
                <span className="ml-1 text-[10px] uppercase tracking-wider text-muted">
                  soon
                </span>
              )}
            </a>
            <a
              href={links.autodmRepo}
              {...linkProps(links.autodmRepo)}
              className="text-muted transition-colors hover:text-fg"
            >
              Source ↗
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
