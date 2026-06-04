import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 border-t border-border">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-24 sm:px-10 sm:py-32 md:grid-cols-[1fr_1.8fr] md:gap-16">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.25em] text-muted">
            02 — About
          </p>
          <h2 className="mt-3 font-serif text-4xl leading-tight tracking-tight sm:text-5xl">
            A developer who understands growth.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="max-w-prose space-y-6 text-lg leading-relaxed text-muted">
            <p className="first-letter:float-left first-letter:mr-3 first-letter:font-serif first-letter:text-6xl first-letter:font-medium first-letter:leading-[0.8] first-letter:text-accent sm:first-letter:text-7xl">
              I&apos;m a full-stack developer in my third semester of a BCA at
              LPU Online. I build with React, Next.js, and Tailwind on the front
              end, and Supabase or MongoDB behind it — comfortable with
              authentication flows and wiring up third-party APIs.
            </p>
            <p>
              What sets the work apart is a marketing instinct. I&apos;m
              digital-marketing certified, so I don&apos;t just ship features — I
              think about who they&apos;re for and how they grow. That blend is
              why I built{" "}
              <span className="text-fg">AutoDM</span>: a developer&apos;s build
              with a marketer&apos;s intent.
            </p>
            <p>
              These days I build products for founders and teams —{" "}
              <span className="text-fg">SaaS platforms, web apps, and websites</span>{" "}
              — end to end, from auth and APIs to the polish that makes people
              stay. Available for new projects.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
