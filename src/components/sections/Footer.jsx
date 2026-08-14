import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import confetti from 'canvas-confetti';
import { 
  Mail, 
  Linkedin, 
  Github, 
  FileText, 
  ArrowUpRight, 
  Copy, 
  Check, 
  Clock, 
  Terminal, 
  Sparkles,
  ArrowUp,
  Server,
  Workflow,
  Cpu
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// Magnetic Button with GSAP physics
const MagneticButton = ({ children, href, onClick, className = '' }) => {
  const btnRef = useRef(null);

  useEffect(() => {
    const btn = btnRef.current;
    if (!btn) return;

    const handleMouseMove = (e) => {
      const rect = btn.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;
      const dist = Math.hypot(dx, dy);

      if (dist < 80) {
        gsap.to(btn, {
          x: dx * 0.35,
          y: dy * 0.35,
          duration: 0.3,
          ease: 'power2.out',
          overwrite: 'auto',
        });
      } else {
        gsap.to(btn, {
          x: 0,
          y: 0,
          duration: 0.6,
          ease: 'elastic.out(1, 0.3)',
          overwrite: 'auto',
        });
      }
    };

    const handleMouseLeave = () => {
      gsap.to(btn, {
        x: 0,
        y: 0,
        duration: 0.6,
        ease: 'elastic.out(1, 0.3)',
        overwrite: 'auto',
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    btn.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      btn.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const Component = href ? 'a' : 'button';
  const props = href
    ? {
        href,
        target: href.startsWith('http') ? '_blank' : undefined,
        rel: href.startsWith('http') ? 'noopener noreferrer' : undefined,
      }
    : { onClick };

  return (
    <Component
      ref={btnRef}
      {...props}
      data-cursor="hover"
      className={`relative inline-flex items-center justify-center gap-2 select-none will-change-transform transition-colors duration-200 ${className}`}
    >
      {children}
    </Component>
  );
};

const Footer = () => {
  const containerRef = useRef(null);
  const underlineRef = useRef(null);
  const [copied, setCopied] = useState(false);
  const [time, setTime] = useState('');

  // Live IST Clock
  useEffect(() => {
    const updateTime = () => {
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setTime(new Intl.DateTimeFormat('en-US', options).format(new Date()));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useGSAP(
    () => {
      // Headline reveal
      gsap.from('.footer-headline-line', {
        y: 60,
        opacity: 0,
        stagger: 0.18,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
        },
      });

      // Animated underline
      gsap.from(underlineRef.current, {
        scaleX: 0,
        transformOrigin: 'left center',
        duration: 0.9,
        ease: 'expo.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 70%',
        },
      });

      // Big text reveal
      gsap.from('.footer-massive-text', {
        y: 80,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.footer-massive-text',
          start: 'top 90%',
        },
      });
    },
    { scope: containerRef }
  );

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText('aadityakamble89@gmail.com');
    setCopied(true);
    
    // Trigger celebratory micro-confetti
    confetti({
      particleCount: 45,
      spread: 65,
      origin: { y: 0.85 },
      colors: ['#10B981', '#06B6D4', '#3B82F6'],
    });

    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      ref={containerRef}
      id="contact"
      className="relative pt-24 pb-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Top Main Call-to-Action Panel */}
      <div className="glass-panel-elevated rounded-3xl sm:rounded-[40px] p-8 sm:p-14 lg:p-20 border border-surface-border relative overflow-hidden mb-20 shadow-2xl">
        
        {/* Background Ambient Glow */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent/15 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-4xl">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface border border-surface-border mb-6">
            <Sparkles className="w-4 h-4 text-accent animate-pulse" />
            <span className="font-mono text-xs text-muted-fg uppercase tracking-wide">
              Initiate Collaboration
            </span>
          </div>

          {/* Massive Headline incorporating BACKEND */}
          <h2 className="text-hero-title font-headline font-bold text-fg leading-[1.05] tracking-tight mb-8">
            <span className="footer-headline-line block">Let's build</span>
            <span className="footer-headline-line block text-muted-fg/70">scalable backend</span>
            <span className="footer-headline-line block relative w-fit">
              <span className="relative z-10 text-gradient-emerald">systems that scale.</span>
              <span
                ref={underlineRef}
                className="absolute bottom-1 sm:bottom-3 left-0 w-full h-3 sm:h-5 bg-accent/25 -z-0 rounded-sm"
              />
            </span>
          </h2>

          <p className="text-base sm:text-xl text-muted-fg max-w-2xl leading-relaxed mb-12">
            Looking for a backend engineer who obsesses over low latency, robust data models, and clean APIs?
            Let's connect and architect scalable solutions together.
          </p>

          {/* Magnetic CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-5">
            
            {/* Primary Email Magnetic CTA */}
            <MagneticButton
              href="mailto:aadityakamble89@gmail.com"
              className="px-8 py-4 rounded-2xl bg-accent text-black font-mono text-sm font-bold tracking-tight hover:bg-accent-hover hover:shadow-[0_0_30px_rgba(16,185,129,0.5)]"
            >
              <Mail className="w-4 h-4" />
              <span>aadityakamble89@gmail.com</span>
              <ArrowUpRight className="w-4 h-4" />
            </MagneticButton>

            {/* Copy Button */}
            <MagneticButton
              onClick={handleCopyEmail}
              className="px-5 py-4 rounded-2xl bg-surface-elevated border border-surface-border text-fg font-mono text-xs font-semibold hover:border-accent hover:text-accent"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-accent" />
                  <span className="text-accent">Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-muted-fg" />
                  <span>Copy Email</span>
                </>
              )}
            </MagneticButton>

            {/* LinkedIn Magnetic Button */}
            <MagneticButton
              href="https://www.linkedin.com/in/aditya-kamble-051a84213/"
              className="px-6 py-4 rounded-2xl bg-surface-elevated border border-surface-border text-fg font-mono text-xs font-semibold hover:border-accent hover:text-accent"
            >
              <Linkedin className="w-4 h-4 text-sky-400" />
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-muted-fg" />
            </MagneticButton>

            {/* Primary GitHub Magnetic Button */}
            <MagneticButton
              href="https://github.com/Adityakamble89"
              className="px-6 py-4 rounded-2xl bg-surface-elevated border border-surface-border text-fg font-mono text-xs font-semibold hover:border-accent hover:text-accent"
            >
              <Github className="w-4 h-4" />
              <span>GitHub (89)</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-muted-fg" />
            </MagneticButton>

            {/* Secondary GitHub Magnetic Button */}
            <MagneticButton
              href="https://github.com/Adityakamble23"
              className="px-6 py-4 rounded-2xl bg-surface-elevated border border-surface-border text-fg font-mono text-xs font-semibold hover:border-accent hover:text-accent"
            >
              <Github className="w-4 h-4 text-emerald-400" />
              <span>GitHub (23)</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-muted-fg" />
            </MagneticButton>

          </div>
        </div>

      </div>

      {/* Google Antigravity-Style Grid Links (Product / Resources / About) */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 py-12 border-t border-surface-border font-sans text-sm">
        <div>
          <h4 className="font-mono text-xs text-muted-fg uppercase tracking-wider mb-4 font-semibold">
            Architecture
          </h4>
          <ul className="space-y-2.5 text-muted-fg">
            <li><a href="#projects" className="hover:text-accent transition-colors">Video Platform</a></li>
            <li><a href="#projects" className="hover:text-accent transition-colors">AI Interview Engine</a></li>
            <li><a href="#projects" className="hover:text-accent transition-colors">PharmaSense Backend</a></li>
            <li><a href="#tech-wave" className="hover:text-accent transition-colors">Tooling Wave</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-mono text-xs text-muted-fg uppercase tracking-wider mb-4 font-semibold">
            Experience
          </h4>
          <ul className="space-y-2.5 text-muted-fg">
            <li><a href="#experience" className="hover:text-accent transition-colors">PepperStack (2026)</a></li>
            <li><a href="#experience" className="hover:text-accent transition-colors">Biyani Technology</a></li>
            <li><a href="#about" className="hover:text-accent transition-colors">Core Philosophy</a></li>
            <li><a href="#about" className="hover:text-accent transition-colors">Technical Stack</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-mono text-xs text-muted-fg uppercase tracking-wider mb-4 font-semibold">
            Track & Credentials
          </h4>
          <ul className="space-y-2.5 text-muted-fg">
            <li><a href="#certificates" className="hover:text-accent transition-colors">Verified Certificates (5)</a></li>
            <li><a href="#certificates" className="hover:text-accent transition-colors">master.dev Credentials</a></li>
            <li><a href="#education" className="hover:text-accent transition-colors">B.Tech in CSE (2022–25)</a></li>
            <li><a href="#education" className="hover:text-accent transition-colors">Diploma in CE (2020–22)</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-mono text-xs text-muted-fg uppercase tracking-wider mb-4 font-semibold">
            Direct Connect
          </h4>
          <ul className="space-y-2.5 text-muted-fg">
            <li>
              <a href="mailto:aadityakamble89@gmail.com" className="hover:text-accent transition-colors flex items-center gap-1">
                <span>aadityakamble89@gmail.com</span> <ArrowUpRight className="w-3 h-3 text-muted-fg" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/aditya-kamble-051a84213/" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors flex items-center gap-1">
                <span>LinkedIn Profile</span> <ArrowUpRight className="w-3 h-3 text-muted-fg" />
              </a>
            </li>
            <li>
              <a href="https://github.com/Adityakamble89" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors flex items-center gap-1">
                <span>GitHub (@Adityakamble89)</span> <ArrowUpRight className="w-3 h-3 text-muted-fg" />
              </a>
            </li>
            <li>
              <a href="https://github.com/Adityakamble23" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors flex items-center gap-1">
                <span>GitHub (@Adityakamble23)</span> <ArrowUpRight className="w-3 h-3 text-muted-fg" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Google Antigravity-Style Massive Full-Width Wordmark */}
      <div className="py-8 select-none overflow-hidden text-center">
        <h1 className="footer-massive-text font-headline font-extrabold text-[clamp(3.5rem,13vw,13rem)] leading-none tracking-tighter text-fg opacity-90 transition-all hover:opacity-100">
          BACKEND
        </h1>
      </div>

      {/* Bottom Metadata & Copyright Bar */}
      <div className="pt-6 border-t border-surface-border flex flex-col md:flex-row items-center justify-between gap-6 font-mono text-xs text-muted-fg">
        
        {/* Left: Timezone & Live Status */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-surface-elevated border border-surface-border">
            <Clock className="w-3.5 h-3.5 text-accent" />
            <span>India (IST): {time || 'Loading...'}</span>
          </div>
          <span className="hidden sm:inline text-muted-fg/40">•</span>
          <span className="hidden sm:inline text-accent flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
            Active & Responsive
          </span>
        </div>

        {/* Center: Monogram */}
        <div className="text-center">
          <span>&copy; {new Date().getFullYear()} Aditya Kamble • Engineered for high scale.</span>
        </div>

        {/* Right: Scroll to top */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-1.5 text-fg hover:text-accent transition-colors p-2 rounded-lg bg-surface-elevated border border-surface-border"
          aria-label="Scroll to top"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>

      </div>
    </footer>
  );
};

export default Footer;
