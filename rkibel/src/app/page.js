import ContactFooter from "@/components/portfolio/ContactFooter";
import Education from "@/components/portfolio/Education";
import Experience from "@/components/portfolio/Experience";
import Hero from "@/components/portfolio/Hero";
import NavBar from "@/components/portfolio/NavBar";
import Projects from "@/components/portfolio/Projects";
import Skills from "@/components/portfolio/Skills";

export default function Home() {
  return (
      <main className="min-h-screen overflow-hidden bg-[#030712] text-slate-100">
      <NavBar />
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <ContactFooter />
    </main>
  );
}
