import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import {
  Database,
  Server,
  Cpu,
  Layers,
  Terminal,
  Zap,
  ShieldCheck,
  Activity,
  Workflow,
  Radio
} from 'lucide-react';

const TECH_ITEMS = [
  {
    name: 'Node.js',
    category: 'Runtime',
    role: 'Event-driven asynchronous backend runtime & streams',
    color: '#22C55E',
    icon: Server,
  },
  {
    name: 'Express.js',
    category: 'Framework',
    role: 'RESTful routing, middleware chains & error handlers',
    color: '#94A3B8',
    icon: Workflow,
  },
  {
    name: 'MongoDB',
    category: 'Database',
    role: 'Complex aggregation pipelines, indexing & document stores',
    color: '#10B981',
    icon: Database,
  },
  {
    name: 'FastAPI',
    category: 'Python Async',
    role: 'High-performance microservices, OpenAPI & Pydantic models',
    color: '#06B6D4',
    icon: Zap,
  },
  {
    name: 'PostgreSQL',
    category: 'Relational DB',
    role: 'ACID transactions, relational schemas & indexing',
    color: '#3B82F6',
    icon: Database,
  },
  {
    name: 'React.js',
    category: 'Frontend',
    role: 'Dynamic dashboard state management & component architecture',
    color: '#38BDF8',
    icon: Layers,
  },
  {
    name: 'Python',
    category: 'Language',
    role: 'AI integrations, data processing & automation scripts',
    color: '#FACC15',
    icon: Cpu,
  },
  {
    name: 'JWT & RBAC',
    category: 'Security',
    role: 'Stateless auth, token rotation & role-based permissions',
    color: '#A855F7',
    icon: ShieldCheck,
  },
  {
    name: 'CI/CD & GitHub',
    category: 'DevOps & CI/CD',
    role: 'Automated CI/CD pipelines, Git versioning & repository workflows',
    color: '#F43F5E',
    icon: Terminal,
  },
];

const TechWave = () => {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  // Duplicate items for continuous infinite marquee
  const displayItems = [...TECH_ITEMS, ...TECH_ITEMS, ...TECH_ITEMS];

  useGSAP(
    () => {
      const track = trackRef.current;
      if (!track) return;

      // Mathematical Sine-Wave layout applied to each item
      const nodes = track.querySelectorAll('.tech-node');
      const amplitude = 32; // Vertical wave height
      const frequency = 0.55; // Wave frequency

      nodes.forEach((node, index) => {
        const yOffset = Math.sin(index * frequency) * amplitude;
        gsap.set(node, { y: yOffset });
      });

      // Infinite Horizontal Marquee
      const totalWidth = track.scrollWidth / 3;
      const tween = gsap.to(track, {
        x: -totalWidth,
        duration: 35,
        ease: 'none',
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth),
        },
      });

      if (isPaused) {
        tween.pause();
      } else {
        tween.play();
      }

      return () => {
        tween.kill();
      };
    },
    { scope: containerRef, dependencies: [isPaused] }
  );

  return (
    <section
      ref={containerRef}
      id="tech-wave"
      className="relative py-17 sm:py-22 overflow-hidden select-none border-y border-surface-border bg-surface/30"
    >
      {/* Background Section Headline / Antigravity Badge */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-elevated border border-surface-border mb-3">
          <Radio className="w-3.5 h-3.5 text-accent animate-pulse" />
          <span className="font-mono text-xs text-muted-fg uppercase tracking-wider">
            Engineered Tooling & Infrastructure
          </span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-headline font-bold text-fg">
          The Backend Powerhouse
        </h2>
        <p className="text-sm sm:text-base text-muted-fg max-w-xl mx-auto mt-2">
          Mathematical sine-wave layout inspired by modern interactive physics. Hover over any node to inspect capabilities.
        </p>
      </div>

      {/* Sine-Wave Infinite Carousel Track */}
      <div
        className="relative py-14 sm:py-20 flex items-center overflow-hidden min-h-[270px]"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => {
          setIsPaused(false);
          setActiveItem(null);
        }}
      >
        {/* Left & Right Gradient Fade Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-bg via-bg/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-bg via-bg/80 to-transparent z-20 pointer-events-none" />

        {/* Moving Track */}
        <div
          ref={trackRef}
          className="flex items-center gap-8 whitespace-nowrap will-change-transform py-10 px-4"
        >
          {displayItems.map((tech, idx) => {
            const IconComponent = tech.icon;
            const isCurrentHovered = activeItem === `${tech.name}-${idx}`;

            return (
              <div
                key={`${tech.name}-${idx}`}
                className="tech-node relative flex-shrink-0 group cursor-pointer transition-transform duration-300 ease-out"
                onMouseEnter={() => setActiveItem(`${tech.name}-${idx}`)}
                data-cursor="hover"
                data-cursor-text={tech.name}
              >
                {/* Circular UI Node */}
                <div
                  className={`w-20 h-20 sm:w-24 sm:h-24 rounded-2xl sm:rounded-3xl glass-panel-elevated p-3 flex flex-col items-center justify-center gap-1.5 transition-all duration-300 ${isCurrentHovered
                    ? 'scale-115 border-accent shadow-[0_0_30px_rgba(16,185,129,0.35)] bg-surface-elevated z-30'
                    : 'border-surface-border group-hover:border-accent/60'
                    }`}
                >
                  <IconComponent
                    className="w-7 h-7 sm:w-8 sm:h-8 transition-colors duration-300"
                    style={{ color: isCurrentHovered ? tech.color : undefined }}
                  />
                  <span className="font-mono text-[11px] sm:text-xs font-semibold text-fg tracking-tight">
                    {tech.name}
                  </span>
                </div>

                {/* Interactive Tooltip Card on Hover */}
                {isCurrentHovered && (
                  <div className="absolute top-[calc(100%+10px)] left-1/2 -translate-x-1/2 w-64 glass-panel-elevated p-3 rounded-xl border border-accent/40 shadow-2xl z-50 animate-in fade-in zoom-in-95 duration-200 pointer-events-none">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="font-mono text-xs font-bold text-fg">{tech.name}</span>
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-accent/15 text-accent">
                        {tech.category}
                      </span>
                    </div>
                    <p className="text-[11px] text-muted-fg font-sans leading-tight">
                      {tech.role}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechWave;
