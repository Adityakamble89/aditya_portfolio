import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Terminal, ArrowUpRight, Menu, X, Github, Linkedin, Palette } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const Header = () => {
  const { isDark, toggleTheme, openWelcomeModal } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Stack', href: '#tech-wave' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-bg/80 backdrop-blur-md border-b border-surface-border shadow-lg shadow-black/5'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#"
          className="group flex items-center gap-2.5 text-fg font-headline font-bold text-lg tracking-tight transition-transform hover:scale-105"
        >
          <div className="w-8 h-8 rounded-lg bg-surface-elevated border border-surface-border flex items-center justify-center text-accent group-hover:border-accent group-hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all">
            <Terminal className="w-4 h-4" />
          </div>
          <span className="font-mono text-sm tracking-tighter">
            aditya<span className="text-accent">.kamble()</span>
          </span>
        </a>

        {/* Live Availability Status (Desktop) */}
        <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-surface-elevated border border-surface-border text-xs font-mono text-muted-fg">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
          </span>
          <span>Open for High-Scale Backend Roles</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm font-medium text-muted-fg hover:text-accent transition-colors relative py-1 group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Action Controls: Socials, Theme Switcher & Resume CTA */}
        <div className="flex items-center gap-2.5">
          {/* GitHub Header Link */}
          <a
            href="https://github.com/Adityakamble89"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub: @Adityakamble89"
            className="hidden sm:inline-flex p-2 rounded-xl bg-surface-elevated border border-surface-border text-fg hover:text-accent hover:border-accent transition-all"
            aria-label="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>

          {/* LinkedIn Header Link */}
          <a
            href="https://www.linkedin.com/in/aditya-kamble-051a84213/"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn Profile"
            className="hidden sm:inline-flex p-2 rounded-xl bg-surface-elevated border border-surface-border text-fg hover:text-accent hover:border-accent transition-all"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4 text-sky-400" />
          </a>

          {/* Framer Motion Theme Switcher */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            className="relative p-2 rounded-xl bg-surface-elevated border border-surface-border text-fg hover:text-accent hover:border-accent transition-all focus:outline-none focus:ring-2 focus:ring-accent/50"
          >
            <AnimatePresence mode="wait" initial={false}>
              {isDark ? (
                <motion.div
                  key="moon"
                  initial={{ y: -12, opacity: 0, rotate: -45 }}
                  animate={{ y: 0, opacity: 1, rotate: 0 }}
                  exit={{ y: 12, opacity: 0, rotate: 45 }}
                  transition={{ duration: 0.2 }}
                >
                  <Moon className="w-4 h-4 text-emerald-400" />
                </motion.div>
              ) : (
                <motion.div
                  key="sun"
                  initial={{ y: -12, opacity: 0, rotate: 45 }}
                  animate={{ y: 0, opacity: 1, rotate: 0 }}
                  exit={{ y: 12, opacity: 0, rotate: -45 }}
                  transition={{ duration: 0.2 }}
                >
                  <Sun className="w-4 h-4 text-amber-500" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>

          {/* Open Theme Customizer Modal */}
          <button
            onClick={openWelcomeModal}
            aria-label="Customize Theme Window"
            title="Choose Theme Window"
            className="hidden sm:inline-flex p-2 rounded-xl bg-surface-elevated border border-surface-border text-muted-fg hover:text-accent hover:border-accent transition-all"
          >
            <Palette className="w-4 h-4" />
          </button>

          {/* Quick Resume Link */}
          <a
            href="mailto:aadityakamble89@gmail.com"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-mono font-semibold rounded-xl bg-accent/10 border border-accent/40 text-accent hover:bg-accent hover:text-black transition-all duration-300 shadow-sm"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-surface-elevated border border-surface-border text-fg hover:text-accent"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-bg/95 backdrop-blur-xl border-b border-surface-border px-4 py-6"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-base font-medium text-muted-fg hover:text-accent py-1"
                >
                  {link.name}
                </a>
              ))}

              <div className="pt-3 border-t border-surface-border flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <a
                    href="https://github.com/Adityakamble89"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-surface border border-surface-border text-fg"
                    aria-label="GitHub 1"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href="https://github.com/Adityakamble23"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-surface border border-surface-border text-fg"
                    aria-label="GitHub 2"
                  >
                    <Github className="w-4 h-4 text-emerald-400" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/aditya-kamble-051a84213/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-surface border border-surface-border text-sky-400"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openWelcomeModal();
                  }}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface border border-surface-border text-xs font-mono text-fg"
                >
                  <Palette className="w-3.5 h-3.5 text-accent" />
                  <span>Theme Window</span>
                </button>
              </div>

              <div className="pt-2">
                <a
                  href="mailto:aadityakamble89@gmail.com"
                  className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-mono font-bold rounded-xl bg-accent text-black"
                >
                  <span>Connect via Email</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;

