import React from "react";
import Link from "next/link";

export function ServicesSection() {
  return (
    <section id="expertise" className="py-32 px-6 md:px-16 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="section-divider mb-20"></div>

        <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 fade-in visible gradient-text">
          SOLUTIONS
        </h2>
        <p className="text-lg mb-20 max-w-2xl fade-in visible text-[#94A3B8]">
          Full-spectrum engineering services. From concept to deployment.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Service 1: Enterprise Automation */}
          <div className="fade-in visible service-card p-8 bg-[#0F172A] border border-slate-400/10 rounded-sm">
            <div className="text-5xl font-black mb-4 gradient-accent">01</div>
            <h3 className="text-xl font-bold tracking-tight mb-3 text-white">Enterprise Automation</h3>
            <p className="text-sm leading-relaxed mb-4 text-[#94A3B8]">
              Python-powered workflow automation that eliminates manual processes and scales with your business.
            </p>
            <div className="text-xs font-bold tracking-widest gradient-accent">DELIVERABLES</div>
            <ul className="text-xs space-y-1 mt-2 text-[#64748B]">
              <li>• Custom automation scripts</li>
              <li>• API integrations</li>
              <li>• Data pipeline orchestration</li>
            </ul>
          </div>

          {/* Service 2: Full-Stack Web Applications */}
          <div className="fade-in visible service-card p-8 bg-[#0F172A] border border-slate-400/10 rounded-sm">
            <div className="text-5xl font-black mb-4 gradient-accent">02</div>
            <h3 className="text-xl font-bold tracking-tight mb-3 text-white">Full-Stack Web Apps</h3>
            <p className="text-sm leading-relaxed mb-4 text-[#94A3B8]">
              Production-ready web applications built with React, Next.js, and modern backend frameworks.
            </p>
            <div className="text-xs font-bold tracking-widest gradient-accent">STACK</div>
            <ul className="text-xs space-y-1 mt-2 text-[#64748B]">
              <li>• React / Next.js frontend</li>
              <li>• FastAPI / Node.js backend</li>
              <li>• PostgreSQL / MongoDB</li>
            </ul>
          </div>

          {/* Service 3: AI & LLM Integration */}
          <div className="fade-in visible service-card p-8 bg-[#0F172A] border border-slate-400/10 rounded-sm">
            <div className="text-5xl font-black mb-4 gradient-accent">03</div>
            <h3 className="text-xl font-bold tracking-tight mb-3 text-white">AI & LLM Integration</h3>
            <p className="text-sm leading-relaxed mb-4 text-[#94A3B8]">
              Custom AI agents, RAG systems, and LLM-powered applications for intelligent automation.
            </p>
            <div className="text-xs font-bold tracking-widest gradient-accent">CAPABILITIES</div>
            <ul className="text-xs space-y-1 mt-2 text-[#64748B]">
              <li>• Autonomous AI agents</li>
              <li>• RAG & vector databases</li>
              <li>• Fine-tuned models</li>
            </ul>
          </div>

          {/* Service 4: Cloud Infrastructure */}
          <div className="fade-in visible service-card p-8 bg-[#0F172A] border border-slate-400/10 rounded-sm">
            <div className="text-5xl font-black mb-4 gradient-accent">04</div>
            <h3 className="text-xl font-bold tracking-tight mb-3 text-white">Cloud Infrastructure</h3>
            <p className="text-sm leading-relaxed mb-4 text-[#94A3B8]">
              Scalable, secure cloud architecture on AWS with Docker, Kubernetes, and CI/CD pipelines.
            </p>
            <div className="text-xs font-bold tracking-widest gradient-accent">SERVICES</div>
            <ul className="text-xs space-y-1 mt-2 text-[#64748B]">
              <li>• AWS deployment & optimization</li>
              <li>• Docker containerization</li>
              <li>• CI/CD automation</li>
            </ul>
          </div>

          {/* Service 5: API Development */}
          <div className="fade-in visible service-card p-8 bg-[#0F172A] border border-slate-400/10 rounded-sm">
            <div className="text-5xl font-black mb-4 gradient-accent">05</div>
            <h3 className="text-xl font-bold tracking-tight mb-3 text-white">API Development</h3>
            <p className="text-sm leading-relaxed mb-4 text-[#94A3B8]">
              RESTful and GraphQL APIs designed for performance, security, and seamless third-party integration.
            </p>
            <div className="text-xs font-bold tracking-widest gradient-accent">FEATURES</div>
            <ul className="text-xs space-y-1 mt-2 text-[#64748B]">
              <li>• RESTful / GraphQL design</li>
              <li>• Authentication & security</li>
              <li>• Rate limiting & caching</li>
            </ul>
          </div>

          {/* Service 6: System Architecture */}
          <div className="fade-in visible service-card p-8 bg-[#0F172A] border border-slate-400/10 rounded-sm">
            <div className="text-5xl font-black mb-4 gradient-accent">06</div>
            <h3 className="text-xl font-bold tracking-tight mb-3 text-white">System Architecture</h3>
            <p className="text-sm leading-relaxed mb-4 text-[#94A3B8]">
              End-to-end system design and technical consulting for complex, mission-critical applications.
            </p>
            <div className="text-xs font-bold tracking-widest gradient-accent">EXPERTISE</div>
            <ul className="text-xs space-y-1 mt-2 text-[#64748B]">
              <li>• Microservices architecture</li>
              <li>• Database design & optimization</li>
              <li>• Performance engineering</li>
            </ul>
          </div>
        </div>

        {/* Custom Package (Landscape Standalone) */}
        <div className="fade-in visible mt-12 p-8 md:p-12 relative overflow-hidden bg-[#0F172A] border border-slate-400/10 rounded-sm">
          {/* Decoration */}
          <div className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none text-white">
            <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z" />
            </svg>
          </div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <div className="text-sm font-bold tracking-widest gradient-accent mb-2">TIER: ENTERPRISE</div>
              <h3 className="text-3xl md:text-4xl font-black tracking-tight mb-4 text-white">
                Custom Solutions Architecture
              </h3>
              <p className="text-lg leading-relaxed text-slate-400 mb-6">
                For challenges that defy standard categorization. I architect bespoke digital ecosystems tailored precisely to your operational physics—from proprietary algorithms to high-frequency trading platforms.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 text-xs font-bold tracking-widest text-blue-300 bg-blue-900/30 rounded border border-blue-800">
                  CONSULTING
                </span>
                <span className="px-3 py-1 text-xs font-bold tracking-widest text-blue-300 bg-blue-900/30 rounded border border-blue-800">
                  SYSTEM DESIGN
                </span>
                <span className="px-3 py-1 text-xs font-bold tracking-widest text-blue-300 bg-blue-900/30 rounded border border-blue-800">
                  FULL-CYCLE DEV
                </span>
              </div>
            </div>
            <div className="md:col-span-1 text-center md:text-right">
              <Link
                href="/contact"
                className="btn-tech-primary inline-flex items-center justify-center px-8 py-4 text-sm font-bold tracking-widest uppercase rounded"
              >
                Discuss Feasibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
