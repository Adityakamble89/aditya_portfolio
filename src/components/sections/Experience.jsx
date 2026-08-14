import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Shield, Cpu, Layers, ExternalLink } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const EXPERIENCES = [
  {
    role: 'Backend Software Engineer',
    company: 'PepperStack',
    period: '2026 — Present',
    type: 'Full-Time / Core Team',
    location: 'India',
    side: 'left',
    summary: 'Spearheading backend microservice architecture, multi-tenant databases, and security systems for the PharmaSense platform.',
    bullets: [
      'Engineered core RESTful APIs with Node.js, Express, and MongoDB, handling secure transactional data and audit trails.',
      'Designed and deployed fine-grained Role-Based Access Control (RBAC) and stateless JWT authentication with automated token refresh.',
      'Created advanced MongoDB aggregation pipelines for complex analytics, batch processing, and inventory reporting.',
      'Maintained version-controlled backend architecture, clean modular code, and team collaboration via Git and GitHub.',
    ],
    tech: ['Node.js', 'Express', 'MongoDB', 'Mongoose', 'JWT/RBAC', 'Git & GitHub', 'PharmaSense Arch'],
  },
  {
    role: 'Flutter Developer Intern',
    company: 'Biyani Technology',
    period: '2025',
    type: 'Internship',
    location: 'India',
    side: 'right',
    summary: 'Collaborated directly on client requirement engineering, API integrations, and robust state-management bug resolution across production portfolio apps.',
    bullets: [
      'Conducted client discovery sessions to translate business domain requirements into concrete technical application specs.',
      'Diagnosed and resolved critical asynchronous race conditions and state inconsistencies across active portfolio applications.',
      'Collaborated closely with backend teams to optimize API payload structures and error handling protocols.',
      'Improved cross-platform UI responsiveness and reduced crash rates across diverse mobile devices.',
    ],
    tech: ['Flutter', 'Dart', 'REST API Integration', 'State Management', 'Bug Resolution', 'Client Discovery'],
  },
];

const Experience = () => {
  const containerRef = useRef(null);
  const pathRef = useRef(null);

  useGSAP(
    () => {
      const path = pathRef.current;
      if (!path) return;

      const pathLength = path.getTotalLength();
      gsap.set(path, {
        strokeDasharray: pathLength,
        strokeDashoffset: pathLength,
      });

      // Scrub-linked SVG line drawing on scroll
      gsap.to(path, {
        strokeDashoffset: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 70%',
          end: 'bottom 80%',
          scrub: 0.8,
        },
      });

      // Alternating slide-in animations for left and right nodes
      const leftNodes = containerRef.current.querySelectorAll('.exp-node-left');
      const rightNodes = containerRef.current.querySelectorAll('.exp-node-right');

      leftNodes.forEach((node) => {
        gsap.from(node, {
          x: -60,
          opacity: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: node,
            start: 'top 80%',
          },
        });
      });

      rightNodes.forEach((node) => {
        gsap.from(node, {
          x: 60,
          opacity: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: node,
            start: 'top 80%',
          },
        });
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="experience"
      className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-elevated border border-surface-border mb-3">
          <Briefcase className="w-3.5 h-3.5 text-accent" />
          <span className="font-mono text-xs text-muted-fg uppercase tracking-wider">
            Career Timeline & Impact
          </span>
        </div>
        <h2 className="text-section-title font-headline font-bold text-fg">
          Engineering in Production
        </h2>
        <p className="text-base text-muted-fg mt-2">
          Real-world industry track record building production systems and collaborating with agile engineering teams.
        </p>
      </div>

      {/* Vertical Timeline Container */}
      <div className="relative">
        
        {/* Central Scrub-Linked SVG Timeline (Desktop) */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-8 pointer-events-none z-10">
          <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 32 1000">
            {/* Background Track */}
            <line
              x1="16"
              y1="0"
              x2="16"
              y2="1000"
              stroke="var(--surface-border)"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
            {/* Active Scrub Line */}
            <path
              ref={pathRef}
              d="M 16,0 L 16,1000"
              fill="none"
              stroke="var(--accent)"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Experience Cards */}
        <div className="space-y-16 md:space-y-24">
          {EXPERIENCES.map((exp, idx) => {
            const isLeft = exp.side === 'left';

            return (
              <div
                key={exp.company}
                className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
                  isLeft ? '' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Center Point Indicator (Desktop) */}
                <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 items-center justify-center">
                  <div className="w-9 h-9 rounded-full bg-surface-elevated border-2 border-accent flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.5)]">
                    <span className="w-2.5 h-2.5 rounded-full bg-accent animate-ping" />
                  </div>
                </div>

                {/* Left Side Content Card */}
                {isLeft ? (
                  <div className="exp-node-left md:pr-12 md:text-right">
                    <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-surface-border hover:border-accent/40 transition-all duration-300 shadow-xl group">
                      <div className="flex flex-wrap items-center justify-between md:justify-end gap-3 mb-3">
                        <span className="font-mono text-xs text-accent px-3 py-1 rounded-full bg-accent/10 border border-accent/20">
                          {exp.period}
                        </span>
                        <span className="font-mono text-[11px] text-muted-fg">
                          {exp.type}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-headline font-bold text-fg group-hover:text-accent transition-colors">
                        {exp.role}
                      </h3>
                      <p className="font-mono text-sm text-accent font-semibold mb-4">
                        @{exp.company}
                      </p>

                      <p className="text-sm text-muted-fg leading-relaxed mb-5 md:text-right text-left">
                        {exp.summary}
                      </p>

                      <ul className="space-y-2 mb-6 text-left">
                        {exp.bullets.map((b, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-muted-fg">
                            <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-1.5 md:justify-end">
                        {exp.tech.map((t) => (
                          <span
                            key={t}
                            className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-surface-elevated border border-surface-border text-fg"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="hidden md:block" />
                )}

                {/* Right Side Content Card */}
                {!isLeft ? (
                  <div className="exp-node-right md:pl-12 md:col-start-2">
                    <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-surface-border hover:border-accent/40 transition-all duration-300 shadow-xl group">
                      <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                        <span className="font-mono text-xs text-accent px-3 py-1 rounded-full bg-accent/10 border border-accent/20">
                          {exp.period}
                        </span>
                        <span className="font-mono text-[11px] text-muted-fg">
                          {exp.type}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-headline font-bold text-fg group-hover:text-accent transition-colors">
                        {exp.role}
                      </h3>
                      <p className="font-mono text-sm text-accent font-semibold mb-4">
                        @{exp.company}
                      </p>

                      <p className="text-sm text-muted-fg leading-relaxed mb-5">
                        {exp.summary}
                      </p>

                      <ul className="space-y-2 mb-6">
                        {exp.bullets.map((b, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-muted-fg">
                            <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-1.5">
                        {exp.tech.map((t) => (
                          <span
                            key={t}
                            className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-surface-elevated border border-surface-border text-fg"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="hidden md:block" />
                )}

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
