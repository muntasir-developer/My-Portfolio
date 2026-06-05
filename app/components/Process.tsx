import Reveal from "./Reveal";

const steps = [
  {
    n: "01",
    label: "Discovery",
    body: "We define who it's for and what success means — before a line of code.",
  },
  {
    n: "02",
    label: "Build",
    body: "Modern, maintainable code. React, Next.js, Supabase or Mongo. Fast, not fragile.",
  },
  {
    n: "03",
    label: "Launch",
    body: "Deployed live, mobile-first, genuinely fast. (This site is a sample.)",
  },
  {
    n: "04",
    label: "Grow",
    body: "I look past launch — analytics and conversion, the layer most devs skip.",
  },
];

export default function Process() {
  return (
    <section id="process" className="scroll-mt-24 border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:px-10 sm:py-32">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.25em] text-muted">
            04 — How I work
          </p>
          <h2 className="mt-3 font-serif text-4xl tracking-tight sm:text-5xl">
            From idea to growth, end to end.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={0.08 * i} className="h-full">
              <div className="flex h-full flex-col rounded-2xl border border-border bg-surface p-7">
                <span className="font-mono text-sm text-accent">{s.n}</span>
                <h3 className="mt-4 font-serif text-2xl text-fg">{s.label}</h3>
                <p className="mt-3 text-sm text-muted">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
