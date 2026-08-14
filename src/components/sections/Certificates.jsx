import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Award, 
  CheckCircle2, 
  ExternalLink, 
  Maximize2, 
  X, 
  Calendar, 
  Clock, 
  User, 
  Sparkles, 
  ShieldCheck, 
  Layers, 
  Code2, 
  Cpu, 
  Palette,
  Terminal,
  ZoomIn,
  Download
} from 'lucide-react';

const CERTIFICATES = [
  {
    id: 'nodejs-v3',
    title: 'Introduction to Node.js, v3',
    issuer: 'master.dev',
    instructor: 'Scott Moss',
    category: 'backend',
    categoryLabel: 'Backend & Systems',
    date: 'Dec 11, 2025',
    duration: '4h 12m',
    image: '/nodejs.png',
    accentColor: '#10B981',
    badge: 'Verified Backend Credential',
    description: 'Deep dive into asynchronous Node.js architecture, non-blocking Event Loop execution, native Streams, binary Buffers, and enterprise microservice patterns.',
    skills: ['Node.js Runtime', 'Event Loop & Libuv', 'Streams & Buffers', 'Async I/O', 'Server Architecture'],
    highlight: 'Asynchronous event-driven programming & server systems',
  },
  {
    id: 'js-professional',
    title: 'JavaScript: From First Steps to Professional',
    issuer: 'master.dev',
    instructor: 'Anjana Vakil',
    category: 'javascript',
    categoryLabel: 'JavaScript & Core',
    date: 'Dec 10, 2025',
    duration: '14h 19m',
    image: '/javascript.png',
    accentColor: '#84CC16',
    badge: 'Comprehensive Specialization',
    description: 'Exhaustive exploration of JS engines, closure lexical scoping, prototypal inheritance chains, functional paradigms, immutable data, and async concurrency.',
    skills: ['Advanced Closures', 'Prototypal Inheritance', 'Async / Promises', 'Functional JS', 'Memory Model'],
    highlight: 'Deep JavaScript engine mechanics & advanced async patterns',
  },
  {
    id: 'prompt-engineering',
    title: 'Practical Prompt Engineering',
    issuer: 'master.dev',
    instructor: 'Sabrina Goldfarb',
    category: 'ai',
    categoryLabel: 'AI & LLMs',
    date: 'Apr 9, 2026',
    duration: '3h 43m',
    image: '/prompt_engineering.png',
    accentColor: '#A855F7',
    badge: 'Applied AI Certification',
    description: 'Engineering rigorous system prompts, multi-shot in-context reasoning, structured JSON extraction guarantees, LLM evaluation metrics, and agentic workflows.',
    skills: ['System Prompting', 'Few-Shot Reasoning', 'Structured JSON Output', 'LLM Rubrics', 'AI Agent Patterns'],
    highlight: 'Production-ready LLM orchestration & deterministic prompting',
  },
  {
    id: 'js-getting-started',
    title: 'Getting Started with JavaScript, v3',
    issuer: 'master.dev',
    instructor: 'Web Dev Simplified (Kyle Cook)',
    category: 'javascript',
    categoryLabel: 'JavaScript & Core',
    date: 'Dec 5, 2025',
    duration: '5h 38m',
    image: '/javascript2.png',
    accentColor: '#F59E0B',
    badge: 'Core Programming Foundation',
    description: 'Foundational JavaScript programming, modern ES6+ syntaxes, DOM manipulation paradigms, browser event handling, and algorithmic problem solving.',
    skills: ['DOM Manipulation', 'Modern ES6+ Syntax', 'Event Handling', 'Array Methods', 'Control Flow'],
    highlight: 'Client-side reactivity & algorithmic foundations',
  },
  {
    id: 'css-foundations',
    title: 'CSS Foundations',
    issuer: 'master.dev',
    instructor: 'Emma Bostian',
    category: 'frontend',
    categoryLabel: 'Frontend & UI',
    date: 'Dec 4, 2025',
    duration: '3h 56m',
    image: '/css.png',
    accentColor: '#06B6D4',
    badge: 'UI & Layout Architecture',
    description: 'Modern CSS architecture, Flexbox alignment mechanics, multi-dimensional CSS Grid layouts, custom CSS properties, responsive breakpoints, and UI accessibility.',
    skills: ['CSS Grid Matrix', 'Flexbox Architecture', 'Responsive Design', 'CSS Custom Variables', 'Specificity & Cascade'],
    highlight: 'High-performance responsive layouts and visual design systems',
  },
];

const CATEGORIES = [
  { id: 'all', label: 'All Credentials', icon: Layers },
  { id: 'backend', label: 'Backend & Node', icon: Cpu },
  { id: 'javascript', label: 'JavaScript Core', icon: Code2 },
  { id: 'ai', label: 'AI & Prompt Eng', icon: Sparkles },
  { id: 'frontend', label: 'Frontend & CSS', icon: Palette },
];

const Certificates = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedCert, setSelectedCert] = useState(null);

  // Close modal with ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedCert(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Filtered list
  const filteredCertificates = activeCategory === 'all' 
    ? CERTIFICATES 
    : CERTIFICATES.filter((cert) => cert.category === activeCategory);

  return (
    <section
      id="certificates"
      className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      {/* Background Accent Blur */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-6">
        <div className="max-w-2xl text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-elevated border border-surface-border mb-3">
            <Award className="w-3.5 h-3.5 text-accent" />
            <span className="font-mono text-xs text-muted-fg uppercase tracking-wider">
              Industry Certifications & Credentials
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-headline font-bold text-fg tracking-tight">
            Verified Certifications
          </h2>
          <p className="text-sm sm:text-base text-muted-fg mt-2 font-sans leading-relaxed">
            Continuous professional mastery across high-concurrency Node.js runtimes, advanced JavaScript engines, applied Prompt Engineering, and modern frontend styling.
          </p>
        </div>

        {/* Highlights Stats Strip */}
        <div className="flex items-center gap-3 self-start md:self-auto">
          <div className="px-4 py-2.5 rounded-xl bg-surface-elevated border border-surface-border flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <div className="font-mono text-sm font-bold text-fg">5 Verified</div>
              <div className="font-mono text-[11px] text-muted-fg">master.dev Platform</div>
            </div>
          </div>

          <div className="px-4 py-2.5 rounded-xl bg-surface-elevated border border-surface-border flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <div className="font-mono text-sm font-bold text-fg">31+ Hours</div>
              <div className="font-mono text-[11px] text-muted-fg">Deep Curriculum</div>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-8 no-scrollbar">
        {CATEGORIES.map((cat) => {
          const Icon = cat.icon;
          const count = cat.id === 'all' 
            ? CERTIFICATES.length 
            : CERTIFICATES.filter((c) => c.category === cat.id).length;
          const isActive = activeCategory === cat.id;

          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl font-mono text-xs whitespace-nowrap transition-all duration-200 border ${
                isActive
                  ? 'bg-accent/15 border-accent text-accent shadow-sm font-semibold'
                  : 'bg-surface hover:bg-surface-elevated border-surface-border text-muted-fg hover:text-fg'
              }`}
            >
              <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-accent' : 'text-muted-fg'}`} />
              <span>{cat.label}</span>
              <span className={`px-1.5 py-0.2 rounded-md text-[10px] ${
                isActive ? 'bg-accent text-black font-bold' : 'bg-surface-elevated text-muted-fg'
              }`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Certificates Grid */}
      <motion.div 
        layout 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence>
          {filteredCertificates.map((cert) => (
            <motion.div
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              key={cert.id}
              className="glass-panel-elevated rounded-2xl overflow-hidden border border-surface-border hover:border-accent/50 transition-all duration-300 flex flex-col group relative"
            >
              {/* Image Preview Box */}
              <div 
                onClick={() => setSelectedCert(cert)}
                className="relative aspect-[16/10] overflow-hidden bg-muted/40 cursor-pointer border-b border-surface-border group/img"
              >
                <img
                  src={cert.image}
                  alt={`${cert.title} Certificate`}
                  className="w-full h-full object-cover object-center group-hover/img:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover/img:opacity-80 transition-opacity" />

                {/* Issuer Badge Top Left */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 flex items-center gap-1.5 text-[11px] font-mono text-white">
                  <ShieldCheck className="w-3.5 h-3.5 text-accent" />
                  <span>{cert.issuer}</span>
                </div>

                {/* Hover Inspect CTA Top Right */}
                <div className="absolute top-3 right-3 p-2 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 text-white opacity-0 group-hover/img:opacity-100 transition-all duration-300 transform group-hover/img:scale-105">
                  <ZoomIn className="w-4 h-4 text-accent" />
                </div>

                {/* Bottom Overlay Title & Date */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-white/90">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-accent" /> {cert.date}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-black/50 border border-white/10 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-emerald-400" /> {cert.duration}
                  </span>
                </div>
              </div>

              {/* Card Content Area */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  {/* Category Pill & Instructor */}
                  <div className="flex items-center justify-between gap-2 mb-2 text-xs font-mono">
                    <span 
                      className="px-2 py-0.5 rounded-md border text-[11px] font-medium"
                      style={{ 
                        backgroundColor: `${cert.accentColor}15`, 
                        borderColor: `${cert.accentColor}40`,
                        color: cert.accentColor 
                      }}
                    >
                      {cert.categoryLabel}
                    </span>
                    <span className="text-muted-fg flex items-center gap-1 text-[11px]">
                      <User className="w-3 h-3 text-muted-fg" /> {cert.instructor}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 
                    onClick={() => setSelectedCert(cert)}
                    className="text-base sm:text-lg font-headline font-bold text-fg group-hover:text-accent transition-colors line-clamp-1 cursor-pointer"
                    title={cert.title}
                  >
                    {cert.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-muted-fg mt-2 line-clamp-2 leading-relaxed">
                    {cert.description}
                  </p>

                  {/* Key Skills Pills */}
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {cert.skills.slice(0, 3).map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-surface border border-surface-border text-fg/80"
                      >
                        {skill}
                      </span>
                    ))}
                    {cert.skills.length > 3 && (
                      <span className="px-1.5 py-0.5 rounded-md text-[10px] font-mono bg-surface border border-surface-border text-muted-fg">
                        +{cert.skills.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="mt-4 pt-3 border-t border-surface-border flex items-center justify-between gap-2">
                  <button
                    onClick={() => setSelectedCert(cert)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-surface-elevated border border-surface-border hover:border-accent hover:text-accent text-fg font-mono text-xs font-semibold transition-all group/btn"
                  >
                    <Maximize2 className="w-3.5 h-3.5 text-muted-fg group-hover/btn:text-accent transition-colors" />
                    <span>View Credential</span>
                  </button>

                  <a
                    href={cert.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-surface-elevated border border-surface-border hover:border-accent text-muted-fg hover:text-accent transition-all"
                    title="Open Full Image"
                    aria-label="Open Full Image in new tab"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Interactive Full-Screen Lightbox Modal */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="fixed inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl bg-bg border border-surface-border rounded-2xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col"
            >
              {/* Modal Header */}
              <div className="px-5 py-4 border-b border-surface-border flex items-center justify-between bg-surface-elevated">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center text-accent">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-headline font-bold text-fg text-sm sm:text-base line-clamp-1">
                      {selectedCert.title}
                    </h3>
                    <p className="font-mono text-[11px] text-muted-fg">
                      {selectedCert.issuer} • Instructor: {selectedCert.instructor}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={selectedCert.image}
                    download
                    className="p-2 rounded-xl bg-surface border border-surface-border hover:border-accent text-fg hover:text-accent transition-all hidden sm:inline-flex"
                    title="Download Certificate"
                  >
                    <Download className="w-4 h-4" />
                  </a>
                  <a
                    href={selectedCert.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-surface border border-surface-border hover:border-accent text-fg hover:text-accent transition-all hidden sm:inline-flex"
                    title="Open Full Image"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="p-2 rounded-xl bg-surface border border-surface-border hover:bg-accent/20 hover:border-accent text-fg hover:text-accent transition-all"
                    aria-label="Close Modal"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Modal Body: Scrollable Image & Info */}
              <div className="overflow-y-auto p-4 sm:p-6 space-y-6">
                {/* High-Res Certificate Image Display */}
                <div className="rounded-xl overflow-hidden border border-surface-border bg-black/40 shadow-inner flex items-center justify-center">
                  <img
                    src={selectedCert.image}
                    alt={selectedCert.title}
                    className="w-full h-auto max-h-[55vh] object-contain rounded-lg"
                  />
                </div>

                {/* Metadata Details Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 font-mono text-xs">
                  <div className="p-3 rounded-xl bg-surface-elevated border border-surface-border">
                    <span className="text-muted-fg block text-[10px] uppercase">Issuer Platform</span>
                    <span className="font-bold text-fg flex items-center gap-1 mt-0.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-accent" /> {selectedCert.issuer}
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-surface-elevated border border-surface-border">
                    <span className="text-muted-fg block text-[10px] uppercase">Instructor</span>
                    <span className="font-bold text-fg flex items-center gap-1 mt-0.5">
                      <User className="w-3.5 h-3.5 text-accent" /> {selectedCert.instructor}
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-surface-elevated border border-surface-border">
                    <span className="text-muted-fg block text-[10px] uppercase">Completion Date</span>
                    <span className="font-bold text-fg flex items-center gap-1 mt-0.5">
                      <Calendar className="w-3.5 h-3.5 text-accent" /> {selectedCert.date}
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-surface-elevated border border-surface-border">
                    <span className="text-muted-fg block text-[10px] uppercase">Course Runtime</span>
                    <span className="font-bold text-fg flex items-center gap-1 mt-0.5">
                      <Clock className="w-3.5 h-3.5 text-accent" /> {selectedCert.duration}
                    </span>
                  </div>
                </div>

                {/* Description & Competencies */}
                <div className="p-4 rounded-xl bg-surface-elevated border border-surface-border space-y-3">
                  <div>
                    <h4 className="text-xs font-mono font-bold text-accent uppercase tracking-wider mb-1">
                      Curriculum & Core Competencies
                    </h4>
                    <p className="text-xs sm:text-sm text-fg/90 leading-relaxed font-sans">
                      {selectedCert.description}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-surface-border">
                    <span className="text-[11px] font-mono text-muted-fg block mb-2">
                      Key Technical Skills Acquired:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedCert.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-1 rounded-md text-xs font-mono bg-surface border border-surface-border text-fg font-medium flex items-center gap-1.5"
                        >
                          <CheckCircle2 className="w-3 h-3 text-accent" />
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="px-5 py-3 border-t border-surface-border bg-surface-elevated flex items-center justify-between text-xs font-mono">
                <span className="text-muted-fg flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  Verified Credential Archive
                </span>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="px-4 py-1.5 rounded-lg bg-accent text-black font-bold hover:bg-accent-hover transition-colors"
                >
                  Done
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certificates;
