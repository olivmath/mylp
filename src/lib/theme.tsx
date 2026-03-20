"use client";

import {
  createContext,
  useContext,
  useCallback,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";

const STORAGE_KEY = "theme-mode";
type ThemeMode = "dark" | "light";

const DARK_VARS = {
  "--background": "#0D0D0D",
  "--foreground": "#F2F2F2",
} as const;

const LIGHT_VARS = {
  "--background": "#F2F2F2",
  "--foreground": "#0D0D0D",
} as const;

interface ThemeContextValue {
  mode: ThemeMode;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

function applyThemeToDOM(mode: ThemeMode) {
  const vars = mode === "dark" ? DARK_VARS : LIGHT_VARS;
  const root = document.documentElement;
  for (const [key, value] of Object.entries(vars)) {
    root.style.setProperty(key, value);
  }
}

// External store for theme mode
let currentMode: ThemeMode = "dark";
const listeners = new Set<() => void>();

function getSnapshot(): ThemeMode {
  return currentMode;
}

function getServerSnapshot(): ThemeMode {
  return "dark";
}

function subscribe(callback: () => void) {
  listeners.add(callback);
  return () => listeners.delete(callback);
}

function setThemeMode(mode: ThemeMode) {
  currentMode = mode;
  listeners.forEach((cb) => cb());
}

// Initialize from localStorage on first load (client only)
if (typeof window !== "undefined") {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "light" || stored === "dark") {
      currentMode = stored;
    }
  } catch {
    // localStorage unavailable
  }
  // Apply initial theme to DOM immediately
  applyThemeToDOM(currentMode);
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const mode = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggleTheme = useCallback(() => {
    const next = currentMode === "dark" ? "light" : "dark";
    applyThemeToDOM(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // localStorage unavailable
    }
    setThemeMode(next);
  }, []);

  const value = useMemo(() => ({ mode, toggleTheme }), [mode, toggleTheme]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return ctx;
}
