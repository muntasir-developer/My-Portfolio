import Reveal from "./Reveal";
import ProjectCard from "./ProjectCard";

export default function Work() {
  return (
    <section id="work" className="scroll-mt-24 border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:px-10 sm:py-32">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.25em] text-muted">
            01 — Selected Work
          </p>
          <h2 className="mt-3 font-serif text-4xl tracking-tight sm:text-5xl">
            Things I&apos;ve built.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12">
            <ProjectCard />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
