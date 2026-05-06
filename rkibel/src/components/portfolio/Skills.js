import { skills } from "./data";
import SectionHeader from "./SectionHeader";

export default function Skills() {
  return (
    <section id="skills" className="relative px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Skills" title="Skills" />
        <div className="max-w-5xl divide-y divide-white/10 border-y border-white/10">
          {skills.map((group) => (
            <article key={group.title} className="grid gap-3 py-4 transition hover:bg-white/[0.025] md:grid-cols-[0.32fr_1fr]">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-white">{group.title}</h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((skill) => (
                  <span key={skill} className="rounded-full border border-white/10 bg-slate-950/45 px-2.5 py-1 text-xs text-slate-300 transition hover:border-emerald-300/35 hover:text-emerald-100">
                    {skill}
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
