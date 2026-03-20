"use client";

import { LocaleProvider } from "@/lib/i18n";
import { Hero } from "@/components/brutalist/Hero";
import { Projetos } from "@/components/brutalist/Projetos";
import { Hackathons } from "@/components/brutalist/Hackathons";
import { Testemunhos } from "@/components/brutalist/Testemunhos";
import { Footer } from "@/components/brutalist/Footer";
import { FloatingMenu } from "@/components/brutalist/FloatingMenu";

export function BrutalistClient() {
  return (
    <LocaleProvider>
      <main className="bg-black font-display selection:bg-[#FF5722] selection:text-black scroll-smooth">
        <Hero />
        <Projetos />
        <Hackathons />
        <Testemunhos />
        <Footer />
        <FloatingMenu />
      </main>
    </LocaleProvider>
  );
}
