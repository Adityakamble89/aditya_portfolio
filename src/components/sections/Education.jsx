import React from 'react';
import { 
  GraduationCap, 
  Award, 
  MapPin, 
  CheckCircle2, 
  BookOpen,
  Calendar,
  Sparkles
} from 'lucide-react';

const ACADEMICS = [
  {
    degree: 'B.Tech in Computer Science & Engineering',
    institution: 'D Y Patil Agriculture and Technical University',
    duration: '2022 — 2025',
    location: 'Maharashtra, India',
    badge: 'Undergraduate Degree',
    grade: 'First Class with Distinction',
    focus: 'Distributed Systems, DBMS, Operating Systems, Computer Networks & Algorithms',
    coursework: [
      'DBMS & Indexing',
      'OS & Multi-Threading',
      'Distributed Systems',
      'Algorithms & DSA',
      'Cloud Architecture',
    ],
    highlights: [
      'Architected end-to-end full-stack and high-throughput backend capstone systems.',
      'Specialized in asynchronous Python microservices & MongoDB aggregation pipelines.',
      'Active developer in university technical hackathons and competitive programming.',
    ],
  },
  {
    degree: 'Diploma in Computer Engineering',
    institution: 'D Y Patil Technical Campus',
    duration: '2020 — 2022',
    location: 'Maharashtra, India',
    badge: 'Foundation Diploma',
    grade: 'Excellence in Technical Rigor',
    focus: 'C/C++, Java, Relational Databases (SQL), Computer Architecture & DSA',
    coursework: [
      'C/C++ & Java OOP',
      'Relational DB (SQL)',
      'Data Structures & Algorithms',
      'Computer Architecture',
      'Software Engineering & QA',
    ],
    highlights: [
      'Built strong computing foundations in low-level memory management and binary logic.',
      'Designed algorithmic utilities and database-backed software prototypes.',
      'Graduated in the top academic tier of the computer engineering cohort.',
    ],
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col justify-center min-h-[calc(100vh-80px)]"
    >
      {/* Compact Section Header */}
      <div className="text-left max-w-3xl mb-6 sm:mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-elevated border border-surface-border mb-2">
          <GraduationCap className="w-3.5 h-3.5 text-accent" />
          <span className="font-mono text-xs text-muted-fg uppercase tracking-wider">
            Academic Pedigree & Foundations
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-headline font-bold text-fg">
          Education & Academic Track
        </h2>
        <p className="text-xs sm:text-sm text-muted-fg mt-1">
          Rigorous computer science education emphasizing core computing algorithms, distributed system theory, and hands-on software development.
        </p>
      </div>

      {/* 2-Column High-Contrast Cards - Single Screen Fit */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 items-stretch">
        {ACADEMICS.map((item) => (
          <div
            key={item.degree}
            className="glass-panel-elevated rounded-2xl p-5 sm:p-6 border border-surface-border hover:border-accent/50 transition-all duration-300 flex flex-col justify-between shadow-xl opacity-100 relative group"
          >
            <div>
              {/* Header Meta */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="font-mono text-xs font-bold text-accent px-2.5 py-0.5 rounded-md bg-accent/10 border border-accent/25 flex items-center gap-1.5">
                  <Calendar className="w-3 h-3" /> {item.duration}
                </span>
                <span className="text-[11px] font-mono text-fg font-medium px-2 py-0.5 rounded bg-surface-elevated border border-surface-border">
                  {item.badge}
                </span>
              </div>

              {/* Title & Institution */}
              <h3 className="text-lg sm:text-xl font-headline font-bold text-fg group-hover:text-accent transition-colors">
                {item.degree}
              </h3>
              <p className="font-mono text-xs text-muted-fg mt-1 mb-3.5 flex flex-wrap items-center gap-2">
                <span className="text-fg font-semibold">{item.institution}</span>
                <span>•</span>
                <span className="text-muted-fg flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-accent" /> {item.location}
                </span>
              </p>

              {/* Specialization Box */}
              <div className="p-3 rounded-xl bg-surface/80 border border-surface-border mb-3.5">
                <span className="text-[11px] font-mono text-accent font-semibold block mb-0.5">
                  Core Specialization:
                </span>
                <p className="text-xs font-sans text-fg/80 leading-relaxed">
                  {item.focus}
                </p>
              </div>

              {/* Key Coursework Badges */}
              <div className="mb-3.5">
                <span className="text-[11px] font-mono text-muted-fg block mb-1.5 flex items-center gap-1">
                  <BookOpen className="w-3 h-3 text-accent" /> Key Subjects & Coursework:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {item.coursework.map((course) => (
                    <span
                      key={course}
                      className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-surface border border-surface-border text-fg"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>

              {/* Achievements / Milestones */}
              <div className="space-y-1.5">
                <span className="text-[11px] font-mono text-muted-fg block">
                  Academic Milestones:
                </span>
                <ul className="space-y-1.5">
                  {item.highlights.map((ach, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-fg/85">
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                      <span className="leading-snug">{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Card Footer Grade */}
            <div className="mt-4 pt-3 border-t border-surface-border flex items-center justify-between font-mono text-xs">
              <span className="flex items-center gap-1.5 text-fg font-semibold">
                <Award className="w-4 h-4 text-accent" /> {item.grade}
              </span>
              <span className="text-accent font-semibold flex items-center gap-1 text-[11px]">
                <span className="w-2 h-2 rounded-full bg-accent inline-block" />
                Verified
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;

