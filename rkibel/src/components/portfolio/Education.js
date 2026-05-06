import { education } from "./data";
import SectionHeader from "./SectionHeader";

export default function Education() {
  return (
    <section id="education" className="relative px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Education" title="Education" />
        <div className="max-w-5xl divide-y divide-white/10 border-y border-white/10">
          {education.map((item) => (
            <article key={item.degree} className="grid gap-3 py-4 transition hover:bg-white/[0.025] md:grid-cols-[0.5fr_1fr]">
              <div className="flex flex-col gap-2">
                <div>
                  <h3 className="text-base font-semibold text-white">{item.degree}</h3>
                  <p className="mt-1 text-sm text-slate-300">{item.school}</p>
                </div>
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-slate-500">{item.dates}</p>
              </div>
              <div className="flex flex-wrap content-center gap-1.5">
                {item.details.map((detail) => (
                  <span key={detail} className="rounded-full border border-white/10 bg-slate-950/50 px-2.5 py-1 font-mono text-[0.68rem] text-slate-300">
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
