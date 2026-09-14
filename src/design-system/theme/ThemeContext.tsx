import React, { createContext, useState, useEffect, useCallback, useMemo } from 'react';
import type { Theme, ThemeContextValue } from './types';

export const ThemeContext = createContext<ThemeContextValue | null>(null);

const STORAGE_KEY = 'beruf-theme-preference';
const THEMES: Theme[] = ['cream', 'black', 'orange'];

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: Theme;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  defaultTheme = 'cream',
}) => {
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(STORAGE_KEY) as Theme | null;
      if (stored && THEMES.includes(stored)) {
        return stored;
      }
    }
    return defaultTheme;
  });

  const setTheme = useCallback((nextTheme: Theme) => {
    setThemeState(nextTheme);
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, nextTheme);
      document.documentElement.setAttribute('data-theme', nextTheme);
    }
  }, []);

  const cycleTheme = useCallback(() => {
    setThemeState((current) => {
      const currentIndex = THEMES.indexOf(current);
      const nextTheme = THEMES[(currentIndex + 1) % THEMES.length];
      if (typeof window !== 'undefined') {
        localStorage.setItem(STORAGE_KEY, nextTheme);
        document.documentElement.setAttribute('data-theme', nextTheme);
      }
      return nextTheme;
    });
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const value = useMemo<ThemeContextValue>(
    () => ({
      theme,
      setTheme,
      cycleTheme,
      isCream: theme === 'cream',
      isBlack: theme === 'black',
      isOrange: theme === 'orange',
    }),
    [theme, setTheme, cycleTheme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
