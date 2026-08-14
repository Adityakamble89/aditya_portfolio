import React, { useEffect, useRef } from 'react';
import { useTheme } from '../../context/ThemeContext';

const CanvasBackground = () => {
  const canvasRef = useRef(null);
  const { isDark } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // High-DPI support
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    const mouse = {
      x: -1000,
      y: -1000,
      radius: 160,
      active: false,
    };

    const SPACING = 36;
    const SPRING_CONSTANT = 0.045;
    const DAMPING = 0.85;
    const REPEL_STRENGTH = 12;

    let particles = [];

    const initParticles = () => {
      particles = [];
      const cols = Math.ceil(width / SPACING) + 2;
      const rows = Math.ceil(height / SPACING) + 2;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const originX = i * SPACING - SPACING / 2;
          const originY = j * SPACING - SPACING / 2;
          particles.push({
            originX,
            originY,
            x: originX,
            y: originY,
            vx: 0,
            vy: 0,
            radius: 1.25,
            glow: 0,
          });
        }
      }
    };

    initParticles();

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
      mouse.active = false;
    };

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
      initParticles();
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', handleResize);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const dotColor = isDark
        ? 'rgba(255, 255, 255, 0.16)'
        : 'rgba(10, 14, 20, 0.14)';
      const accentGlow = isDark
        ? 'rgba(16, 185, 129, 0.8)'
        : 'rgba(5, 150, 105, 0.8)';

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Repulsion physics from mouse
        if (mouse.active) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.hypot(dx, dy);

          if (dist < mouse.radius && dist > 0.01) {
            const force = (1 - dist / mouse.radius) * REPEL_STRENGTH;
            const angle = Math.atan2(dy, dx);
            p.vx += Math.cos(angle) * force;
            p.vy += Math.sin(angle) * force;
            p.glow = Math.min(p.glow + (1 - dist / mouse.radius) * 0.4, 1);
          }
        }

        // Spring restoration force
        const springX = (p.originX - p.x) * SPRING_CONSTANT;
        const springY = (p.originY - p.y) * SPRING_CONSTANT;

        p.vx = (p.vx + springX) * DAMPING;
        p.vy = (p.vy + springY) * DAMPING;

        p.x += p.vx;
        p.y += p.vy;

        p.glow *= 0.94; // Fade glow smoothly

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius + p.glow * 1.2, 0, Math.PI * 2);

        if (p.glow > 0.05) {
          ctx.fillStyle = accentGlow;
          ctx.shadowColor = accentGlow;
          ctx.shadowBlur = 8 * p.glow;
        } else {
          ctx.fillStyle = dotColor;
          ctx.shadowBlur = 0;
        }
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
    };
  }, [isDark]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-[-1] transition-opacity duration-700"
      style={{ width: '100vw', height: '100vh' }}
    />
  );
};

export default CanvasBackground;
