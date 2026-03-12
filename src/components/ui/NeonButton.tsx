import React from "react";
import { LucideIcon } from "lucide-react";
import Link from "next/link";

interface NeonButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "danger" | "ghost";
  icon?: LucideIcon;
  href?: string;
  className?: string;
}

export function NeonButton({ 
  children, 
  variant = "primary", 
  icon: Icon, 
  href, 
  className = "", 
  ...props 
}: NeonButtonProps) {
  
  const baseStyles = "px-6 py-3 rounded-xl font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-2 transition-all duration-300";
  
  const variants = {
    primary: "bg-primary hover:bg-primary/90 text-white shadow-[0_0_15px_rgba(123,97,255,0.3)] hover:shadow-[0_0_25px_rgba(123,97,255,0.6)]",
    secondary: "bg-white/5 border border-white/10 hover:border-white/20 text-white hover:bg-white/10",
    danger: "bg-danger-neon/20 hover:bg-danger-neon text-danger-neon hover:text-white border border-danger-neon/30",
    ghost: "text-slate-400 hover:text-white bg-transparent",
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  const content = (
    <>
      {children}
      {Icon && <Icon className="w-4 h-4" />}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={combinedClassName}>
        {content}
      </Link>
    );
  }

  return (
    <button className={combinedClassName} {...props}>
      {content}
    </button>
  );
}
