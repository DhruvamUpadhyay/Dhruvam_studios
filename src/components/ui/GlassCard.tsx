import React from "react";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  glowOnHover?: boolean;
}

export function GlassCard({ children, className = "", glowOnHover = false, ...props }: GlassCardProps) {
  return (
    <div 
      className={`glass-card rounded-2xl p-8 ${glowOnHover ? "glow-border transition-all" : ""} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
