import Hero from "./components/Hero";
import WhyMe from "./components/WhyMe";
import Work from "./components/Work";
import About from "./components/About";
import Process from "./components/Process";
import Stack from "./components/Stack";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div>
      <Hero />
      <WhyMe />
      <Work />
      <About />
      <Process />
      <Stack />
      <Contact />
    </div>
  );
}
