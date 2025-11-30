import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Services from "./components/Services";
import About from "./components/About";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Services />
      <About />
      <Projects />         {/* ← new section added */}
    </>
  );
}
