import { education } from "./data";
import SectionHeader from "./SectionHeader";

export default function Education() {
  return (
    <section id="education" className="relative px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Education" title="Education" />
        <div className="grid gap-4">
          {education.map((item) => (
            <article key={item.degree} className="rounded-3xl border border-white/10 bg-white/[0.035] p-6">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-white">{item.degree}</h3>
                  <p className="mt-2 text-lg text-slate-300">{item.school}</p>
                </div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-slate-500">{item.dates}</p>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {item.details.map((detail) => (
                  <span key={detail} className="rounded-full border border-white/10 bg-slate-950/50 px-3 py-1.5 font-mono text-xs text-slate-300">
                    {detail}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
