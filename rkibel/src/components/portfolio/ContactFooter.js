import ContactForm from "@/components/ContactForm";
import SectionHeader from "./SectionHeader";

export default function ContactFooter() {
  return (
    <footer id="contact" className="relative px-4 pb-8 pt-12 sm:px-6 lg:px-8">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-300/30 to-transparent" />
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Contact" title="Contact" />
        <div className="mx-auto max-w-3xl">
          <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">
            <ContactForm />
          </div>
        </div>
        <div className="mt-8 border-t border-white/10 pt-5">
          <div className="flex flex-col gap-3 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <p>&copy; 2026 Ron Kibel. All rights reserved.</p>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              <a href="#home" className="transition hover:text-cyan-200">Back to top</a>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="transition hover:text-cyan-200">Resume</a>
              <a href="mailto:ron.kibel1@gmail.com" className="transition hover:text-cyan-200">Email</a>
              <a href="https://github.com/rkibel" target="_blank" rel="noopener noreferrer" className="transition hover:text-cyan-200">GitHub</a>
              <a href="https://www.linkedin.com/in/rkibel/" target="_blank" rel="noopener noreferrer" className="transition hover:text-cyan-200">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
