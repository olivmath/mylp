"use client";

import { LocaleProvider } from "@/lib/i18n";
import { ThemeProvider } from "@/lib/theme";
import { Hero } from "@/components/brutalist/Hero";
import { Projetos } from "@/components/brutalist/Projetos";
import { Hackathons } from "@/components/brutalist/Hackathons";
import { Testemunhos } from "@/components/brutalist/Testemunhos";
import { Footer } from "@/components/brutalist/Footer";
import { HeaderBar } from "@/components/brutalist/HeaderBar";

export function BrutalistClient() {
  return (
    <ThemeProvider>
      <LocaleProvider>
        <main className="bg-[var(--background)] text-[var(--foreground)] selection:bg-[var(--accent)] selection:text-black scroll-smooth transition-colors duration-300">
          <HeaderBar />
          <Hero />
          <Projetos />
          <Hackathons />
          <Testemunhos />
          <Footer />
        </main>
      </LocaleProvider>
    </ThemeProvider>
  );
}
