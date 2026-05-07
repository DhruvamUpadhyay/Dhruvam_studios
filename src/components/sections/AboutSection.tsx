import React from "react";

export function AboutSection() {
  return (
    <>
      <section id="vision" className="py-32 px-6 md:px-16 relative overflow-hidden bg-transparent">
        {/* Background pulse effect */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[200px] h-[200px] md:w-[500px] md:h-[500px] bg-blue-600/20 rounded-full blur-[100px] animate-pulse"></div>
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-10 fade-in visible gradient-text opacity-90">
            THE VISION
          </h2>

          <div className="space-y-10 fade-in visible">
            <p className="text-2xl md:text-5xl font-bold leading-tight text-white mb-8">
              "The future isn't inherited.<br/>It's <span className="gradient-accent">engineered</span>."
            </p>

            <p className="text-lg md:text-2xl leading-relaxed text-slate-400 max-w-3xl mx-auto font-light">
              In a digital landscape cluttered with noise, I build clarity.
              I don't just write code; I architect living systems that breathe, adapt, and scale.
              My mission is to empower your business with pure, unadulterated intelligence that works silently in the background.
            </p>

            <div className="pt-12 flex justify-center gap-6">
              <div className="flex items-center gap-2 text-blue-400">
                <span className="w-2 h-2 bg-blue-500 rounded-full animate-ping"></span>
                <span className="text-xs font-bold tracking-widest uppercase">System Online</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ZONE 1.5: ABOUT ME */}
      <section id="about" className="py-24 px-6 md:px-16 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="fade-in visible profile-image-box relative w-full max-w-sm mx-auto aspect-[3/4] md:aspect-[4/5] rounded-lg overflow-hidden shadow-[0_0_40px_rgba(59,130,246,0.3)] border-2 border-blue-500/50">
            {/* Decorative Border Elements */}
            <div className="absolute top-0 left-0 w-full h-full border-4 border-blue-500/20 z-20 pointer-events-none"></div>
            <div className="absolute top-2 left-2 w-[calc(100%-16px)] h-[calc(100%-16px)] border border-blue-400/30 z-20 pointer-events-none"></div>
            <img src="/whatsapp-profile.jpg" alt="Dhruvam Upadhyay" className="object-cover w-full h-full hover:scale-105 transition-transform duration-700" />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-transparent opacity-60"></div>
          </div>

          {/* Right: Text */}
          <div className="fade-in visible">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8">
              <span className="text-white">About</span><span className="text-blue-500">Me</span>
            </h2>

            <div className="space-y-6 text-lg md:text-xl font-light leading-relaxed text-[#94A3B8]">
              <p>I am Dhruvam Upadhyay. Currently pursuing Bachelor of Computer Applications in Artificial Intelligence at Reva University, Bangalore.</p>
              <p className="text-white font-medium">I am a Full-Stack Architect and AI Engineer who values results over rhetoric.</p>
              <p>I specialize in building high-performance systems—from autonomous AI agents to enterprise-grade web applications. I don't write code to fill a timesheet; I write code to create leverage for your business.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
