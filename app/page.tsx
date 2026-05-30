export default function Home() {
  return (
    <div id="top">
      <section className="mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center px-6 pt-32 pb-24 sm:px-10">
        <p className="mb-6 text-xs uppercase tracking-[0.25em] text-muted">
          Full-stack developer · Marketing mind
        </p>
        <h1 className="font-serif text-5xl leading-[1.05] tracking-tight sm:text-7xl md:text-8xl">
          Md Muntasir
        </h1>
        <p className="mt-8 max-w-xl text-lg text-muted sm:text-xl">
          I build modern web experiences with a marketing mind.
        </p>
      </section>

      <section
        id="work"
        className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24 sm:px-10"
      >
        <h2 className="font-serif text-3xl tracking-tight sm:text-4xl">
          Selected Work
        </h2>
        <p className="mt-4 text-muted">Coming next.</p>
      </section>

      <section
        id="about"
        className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24 sm:px-10"
      >
        <h2 className="font-serif text-3xl tracking-tight sm:text-4xl">About</h2>
        <p className="mt-4 text-muted">Coming next.</p>
      </section>

      <section
        id="stack"
        className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24 sm:px-10"
      >
        <h2 className="font-serif text-3xl tracking-tight sm:text-4xl">Stack</h2>
        <p className="mt-4 text-muted">Coming next.</p>
      </section>

      <section
        id="contact"
        className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24 sm:px-10"
      >
        <h2 className="font-serif text-3xl tracking-tight sm:text-4xl">
          Contact
        </h2>
        <p className="mt-4 text-muted">Coming next.</p>
      </section>
    </div>
  );
}
