import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { 
  ExternalLink, 
  Github, 
  Layers, 
  Cpu, 
  Database, 
  Video, 
  Mic, 
  ShieldCheck, 
  ArrowUpRight, 
  Terminal,
  Activity,
  Workflow,
  Sparkles
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const PROJECTS = [
  {
    id: 'video-platform',
    title: 'High-Throughput Video Hosting & Streaming Platform',
    category: 'Distributed Media Backend',
    featuredTag: 'Production Architecture',
    desc: 'An enterprise-grade media platform engineered with a robust asynchronous file upload pipeline, chunked processing, and complex multi-stage MongoDB aggregation pipelines for watch-history analytics and recommendation feeds.',
    architecture: [
      'Multi-part video & image asset upload pipeline using Multer with streaming directly to Cloudinary storage.',
      'Complex MongoDB aggregation pipelines ($lookup, $facet, $unwind) for subscriber metrics, video engagement, and nested comment trees.',
      'Dual-token JWT authentication architecture with access/refresh token rotation and Bcrypt hashing.',
      'Engineered custom pagination plugins and compound index optimization reducing query execution time by 40%.',
    ],
    tech: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'Multer', 'Cloudinary', 'JWT Auth', 'Bcrypt'],
    gradient: 'from-emerald-500/20 via-teal-500/10 to-transparent',
    accentColor: '#10B981',
    mockupType: 'video-pipeline',
    stats: [
      { label: 'Upload Throughput', val: 'Streamed Chunking' },
      { label: 'DB Query Latency', val: '< 35ms' },
      { label: 'Aggregation Depth', val: '7 Pipeline Stages' },
    ],
    github: 'https://github.com/Adityakamble89',
    live: '#',
  },
  {
    id: 'ai-interview',
    title: 'Real-Time AI Voice Mock Interview & Evaluation Engine',
    category: 'Full-Stack AI & Voice',
    featuredTag: 'Low-Latency Python & FastAPI',
    desc: 'An intelligent real-time conversational interview platform combining Web Speech API voice capture with an asynchronous FastAPI engine and LLM evaluation matrices to simulate rigorous technical hiring rounds.',
    architecture: [
      'Bidirectional speech interaction pipeline utilizing browser Web Speech API and low-latency audio processing loops.',
      'FastAPI asynchronous server orchestrating dynamic system prompts, technical question trees, and LLM completions via OpenRouter.',
      'Automated candidate performance scoring engine parsing structured JSON outputs for communication, technical depth, and problem-solving.',
      'Responsive full-stack user experience built with Next.js and real-time interview progress tracking.',
    ],
    tech: ['FastAPI', 'Python', 'Next.js', 'Web Speech API', 'OpenRouter LLM', 'WebSockets', 'Tailwind CSS'],
    gradient: 'from-cyan-500/20 via-blue-500/10 to-transparent',
    accentColor: '#06B6D4',
    mockupType: 'ai-voice',
    stats: [
      { label: 'Voice Roundtrip', val: '< 200ms' },
      { label: 'Evaluation Matrix', val: 'Multi-Rubric LLM' },
      { label: 'Async Concurrency', val: 'FastAPI Workers' },
    ],
    github: 'https://github.com/Adityakamble89',
    live: '#',
  },
  {
    id: 'pharmasense-engine',
    title: 'PharmaSense Multi-Tenant Enterprise Backend Architecture',
    category: 'Enterprise SaaS & RBAC',
    featuredTag: 'Healthcare Microservice',
    desc: 'Mission-critical backend microservice architecture for pharmaceutical batch tracking, regulatory audit logs, and granular role-based permissions at PepperStack.',
    architecture: [
      'Multi-tenant database tenancy isolation with secure organizational schema partitioning.',
      'Hierarchical Role-Based Access Control (RBAC) with 6 permission tiers protecting sensitive clinical inventory records.',
      'Event-driven transaction auditing system ensuring complete immutable traceability of every stock movement.',
      'Dockerized container pipeline with health check endpoints and automated environment configurations.',
    ],
    tech: ['Node.js', 'Express', 'MongoDB', 'Docker', 'JWT/RBAC', 'REST APIs', 'Postman'],
    gradient: 'from-purple-500/20 via-indigo-500/10 to-transparent',
    accentColor: '#8B5CF6',
    mockupType: 'rbac-system',
    stats: [
      { label: 'Security Model', val: '6-Tier RBAC' },
      { label: 'Audit Trail', val: 'Immutable Logs' },
      { label: 'Tenancy', val: 'Multi-Tenant' },
    ],
    github: 'https://github.com/Adityakamble23',
    live: '#',
  },
];

const Projects = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const projectBlocks = containerRef.current.querySelectorAll('.project-showcase');

      projectBlocks.forEach((block) => {
        const mockup = block.querySelector('.parallax-mockup');

        // Container entry animation
        gsap.from(block, {
          y: 60,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: block,
            start: 'top 80%',
          },
        });

        // Parallax image/mockup shift inside container
        if (mockup) {
          gsap.fromTo(
            mockup,
            { yPercent: -10, scale: 1.05 },
            {
              yPercent: 10,
              scale: 1.15,
              ease: 'none',
              scrollTrigger: {
                trigger: block,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1.2,
              },
            }
          );
        }
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="projects"
      className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      {/* Section Header */}
      <div className="text-left max-w-3xl mb-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-elevated border border-surface-border mb-3">
          <Terminal className="w-3.5 h-3.5 text-accent" />
          <span className="font-mono text-xs text-muted-fg uppercase tracking-wider">
            Featured Engineering Showcases
          </span>
        </div>
        <h2 className="text-section-title font-headline font-bold text-fg">
          Architected Systems & Work
        </h2>
        <p className="text-base text-muted-fg mt-2">
          Deep dive into real-world production architectures, aggregation pipelines, and high-performance backend implementations.
        </p>
      </div>

      {/* Large-Scale Editorial Project Blocks */}
      <div className="space-y-24">
        {PROJECTS.map((proj, idx) => (
          <div
            key={proj.id}
            data-cursor="hover"
            data-cursor-text="VIEW"
            className="project-showcase relative rounded-3xl p-6 sm:p-10 lg:p-12 glass-panel border border-surface-border hover:border-accent/40 transition-all duration-500 overflow-hidden group shadow-2xl"
          >
            {/* Background Subtle Gradient Glow */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${proj.gradient} opacity-40 pointer-events-none -z-10`}
            />

            {/* Top Meta Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-surface-border/80">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold text-accent px-3 py-1 rounded-full bg-accent/10 border border-accent/20">
                  PROJECT 0{idx + 1}
                </span>
                <span className="font-mono text-xs text-muted-fg">
                  {proj.category}
                </span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-surface-elevated border border-surface-border text-xs font-mono text-fg">
                <Sparkles className="w-3.5 h-3.5 text-accent" />
                <span>{proj.featuredTag}</span>
              </div>
            </div>

            {/* Grid Layout: Description & Specs vs Parallax Visual Mockup */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              
              {/* Left Details */}
              <div className="lg:col-span-7 space-y-6">
                <h3 className="text-2xl sm:text-4xl font-headline font-bold text-fg leading-tight">
                  {proj.title}
                </h3>

                <p className="text-sm sm:text-base text-muted-fg leading-relaxed">
                  {proj.desc}
                </p>

                {/* Architecture Highlights */}
                <div className="space-y-2.5 pt-2">
                  <span className="text-xs font-mono text-fg font-semibold flex items-center gap-1.5">
                    <Workflow className="w-4 h-4 text-accent" /> Key Architectural Innovations:
                  </span>
                  <ul className="space-y-2 pl-1">
                    {proj.architecture.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-muted-fg">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Stats Matrix */}
                <div className="grid grid-cols-3 gap-3 py-4 border-y border-surface-border/70">
                  {proj.stats.map((s) => (
                    <div key={s.label} className="flex flex-col">
                      <span className="font-mono text-[10px] text-muted-fg uppercase">{s.label}</span>
                      <span className="font-mono text-xs sm:text-sm font-bold text-fg mt-0.5">{s.val}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {proj.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-lg text-xs font-mono bg-surface-elevated border border-surface-border text-fg font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* CTAs */}
                <div className="flex items-center gap-4 pt-4">
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-surface-elevated border border-surface-border text-fg font-mono text-xs font-bold hover:border-accent hover:text-accent transition-all duration-300"
                  >
                    <Github className="w-4 h-4" />
                    <span>View Repository</span>
                  </a>
                  <a
                    href="mailto:aadityakamble89@gmail.com?subject=Inquiry%20regarding%20Backend%20Architecture"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-accent text-black font-mono text-xs font-bold hover:bg-accent-hover hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all duration-300"
                  >
                    <span>Discuss Implementation</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Right Visual Architecture Mockup with GSAP Parallax */}
              <div className="lg:col-span-5 h-[340px] sm:h-[420px] rounded-2xl overflow-hidden relative border border-surface-border bg-surface-elevated shadow-inner flex items-center justify-center p-6 select-none">
                
                <div className="parallax-mockup w-full h-full flex flex-col justify-between p-6 rounded-xl bg-bg/80 border border-surface-border shadow-2xl relative">
                  
                  {/* Mockup Header */}
                  <div className="flex items-center justify-between pb-3 border-b border-surface-border">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
                    </div>
                    <span className="font-mono text-[11px] text-muted-fg tracking-tighter">
                      system_node://pipeline.sh
                    </span>
                  </div>

                  {/* Flow Simulation Content */}
                  {proj.mockupType === 'video-pipeline' && (
                    <div className="space-y-4 my-auto font-mono text-xs">
                      <div className="p-3 rounded-lg bg-surface border border-surface-border flex items-center justify-between">
                        <span className="flex items-center gap-2 text-fg">
                          <Video className="w-4 h-4 text-emerald-400" /> [1] Ingestion & Multer Stream
                        </span>
                        <span className="text-[10px] text-accent">200 OK</span>
                      </div>
                      <div className="flex justify-center text-muted-fg">&darr;</div>
                      <div className="p-3 rounded-lg bg-surface border border-surface-border flex items-center justify-between">
                        <span className="flex items-center gap-2 text-fg">
                          <Database className="w-4 h-4 text-cyan-400" /> [2] MongoDB Aggregation Feed
                        </span>
                        <span className="text-[10px] text-cyan-400">Indexed 18ms</span>
                      </div>
                      <div className="flex justify-center text-muted-fg">&darr;</div>
                      <div className="p-3 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-between">
                        <span className="flex items-center gap-2 text-accent font-bold">
                          <Activity className="w-4 h-4" /> [3] Stream Ready to CDN
                        </span>
                        <span className="text-[10px] text-accent">99.9% Cache Hit</span>
                      </div>
                    </div>
                  )}

                  {proj.mockupType === 'ai-voice' && (
                    <div className="space-y-4 my-auto font-mono text-xs">
                      <div className="p-3 rounded-lg bg-surface border border-surface-border flex items-center justify-between">
                        <span className="flex items-center gap-2 text-fg">
                          <Mic className="w-4 h-4 text-cyan-400 animate-pulse" /> [1] Web Speech Audio In
                        </span>
                        <span className="text-[10px] text-cyan-400">16kHz Audio</span>
                      </div>
                      <div className="flex justify-center text-muted-fg">&darr;</div>
                      <div className="p-3 rounded-lg bg-surface border border-surface-border flex items-center justify-between">
                        <span className="flex items-center gap-2 text-fg">
                          <Cpu className="w-4 h-4 text-purple-400" /> [2] FastAPI Async LLM Eval
                        </span>
                        <span className="text-[10px] text-purple-400">140ms Latency</span>
                      </div>
                      <div className="flex justify-center text-muted-fg">&darr;</div>
                      <div className="p-3 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-between">
                        <span className="flex items-center gap-2 text-cyan-300 font-bold">
                          <Sparkles className="w-4 h-4" /> [3] Structured JSON Score
                        </span>
                        <span className="text-[10px] text-cyan-300">Grade: 94/100</span>
                      </div>
                    </div>
                  )}

                  {proj.mockupType === 'rbac-system' && (
                    <div className="space-y-4 my-auto font-mono text-xs">
                      <div className="p-3 rounded-lg bg-surface border border-surface-border flex items-center justify-between">
                        <span className="flex items-center gap-2 text-fg">
                          <ShieldCheck className="w-4 h-4 text-purple-400" /> [1] JWT Bearer Validation
                        </span>
                        <span className="text-[10px] text-accent">Authorized</span>
                      </div>
                      <div className="flex justify-center text-muted-fg">&darr;</div>
                      <div className="p-3 rounded-lg bg-surface border border-surface-border flex items-center justify-between">
                        <span className="flex items-center gap-2 text-fg">
                          <Layers className="w-4 h-4 text-amber-400" /> [2] Multi-Tenant Isolation
                        </span>
                        <span className="text-[10px] text-amber-400">Tenant #049</span>
                      </div>
                      <div className="flex justify-center text-muted-fg">&darr;</div>
                      <div className="p-3 rounded-lg bg-purple-500/10 border border-purple-500/30 flex items-center justify-between">
                        <span className="flex items-center gap-2 text-purple-300 font-bold">
                          <Terminal className="w-4 h-4" /> [3] Immutable Audit Trail
                        </span>
                        <span className="text-[10px] text-purple-300">Logged 200 OK</span>
                      </div>
                    </div>
                  )}

                  {/* Mockup Status Footer */}
                  <div className="pt-3 border-t border-surface-border flex items-center justify-between font-mono text-[10px] text-muted-fg">
                    <span>STATUS: OPERATIONAL</span>
                    <span className="text-accent">99.99% HEALTH</span>
                  </div>

                </div>

              </div>

            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
