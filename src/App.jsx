import Header from "./components/Header";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Extras from "./pages/Extras";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Skills from "./pages/Skills";

function App() {
  return (
    <div className="min-h-dvh w-100dvw flex flex-col">
      <main className="flex-1 scroll-smooth">
        <section id="hero" className="h-[100dvh]">
          <Hero />
        </section>
        <section id="about" className="h-[100dvh]">
          <About />
        </section>
        <section id="projects" className="h-[100dvh]">
          <Projects />
        </section>
        <section id="skills" className="h-[100dvh]">
          <Skills />
        </section>
        <section id="resume" className="h-[100dvh]">
          <Resume />
        </section>
        <section id="extras" className="h-[100dvh]">
          <Extras />
        </section>
        <section id="contact" className="h-[100dvh]">
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;
