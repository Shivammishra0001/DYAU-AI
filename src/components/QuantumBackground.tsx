import { useEffect, useRef } from "react";

export default function QuantumBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId = 0;
    let time = 0;

    // Quantum particle definition
    const particles = Array.from({ length: 40 }, () => ({
      waveIndex: Math.floor(Math.random() * 3),
      progress: Math.random(),
      speed: 0.0004 + Math.random() * 0.0006,
      size: 1.5 + Math.random() * 2,
      opacity: 0.4 + Math.random() * 0.4,
    }));

    // Superposition qubit nodes
    const qubits = Array.from({ length: 12 }, () => ({
      x: 0.15 + Math.random() * 0.7,
      y: 0.25 + Math.random() * 0.5,
      vx: (Math.random() - 0.5) * 0.00015,
      vy: (Math.random() - 0.5) * 0.00015,
      radius: 4 + Math.random() * 4,
      pulseSpeed: 0.008 + Math.random() * 0.008,
      pulseOffset: Math.random() * Math.PI * 2,
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
      time += 0.0015; // Slow loop speed
      const width = window.innerWidth;
      const height = window.innerHeight;
      ctx.clearRect(0, 0, width, height);

      // 1. Draw subtle ambient quantum fields (radial glows)
      const grad1 = ctx.createRadialGradient(
        width * 0.3 + Math.sin(time) * 40,
        height * 0.4 + Math.cos(time) * 40,
        0,
        width * 0.3,
        height * 0.4,
        width * 0.4
      );
      grad1.addColorStop(0, "rgba(26, 115, 232, 0.08)");
      grad1.addColorStop(0.5, "rgba(52, 168, 83, 0.03)");
      grad1.addColorStop(1, "rgba(255, 255, 255, 0)");
      ctx.fillStyle = grad1;
      ctx.fillRect(0, 0, width, height);

      const grad2 = ctx.createRadialGradient(
        width * 0.7 + Math.cos(time * 0.8) * 50,
        height * 0.5 + Math.sin(time * 0.8) * 50,
        0,
        width * 0.7,
        height * 0.5,
        width * 0.35
      );
      grad2.addColorStop(0, "rgba(234, 67, 53, 0.06)");
      grad2.addColorStop(0.6, "rgba(251, 188, 5, 0.02)");
      grad2.addColorStop(1, "rgba(255, 255, 255, 0)");
      ctx.fillStyle = grad2;
      ctx.fillRect(0, 0, width, height);

      // 2. Wave functions parameters
      const waves = [
        {
          amplitude: height * 0.10,
          frequency: 0.0025,
          phase: time * 1.2,
          color: "rgba(26, 115, 232, 0.22)", // blue
          yOffset: height * 0.5,
        },
        {
          amplitude: height * 0.07,
          frequency: 0.004,
          phase: -time * 1.0 + 2,
          color: "rgba(52, 168, 83, 0.18)", // green
          yOffset: height * 0.48,
        },
        {
          amplitude: height * 0.05,
          frequency: 0.0018,
          phase: time * 0.7 + 4,
          color: "rgba(251, 188, 5, 0.16)", // yellow/gold
          yOffset: height * 0.52,
        },
      ];

      // Draw Wave Functions
      waves.forEach((w) => {
        ctx.beginPath();
        ctx.strokeStyle = w.color;
        ctx.lineWidth = 1.2;

        for (let x = 0; x <= width; x += 12) {
          const y = w.yOffset + Math.sin(x * w.frequency + w.phase) * w.amplitude;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      });

      // 3. Draw Probability Particles flowing along waves
      particles.forEach((p) => {
        p.progress += p.speed;
        if (p.progress > 1) {
          p.progress = 0;
          p.waveIndex = Math.floor(Math.random() * waves.length);
        }

        const wave = waves[p.waveIndex];
        const x = p.progress * width;
        const y = wave.yOffset + Math.sin(x * wave.frequency + wave.phase) * wave.amplitude;

        // Draw particle
        ctx.beginPath();
        ctx.arc(x, y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = wave.color
          .replace("0.22", `${p.opacity}`)
          .replace("0.18", `${p.opacity}`)
          .replace("0.16", `${p.opacity}`);
        ctx.fill();

        // Draw particle halo/glow
        ctx.beginPath();
        ctx.arc(x, y, p.size * 3.5, 0, Math.PI * 2);
        ctx.fillStyle = wave.color
          .replace("0.22", `${p.opacity * 0.35}`)
          .replace("0.18", `${p.opacity * 0.35}`)
          .replace("0.16", `${p.opacity * 0.35}`);
        ctx.fill();
      });

      // 4. Update and Draw Qubits (Entangled Grid)
      qubits.forEach((q, index) => {
        // Move qubits slowly
        q.x += q.vx;
        q.y += q.vy;

        // Keep inside boundary
        if (q.x < 0.08 || q.x > 0.92) q.vx *= -1;
        if (q.y < 0.18 || q.y > 0.82) q.vy *= -1;

        const qx = q.x * width;
        const qy = q.y * height;

        // Draw entanglement connections
        for (let j = index + 1; j < qubits.length; j++) {
          const other = qubits[j];
          const ox = other.x * width;
          const oy = other.y * height;
          const dist = Math.hypot(qx - ox, qy - oy);

          if (dist < 240) {
            ctx.strokeStyle = `rgba(26, 115, 232, ${0.18 * (1 - dist / 240)})`;
            ctx.lineWidth = 0.7;
            ctx.setLineDash([4, 4]); // Dashed line for quantum states
            ctx.beginPath();
            ctx.moveTo(qx, qy);
            ctx.lineTo(ox, oy);
            ctx.stroke();
            ctx.setLineDash([]); // Reset dash
          }
        }

        // Qubit pulsing wave function ring
        const pulse = Math.sin(time * 12 * q.pulseSpeed + q.pulseOffset) * 6 + 10;
        ctx.strokeStyle = `rgba(26, 115, 232, ${0.25 * (1 - pulse / 16)})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(qx, qy, pulse, 0, Math.PI * 2);
        ctx.stroke();

        // Qubit core
        ctx.beginPath();
        ctx.arc(qx, qy, q.radius / 2, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(26, 115, 232, 0.65)";
        ctx.fill();

        ctx.beginPath();
        ctx.arc(qx, qy, q.radius / 4, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(52, 168, 83, 0.85)";
        ctx.fill();
      });

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

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 h-full w-full pointer-events-none"
      aria-hidden="true"
    />
  );
}
