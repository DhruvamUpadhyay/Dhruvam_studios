import React from "react";
import { GlassCard } from "@/components/ui/GlassCard";
import { NeonButton } from "@/components/ui/NeonButton";
import { Lock, Fingerprint, Building } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Signup() {
  return (
    <div className="w-full min-h-screen py-24 px-6 relative flex flex-col items-center justify-center -mt-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,212,255,0.1),transparent_70%)] pointer-events-none"></div>
      
      <div className="max-w-md w-full mx-auto relative z-10">
        
        <div className="flex flex-col items-center mb-8 text-center">
          <div className="size-16 relative overflow-hidden rounded-2xl border border-accent-blue/20 shadow-[0_0_15px_rgba(0,212,255,0.2)] mb-6">
            <Image src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=150" alt="Portal" fill className="object-cover" />
          </div>
          <h1 className="text-3xl font-black text-white tracking-tighter mb-2">Request Portal Access</h1>
          <p className="text-slate-400 text-sm">Submit your credentials for secure environment provisioning.</p>
        </div>

        <GlassCard className="p-8 relative overflow-hidden" glowOnHover>
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-blue to-primary"></div>
          
          <form className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="company" className="text-[10px] uppercase tracking-widest text-slate-500 font-bold block">Enterprise Entity</label>
              <div className="relative">
                <input 
                  type="text" 
                  id="company" 
                  required
                  className="w-full bg-obsidian/50 border border-white/10 rounded-lg pl-10 pr-4 py-3 text-white focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-colors text-sm"
                  placeholder="Acme Corp"
                />
                <Building className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-[10px] uppercase tracking-widest text-slate-500 font-bold block">Terminal Identity (Email)</label>
              <div className="relative">
                <input 
                  type="email" 
                  id="email" 
                  required
                  className="w-full bg-obsidian/50 border border-white/10 rounded-lg pl-10 pr-4 py-3 text-white focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-colors text-sm"
                  placeholder="admin@enterprise.com"
                />
                <Fingerprint className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="password" className="text-[10px] uppercase tracking-widest text-slate-500 font-bold block">Establish Encryption Key</label>
              <div className="relative">
                <input 
                  type="password" 
                  id="password" 
                  required
                  className="w-full bg-obsidian/50 border border-white/10 rounded-lg pl-10 pr-4 py-3 text-white focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-colors text-sm"
                  placeholder="••••••••••••"
                />
                <Lock className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            <button 
              type="button" 
              className="w-full bg-accent-blue hover:bg-accent-blue/90 text-background-dark font-black uppercase tracking-widest text-xs py-4 rounded-lg flex items-center justify-center gap-2 transition-all shadow-[0_0_15px_rgba(0,212,255,0.3)] hover:shadow-[0_0_25px_rgba(0,212,255,0.6)]"
            >
              Submit Provision Request
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-white/5 text-center">
            <p className="text-slate-400 text-xs">
              Clearance already established? <Link href="/auth/login" className="text-accent-blue hover:text-white font-bold transition-colors">Enter Portal</Link>
            </p>
          </div>
        </GlassCard>

      </div>
    </div>
  );
}
