import { experiences } from "./data";
import SectionHeader from "./SectionHeader";

const accentClasses = {
  cyan: "bg-cyan-300",
  emerald: "bg-emerald-300",
  violet: "bg-violet-300",
};

export default function Experience() {
  return (
    <section id="experience" className="relative px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Experience" title="Experience" />
        <div className="relative max-w-5xl pl-7">
          <div className="absolute left-[0.35rem] top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-cyan-300/70 via-emerald-300/45 to-violet-300/45" />
          <div className="divide-y divide-white/10 border-y border-white/10">
            {experiences.map((job) => (
              <article key={`${job.company}-${job.role}`} className="relative grid gap-3 py-5 transition hover:bg-white/[0.025] md:grid-cols-[0.75fr_1.25fr]">
                <span className={`absolute -left-[1.9rem] top-7 h-3 w-3 rounded-full ring-4 ring-slate-950 ${accentClasses[job.accent]}`} />
                <div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{job.company}</h3>
                    <p className="mt-1 text-sm font-medium text-slate-200">{job.role}</p>
                    <p className="mt-2 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-slate-500">{job.dates}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <p className="text-sm leading-6 text-slate-300">{job.summary}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
