import React from "react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Dhruvam Studios",
  description:
    "Explore the projects, skills, and vision of Dhruvam Upadhyay — Full-Stack Architect & AI Engineer.",
};

export default function PortfolioPage() {
  return (
    <>
      {/* ── Hero / Intro ── */}
      <section className="min-h-[70vh] flex items-center justify-center px-6 md:px-16 pt-28 pb-16 relative bg-transparent">
        <div className="max-w-5xl text-center relative z-10">
          <p className="text-sm font-bold tracking-[0.3em] uppercase text-blue-400 mb-4">
            Portfolio
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-none mb-6 gradient-text">
            Work. Craft. Impact.
          </h1>
          <p className="text-lg md:text-xl font-light text-[#94A3B8] max-w-3xl mx-auto leading-relaxed">
            A curated look at the systems I&apos;ve engineered — intelligent
            AI assistants, full-stack architectures, and scalable solutions.
          </p>
        </div>
      </section>

      {/* ── About Me (compact) ── */}
      <section className="py-20 px-6 md:px-16 relative bg-transparent z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="profile-image-box relative w-full max-w-sm mx-auto aspect-[3/4] md:aspect-[4/5] rounded-lg overflow-hidden shadow-[0_0_40px_rgba(59,130,246,0.3)] border-2 border-blue-500/50">
            <div className="absolute top-0 left-0 w-full h-full border-4 border-blue-500/20 z-20 pointer-events-none"></div>
            <div className="absolute top-2 left-2 w-[calc(100%-16px)] h-[calc(100%-16px)] border border-blue-400/30 z-20 pointer-events-none"></div>
            <img
              src="/whatsapp-profile.jpg"
              alt="Dhruvam Upadhyay"
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-transparent opacity-60"></div>
          </div>

          {/* Text */}
          <div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6">
              <span className="text-white">About&nbsp;</span>
              <span className="gradient-accent">Me</span>
            </h2>
            <div className="space-y-5 text-base md:text-lg font-light leading-relaxed text-[#94A3B8]">
              <p>
                I am <span className="text-white font-medium">Dhruvam Upadhyay</span>. 
                Currently pursuing Bachelor of Computer Applications in Artificial
                Intelligence at Reva University, Bangalore.
              </p>
              <p className="text-white font-medium">
                Full-Stack Architect & AI Engineer who values results over rhetoric.
              </p>
              <p>
                I specialize in building high-performance systems — from autonomous
                AI agents to enterprise-grade web applications. I write code to
                create leverage for your business.
              </p>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center p-4 rounded-lg bg-slate-900/50 border border-slate-700/50">
                <div className="text-2xl font-black gradient-accent">2+</div>
                <div className="text-xs text-slate-500 mt-1 tracking-wider uppercase">Projects</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-slate-900/50 border border-slate-700/50">
                <div className="text-2xl font-black gradient-accent">6+</div>
                <div className="text-xs text-slate-500 mt-1 tracking-wider uppercase">Technologies</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-slate-900/50 border border-slate-700/50">
                <div className="text-2xl font-black gradient-accent">AI</div>
                <div className="text-xs text-slate-500 mt-1 tracking-wider uppercase">Focused</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <div className="h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
      </div>

      {/* ── Tech Stack ── */}
      <section className="py-20 px-6 md:px-16 bg-transparent relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-3">
              <span className="text-white">Tech&nbsp;</span>
              <span className="gradient-text">Arsenal</span>
            </h2>
            <p className="text-sm md:text-base text-[#64748B]">
              The tools powering every build
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { label: "Python", abbr: "Py", bg: "#3776AB" },
              { label: "React", abbr: "Re", bg: "#61DAFB", dark: true },
              { label: "Next.js", abbr: "N", bg: "#000000", border: true },
              { label: "TensorFlow", abbr: "TF", bg: "#FF6F00" },
              { label: "Docker", abbr: "Do", bg: "#2496ED" },
              { label: "AWS", abbr: "AWS", bg: "#FF9900" },
            ].map((t) => (
              <div
                key={t.label}
                className="proficiency-card group flex flex-col items-center gap-3 p-5 bg-[#0F172A] border border-slate-400/10 rounded-lg hover:border-blue-500/40 transition-all"
              >
                <div
                  className="w-12 h-12 flex items-center justify-center rounded-lg"
                  style={{
                    backgroundColor: t.bg,
                    border: t.border ? "1px solid rgba(255,255,255,0.2)" : "none",
                  }}
                >
                  <span
                    className={`font-bold text-sm ${
                      t.dark ? "text-black" : "text-white"
                    }`}
                  >
                    {t.abbr}
                  </span>
                </div>
                <span className="text-sm font-semibold text-white group-hover:text-blue-300 transition-colors">
                  {t.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <div className="h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
      </div>

      {/* ── Projects ── */}
      <section id="projects" className="py-24 px-6 md:px-12 relative overflow-hidden bg-transparent z-10">
        <div className="max-w-7xl mx-auto mb-16 text-center">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 gradient-text">
            PROJECTS
          </h2>
          <p className="text-lg md:text-xl font-light text-[#94A3B8]">
            Built from scratch. Designed for scale.
          </p>
        </div>

        {/* ─── PROJECT 1: DRAVION ─── */}
        <div className="mb-8">
          <div className="mb-10 text-center">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-[1px] bg-gradient-to-r from-transparent to-white/40 flex-grow"></div>
              <h3 className="text-3xl font-black tracking-widest uppercase gradient-text">
                DRAVION
              </h3>
              <div className="h-[1px] bg-gradient-to-l from-transparent to-white/40 flex-grow"></div>
            </div>
            <p className="text-base md:text-lg text-slate-300 max-w-3xl mx-auto font-light leading-relaxed">
              A reasoning-first{" "}
              <span className="text-white font-medium">personal AI assistant</span>{" "}
              built for autonomous complex task execution and intelligent
              decision-making.
            </p>
            {/* Tags */}
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              {["AI Agent", "Python", "React", "LLM", "Autonomous"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-bold tracking-wider text-blue-300 bg-blue-900/30 rounded-full border border-blue-800/50"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Monitor Frame */}
          <div className="monitor-frame mx-auto max-w-6xl relative group">
            <div className="scanline"></div>
            <div className="film-strip flex overflow-x-auto snap-x snap-mandatory scroll-smooth hide-scrollbar">
              {[1, 2, 3, 4].map((n) => (
                <div
                  key={n}
                  className="snap-center shrink-0 w-full h-full flex items-center justify-center bg-black"
                >
                  <img
                    src={`/Dravion_images/dravion_${n}.png`}
                    className="max-w-full max-h-[80vh] object-contain"
                    alt={`Dravion Interface ${n}`}
                  />
                </div>
              ))}
            </div>

            {/* Overlay badge */}
            <div className="absolute bottom-6 left-6 z-20 pointer-events-none">
              <div className="bg-black/80 backdrop-blur-md border border-white/10 px-4 py-2 rounded text-xs font-mono text-blue-300">
                SYSTEM.STATUS: ONLINE{" "}
                <span className="animate-pulse">●</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 px-6 md:px-16 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-6 gradient-text">
            Let&apos;s Build Something Great
          </h2>
          <p className="text-lg text-[#94A3B8] mb-8">
            Have a project in mind? I architect solutions that perform.
          </p>
          <Link
            href="/#contact"
            className="btn-tech-primary inline-flex items-center justify-center px-10 py-4 text-sm font-bold tracking-widest uppercase rounded"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </>
  );
}
