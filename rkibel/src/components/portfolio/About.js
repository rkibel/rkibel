import SectionHeader from "./SectionHeader";

export default function About() {
  return (
    <section id="about" className="relative px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="About" title="About" />
        <div className="max-w-4xl rounded-3xl border border-white/10 bg-white/[0.035] p-6 shadow-2xl shadow-slate-950/40 backdrop-blur sm:p-8">
          <p className="text-lg leading-8 text-slate-300">
            I build computer vision and AI systems with a focus on clear engineering, practical execution, and strong communication. My work spans real-time camera tooling at Google Beam, multimodal search at ServiceNow, and projects in AR, 3D reconstruction, and perception.
          </p>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Outside of work, I enjoy chess, rock climbing, backpacking, Ultimate Frisbee, volleyball, piano, guitar, and reading.
          </p>
        </div>
      </div>
    </section>
  );
}
