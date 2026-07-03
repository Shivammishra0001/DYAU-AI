import { useEffect, useRef } from "react";

export default function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let frame = 0;
    let animationId = 0;
    const particles = Array.from({ length: 86 }, () => ({
      x: Math.random(),
      y: Math.random(),
      vx: (Math.random() - 0.5) * 0.00055,
      vy: (Math.random() - 0.5) * 0.00055,
      size: Math.random() * 1.8 + 0.4,
      glow: Math.random() * 0.75 + 0.25,
    }));

    const resize = () => {
      const ratio = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * ratio;
      canvas.height = window.innerHeight * ratio;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    };

    const draw = () => {
      frame += 0.006;
      const width = window.innerWidth;
      const height = window.innerHeight;
      ctx.clearRect(0, 0, width, height);

      const gradient = ctx.createRadialGradient(width * 0.72, height * 0.24, 0, width * 0.72, height * 0.24, width * 0.58);
      gradient.addColorStop(0, "rgba(79, 70, 229, 0.18)");
      gradient.addColorStop(0.45, "rgba(6, 182, 212, 0.08)");
      gradient.addColorStop(1, "rgba(5, 8, 22, 0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      particles.forEach((p, index) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > 1) p.vx *= -1;
        if (p.y < 0 || p.y > 1) p.vy *= -1;

        const x = p.x * width;
        const y = p.y * height;
        ctx.beginPath();
        ctx.arc(x, y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${0.18 + p.glow * 0.4})`;
        ctx.fill();

        for (let j = index + 1; j < particles.length; j += 1) {
          const other = particles[j];
          const ox = other.x * width;
          const oy = other.y * height;
          const distance = Math.hypot(x - ox, y - oy);
          if (distance < 118) {
            ctx.strokeStyle = `rgba(6, 182, 212, ${0.1 * (1 - distance / 118)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(ox, oy);
            ctx.stroke();
          }
        }
      });

      ctx.save();
      ctx.translate(width * 0.74, height * 0.48);
      ctx.rotate(frame);
      ctx.strokeStyle = "rgba(139, 92, 246, 0.12)";
      ctx.lineWidth = 1;
      for (let i = 0; i < 3; i += 1) {
        ctx.beginPath();
        const radius = 160 + i * 52;
        for (let a = 0; a <= 6; a += 1) {
          const angle = (Math.PI * 2 * a) / 6;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          if (a === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }
      ctx.restore();

      animationId = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 -z-20 h-full w-full bg-[#050816]" aria-hidden="true" />;
}
