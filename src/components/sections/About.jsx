import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { 
  Server, 
  Database, 
  Cpu, 
  Terminal, 
  CheckCircle, 
  ShieldCheck, 
  Zap, 
  Flame,
  GitBranch,
  Layers,
  Code2,
  Workflow
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ENGINEERING_PILLARS = [
  {
    title: 'High-Throughput API Architecture',
    subtitle: 'Event-Driven & Asynchronous Pipelines',
    icon: Server,
    badge: 'Core Focus',
    desc: 'Specializing in non-blocking event loops, streaming request parsing, and rate-limited REST/WebSocket microservices in Node.js and FastAPI that maintain sub-50ms latencies under heavy concurrency.',
    highlights: ['Microservice Decomposition', 'Asynchronous Stream Processing', 'Non-blocking I/O & Event Loops'],
  },
  {
    title: 'Database Engineering & Aggregations',
    subtitle: 'NoSQL & Relational Optimization',
    icon: Database,
    badge: 'Data Layer',
    desc: 'Deep expertise in multi-stage MongoDB aggregation pipelines ($lookup, $facet, $unwind), compound indexing, query execution plan analysis, and PostgreSQL ACID transactions for fault-tolerant data stores.',
    highlights: ['Multi-Stage Aggregation Pipelines', 'Compound Index Optimization', 'Multi-Tenant Schema Partitioning'],
  },
  {
    title: 'System Security & Access Control',
    subtitle: 'Zero-Trust Authentication & RBAC',
    icon: ShieldCheck,
    badge: 'Security',
    desc: 'Architecting zero-trust authentication using stateless JWTs with automated refresh token rotation, bcrypt password hashing, and granular hierarchical Role-Based Access Control (RBAC) with audit logs.',
    highlights: ['Hierarchical RBAC (6-Tier)', 'Stateless JWT & Refresh Rotation', 'Immutable Audit Trails'],
  },
  {
    title: 'Containerization & CI/CD Pipelines',
    subtitle: 'DevOps & Cloud Deployments',
    icon: Layers,
    badge: 'Infrastructure',
    desc: 'Building Docker multi-stage container images, configuring environment isolation, standardizing automated testing with Git pipelines, and integrating cloud asset buckets like Cloudinary and AWS.',
    highlights: ['Multi-stage Docker Builds', 'Automated Health Checks', 'Cloud Storage & CDN Pipelines'],
  },
];

const SKILL_CATEGORIES = [
  {
    name: 'Backend Core',
    skills: ['Node.js', 'Express.js', 'FastAPI', 'Python', 'RESTful APIs', 'WebSockets'],
  },
  {
    name: 'Databases & Storage',
    skills: ['MongoDB (Aggregations)', 'Mongoose ODM', 'PostgreSQL', 'Redis Caching', 'Data Modeling'],
  },
  {
    name: 'Security & DevOps',
    skills: ['JWT / Auth Rotation', 'RBAC Permissioning', 'Docker Containers', 'Git CI/CD', 'Multer Streaming'],
  },
  {
    name: 'Tooling & Protocols',
    skills: ['Postman', 'Linux / Bash', 'OpenAPI / Swagger', 'JSON Web Tokens', 'Bcrypt'],
  },
];

const About = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const pillarCards = containerRef.current.querySelectorAll('.pillar-card');
      pillarCards.forEach((card) => {
        gsap.from(card, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
          },
        });
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="about"
      className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      {/* Section Header */}
      <div className="mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-elevated border border-surface-border mb-3">
          <Terminal className="w-3.5 h-3.5 text-accent" />
          <span className="font-mono text-xs text-muted-fg uppercase tracking-wider">
            Engineering Architecture & Capabilities
          </span>
        </div>
        <h2 className="text-section-title font-headline font-bold text-fg">
          Architecting under the hood.
        </h2>
        <p className="text-base text-muted-fg max-w-2xl mt-2">
          Designing scalable backend infrastructure, resilient database pipelines, and high-performance microservices engineered for production reliability.
        </p>
      </div>

      {/* Grid: Left Scrolling Pillars vs Right Sticky Stack Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start relative">
        
        {/* Left Column: Engineering Focus Pillars */}
        <div className="lg:col-span-7 space-y-8">
          {ENGINEERING_PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="pillar-card glass-panel rounded-3xl p-6 sm:p-8 border border-surface-border hover:border-accent/50 transition-all duration-300 relative group"
              >
                {/* Header Tag & Badge */}
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="font-mono text-xs font-semibold text-accent px-2.5 py-1 rounded-md bg-accent/10 border border-accent/20">
                    PILLAR 0{idx + 1}
                  </span>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-muted-fg px-2.5 py-1 rounded-md bg-surface-elevated border border-surface-border">
                    {pillar.badge}
                  </span>
                </div>

                <div className="flex items-start gap-4 mb-3">
                  <div className="p-3 rounded-2xl bg-surface-elevated border border-surface-border text-accent group-hover:bg-accent group-hover:text-black transition-colors duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-headline font-bold text-fg">
                      {pillar.title}
                    </h3>
                    <p className="text-sm font-mono text-muted-fg mt-0.5">
                      {pillar.subtitle}
                    </p>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-muted-fg leading-relaxed mb-6">
                  {pillar.desc}
                </p>

                {/* Highlights */}
                <div className="space-y-2 pt-4 border-t border-surface-border/60">
                  <span className="text-xs font-mono text-muted-fg block">Core Competencies:</span>
                  <div className="flex flex-wrap gap-2">
                    {pillar.highlights.map((item) => (
                      <span
                        key={item}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono bg-surface-elevated border border-surface-border text-fg"
                      >
                        <CheckCircle className="w-3 h-3 text-accent" />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Column: Sticky Clean Tech Stack Card (No cross-section pin collision) */}
        <div className="lg:col-span-5 w-full sticky top-24 self-start">
          <div className="glass-panel-elevated rounded-3xl p-6 sm:p-8 border border-surface-border shadow-2xl relative overflow-hidden">
            
            {/* Terminal Header */}
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-surface-border">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                <span className="ml-2 font-mono text-xs text-muted-fg">aditya@backend:~</span>
              </div>
              <span className="font-mono text-[11px] text-accent flex items-center gap-1">
                <Flame className="w-3.5 h-3.5 text-accent" /> ARCH_SPEC
              </span>
            </div>

            {/* Core Philosophy / Terminal Output */}
            <div className="mb-6 bg-surface/80 rounded-xl p-4 font-mono text-xs border border-surface-border space-y-1.5 text-muted-fg">
              <p className="text-fg">
                <span className="text-accent">&gt;</span> cat engineering_philosophy.txt
              </p>
              <p className="text-[11px] text-muted-fg leading-relaxed">
                "Clean boundaries, idempotent operations, declarative schemas, and zero unhandled rejections."
              </p>
            </div>

            {/* Monospace Tech Stack Categories */}
            <div className="space-y-5">
              {SKILL_CATEGORIES.map((cat) => (
                <div key={cat.name} className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono text-muted-fg">
                    <span className="flex items-center gap-1.5">
                      <GitBranch className="w-3.5 h-3.5 text-accent" /> {cat.name}
                    </span>
                    <span className="text-[10px] text-muted-fg/60">({cat.skills.length})</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-lg text-xs font-mono bg-surface border border-surface-border text-fg hover:border-accent hover:text-accent hover:bg-accent/5 transition-colors cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Action */}
            <div className="mt-8 pt-4 border-t border-surface-border flex items-center justify-between">
              <span className="font-mono text-xs text-muted-fg">Ready for a backend challenge?</span>
              <a
                href="#contact"
                className="font-mono text-xs font-semibold text-accent hover:underline flex items-center gap-1"
              >
                <span>Hire Aditya</span> &rarr;
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
