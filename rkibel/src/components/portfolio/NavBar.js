"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { navItems, socialLinks } from "./data";

function scrollToHash(hash) {
  document.querySelector(hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function SocialIcon({ label }) {
  if (label === "Resume") {
    return (
      <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14 3v4a1 1 0 0 0 1 1h4" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 13h6M9 17h4" />
      </svg>
    );
  }

  if (label === "Email") {
    return (
      <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16v12H4z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="m4 8 8 5 8-5" />
      </svg>
    );
  }

  if (label === "GitHub") {
    return (
      <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
        <path fillRule="evenodd" d="M12 2C6.48 2 2 6.58 2 12.25c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.49 0-.24-.01-.89-.01-1.74-2.78.62-3.37-1.37-3.37-1.37-.45-1.19-1.11-1.51-1.11-1.51-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.57 2.34 1.11 2.91.85.09-.66.35-1.11.64-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.04 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.35 9.35 0 0 1 12 6.94c.85 0 1.7.12 2.5.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.71 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.81 0 .27.18.59.69.49A10.14 10.14 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" clipRule="evenodd" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  );
}

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState("dark");
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme");
    const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
    setTheme(savedTheme || (prefersLight ? "light" : "dark"));
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("light", theme === "light");
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    let frameId;

    const updateActiveSection = () => {
      const scrollAnchor = window.innerHeight * 0.36;
      let currentSection = "#home";

      navItems.forEach((item) => {
        const element = document.querySelector(item.href);
        if (!element) return;

        const top = element.getBoundingClientRect().top;
        if (top <= scrollAnchor) {
          currentSection = item.href;
        }
      });

      setActiveSection(currentSection);
    };

    const handleScroll = () => {
      if (frameId) cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      if (frameId) cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const handleNavClick = (href) => {
    setActiveSection(href);
    scrollToHash(href);
    setMenuOpen(false);
  };

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <nav className="relative mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <a href="#home" onClick={(event) => { event.preventDefault(); handleNavClick("#home"); }} className="flex min-w-0 items-center gap-3 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300">
            <span className="site-logo-mark grid h-10 w-10 shrink-0 place-items-center">
              <Image src="/logo.png" alt="RK logo" width={42} height={42} className="site-logo h-9 w-9 object-contain" priority />
            </span>
            <span className="hidden truncate font-mono text-xs font-semibold tracking-[0.18em] text-white sm:inline lg:text-sm lg:tracking-[0.22em]">RON KIBEL</span>
          </a>
          <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1 min-[980px]:flex">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`nav-section-link rounded-full px-2.5 py-2 text-xs transition focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 xl:px-3 2xl:px-4 2xl:text-sm ${
                  activeSection === item.href
                    ? "nav-section-active bg-cyan-300/15 text-cyan-100 ring-1 ring-cyan-300/25"
                    : "text-slate-300 hover:bg-cyan-300/10 hover:text-cyan-100 active:bg-cyan-300/20"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2">
            <div className="flex items-center gap-1">
              {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") || link.href.endsWith(".pdf") ? "_blank" : undefined}
                rel={link.href.startsWith("http") || link.href.endsWith(".pdf") ? "noopener noreferrer" : undefined}
                aria-label={link.label}
                title={link.label}
                className="nav-icon-button grid h-9 w-9 place-items-center rounded-full transition focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 sm:h-10 sm:w-10"
              >
                <SocialIcon label={link.label} />
              </a>
              ))}
            </div>
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              className="nav-icon-button grid h-10 w-10 place-items-center rounded-full transition focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
            >
              {theme === "dark" ? (
                <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
                </svg>
              ) : (
                <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
                </svg>
              )}
            </button>
            <button
              type="button"
              onClick={() => setMenuOpen((isOpen) => !isOpen)}
              aria-expanded={menuOpen}
              aria-label="Toggle navigation menu"
              className={`nav-icon-button grid h-10 w-10 place-items-center rounded-full transition focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 min-[980px]:hidden ${
                menuOpen ? "bg-cyan-300/15 text-cyan-100 ring-1 ring-cyan-300/25" : ""
              }`}
            >
              <span className="relative h-4 w-5">
                <span className={`absolute left-0 h-px w-5 bg-current transition ${menuOpen ? "top-2 rotate-45" : "top-0"}`} />
                <span className={`absolute left-0 top-2 h-px w-5 bg-current transition ${menuOpen ? "opacity-0" : "opacity-100"}`} />
                <span className={`absolute left-0 h-px w-5 bg-current transition ${menuOpen ? "top-2 -rotate-45" : "top-4"}`} />
              </span>
            </button>
          </div>
        </div>
        <div className={`absolute right-4 top-[calc(100%+0.5rem)] w-fit min-w-[10rem] transition duration-200 sm:right-6 lg:right-8 min-[980px]:hidden ${
          menuOpen ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-2 opacity-0"
        }`}>
          <div className="rounded-2xl border border-white/10 bg-slate-950/95 p-2 shadow-2xl shadow-slate-950/40 backdrop-blur-xl">
            <div className="divide-y divide-white/10">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`nav-section-link block w-full rounded-xl px-4 py-3 text-left text-sm transition focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 ${
                    activeSection === item.href
                      ? "nav-section-active bg-cyan-300/15 text-cyan-100"
                      : "text-slate-300 hover:bg-cyan-300/10 hover:text-cyan-100 active:bg-cyan-300/20"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
