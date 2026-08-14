/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        fg: 'var(--fg)',
        accent: {
          DEFAULT: 'var(--accent)',
          hover: 'var(--accent-hover)',
          glow: 'var(--accent-glow)',
          light: 'var(--accent-light)',
        },
        surface: {
          DEFAULT: 'var(--surface)',
          elevated: 'var(--surface-elevated)',
          border: 'var(--surface-border)',
          hover: 'var(--surface-hover)',
        },
        muted: {
          DEFAULT: 'var(--muted)',
          fg: 'var(--muted-fg)',
        },
        badge: 'var(--badge-bg)',
      },
      fontFamily: {
        headline: ['"Space Grotesk"', 'sans-serif'],
        display: ['"Space Grotesk"', 'sans-serif'],
        sans: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      fontSize: {
        'hero-title': 'clamp(2.75rem, 7.5vw, 7.5rem)',
        'hero-bracket': 'clamp(5rem, 14vw, 15rem)',
        'section-title': 'clamp(2.25rem, 5vw, 4.5rem)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bracket-glow': 'bracketGlow 3s ease-in-out infinite alternate',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        bracketGlow: {
          '0%': { filter: 'drop-shadow(0 0 8px rgba(16, 185, 129, 0.3))' },
          '100%': { filter: 'drop-shadow(0 0 25px rgba(6, 182, 212, 0.6))' },
        },
      },
    },
  },
  plugins: [],
};
