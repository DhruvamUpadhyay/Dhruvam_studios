import React from "react";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <div className="pt-24 pb-32">
      {/* VISUAL INTERFACE GALLERY */}
      <section id="visual-gallery" className="py-24 px-6 md:px-12 relative overflow-hidden bg-transparent">
        <div className="max-w-7xl mx-auto mb-16 text-center">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 gradient-text">VISUAL INTERFACE</h1>
          <p className="text-lg md:text-xl font-light text-[#94A3B8]">Silent Showcase. No text. Just architecture.</p>
        </div>

        {/* PROJECT 1: DRAVION */}
        <div className="mb-24 fade-in visible">
          <div className="mb-10 text-center">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-[1px] bg-gradient-to-r from-transparent to-white/40 flex-grow"></div>
              <h3 className="text-3xl font-black tracking-widest uppercase gradient-text">DRAVION</h3>
              <div className="h-[1px] bg-gradient-to-l from-transparent to-white/40 flex-grow"></div>
            </div>
            <p className="text-base md:text-lg text-slate-300 max-w-3xl mx-auto font-light leading-relaxed">
              A reasoning-first <span className="text-white font-medium">personal AI assistant</span> built for autonomous complex task execution and intelligent decision-making.
            </p>
          </div>

          {/* Monitor Frame */}
          <div className="monitor-frame mx-auto max-w-6xl relative group">
            {/* Screen Glare/Scanline */}
            <div className="scanline"></div>

            {/* Scaling Container for Images */}
            <div className="film-strip flex overflow-x-auto snap-x snap-mandatory scroll-smooth hide-scrollbar">
              {/* Images */}
              <div className="snap-center shrink-0 w-full h-full flex items-center justify-center bg-black">
                <img src="/Dravion_images/dravion_1.png" className="max-w-full max-h-[80vh] object-contain" alt="Dravion Interface 1" />
              </div>
              <div className="snap-center shrink-0 w-full h-full flex items-center justify-center bg-black">
                <img src="/Dravion_images/dravion_2.png" className="max-w-full max-h-[80vh] object-contain" alt="Dravion Interface 2" />
              </div>
              <div className="snap-center shrink-0 w-full h-full flex items-center justify-center bg-black">
                <img src="/Dravion_images/dravion_3.png" className="max-w-full max-h-[80vh] object-contain" alt="Dravion Interface 3" />
              </div>
              <div className="snap-center shrink-0 w-full h-full flex items-center justify-center bg-black">
                <img src="/Dravion_images/dravion_4.png" className="max-w-full max-h-[80vh] object-contain" alt="Dravion Interface 4" />
              </div>
            </div>

            {/* Overlay Info (Bottom Left) */}
            <div className="absolute bottom-6 left-6 z-20 pointer-events-none">
              <div className="bg-black/80 backdrop-blur-md border border-white/10 px-4 py-2 rounded text-xs font-mono text-blue-300">
                SYSTEM.STATUS: ONLINE <span className="animate-pulse">●</span>
              </div>
            </div>
          </div>
        </div>

        {/* PROJECT 2: TRENDBUZZERS */}
        <div className="mt-40 mb-8 fade-in visible">
          <div className="mb-4 text-center">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-[1px] bg-gradient-to-r from-transparent to-purple-400/40 flex-grow"></div>
              <h3 className="text-3xl font-black tracking-widest uppercase text-white shadow-[0_0_20px_rgba(168,85,247,0.4)]">TRENDBUZZERS</h3>
              <div className="h-[1px] bg-gradient-to-l from-transparent to-purple-400/40 flex-grow"></div>
            </div>
            <p className="text-base md:text-lg text-slate-300 max-w-3xl mx-auto font-light leading-relaxed">
              A high-performance <span className="text-purple-300 font-medium">Enterprise E-Commerce Ecosystem</span> and administrative command center.
            </p>
          </div>

          {/* Monitor Frame (Browser Style) */}
          <div className="monitor-frame mx-auto max-w-6xl relative group border-purple-500/30 shadow-[0_0_50px_rgba(168,85,247,0.1)]">
            {/* Browser Header Mockup */}
            <div className="absolute top-0 left-0 right-0 h-8 bg-slate-900/90 border-b border-white/5 flex items-center px-4 gap-2 z-20">
              <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
              <div className="ml-4 flex-grow bg-black/50 h-5 rounded text-[10px] text-slate-500 flex items-center px-2 font-mono">
                secure://admin.trendbuzzers.com
              </div>
            </div>

            {/* Scaling Container for Images (Padding top for header) */}
            <div className="film-strip flex overflow-x-auto snap-x snap-mandatory scroll-smooth hide-scrollbar pt-8">
              {/* Images */}
              <div className="snap-center shrink-0 w-full h-full flex items-center justify-center bg-slate-950">
                <img src="/Trendbuzzzers/trend_1.png" className="max-w-full max-h-[80vh] object-contain" alt="Trendbuzzers Interface 1" />
              </div>
              <div className="snap-center shrink-0 w-full h-full flex items-center justify-center bg-slate-950">
                <img src="/Trendbuzzzers/trend_2.png" className="max-w-full max-h-[80vh] object-contain" alt="Trendbuzzers Interface 2" />
              </div>
              <div className="snap-center shrink-0 w-full h-full flex items-center justify-center bg-slate-950">
                <img src="/Trendbuzzzers/trend_3.png" className="max-w-full max-h-[80vh] object-contain" alt="Trendbuzzers Interface 3" />
              </div>
              <div className="snap-center shrink-0 w-full h-full flex items-center justify-center bg-slate-950">
                <img src="/Trendbuzzzers/trend_4.png" className="max-w-full max-h-[80vh] object-contain" alt="Trendbuzzers Interface 4" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
