import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ArrowDown, Code2, Database, Server, Sparkles, Terminal, Copy, Check, Github, Linkedin, ExternalLink } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const Hero = () => {
  const containerRef = useRef(null);
  const glowRef = useRef(null);
  const leftBracketRef = useRef(null);
  const rightBracketRef = useRef(null);
  const underlineRef = useRef(null);
  const portraitRef = useRef(null);
  const [copied, setCopied] = React.useState(false);
  const { isDark } = useTheme();

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Staggered typography reveal
      tl.from('.hero-badge', {
        y: -20,
        opacity: 0,
        duration: 0.8,
      })
        .from(
          '.hero-line',
          {
            y: 60,
            opacity: 0,
            duration: 1,
            stagger: 0.18,
          },
          '-=0.4'
        )
        .from(
          underlineRef.current,
          {
            scaleX: 0,
            transformOrigin: 'left center',
            duration: 0.8,
            ease: 'expo.out',
          },
          '-=0.4'
        )
        .from(
          '.hero-subtext',
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
          },
          '-=0.5'
        )
        .from(
          '.hero-cta',
          {
            y: 20,
            opacity: 0,
            stagger: 0.12,
            duration: 0.6,
          },
          '-=0.4'
        )
        .from(
          portraitRef.current,
          {
            scale: 0.9,
            opacity: 0,
            duration: 1.2,
            ease: 'back.out(1.2)',
          },
          '-=1.2'
        )
        .from(
          [leftBracketRef.current, rightBracketRef.current],
          {
            strokeDashoffset: 600,
            opacity: 0,
            duration: 1.6,
            stagger: 0.2,
            ease: 'power2.inOut',
          },
          '-=1.0'
        )
        .from(
          '.floating-badge',
          {
            scale: 0,
            opacity: 0,
            stagger: 0.15,
            duration: 0.8,
            ease: 'back.out(1.7)',
          },
          '-=0.6'
        );

      // Breathing glow pulse animation
      gsap.to(glowRef.current, {
        scale: 1.2,
        opacity: 0.85,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      // Subtle float animation for portrait brackets
      gsap.to('.bracket-wrapper', {
        y: -10,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    },
    { scope: containerRef }
  );

  const copyEmail = () => {
    navigator.clipboard.writeText('aadityakamble89@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* LEFT COLUMN: High-Impact Typography & Narrative */}
        <div className="lg:col-span-7 flex flex-col justify-center z-10 text-left">
          
          {/* Status Badge */}
          <div className="hero-badge inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-surface-elevated border border-surface-border w-fit mb-6">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="font-mono text-xs text-muted-fg tracking-wide">
              SYSTEM STATUS: <span className="text-accent font-semibold">OPTIMIZED & RUNNING</span>
            </span>
          </div>

          {/* Main Headline */}
          <div className="space-y-1 mb-6">
            <h1 className="text-hero-title font-headline font-bold text-fg leading-[1.05] tracking-tight">
              <span className="hero-line block">Building backend</span>
              <span className="hero-line block text-muted-fg/80">systems that</span>
              <span className="hero-line block relative w-fit">
                <span className="relative z-10 text-gradient-emerald">actually scale.</span>
                <span
                  ref={underlineRef}
                  className="absolute bottom-1 sm:bottom-2 left-0 w-full h-3 sm:h-4 bg-accent/20 -z-0 rounded-sm"
                />
              </span>
            </h1>
          </div>

          {/* Subtitle / Engineer Bio */}
          <p className="hero-subtext text-base sm:text-lg text-muted-fg max-w-xl font-normal leading-relaxed mb-8">
            Hi, I'm <strong className="text-fg font-semibold">Aditya Kamble</strong>. Backend Software Engineer
            crafting high-throughput microservices, robust aggregation pipelines, and scalable backend systems.
            Specializing in Node.js, Express, MongoDB, and FastAPI.
          </p>

          {/* CTAs & Quick Actions */}
          <div className="hero-cta flex flex-wrap items-center gap-3.5 mb-10">
            <a
              href="#projects"
              data-cursor="view"
              data-cursor-text="VIEW"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-accent text-black font-mono text-sm font-bold tracking-tight hover:bg-accent-hover hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <span>Explore Architecture</span>
              <ArrowDown className="w-4 h-4" />
            </a>

            <button
              onClick={copyEmail}
              className="inline-flex items-center gap-2.5 px-5 py-3.5 rounded-xl bg-surface-elevated border border-surface-border text-fg font-mono text-xs font-semibold hover:border-accent hover:text-accent transition-all duration-300"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-accent" />
                  <span className="text-accent">Email Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-muted-fg" />
                  <span>aadityakamble89@gmail.com</span>
                </>
              )}
            </button>

            {/* Quick Hero Social Badges */}
            <div className="flex items-center gap-2 pl-1">
              <a
                href="https://github.com/Adityakamble89"
                target="_blank"
                rel="noopener noreferrer"
                title="Primary GitHub: @Adityakamble89"
                className="p-3.5 rounded-xl bg-surface-elevated border border-surface-border text-fg hover:border-accent hover:text-accent transition-all"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/aditya-kamble-051a84213/"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn Profile"
                className="p-3.5 rounded-xl bg-surface-elevated border border-surface-border text-fg hover:border-accent hover:text-accent transition-all"
              >
                <Linkedin className="w-4 h-4 text-sky-400" />
              </a>
            </div>
          </div>

          {/* Quick Terminal Meta Pills */}
          <div className="hero-cta flex flex-wrap items-center gap-2 pt-2 border-t border-surface-border">
            <span className="text-xs font-mono text-muted-fg mr-2 flex items-center gap-1">
              <Terminal className="w-3.5 h-3.5 text-accent" /> stack:
            </span>
            {['Node.js', 'Express', 'FastAPI', 'MongoDB', 'PostgreSQL', 'Git & CI/CD', 'JWT/RBAC'].map((item) => (
              <span
                key={item}
                className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-surface border border-surface-border text-muted-fg hover:text-fg hover:border-accent/40 transition-colors"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN: The Bracket Portrait & Neon Glow */}
        <div className="lg:col-span-5 flex items-center justify-center relative select-none">
          <div className="bracket-wrapper relative w-full max-w-[420px] aspect-square flex items-center justify-center">
            
            {/* Breathing Radial Glow */}
            <div
              ref={glowRef}
              className="absolute inset-0 rounded-full pointer-events-none -z-10"
              style={{
                background: isDark
                  ? 'radial-gradient(circle, rgba(16, 185, 129, 0.35) 0%, rgba(6, 182, 212, 0.15) 45%, transparent 70%)'
                  : 'radial-gradient(circle, rgba(5, 150, 105, 0.25) 0%, rgba(14, 165, 233, 0.1) 45%, transparent 70%)',
                mixBlendMode: isDark ? 'screen' : 'multiply',
                filter: 'blur(35px)',
              }}
            />

            {/* Left Bracket SVG */}
            <div className="absolute left-0 top-0 bottom-0 flex items-center -translate-x-3 sm:-translate-x-6 z-20 pointer-events-none">
              <svg
                viewBox="0 0 100 200"
                className="w-16 sm:w-24 h-56 sm:h-80 text-accent filter drop-shadow-[0_0_12px_rgba(16,185,129,0.4)]"
                fill="none"
              >
                <path
                  ref={leftBracketRef}
                  d="M 80,10 C 30,10 30,70 30,100 C 30,130 30,190 80,190"
                  stroke="currentColor"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeDasharray="400"
                  strokeDashoffset="0"
                />
              </svg>
            </div>

            {/* Portrait Image Container */}
            <div
              ref={portraitRef}
              className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-3xl overflow-hidden p-1.5 bg-gradient-to-b from-accent/40 via-surface-border to-transparent shadow-2xl group"
            >
              <div className="w-full h-full rounded-[22px] overflow-hidden relative bg-surface-elevated">
                <img
                  src="/aditya.jpg"
                  alt="Aditya Kamble - Backend Software Engineer"
                  className="w-full h-full object-cover object-top filter grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                  onError={(e) => {
                    // Fallback visual avatar if image path fails
                    e.target.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent opacity-40 group-hover:opacity-10 transition-opacity" />
              </div>
            </div>

            {/* Right Bracket SVG */}
            <div className="absolute right-0 top-0 bottom-0 flex items-center translate-x-3 sm:translate-x-6 z-20 pointer-events-none">
              <svg
                viewBox="0 0 100 200"
                className="w-16 sm:w-24 h-56 sm:h-80 text-accent filter drop-shadow-[0_0_12px_rgba(16,185,129,0.4)]"
                fill="none"
              >
                <path
                  ref={rightBracketRef}
                  d="M 20,10 C 70,10 70,70 70,100 C 70,130 70,190 20,190"
                  stroke="currentColor"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeDasharray="400"
                  strokeDashoffset="0"
                />
              </svg>
            </div>

            {/* Floating Metric Badges */}
            <div className="floating-badge absolute -top-4 -right-4 glass-panel-elevated px-3.5 py-2 rounded-xl flex items-center gap-2 border border-surface-border shadow-xl z-30">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <div className="flex flex-col">
                <span className="font-mono text-[10px] text-muted-fg leading-none">Reliability</span>
                <span className="font-mono text-xs font-bold text-fg">99.99% Uptime</span>
              </div>
            </div>

            <div className="floating-badge absolute -bottom-4 -left-4 glass-panel-elevated px-3.5 py-2 rounded-xl flex items-center gap-2 border border-surface-border shadow-xl z-30">
              <Server className="w-4 h-4 text-cyan-400" />
              <div className="flex flex-col">
                <span className="font-mono text-[10px] text-muted-fg leading-none">Response</span>
                <span className="font-mono text-xs font-bold text-fg">&lt; 50ms Latency</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
