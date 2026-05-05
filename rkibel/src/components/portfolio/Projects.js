import { projects } from "./data";
import ProjectVisual from "./ProjectVisual";
import SectionHeader from "./SectionHeader";

export default function Projects() {
  return (
    <section id="projects" className="relative px-4 py-20 sm:px-6 lg:px-8">
      <div className="absolute inset-x-0 top-20 h-px bg-gradient-to-r from-transparent via-cyan-300/30 to-transparent" />
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Projects" title="Projects" />
        <div className="grid gap-5 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className={`group rounded-3xl border p-5 transition duration-300 hover:-translate-y-1 sm:p-6 ${
                project.featured
                  ? "border-cyan-300/35 bg-cyan-300/[0.06] shadow-2xl shadow-cyan-950/30 lg:col-span-2"
                  : "border-white/10 bg-white/[0.035] hover:border-white/20"
              }`}
            >
              <div className={`grid gap-6 ${project.featured ? "lg:grid-cols-[0.9fr_1.1fr]" : ""}`}>
                <ProjectVisual type={project.visual} />
                <div className="flex flex-col">
                  {project.featured ? (
                    <p className="font-mono text-xs uppercase tracking-[0.24em] text-cyan-200">{project.kicker}</p>
                  ) : null}
                  <h3 className={project.featured ? "mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl" : "text-2xl font-semibold tracking-tight text-white sm:text-3xl"}>{project.title}</h3>
                  <p className="mt-3 text-base leading-7 text-slate-300">{project.summary}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.areas.map((area) => (
                      <span key={area} className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1.5 font-mono text-xs text-cyan-100">
                        {area}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.methods.map((method) => (
                      <span key={method} className="rounded-full border border-white/10 bg-slate-950/45 px-3 py-1.5 font-mono text-xs text-slate-400">
                        {method}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
