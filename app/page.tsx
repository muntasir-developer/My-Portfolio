import Hero from "./components/Hero";

export default function Home() {
  return (
    <div>
      <Hero />

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
