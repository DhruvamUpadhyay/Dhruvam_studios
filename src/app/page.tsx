import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 md:px-16 relative overflow-hidden bg-transparent">
        <div className="max-w-5xl text-center relative z-10">
          <h1 className="hero-element text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-none mb-8 gradient-text">
            Architecting Intelligent Digital Ecosystems.
          </h1>

          <div className="hero-element text-lg md:text-2xl font-light tracking-wide mb-4 max-w-3xl mx-auto space-y-2 text-[#94A3B8]">
            <p>
              I am Dhruvam Upadhyay. I engineer secure, high-performance web infrastructures and integrate Artificial Intelligence into business logic.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center mt-8 gap-4">
            <Link
              href="/services"
              className="hero-element btn-tech-primary inline-flex items-center justify-center px-10 py-4 text-sm font-bold tracking-widest uppercase rounded min-w-[200px]"
            >
              View Intelligence
            </Link>
            <Link
              href="/contact"
              className="hero-element btn-tech-primary inline-flex items-center justify-center px-10 py-4 text-sm font-bold tracking-widest uppercase rounded min-w-[200px]"
            >
              Deploy a Project
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-16 bg-transparent relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-4">
              <span className="text-white">Tech </span>
              <span className="gradient-text">Stack</span>
            </h2>
            <p className="text-base md:text-lg text-[#64748B]">
              Tools and technologies I use to create exceptional solutions
            </p>
          </div>

          {/* Proficiency Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Python */}
            <div className="proficiency-card p-6 bg-[#0F172A] border border-slate-400/10 rounded">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center bg-[#3776AB] rounded">
                  <span className="text-white font-bold text-sm">Py</span>
                </div>
                <span className="font-bold text-lg text-white">Python</span>
              </div>
            </div>

            {/* React */}
            <div className="proficiency-card p-6 bg-[#0F172A] border border-slate-400/10 rounded">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center bg-[#61DAFB] rounded">
                  <span className="text-black font-bold text-sm">Re</span>
                </div>
                <span className="font-bold text-lg text-white">React</span>
              </div>
            </div>

            {/* Next.js */}
            <div className="proficiency-card p-6 bg-[#0F172A] border border-slate-400/10 rounded">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center bg-black border border-white/20 rounded">
                  <span className="text-white font-bold text-sm">N</span>
                </div>
                <span className="font-bold text-lg text-white">Next.js</span>
              </div>
            </div>

            {/* TensorFlow */}
            <div className="proficiency-card p-6 bg-[#0F172A] border border-slate-400/10 rounded">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center bg-[#FF6F00] rounded">
                  <span className="text-white font-bold text-sm">TF</span>
                </div>
                <span className="font-bold text-lg text-white">TensorFlow</span>
              </div>
            </div>

            {/* Docker */}
            <div className="proficiency-card p-6 bg-[#0F172A] border border-slate-400/10 rounded">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center bg-[#2496ED] rounded">
                  <span className="text-white font-bold text-sm">Do</span>
                </div>
                <span className="font-bold text-lg text-white">Docker</span>
              </div>
            </div>

            {/* AWS */}
            <div className="proficiency-card p-6 bg-[#0F172A] border border-slate-400/10 rounded">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center bg-[#FF9900] rounded">
                  <span className="text-white font-bold text-sm">AWS</span>
                </div>
                <span className="font-bold text-lg text-white">AWS</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
