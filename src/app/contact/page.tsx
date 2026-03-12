import React from "react";

export default function ContactPage() {
  return (
    <div className="pt-24 pb-32 min-h-[calc(100vh-80px)]">
      <section id="contact" className="py-32 px-6 md:px-16 bg-transparent relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left: Contact Form */}
            <div className="fade-in visible">
              <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 gradient-text">
                Built for Performance.<br />Secured by Design.
              </h1>
              <p className="text-xl leading-relaxed mb-12 text-[#94A3B8]">
                Ready to engineer your competitive advantage? Let's talk logic.
              </p>

              <form action="https://formsubmit.co/dhruvamwork@gmail.com" method="POST" className="space-y-6">
                <input type="hidden" name="_next" value="https://dhruvam-site.vercel.app/" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_subject" value="New Submission from Portfolio Site" />

                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-bold tracking-widest uppercase text-[#64748B]">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full p-4 rounded bg-slate-900/50 border border-slate-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all outline-none text-white placeholder-slate-500"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-bold tracking-widest uppercase text-[#64748B]">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full p-4 rounded bg-slate-900/50 border border-slate-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all outline-none text-white placeholder-slate-500"
                    placeholder="Enter your email"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-bold tracking-widest uppercase text-[#64748B]">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full p-4 rounded bg-slate-900/50 border border-slate-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all outline-none text-white placeholder-slate-500"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="hero-element btn-tech-primary inline-block w-full py-4 text-sm font-bold tracking-widest uppercase mt-4 rounded opacity-100 cursor-pointer"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Right: Contact Information Cards */}
            <div className="fade-in visible space-y-6 lg:mt-32">
              {/* Email Card */}
              <a
                href="mailto:dhruvamwork@gmail.com"
                className="contact-card group block p-6 rounded-lg bg-slate-900/40 border border-slate-800 transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-md bg-blue-500/10 text-blue-400 group-hover:text-blue-300 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs font-bold tracking-wider text-slate-500 uppercase mb-1">Email</div>
                    <div className="text-lg font-medium text-white group-hover:text-blue-200 transition-colors">
                      dhruvamwork@gmail.com
                    </div>
                  </div>
                </div>
              </a>

              {/* LinkedIn Card */}
              <a
                href="https://www.linkedin.com/in/dhruvam-upadhyay-2a1004323/"
                target="_blank"
                rel="noreferrer"
                className="contact-card group block p-6 rounded-lg bg-slate-900/40 border border-slate-800 transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-md bg-blue-500/10 text-blue-400 group-hover:text-blue-300 transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs font-bold tracking-wider text-slate-500 uppercase mb-1">LinkedIn</div>
                    <div className="text-lg font-medium text-white group-hover:text-blue-200 transition-colors">
                      Dhruvam Upadhyay
                    </div>
                  </div>
                </div>
              </a>

              {/* Instagram Card */}
              <a
                href="https://www.instagram.com/dhruvamupadhyay/"
                target="_blank"
                rel="noreferrer"
                className="contact-card group block p-6 rounded-lg bg-slate-900/40 border border-slate-800 transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-md bg-pink-500/10 text-pink-400 group-hover:text-pink-300 transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs font-bold tracking-wider text-slate-500 uppercase mb-1">Instagram</div>
                    <div className="text-lg font-medium text-white group-hover:text-pink-200 transition-colors">
                      @dhruvamupadhyay
                    </div>
                  </div>
                </div>
              </a>

              {/* GitHub Card */}
              <a
                href="https://github.com/DhruvamUpadhyay"
                target="_blank"
                rel="noreferrer"
                className="contact-card group block p-6 rounded-lg bg-slate-900/40 border border-slate-800 transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-md bg-slate-700/50 text-slate-300 group-hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs font-bold tracking-wider text-slate-500 uppercase mb-1">GitHub</div>
                    <div className="text-lg font-medium text-white group-hover:text-slate-200 transition-colors">
                      DhruvamUpadhyay
                    </div>
                  </div>
                </div>
              </a>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
