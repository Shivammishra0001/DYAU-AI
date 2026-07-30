import { useEffect, useRef, useState } from "react";

interface GalaxyBackgroundProps {
  focal?: [number, number];
  rotation?: [number, number];
  starSpeed?: number;
  density?: number;
  hueShift?: number;
  disableAnimation?: boolean;
  speed?: number;
  mouseInteraction?: boolean;
  glowIntensity?: number;
  saturation?: number;
  mouseRepulsion?: boolean;
  twinkleIntensity?: number;
  rotationSpeed?: number;
  repulsionStrength?: number;
  autoCenterRepulsion?: number;
  transparent?: boolean;
}

export default function GalaxyBackground({
  focal = [0.5, 0.5],
  rotation = [1.0, 0.0],
  starSpeed = 0.5,
  density = 1.0,
  hueShift = 140,
  disableAnimation = false,
  speed = 1.0,
  mouseInteraction = true,
  glowIntensity = 0.3,
  saturation = 0.0,
  mouseRepulsion = true,
  twinkleIntensity = 0.3,
  rotationSpeed = 0.1,
  repulsionStrength = 2,
  autoCenterRepulsion = 0,
  transparent = true,
}: GalaxyBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [scrollY, setScrollY] = useState(0);

  // Track mouse coordinates
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    const handleMouseMove = (e: MouseEvent) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId = 0;
    let time = 0;

    // Generate stars
    const maxStars = Math.floor(1000 * density);
    const stars = Array.from({ length: maxStars }, () => {
      // Radius from center
      const r = Math.pow(Math.random(), 2.2) * 360 + 10;

      // Arm assignment (2-armed spiral)
      const arm = Math.random() < 0.5 ? 0 : 1;

      // Theta base angle (spiral formula)
      const baseAngle = arm * Math.PI + r * 0.012;

      // Add scatter
      const angle = baseAngle + (Math.random() - 0.5) * 0.4;

      // Z position (depth of disk)
      const z = (Math.random() - 0.5) * (30 - (r / 360) * 22); // thinner at outer edge

      return {
        r,
        angle,
        z,
        size: Math.random() * 1.4 + 0.4,
        baseOpacity: Math.random() * 0.5 + 0.4,
        twinkleOffset: Math.random() * Math.PI * 2,
        colorHue: Math.random() * 30 - 15 + (r < 100 ? 200 : 40), // Inner blue, outer warmer tones
      };
    });

    const resize = () => {
      const ratio = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * ratio;
      canvas.height = window.innerHeight * ratio;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    };

    const draw = () => {
      if (!disableAnimation) {
        time += 0.006 * speed * starSpeed;
      }

      const width = window.innerWidth;
      const height = window.innerHeight;

      ctx.clearRect(0, 0, width, height);

      // If background is not transparent, fill black background
      if (!transparent) {
        ctx.fillStyle = "#09090b";
        ctx.fillRect(0, 0, width, height);
      }

      // Scrolling effect:
      // 1. Shift focal point based on scrollY (creates standard parallax vertical panning)
      const currentFocalX = focal[0] * width;
      const currentFocalY = (focal[1] + scrollY * 0.00018) * height;

      // 2. Galaxy tilt shifts dynamically with scroll for a 3D perspective camera change
      const scrollRotationX = rotation[0] + scrollY * 0.0004;
      const scrollRotationY = rotation[1] + scrollY * 0.0002;

      // 3. Base galaxy rotation
      const galaxyRotation = time * rotationSpeed;

      const cosRX = Math.cos(scrollRotationX);
      const sinRX = Math.sin(scrollRotationX);
      const cosRY = Math.cos(scrollRotationY);
      const sinRY = Math.sin(scrollRotationY);

      // Mouse coordinates
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      stars.forEach((s) => {
        // Base coordinate rotation
        const currentAngle = s.angle + galaxyRotation;
        const sx = Math.cos(currentAngle) * s.r;
        const sy = Math.sin(currentAngle) * s.r;
        const sz = s.z;

        // 3D rotations:
        // Rotate around X-axis
        const x1 = sx;
        const y1 = sy * cosRX - sz * sinRX;
        const z1 = sy * sinRX + sz * cosRX;

        // Rotate around Y-axis
        const x2 = x1 * cosRY + z1 * sinRY;
        const y2 = y1;

        // 2D Projection
        let px = currentFocalX + x2;
        let py = currentFocalY + y2;

        // Apply mouse interaction if enabled and mouse is in screen bounds
        if (mouseInteraction && mx > 0 && my > 0) {
          const dx = px - mx;
          const dy = py - my;
          const dist = Math.hypot(dx, dy);

          if (dist < 130) {
            const force = ((130 - dist) / 130) * repulsionStrength * 3;
            if (mouseRepulsion) {
              px += (dx / dist) * force;
              py += (dy / dist) * force;
            } else {
              px -= (dx / dist) * force;
              py -= (dy / dist) * force;
            }
          }
        }

        // Apply autoCenterRepulsion if set
        if (autoCenterRepulsion > 0) {
          const dx = px - currentFocalX;
          const dy = py - currentFocalY;
          const dist = Math.hypot(dx, dy);
          if (dist > 5) {
            const force = (1 / dist) * autoCenterRepulsion * 60;
            px += (dx / dist) * force;
            py += (dy / dist) * force;
          }
        }

        // Twinkle factor
        const twinkle = 1.0 - Math.sin(time * 6 + s.twinkleOffset) * twinkleIntensity * 0.45;
        const opacity = s.baseOpacity * twinkle;

        // Color computation: grayscale if saturation = 0, color shifted if saturation > 0
        const hue = (s.colorHue + hueShift) % 360;
        const satPercent = saturation * 100;
        const strokeColor = `hsla(${hue}, ${satPercent}%, 90%, ${opacity})`;
        const glowColor = `hsla(${hue}, ${satPercent}%, 70%, ${opacity * glowIntensity})`;

        // Glow halo
        if (glowIntensity > 0) {
          ctx.beginPath();
          ctx.arc(px, py, s.size * (1 + glowIntensity * 6), 0, Math.PI * 2);
          ctx.fillStyle = glowColor;
          ctx.fill();
        }

        // Core star particle
        ctx.beginPath();
        ctx.arc(px, py, s.size, 0, Math.PI * 2);
        ctx.fillStyle = strokeColor;
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
  }, [
    focal,
    rotation,
    starSpeed,
    density,
    hueShift,
    disableAnimation,
    speed,
    mouseInteraction,
    glowIntensity,
    saturation,
    mouseRepulsion,
    twinkleIntensity,
    rotationSpeed,
    repulsionStrength,
    autoCenterRepulsion,
    transparent,
    scrollY,
  ]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 h-full w-full pointer-events-none"
      aria-hidden="true"
    />
  );
}
