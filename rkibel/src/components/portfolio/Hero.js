"use client";

import Image from "next/image";
import profilePhoto from "../../../public/profile.jpg";
import CVVisualBackground from "./CVVisualBackground";

function scrollTo(id) {
  document.querySelector(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Hero() {
  return (
    <section id="home" className="relative isolate min-h-[100svh] overflow-hidden pt-24">
      <div className="hero-gradient absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.18),transparent_32%),radial-gradient(circle_at_76%_16%,rgba(168,85,247,0.18),transparent_28%),linear-gradient(135deg,#020617_0%,#08111f_55%,#020617_100%)]" />
      <CVVisualBackground />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#030712] to-transparent" />

      <div className="relative mx-auto grid min-h-[calc(100svh-6rem)] max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Hi, I&apos;m Ron.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            I build spatial AI systems.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button onClick={() => scrollTo("#projects")} className="rounded-full bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-100">
              View Projects
            </button>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/60 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300">
              Resume
            </a>
            <button onClick={() => scrollTo("#contact")} className="rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-emerald-300/60 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300">
              Contact
            </button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-lg">
          <div className="absolute -inset-4 rounded-[2rem] border border-cyan-300/20 bg-cyan-300/5 blur-xl" />
          <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950/60 p-3 shadow-2xl shadow-cyan-950/30 backdrop-blur">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1rem]">
              <Image
                src={profilePhoto}
                alt="Ron Kibel"
                fill
                sizes="(max-width: 640px) 92vw, (max-width: 1024px) 50vw, 34vw"
                className="object-cover object-top saturate-[0.96]"
                priority
                placeholder="blur"
                quality={86}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute left-5 top-5 h-20 w-28 border border-cyan-300/70" />
              <div className="absolute bottom-8 right-6 h-24 w-32 border border-emerald-300/70" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
