"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export const THEMES = ["light", "dark"] as const;
export type Theme = (typeof THEMES)[number];

export const themeLogos: Record<Theme, string> = {
  light: "/img/logo/logonerosubianco.svg",
  dark: "/img/logo/logobiancosunero.svg",
};

type ThemeContextValue = {
  theme: Theme;
  mounted: boolean;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  logoSrc: string;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

const STORAGE_KEY = "comodigitale-theme";

function normalizeTheme(value: string | null): Theme {
  if (value === "light") return "light";
  // migrate legacy "accent" → dark
  return "dark";
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    const initial = normalizeTheme(stored);
    document.documentElement.setAttribute("data-theme", initial);
    setThemeState(initial);
    if (stored === "accent") {
      window.localStorage.setItem(STORAGE_KEY, "dark");
    }
    setMounted(true);
  }, []);

  const setTheme = useCallback((next: Theme) => {
    setThemeState(next);
    document.documentElement.setAttribute("data-theme", next);
    window.localStorage.setItem(STORAGE_KEY, next);
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeState((current) => {
      const next: Theme = current === "light" ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", next);
      window.localStorage.setItem(STORAGE_KEY, next);
      return next;
    });
  }, []);

  const value = useMemo(
    () => ({
      theme,
      mounted,
      setTheme,
      toggleTheme,
      logoSrc: themeLogos[theme],
    }),
    [theme, mounted, setTheme, toggleTheme],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return ctx;
}
