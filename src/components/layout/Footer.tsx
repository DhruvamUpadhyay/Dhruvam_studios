import React from "react";
import Link from "next/link";
import { Hexagon } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-primary/10 py-16 px-6 bg-obsidian">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
        <div className="space-y-4">
          <Link href="/" className="flex items-center gap-2 group inline-flex">
            <div className="w-8 h-8 rounded bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold group-hover:shadow-[0_0_15px_rgba(59,130,246,0.6)] transition-all">
              D
            </div>
            <span className="text-xl font-bold tracking-tight text-white group-hover:text-blue-400 transition-colors">
              Dhruvam
            </span>
          </Link>
          <p className="text-slate-500 text-sm max-w-xs pt-2">
            Architecting Intelligent Digital Ecosystems. Full-spectrum engineering services from concept to deployment.
          </p>
        </div>
        
        <div className="flex flex-wrap gap-12">
          <div className="space-y-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-widest">Solutions</h4>
            <ul className="text-slate-500 text-sm space-y-2">
              <li><Link href="/services#automation" className="hover:text-primary transition-colors">Enterprise Automation</Link></li>
              <li><Link href="/services#web-apps" className="hover:text-primary transition-colors">Full-Stack Web Apps</Link></li>
              <li><Link href="/services#ai" className="hover:text-primary transition-colors">AI & LLM Integration</Link></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-widest">Company</h4>
            <ul className="text-slate-500 text-sm space-y-2">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Dhruvam</Link></li>
              <li><Link href="/projects" className="hover:text-primary transition-colors">Portfolio</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-widest">Client Portal</h4>
            <ul className="text-slate-500 text-sm space-y-2">
              <li><Link href="/auth/login" className="hover:text-primary transition-colors">Secure Login</Link></li>
              <li><Link href="/auth/signup" className="hover:text-primary transition-colors">Request Access</Link></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 text-slate-600 text-xs text-center flex flex-col md:flex-row justify-between items-center gap-4">
        <p>© {new Date().getFullYear()} Dhruvam Studios. All rights reserved.</p>
        <p>Built for Performance. Secured by Design.</p>
      </div>
    </footer>
  );
}
