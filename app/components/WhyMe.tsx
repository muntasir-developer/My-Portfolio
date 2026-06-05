import Reveal from "./Reveal";

const pillars = [
  {
    n: "01",
    title: "Two hires in one",
    body: "A developer and a marketer in the same person. I build the product and understand who it's for — no translation layer, no handoff.",
  },
  {
    n: "02",
    title: "Built for growth, not just spec",
    body: "I don't just close tickets. I think about conversion and retention — because shipping a feature nobody uses isn't really shipping.",
  },
  {
    n: "03",
    title: "Fast, modern, no over-engineering",
    body: "A current stack and a bias for momentum. I get a working product in front of real users quickly — exactly what early teams need.",
  },
];

export default function WhyMe() {
  return (
    <section id="why" className="scroll-mt-24 border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:px-10 sm:py-32">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.25em] text-muted">
            01 — The unfair advantage
          </p>
          <h2 className="mt-3 max-w-2xl font-serif text-4xl leading-tight tracking-tight sm:text-5xl">
            Most developers build features. I build growth.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.n} delay={0.1 * i} className="h-full">
              <div className="flex h-full flex-col rounded-2xl border border-border bg-surface p-7">
                <span className="font-mono text-sm text-accent">{p.n}</span>
                <h3 className="mt-4 font-serif text-xl text-fg">{p.title}</h3>
                <p className="mt-3 text-muted">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
