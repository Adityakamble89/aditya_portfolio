import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext({
  theme: 'dark',
  setTheme: () => {},
  toggleTheme: () => {},
  isDark: true,
  showWelcomeModal: false,
  setShowWelcomeModal: () => {},
  openWelcomeModal: () => {},
  closeWelcomeModal: () => {},
  selectThemeAndEnter: () => {},
});

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    try {
      const savedTheme = localStorage.getItem('aditya_portfolio_theme');
      if (savedTheme === 'light' || savedTheme === 'dark') {
        return savedTheme;
      }
    } catch (e) {
      // ignore
    }
    // Default to dark mode for engineering aesthetic
    return 'dark';
  });

  const [showWelcomeModal, setShowWelcomeModal] = useState(() => {
    try {
      const hasChosenBefore = localStorage.getItem('aditya_portfolio_theme_chosen');
      // If user hasn't made an explicit choice yet, show the welcome modal
      return !hasChosenBefore;
    } catch (e) {
      return true;
    }
  });

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
    try {
      localStorage.setItem('aditya_portfolio_theme', theme);
    } catch (e) {
      // ignore
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const openWelcomeModal = () => {
    setShowWelcomeModal(true);
  };

  const closeWelcomeModal = () => {
    setShowWelcomeModal(false);
  };

  const selectThemeAndEnter = (selectedTheme) => {
    setTheme(selectedTheme);
    try {
      localStorage.setItem('aditya_portfolio_theme', selectedTheme);
      localStorage.setItem('aditya_portfolio_theme_chosen', 'true');
    } catch (e) {
      // ignore
    }
    setShowWelcomeModal(false);
  };

  const isDark = theme === 'dark';

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        toggleTheme,
        isDark,
        showWelcomeModal,
        setShowWelcomeModal,
        openWelcomeModal,
        closeWelcomeModal,
        selectThemeAndEnter,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

