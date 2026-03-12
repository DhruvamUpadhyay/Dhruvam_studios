"use client";

import { useEffect, useState } from "react";

export function GSAPIntro() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const overlay = document.getElementById("intro-overlay");
    const container = document.getElementById("intro-container");
    const welcome = document.getElementById("intro-welcome");
    const ball = document.getElementById("intro-ball");
    const build = document.getElementById("intro-build");

    if (!overlay || !container || !welcome || !ball || !build) return;

    // Inject Custom Keyframes for Physics
    const style = document.createElement("style");
    style.innerHTML = `
        @keyframes realBounce {
            0% { transform: translateY(-100vh); animation-timing-function: ease-in; }
            25% { transform: translateY(0); animation-timing-function: ease-out; }
            40% { transform: translateY(-120px); animation-timing-function: ease-in; }
            55% { transform: translateY(0); animation-timing-function: ease-out; }
            70% { transform: translateY(-50px); animation-timing-function: ease-in; }
            80% { transform: translateY(0); animation-timing-function: ease-out; }
            90% { transform: translateY(-15px); animation-timing-function: ease-in; }
            100% { transform: translateY(0); animation-timing-function: ease-out; }
        }
        @keyframes ballFlash {
            0% { transform: scale(1); background-color: #0ea5e9; }
            50% { background-color: #0ea5e9; }
            100% { transform: scale(100); background-color: #FFFFFF; }
        }
    `;
    document.head.appendChild(style);

    // 1. Container/Welcome Fade In
    setTimeout(() => {
      container.style.opacity = "1";
      welcome.style.opacity = "1";
    }, 300);

    // 2. Ball Drop with Real Physics
    setTimeout(() => {
      ball.style.opacity = "1";
      ball.style.animation = "realBounce 2s forwards";
    }, 500);

    // 3. "Let's Build" Fade In
    setTimeout(() => {
      build.style.transition = "opacity 0.6s ease";
      build.style.opacity = "1";
    }, 1800);

    // 4. The FLASH (Ball Expands)
    setTimeout(() => {
      ball.style.willChange = "transform, background-color";
      ball.style.animation = "ballFlash 0.8s cubic-bezier(0.7, 0, 1, 1) forwards";
    }, 2600);

    // 5. Reveal Site & Trigger Explosion
    setTimeout(() => {
      // @ts-ignore
      if (window.triggerExplosion) window.triggerExplosion();

      // Ensure body scroll is re-enabled immediately
      document.body.style.overflow = "auto";

      overlay.style.transition = "opacity 0.6s ease-out";
      overlay.style.opacity = "0";

      setTimeout(() => {
        setIsVisible(false);
      }, 650);
    }, 2900);

    return () => {
      document.head.removeChild(style);
      document.body.style.overflow = "auto";
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      id="intro-overlay"
      className="fixed top-0 left-0 w-full h-screen bg-black z-[9999] flex items-center justify-center"
    >
      <div
        id="intro-container"
        className="flex flex-col md:flex-row items-center md:items-baseline justify-center gap-6 md:gap-10 opacity-0 transition-opacity duration-500 ease-out"
      >
        <div
          id="intro-welcome"
          className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-none"
        >
          Welcome
        </div>

        <div
          id="ball-container"
          className="relative w-4 h-4 md:w-[15px] md:h-[15px] flex items-end justify-center md:translate-y-[4px]"
        >
          <div
            id="intro-ball"
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "#0ea5e9",
              borderRadius: "50%",
              transform: "translateY(-100vh)",
              opacity: 0,
            }}
          />
        </div>

        <div
          id="intro-build"
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-none"
          style={{
            background: "linear-gradient(90deg, #FFFFFF 0%, #60A5FA 50%, #3B82F6 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            opacity: 0,
          }}
        >
          Let&apos;s Build
        </div>
      </div>
    </div>
  );
}
