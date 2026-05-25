import React from "react";
import Link from "next/link";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";

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
              href="/portfolio"
              className="hero-element btn-tech-primary inline-flex items-center justify-center px-10 py-4 text-sm font-bold tracking-widest uppercase rounded min-w-[200px]"
            >
              View Portfolio
            </Link>
            <Link
              href="/#contact"
              className="hero-element btn-tech-primary inline-flex items-center justify-center px-10 py-4 text-sm font-bold tracking-widest uppercase rounded min-w-[200px]"
            >
              Deploy a Project
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-16 bg-transparent relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-4">
              <span className="text-white">Core </span>
              <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-base md:text-lg text-[#64748B]">
              What I bring to the table
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4 max-w-5xl mx-auto">
            {[
              "Python & Automation",
              "Full-Stack Web Development",
              "AI & LLM Integration",
              "Backend Architecture",
              "API Design & Development",
              "Cloud & DevOps (AWS, Docker)",
              "Local LLM Deployment",
              "Prompt Engineering",
              "Database Design (SQL & NoSQL)",
              "React / Next.js Frontend",
              "System Architecture",
              "Technical Research & R&D",
            ].map((skill) => (
              <div
                key={skill}
                className="flex items-center gap-3 py-3 px-4 rounded-lg hover:bg-white/[0.03] transition-all duration-300 group"
              >
                <div className="w-2 h-2 rounded-full bg-blue-500 shrink-0 group-hover:shadow-[0_0_8px_rgba(56,189,248,0.6)] transition-all duration-300"></div>
                <span className="text-base md:text-lg font-medium text-slate-300 group-hover:text-white transition-colors duration-300">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Render the full original single-page flow */}
      <ServicesSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}
