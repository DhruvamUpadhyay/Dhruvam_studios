import React from "react";
import Link from "next/link";
import { User, Menu } from "lucide-react";

export function Navbar() {
  return (
    <nav className="fixed w-full z-50 glass-nav transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold group-hover:shadow-[0_0_15px_rgba(59,130,246,0.6)] transition-all">
            D
          </div>
          <span className="text-xl font-bold tracking-tight text-white group-hover:text-blue-400 transition-colors">
            Dhruvam
          </span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <Link href="/#expertise" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Solutions</Link>
          <Link href="/#visual-gallery" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Projects</Link>
          <Link href="/#vision" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Vision</Link>
          <Link href="/#contact" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Contact</Link>
        </div>

        <div className="flex items-center gap-4">
          <Link 
            href="/#contact"
            className="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 rounded transition-colors shadow-[0_0_15px_rgba(37,99,235,0.3)] hover:shadow-[0_0_20px_rgba(37,99,235,0.5)]"
          >
            Deploy
          </Link>
          <Link href="/auth/login" title="Client Portal" className="hidden md:flex">
            <div className="w-10 h-10 rounded border border-blue-500/30 flex items-center justify-center bg-blue-500/10 hover:bg-blue-500/20 transition-colors text-blue-400">
              <User className="w-5 h-5" />
            </div>
          </Link>
          <button className="md:hidden text-slate-300 hover:text-white">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </nav>
  );
}
