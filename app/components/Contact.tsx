import Reveal from "./Reveal";
import MagneticButton from "./MagneticButton";
import { links, linkProps } from "../data/site";

const socials = [
  { label: "GitHub", href: links.github },
  { label: "LinkedIn", href: links.linkedin },
  { label: "X", href: links.x },
  { label: "Email", href: links.email },
];

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 border-t border-border">
      <div className="mx-auto max-w-4xl px-6 py-24 text-center sm:px-10 sm:py-40">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.25em] text-muted">
            04 — Contact
          </p>
          <h2 className="mt-4 font-serif text-5xl leading-[1.05] tracking-tight sm:text-7xl">
            Let&apos;s build something.
          </h2>
          <p className="mx-auto mt-6 max-w-md text-lg text-muted">
            Available for new projects — SaaS platforms, web apps, websites, and
            more.
          </p>

          <div className="mt-10 flex justify-center">
            <MagneticButton href={links.email} variant="solid">
              Get in touch
            </MagneticButton>
          </div>

          <ul className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-muted">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  {...linkProps(s.href)}
                  className="transition-colors hover:text-accent"
                >
                  {s.label} ↗
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <footer className="border-t border-border py-8 text-center text-xs text-muted">
        © {new Date().getFullYear()} Md Muntasir · Built with Next.js
      </footer>
    </section>
  );
}
