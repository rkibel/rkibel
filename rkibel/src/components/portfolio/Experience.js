import { experiences } from "./data";
import SectionHeader from "./SectionHeader";

const accentClasses = {
  cyan: "from-cyan-300 to-blue-400 border-cyan-300/25 text-cyan-200",
  emerald: "from-emerald-300 to-cyan-300 border-emerald-300/25 text-emerald-200",
  violet: "from-violet-300 to-fuchsia-300 border-violet-300/25 text-violet-200",
};

export default function Experience() {
  return (
    <section id="experience" className="relative px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Experience" title="Experience" />
        <div className="relative">
          <div className="absolute left-4 top-2 hidden h-[calc(100%-1rem)] w-px bg-gradient-to-b from-cyan-300/70 via-emerald-300/40 to-violet-300/40 md:block" />
          <div className="space-y-5">
            {experiences.map((job) => (
              <article key={`${job.company}-${job.role}`} className="group relative grid gap-4 rounded-3xl border border-white/10 bg-white/[0.035] p-5 transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.055] md:ml-12 md:grid-cols-[0.8fr_1.2fr] md:p-6">
                <div className={`absolute -left-[3.2rem] top-8 hidden h-8 w-8 rounded-full border bg-slate-950 md:block ${accentClasses[job.accent]}`} />
                <div>
                  <div className={`mb-4 h-1.5 w-20 rounded-full bg-gradient-to-r ${accentClasses[job.accent].split(" border")[0]}`} />
                  <h3 className="text-2xl font-semibold text-white">{job.company}</h3>
                  <p className="mt-2 text-base font-medium text-slate-200">{job.role}</p>
                  <p className="mt-3 font-mono text-xs uppercase tracking-[0.2em] text-slate-500">{job.dates} / {job.location}</p>
                </div>
                <div>
                  <p className="text-base leading-7 text-slate-300">{job.summary}</p>
                  <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-400">
                    {job.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {job.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-white/10 bg-slate-950/50 px-3 py-1.5 font-mono text-xs text-slate-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
