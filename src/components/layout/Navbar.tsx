import React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

export function Navbar() {
  return (
    <nav className="fixed w-full z-50 glass-nav bg-[#0F172A]/80 backdrop-blur-md border-b border-slate-400/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-lg overflow-hidden group-hover:shadow-[0_0_18px_rgba(56,189,248,0.5)] transition-all duration-300">
            <img
              src="/favicon.png"
              alt="Dhruvam Studios"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-xl font-bold tracking-tight text-white group-hover:text-blue-400 transition-colors duration-300">
            Dhruvam
          </span>
        </Link>
        
        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-1">
          <Link href="/#expertise" className="nav-link relative px-4 py-2 text-sm font-medium text-slate-400 hover:text-white rounded-lg transition-all duration-300 hover:bg-white/5">
            Solutions
          </Link>
          <Link href="/portfolio" className="nav-link relative px-4 py-2 text-sm font-medium text-slate-400 hover:text-white rounded-lg transition-all duration-300 hover:bg-white/5">
            Portfolio
          </Link>
          <Link href="/#vision" className="nav-link relative px-4 py-2 text-sm font-medium text-slate-400 hover:text-white rounded-lg transition-all duration-300 hover:bg-white/5">
            Vision
          </Link>
          <Link href="/#contact" className="nav-link relative px-4 py-2 text-sm font-medium text-slate-400 hover:text-white rounded-lg transition-all duration-300 hover:bg-white/5">
            Contact
          </Link>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <Link 
            href="/#contact"
            className="nav-deploy hidden md:inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold tracking-wider uppercase text-white bg-transparent border border-blue-500/40 rounded-lg transition-all duration-300 hover:border-blue-400/80 hover:shadow-[0_0_20px_rgba(56,189,248,0.25)] hover:text-blue-300"
          >
            Deploy
          </Link>
          <button className="md:hidden text-slate-300 hover:text-white">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </nav>
  );
}
