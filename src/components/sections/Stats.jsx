import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Activity, Database, CheckCircle2, Shield } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const STATS_DATA = [
  {
    value: 50,
    prefix: '< ',
    suffix: 'ms',
    label: 'API Response Time',
    desc: 'Optimized aggregation & indexing',
    icon: Activity,
    color: '#10B981',
  },
  {
    value: 50,
    prefix: '',
    suffix: '+',
    label: 'Secured Endpoints',
    desc: 'Scalable services & backends',
    icon: CheckCircle2,
    color: '#06B6D4',
  },
  {
    value: 10,
    prefix: '',
    suffix: 'k+',
    label: 'Data Records Handled',
    desc: 'High-throughput stream processing',
    icon: Database,
    color: '#8B5CF6',
  },
  {
    value: 99.9,
    prefix: '',
    suffix: '%',
    isDecimal: true,
    label: 'Availability Focus',
    desc: 'Fault-tolerant microservice design',
    icon: Shield,
    color: '#F59E0B',
  },
];

const Stats = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const counters = containerRef.current.querySelectorAll('.stat-number');

      counters.forEach((counter) => {
        const targetValue = parseFloat(counter.getAttribute('data-target'));
        const isDecimal = counter.getAttribute('data-decimal') === 'true';

        const obj = { val: 0 };
        gsap.to(obj, {
          val: targetValue,
          duration: 2.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: counter,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
          onUpdate: () => {
            counter.innerText = isDecimal ? obj.val.toFixed(1) : Math.floor(obj.val);
          },
        });
      });

      // Stagger in the stat cards
      gsap.from('.stat-card', {
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10"
    >
      <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-surface-border grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 relative overflow-hidden">
        
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none -z-10" />

        {STATS_DATA.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={item.label}
              className={`stat-card flex flex-col justify-between relative px-4 lg:px-8 ${
                index !== STATS_DATA.length - 1
                  ? 'lg:border-r border-surface-border'
                  : ''
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-muted-fg tracking-wider uppercase">
                  METRIC 0{index + 1}
                </span>
                <div className="p-2 rounded-lg bg-surface-elevated border border-surface-border">
                  <Icon className="w-4 h-4" style={{ color: item.color }} />
                </div>
              </div>

              <div className="my-2">
                <div className="font-headline font-bold text-4xl sm:text-5xl text-fg tracking-tight flex items-baseline">
                  <span>{item.prefix}</span>
                  <span
                    className="stat-number text-gradient-emerald"
                    data-target={item.value}
                    data-decimal={item.isDecimal ? 'true' : 'false'}
                  >
                    0
                  </span>
                  <span>{item.suffix}</span>
                </div>
              </div>

              <div className="mt-2">
                <h4 className="font-headline font-semibold text-sm sm:text-base text-fg">
                  {item.label}
                </h4>
                <p className="font-sans text-xs text-muted-fg mt-0.5">
                  {item.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Stats;
