import { skills } from "./data";
import SectionHeader from "./SectionHeader";

export default function Skills() {
  return (
    <section id="skills" className="relative px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Skills" title="Skills" />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {skills.map((group) => (
            <article key={group.title} className="rounded-3xl border border-white/10 bg-white/[0.035] p-5 transition hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.055]">
              <div className="mb-5">
                <h3 className="text-xl font-semibold text-white">{group.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span key={skill} className="rounded-xl border border-white/10 bg-slate-950/55 px-3 py-2 text-sm text-slate-300 transition hover:border-emerald-300/35 hover:text-emerald-100">
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
