import React, { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { ThemeProvider } from './context/ThemeContext';
import CanvasBackground from './components/layout/CanvasBackground';
import CustomCursor from './components/layout/CustomCursor';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import TechWave from './components/sections/TechWave';
import Stats from './components/sections/Stats';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Education from './components/sections/Education';
import Footer from './components/sections/Footer';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Initialize Lenis buttery smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    // Synchronize Lenis with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    const updateLenis = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateLenis);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(updateLenis);
      lenis.destroy();
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-bg text-fg selection:bg-accent selection:text-black">
        {/* Antigravity Canvas Physics Grid */}
        <CanvasBackground />

        {/* Custom Lerped Magnetic Cursor */}
        <CustomCursor />

        {/* Navigation & Theme Toggle */}
        <Header />

        {/* Main Content Sections */}
        <main className="relative z-10">
          <Hero />
          <TechWave />
          <Stats />
          <About />
          <Experience />
          <Education />
          <Projects />
          <Footer />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
