import { projects } from "./data";
import ProjectVisual from "./ProjectVisual";
import SectionHeader from "./SectionHeader";

export default function Projects() {
  const cardClassName = (project) => `group rounded-2xl border p-4 transition duration-300 sm:p-5 ${
    project.href ? "hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300" : ""
  } ${
    project.featured
      ? "border-cyan-300/35 bg-cyan-300/[0.06] shadow-2xl shadow-cyan-950/30 lg:col-span-2"
      : "border-white/10 bg-white/[0.035] hover:border-white/20"
  }`;

  const renderProjectContent = (project) => (
    <div className={`grid gap-4 ${project.featured ? "lg:grid-cols-[0.75fr_1.25fr]" : ""}`}>
      <ProjectVisual type={project.visual} />
      <div className="flex flex-col">
        {project.featured ? (
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-cyan-200">{project.kicker}</p>
        ) : null}
        <div className="flex items-start justify-between gap-3">
          <h3 className={project.featured ? "mt-2 text-xl font-semibold tracking-tight text-white sm:text-2xl" : "text-xl font-semibold tracking-tight text-white sm:text-2xl"}>{project.title}</h3>
          {project.href ? (
            <span className="mt-1 shrink-0 rounded-full border border-white/10 px-2 py-1 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-slate-400 transition group-hover:border-cyan-300/35 group-hover:text-cyan-100">
              PDF
            </span>
          ) : null}
        </div>
        <p className="mt-2 text-sm leading-6 text-slate-300">{project.summary}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.areas.map((area) => (
            <span key={area} className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-2.5 py-1 font-mono text-[0.68rem] text-cyan-100">
              {area}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="relative px-4 py-12 sm:px-6 lg:px-8">
      <div className="absolute inset-x-0 top-12 h-px bg-gradient-to-r from-transparent via-cyan-300/30 to-transparent" />
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Projects" title="Projects" />
        <div className="grid gap-4 lg:grid-cols-2">
          {projects.map((project) => (
            project.href ? (
              <a
                key={project.title}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cardClassName(project)}
                aria-label={`Open ${project.title} PDF`}
              >
                {renderProjectContent(project)}
              </a>
            ) : (
              <article key={project.title} className={cardClassName(project)}>
                {renderProjectContent(project)}
              </article>
            )
          ))}
        </div>
      </div>
    </section>
  );
}
