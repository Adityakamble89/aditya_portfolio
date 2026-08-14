import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { 
  Moon, 
  Sun, 
  Sparkles, 
  Terminal, 
  Check, 
  ArrowRight, 
  X, 
  Code2, 
  Zap, 
  Cpu,
  Layers,
  Palette
} from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const ThemeWelcomeModal = () => {
  const { theme, setTheme, showWelcomeModal, selectThemeAndEnter, closeWelcomeModal } = useTheme();
  const [selected, setSelected] = useState(theme || 'dark');
  const [remember, setRemember] = useState(true);

  if (!showWelcomeModal) return null;

  const handleSelect = (mode) => {
    setSelected(mode);
    // Live preview theme in real-time
    setTheme(mode);
  };

  const handleConfirm = () => {
    // Trigger celebratory micro-confetti
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.6 },
      colors: selected === 'dark' ? ['#10B981', '#06B6D4', '#3B82F6'] : ['#059669', '#F59E0B', '#10B981'],
    });

    selectThemeAndEnter(selected);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Frosted Backdrop with dynamic blur */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={closeWelcomeModal}
          className="fixed inset-0 bg-black/60 backdrop-blur-xl -z-10"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-2xl rounded-3xl bg-bg/95 border border-surface-border shadow-[0_25px_70px_rgba(0,0,0,0.5)] overflow-hidden text-fg"
          role="dialog"
          aria-modal="true"
          aria-labelledby="theme-modal-title"
        >
          {/* Top Decorative Terminal Bar */}
          <div className="flex items-center justify-between px-6 py-3.5 border-b border-surface-border bg-surface-elevated">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              <span className="ml-2 font-mono text-xs text-muted-fg tracking-tight flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-accent" />
                <span>workspace_initializer.sh</span>
              </span>
            </div>
            
            <button
              onClick={closeWelcomeModal}
              className="p-1.5 rounded-lg text-muted-fg hover:text-fg hover:bg-surface-hover transition-colors"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Main Modal Body */}
          <div className="p-6 sm:p-8 space-y-6">
            
            {/* Header Content */}
            <div className="text-center space-y-2 max-w-lg mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/25 text-accent font-mono text-xs">
                <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                <span>WELCOME TO ADITYA'S WORKSPACE</span>
              </div>
              <h2 id="theme-modal-title" className="text-2xl sm:text-3xl font-headline font-bold text-fg tracking-tight">
                Select Your Interface Mode
              </h2>
              <p className="text-xs sm:text-sm text-muted-fg leading-relaxed">
                Choose your preferred environment aesthetic before exploring backend architectures, systems, and projects.
              </p>
            </div>

            {/* Interactive Theme Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              
              {/* DARK THEME CARD */}
              <button
                type="button"
                onClick={() => handleSelect('dark')}
                className={`relative text-left p-5 rounded-2xl border-2 transition-all duration-300 group flex flex-col justify-between ${
                  selected === 'dark'
                    ? 'border-accent bg-accent/5 shadow-[0_0_30px_rgba(16,185,129,0.18)] scale-[1.02]'
                    : 'border-surface-border bg-surface hover:border-surface-hover hover:bg-surface-elevated opacity-75 hover:opacity-100'
                }`}
              >
                {/* Active Selection Indicator */}
                {selected === 'dark' && (
                  <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-accent text-black flex items-center justify-center shadow-md">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                )}

                {/* Visual Preview Illustration */}
                <div className="w-full h-28 rounded-xl bg-[#0A0E14] border border-emerald-500/20 p-3 mb-4 flex flex-col justify-between overflow-hidden relative shadow-inner">
                  <div className="flex items-center justify-between border-b border-emerald-500/10 pb-1.5">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 rounded-full bg-red-400/60" />
                      <span className="w-2 h-2 rounded-full bg-amber-400/60" />
                      <span className="w-2 h-2 rounded-full bg-emerald-400/60" />
                    </div>
                    <span className="font-mono text-[9px] text-emerald-400/70">dark_mode.env</span>
                  </div>
                  
                  {/* Mock code lines */}
                  <div className="space-y-1 font-mono text-[10px]">
                    <div className="flex items-center gap-1 text-emerald-400 font-bold">
                      <span className="text-gray-500">const</span> latency = <span className="text-cyan-300">"&lt;35ms"</span>;
                    </div>
                    <div className="w-3/4 h-1.5 rounded bg-emerald-500/20" />
                    <div className="w-1/2 h-1.5 rounded bg-cyan-500/20" />
                  </div>

                  <div className="flex justify-between items-center pt-1 border-t border-emerald-500/10">
                    <span className="text-[9px] font-mono text-emerald-400 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> LIVE
                    </span>
                    <span className="text-[9px] font-mono text-gray-400">Terminal Vibe</span>
                  </div>
                </div>

                {/* Label & Description */}
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      <Moon className="w-4 h-4" />
                    </div>
                    <h3 className="font-headline font-bold text-base text-fg">
                      Dark Obsidian
                    </h3>
                  </div>
                  <p className="text-xs text-muted-fg">
                    Deep charcoal with glowing emerald neon accents. High contrast & engineer-focused.
                  </p>
                </div>
              </button>

              {/* LIGHT THEME CARD */}
              <button
                type="button"
                onClick={() => handleSelect('light')}
                className={`relative text-left p-5 rounded-2xl border-2 transition-all duration-300 group flex flex-col justify-between ${
                  selected === 'light'
                    ? 'border-accent bg-accent/5 shadow-[0_0_30px_rgba(5,150,105,0.18)] scale-[1.02]'
                    : 'border-surface-border bg-surface hover:border-surface-hover hover:bg-surface-elevated opacity-75 hover:opacity-100'
                }`}
              >
                {/* Active Selection Indicator */}
                {selected === 'light' && (
                  <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-accent text-white flex items-center justify-center shadow-md">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                )}

                {/* Visual Preview Illustration */}
                <div className="w-full h-28 rounded-xl bg-[#F8F9FA] border border-gray-300 p-3 mb-4 flex flex-col justify-between overflow-hidden relative shadow-inner">
                  <div className="flex items-center justify-between border-b border-gray-200 pb-1.5">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 rounded-full bg-red-400" />
                      <span className="w-2 h-2 rounded-full bg-amber-400" />
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    </div>
                    <span className="font-mono text-[9px] text-gray-600">light_studio.env</span>
                  </div>
                  
                  {/* Mock clean lines */}
                  <div className="space-y-1 font-mono text-[10px]">
                    <div className="flex items-center gap-1 text-emerald-700 font-bold">
                      <span className="text-gray-600">const</span> status = <span className="text-blue-600">"OPTIMIZED"</span>;
                    </div>
                    <div className="w-3/4 h-1.5 rounded bg-gray-300" />
                    <div className="w-1/2 h-1.5 rounded bg-emerald-300" />
                  </div>

                  <div className="flex justify-between items-center pt-1 border-t border-gray-200">
                    <span className="text-[9px] font-mono text-emerald-600 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" /> ACTIVE
                    </span>
                    <span className="text-[9px] font-mono text-gray-500">Clean Minimalist</span>
                  </div>
                </div>

                {/* Label & Description */}
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <div className="p-1.5 rounded-lg bg-amber-500/10 text-amber-600 border border-amber-500/20">
                      <Sun className="w-4 h-4" />
                    </div>
                    <h3 className="font-headline font-bold text-base text-fg">
                      Light Studio
                    </h3>
                  </div>
                  <p className="text-xs text-muted-fg">
                    Crisp paper background with emerald & charcoal typography. High daytime readability.
                  </p>
                </div>
              </button>

            </div>

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-surface-border flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 font-mono text-xs text-muted-fg">
                <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
                <span>Live preview applied dynamically</span>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={closeWelcomeModal}
                  className="px-4 py-2.5 rounded-xl font-mono text-xs text-muted-fg hover:text-fg hover:bg-surface transition-colors"
                >
                  Skip
                </button>

                <button
                  type="button"
                  onClick={handleConfirm}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-accent text-black font-mono text-xs font-bold tracking-tight hover:bg-accent-hover hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  <span>Enter Workspace</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ThemeWelcomeModal;
