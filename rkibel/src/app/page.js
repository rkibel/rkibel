'use client';
import Image from "next/image";
import ContactForm from "../components/ContactForm";

const scrollToElement = (elementId) => {
  document.getElementById(elementId)?.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
};

export default function Home() {
  return (
    <div className="min-h-screen bg-primary text-white p-8">
      <div className="max-w-full mx-auto relative pl-[325px]">
        {/* Navigation */}
        <nav className="fixed top-[calc(50%-75px)] left-32 -translate-y-1/2">
          <ul className="space-y-6 text-muted">
            <li>
              <button
                onClick={() => scrollToElement('home')}
                className="font-mono hover:text-accent transition-colors cursor-pointer"
              >
                /home
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToElement('about')}
                className="font-mono hover:text-accent transition-colors cursor-pointer"
              >
                /about
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToElement('experience')}
                className="font-mono hover:text-accent transition-colors cursor-pointer"
              >
                /experience
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToElement('projects')}
                className="font-mono hover:text-accent transition-colors cursor-pointer"
              >
                /projects
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToElement('publications')}
                className="font-mono hover:text-accent transition-colors cursor-pointer"
              >
                /publications
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToElement('contact')}
                className="font-mono hover:text-accent transition-colors cursor-pointer"
              >
                /contact
              </button>
            </li>
          </ul>
        </nav>

        {/* Social Logos with trailing line */}
        <ul className="fixed left-32 top-[calc(50%+200px)] flex flex-col items-center">
          <li className="mb-4">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-accent transition-colors"
            >
              <span className="sr-only">Resume</span>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14 3v4a1 1 0 0 0 1 1h4M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2zM9 9h1M9 13h6M9 17h6"
                />
              </svg>
            </a>
          </li>
          <li className="mb-4">
            <a
              href="mailto:ron.kibel1@gmail.com"
              className="text-muted hover:text-accent transition-colors"
            >
              <span className="sr-only">Email</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </li>
          <li className="mb-4">
            <a
              href="https://github.com/rkibel"
              className="text-muted hover:text-accent transition-colors"
            >
              <span className="sr-only">GitHub</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
          </li>
          <li className="mb-4">
            <a
              href="https://www.linkedin.com/in/rkibel/"
              className="text-muted hover:text-accent transition-colors"
            >
              <span className="sr-only">LinkedIn</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
              </svg>
            </a>
          </li>
          <li className="h-24 w-[2px] bg-muted opacity-40" />
        </ul>

        {/* Main content */}
        <main
          id="home"
          className="h-screen flex items-center justify-start pl-40 pr-40 gap-x-32"
        >
          {/* Text content */}
          <div className="space-y-4 max-w-xl">
            <h1 className="text-accent font-mono text-6xl font-bold">hi, i'm ron</h1>
            <h2 className="text-secondary text-4xl py-8 font-mono">
              I build AI solutions.
            </h2>
            <button
              onClick={() => scrollToElement('contact')}
              className="px-6 py-3 border-2 border-accent text-accent hover:bg-accent hover:text-primary transition-colors font-mono"
            >
              Contact Me
            </button>
          </div>

          {/* Profile image container */}
          <div className="relative w-[400px] h-[500px]">
            <Image
              src="/profile2.jpg"
              alt="Ron Kibel"
              fill
              className="rounded-lg object-cover object-top"
              priority
            />
          </div>
        </main>

        {/* About Section */}
        <section id="about" className="min-h-screen flex items-center px-20">
          <div className="max-w-3xl">
            <h2 className="text-secondary text-4xl font-bold mb-8">About Me</h2>
            <div className="text-muted text-xl space-y-4">
              <p>
                I'm pursuing my MS in Computer Science at UC Santa Barbara, focusing on AI/ML applications.
                I'm especially passionate about Computer Vision in robotics and am currently researching 3D Reconstruction
                and Depth Estimation at the UCSB Four Eyes Lab. Over the past three years, I've had the opportunity to work at ServiceNow as a software engineer,
                most recently enhancing their search engine with multimodal features.
              </p>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="min-h-screen flex items-center px-20">
          <div className="max-w-3xl">
            <h2 className="text-secondary text-4xl font-bold mb-8">Experience</h2>
            <div className="text-muted text-xl space-y-8">
              <div className="space-y-2">
                <h3 className="text-2xl text-secondary">ServiceNow</h3>
                <p className="text-accent">Software Engineering Intern - AI Search • May 2024 - Sep 2024</p>
                <ul className="list-disc pl-4 space-y-2">
                  <li>Developed and integrated image search features for ServiceNow's AI Search platform</li>
                  <li>Enhanced search capabilities using embeddings, image captioning, and text extraction (OCR)</li>
                  <li>Implemented hybrid indexing strategy with OpenCV, OpenAI CLIP, and Apache Tika</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl text-secondary">ServiceNow</h3>
                <p className="text-accent">Software Engineering Intern - Developer Productivity • May 2022 - Sep 2023</p>
                <ul className="list-disc pl-4 space-y-2">
                  <li>Created end-to-end automation for code scan analyzers, reducing manual intervention by 85%</li>
                  <li>Developed tools for project contributions and internal showcases</li>
                  <li>Worked with client/server scripting and CI/CD pipelines using Jenkins</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl text-secondary">Centrify Corporation</h3>
                <p className="text-accent">Test Automation Engineering Intern • Jan 2019 - Sep 2019</p>
                <ul className="list-disc pl-4 space-y-2">
                  <li>Automated complex API user provisioning systems for IdP/SP-initiated authentication</li>
                  <li>Published documentation for authentication processes with step-by-step instructions</li>
                  <li>Edited 500+ logos ensuring seamless integration with company portal design</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="min-h-screen flex items-center px-20">
          <div className="max-w-3xl">
            <h2 className="text-secondary text-4xl font-bold mb-8">Projects</h2>
            <div className="text-muted text-xl space-y-8">
              <div className="space-y-2">
                <h3 className="text-2xl text-secondary">Decentralized Multi-Robot Mapping and Sensor Fusion</h3>
                <p className="text-accent">UCSB Four Eyes Lab • Aug 2024 - Present</p>
                <p>
                  Researching robust multi-view stereo (MVS) schemes for multi-robot applications,
                  focusing on noise modeling and communication optimization between robots.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl text-secondary">Performance-Oriented Fluid Simulation</h3>
                <p className="text-accent">UC3M Computer Architecture Lab • Aug 2023 - Dec 2023</p>
                <p>
                  Developed high-performance fluid simulation in C++ using CMake, optimizing particle
                  collisions for realistic behavior in confined spaces.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl text-secondary">Markov-Style State Machines</h3>
                <p className="text-accent">UCSB Math Directed Program • Dec 2022 - Jan 2023</p>
                <p>
                  Researched Markovian Models for partially observing agents, presenting findings
                  in poster sessions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Publications Section */}
        <section id="publications" className="min-h-screen flex items-center px-20">
          <div className="max-w-3xl">
            <h2 className="text-secondary text-4xl font-bold mb-8">Publications</h2>
            <div className="text-muted text-xl space-y-4">
              <p>
                Publications coming soon. Currently working on research in Computer Vision and 3D Reconstruction
                at the UCSB Four Eyes Lab.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-screen flex items-center px-20">
          <div className="max-w-3xl w-full">
            <h2 className="text-secondary text-4xl font-bold mb-8">Get In Touch</h2>
            <div className="text-muted text-xl space-y-6">
              <p>
                I'm currently looking for new opportunities in AI/ML and Computer Vision.
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
              <ContactForm />
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
