"use client";

import {
  createContext,
  useContext,
  useCallback,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import {
  translations,
  type Locale,
} from "@/lib/translations/brutalist";

const STORAGE_KEY = "brutalist-locale";
const DEFAULT_LOCALE: Locale = "en";
const SUPPORTED_LOCALES: Locale[] = ["en", "pt", "es"];

type TranslationSet = (typeof translations)[Locale];

interface LocaleContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: TranslationSet;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

// External store for locale (same pattern as theme.tsx)
let currentLocale: Locale = DEFAULT_LOCALE;
const listeners = new Set<() => void>();

function getSnapshot(): Locale {
  return currentLocale;
}

function getServerSnapshot(): Locale {
  return DEFAULT_LOCALE;
}

function subscribe(callback: () => void) {
  listeners.add(callback);
  return () => listeners.delete(callback);
}

function setLocaleMode(locale: Locale) {
  currentLocale = locale;
  listeners.forEach((cb) => cb());
}

// Initialize from localStorage on first load (client only)
if (typeof window !== "undefined") {
  try {
    const stored = localStorage.getItem(STORAGE_KEY) as Locale | null;
    if (stored && SUPPORTED_LOCALES.includes(stored)) {
      currentLocale = stored;
    }
  } catch {
    // localStorage unavailable
  }
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const locale = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const setLocale = useCallback((newLocale: Locale) => {
    try {
      localStorage.setItem(STORAGE_KEY, newLocale);
    } catch {
      // localStorage unavailable
    }
    setLocaleMode(newLocale);
  }, []);

  const value = useMemo(
    () => ({ locale, setLocale, t: translations[locale] }),
    [locale, setLocale]
  );

  return (
    <LocaleContext.Provider value={value}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useTranslations() {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error("useTranslations must be used within a LocaleProvider");
  }
  return ctx;
}

export { SUPPORTED_LOCALES };
export type { Locale };
