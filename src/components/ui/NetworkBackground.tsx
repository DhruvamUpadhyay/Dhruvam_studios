"use client";

import { useEffect, useRef } from "react";

export function NetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse tracking
    let mouse = { x: -1000, y: -1000, targetX: -1000, targetY: -1000 };

    // Intro State
    let introState = "gathering"; // gathering, exploding, done
    let explosionTime = 0;

    // Global function to trigger explosion (called from Intro Component)
    // @ts-ignore
    window.triggerExplosion = function () {
      introState = "exploding";
    };

    // Colors
    const colors = [
      { r: 56, g: 189, b: 248 }, // Sky 400 (Cyan)
      { r: 37, g: 99, b: 235 }, // Blue 600 (Deep Blue)
      { r: 139, g: 92, b: 246 }, // Violet 500
      { r: 236, g: 72, b: 153 }, // Pink 500
    ];

    // Configuration
    const particleCount = 200;
    const dustCount = 120;
    const particles: any[] = [];
    const dust: any[] = [];
    const nebulas: any[] = [];
    let shootingStar: any = null;
    let animationFrameId: number;

    // Nebula
    class Nebula {
      x: number;
      y: number;
      radius: number;
      vx: number;
      vy: number;
      color: any;
      opacity: number;
      targetOpacity: number;

      constructor() {
        this.x = 0;
        this.y = 0;
        this.radius = 0;
        this.vx = 0;
        this.vy = 0;
        this.color = null;
        this.opacity = 0;
        this.targetOpacity = 0;
        this.init();
      }

      init() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.radius = 300 + Math.random() * 300;
        this.vx = (Math.random() - 0.5) * 0.05;
        this.vy = (Math.random() - 0.5) * 0.05;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.opacity = 0;
        this.targetOpacity = 0.03 + Math.random() * 0.03;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.opacity < this.targetOpacity) this.opacity += 0.0002;

        if (this.x < -300 || this.x > width + 300) this.vx *= -1;
        if (this.y < -300 || this.y > height + 300) this.vy *= -1;
      }

      draw() {
        const gradient = ctx!.createRadialGradient(
          this.x,
          this.y,
          0,
          this.x,
          this.y,
          this.radius
        );
        gradient.addColorStop(
          0,
          `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, 0)`
        );
        gradient.addColorStop(
          0.2,
          `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${this.opacity})`
        );
        gradient.addColorStop(
          1,
          `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, 0)`
        );

        ctx!.beginPath();
        ctx!.fillStyle = gradient;
        ctx!.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx!.fill();
      }
    }

    // Star Dust
    class StarDust {
      x: number;
      y: number;
      size: number;
      alpha: number;
      visible: boolean;
      pulse: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 1.5;
        this.alpha = Math.random() * 0.3;
        this.visible = false;
        this.pulse = Math.random() * Math.PI * 2;
      }

      draw() {
        if (introState !== "done" && introState !== "exploding") return;
        if (!this.visible && introState === "exploding" && Math.random() > 0.95)
          this.visible = true;

        if (this.visible || introState === "done") {
          this.pulse += 0.05;
          const flicker = Math.sin(this.pulse) * 0.1;
          ctx!.fillStyle = `rgba(255, 255, 255, ${Math.max(
            0,
            this.alpha + flicker
          )})`;
          ctx!.beginPath();
          ctx!.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx!.fill();
        }
      }
    }

    // Shooting Star
    class ShootingStar {
      x: number;
      y: number;
      len: number;
      speed: number;
      size: number;
      angle: number;
      opacity: number;
      state: number;
      wait: number;

      constructor() {
        this.x = 0;
        this.y = 0;
        this.len = 0;
        this.speed = 0;
        this.size = 0;
        this.angle = 0;
        this.opacity = 0;
        this.state = 0;
        this.wait = 0;
        this.reset();
        this.wait = 200;
      }
      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height * 0.5;
        this.len = 100 + Math.random() * 80;
        this.speed = 15 + Math.random() * 10;
        this.size = Math.random() * 1 + 0.5;
        this.angle = Math.PI / 4 + (Math.random() - 0.5) * 0.5;
        this.opacity = 0;
        this.state = 0;
        this.wait = Math.random() * 500;
      }
      update() {
        if (introState !== "done") return;
        if (this.state === 0) {
          this.wait--;
          if (this.wait <= 0) this.state = 1;
          return;
        }
        if (this.state === 1) {
          this.opacity += 0.05;
          if (this.opacity >= 1) this.state = 2;
        }
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;
        if (this.x > width + 200 || this.y > height + 200) this.reset();
      }
      draw() {
        if (this.state === 0) return;
        const tailX = this.x - Math.cos(this.angle) * this.len;
        const tailY = this.y - Math.sin(this.angle) * this.len;
        const grad = ctx!.createLinearGradient(this.x, this.y, tailX, tailY);
        grad.addColorStop(0, `rgba(255, 255, 255, ${this.opacity})`);
        grad.addColorStop(1, `rgba(255, 255, 255, 0)`);
        ctx!.beginPath();
        ctx!.strokeStyle = grad;
        ctx!.lineWidth = this.size;
        ctx!.moveTo(this.x, this.y);
        ctx!.lineTo(tailX, tailY);
        ctx!.stroke();
      }
    }

    // Particle
    class Particle {
      targetPos: any;
      x: number;
      y: number;
      z: number;
      size: number;
      vx: number;
      vy: number;
      targetVx: number;
      targetVy: number;
      color: any;
      pulse: number;
      pulseSpeed: number;
      explodeVx: number;
      explodeVy: number;

      constructor() {
        this.targetPos = {};
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.size = 0;
        this.vx = 0;
        this.vy = 0;
        this.targetVx = 0;
        this.targetVy = 0;
        this.color = null;
        this.pulse = 0;
        this.pulseSpeed = 0;
        this.explodeVx = 0;
        this.explodeVy = 0;
        this.init();
      }

      init() {
        this.targetPos = {
          x: Math.random() * width,
          y: Math.random() * height,
          z: Math.random(),
        };

        this.x = width / 2 + (Math.random() - 0.5) * 10;
        this.y = height / 2 + (Math.random() - 0.5) * 10;
        this.z = this.targetPos.z;

        this.size = 1.5 + Math.random() * 2;

        const baseSpeed = 0.2 + this.z * 0.3;
        this.vx = 0;
        this.vy = 0;
        this.targetVx = baseSpeed + (Math.random() - 0.5) * 0.1;
        this.targetVy = -baseSpeed * 0.5 + (Math.random() - 0.5) * 0.1;

        this.color = colors[Math.floor(Math.random() * 2)];
        this.pulse = Math.random() * Math.PI * 2;
        this.pulseSpeed = 0.02 + Math.random() * 0.03;

        const angle = Math.random() * Math.PI * 2;
        const force = 10 + Math.random() * 20;
        this.explodeVx = Math.cos(angle) * force;
        this.explodeVy = Math.sin(angle) * force;
      }

      resetToSpace() {
        if (this.x > width + 50) this.x = -50;
        if (this.x < -50) this.x = width + 50;
        if (this.y > height + 50) this.y = -50;
        if (this.y < -50) this.y = height + 50;
      }

      update() {
        if (introState === "gathering") {
          const cx = width / 2;
          const cy = height / 2;
          const dx = this.x - cx;
          const dy = this.y - cy;

          const angle = Math.atan2(dy, dx) + 0.1;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const targetDist = 20 + Math.sin(Date.now() * 0.005) * 10;

          const force = (targetDist - dist) * 0.1;

          this.x = cx + Math.cos(angle) * (dist + force);
          this.y = cy + Math.sin(angle) * (dist + force);

          this.x += (Math.random() - 0.5) * 2;
          this.y += (Math.random() - 0.5) * 2;
          return;
        }

        if (introState === "exploding") {
          this.x += this.explodeVx;
          this.y += this.explodeVy;
          this.explodeVx *= 0.92;
          this.explodeVy *= 0.92;

          if (
            Math.abs(this.explodeVx) < 0.5 &&
            Math.abs(this.explodeVy) < 0.5
          ) {
            this.vx = this.explodeVx;
            this.vy = this.explodeVy;
          }
        }

        const dx = this.x - mouse.x;
        const dy = this.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const interactionRadius = 220;

        if (dist < interactionRadius) {
          const force = (interactionRadius - dist) / interactionRadius;
          const angle = Math.atan2(dy, dx);
          this.vx += Math.cos(angle) * force * 0.2;
          this.vy += Math.sin(angle) * force * 0.2;
        }

        this.x += this.vx;
        this.y += this.vy;
        this.vx *= 0.96;
        this.vy *= 0.96;

        this.vx += (this.targetVx - this.vx) * 0.02;
        this.vy += (this.targetVy - this.vy) * 0.02;

        this.pulse += this.pulseSpeed;
        this.resetToSpace();
      }

      draw() {
        let baseAlpha = 0.2 + this.z * 0.5;

        if (introState === "gathering") {
          baseAlpha = 0.8;
        }

        let alpha = Math.max(0.1, baseAlpha + Math.sin(this.pulse) * 0.2);

        if (introState === "gathering") {
          const size = this.size * 2;
          ctx!.shadowBlur = 20;
          ctx!.shadowColor = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, 1)`;
          ctx!.fillStyle = `rgba(255, 255, 255, 1)`;
          ctx!.beginPath();
          ctx!.arc(this.x, this.y, size, 0, Math.PI * 2);
          ctx!.fill();
          ctx!.shadowBlur = 0;
          return;
        }

        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 220) alpha += (1 - dist / 220) * 0.5;
        alpha = Math.min(1, alpha);

        const size = this.size * (0.5 + this.z * 1.0);

        const gradient = ctx!.createRadialGradient(
          this.x,
          this.y,
          0,
          this.x,
          this.y,
          size * 3
        );
        gradient.addColorStop(0, `rgba(255, 255, 255, ${alpha})`);
        gradient.addColorStop(
          0.4,
          `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${
            alpha * 0.4
          })`
        );
        gradient.addColorStop(
          1,
          `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, 0)`
        );

        ctx!.fillStyle = gradient;
        ctx!.beginPath();
        ctx!.arc(this.x, this.y, size * 3, 0, Math.PI * 2);
        ctx!.fill();
      }
    }

    // Init
    for (let i = 0; i < 4; i++) nebulas.push(new Nebula());
    for (let i = 0; i < dustCount; i++) dust.push(new StarDust());
    for (let i = 0; i < particleCount; i++) particles.push(new Particle());
    shootingStar = new ShootingStar();

    function animate() {
      ctx!.fillStyle = "#050505";
      ctx!.fillRect(0, 0, width, height);

      if (introState === "done") {
        const scrollY = window.scrollY || window.pageYOffset;
        const blurStart = 100;
        const maxBlur = 8;
        let blurAmount = 0;
        if (scrollY > blurStart) {
          blurAmount = Math.min(maxBlur, ((scrollY - blurStart) / 500) * maxBlur);
        }
        if (
          Math.abs(
            blurAmount -
              (parseFloat(
                canvas!.style.filter?.replace("blur(", "").replace("px)", "")
              ) || 0)
          ) > 0.1
        ) {
          canvas!.style.filter = `blur(${blurAmount}px)`;
        }
      }

      if (introState === "exploding") {
        explosionTime++;
        if (explosionTime > 100) introState = "done";
      }

      mouse.x += (mouse.targetX - mouse.x) * 0.1;
      mouse.y += (mouse.targetY - mouse.y) * 0.1;

      if (introState === "done" || introState === "exploding") {
        nebulas.forEach((n) => {
          n.update();
          n.draw();
        });
        dust.forEach((d) => d.draw());
      }

      if (shootingStar) {
        shootingStar.update();
        shootingStar.draw();
      }

      particles.sort((a, b) => a.z - b.z);
      particles.forEach((p) => {
        p.update();
        if (introState !== "gathering") p.draw();
      });

      if (
        introState === "done" ||
        (introState === "exploding" && explosionTime > 50)
      ) {
        for (let i = 0; i < particles.length; i++) {
          if (particles[i].z < 0.5) continue;
          for (let j = i + 1; j < particles.length; j++) {
            if (particles[j].z < 0.5) continue;
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 110) {
              ctx!.beginPath();
              const alpha = (1 - dist / 110) * 0.2 * particles[i].z;
              ctx!.strokeStyle = `rgba(56, 189, 248, ${alpha})`;
              ctx!.lineWidth = 1;
              ctx!.moveTo(particles[i].x, particles[i].y);
              ctx!.lineTo(particles[j].x, particles[j].y);
              ctx!.stroke();
            }
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    }

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      id="network-canvas"
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
    />
  );
}
