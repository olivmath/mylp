"use client";

import { LocaleProvider } from "@/lib/i18n";
import { Hero } from "@/components/brutalist/Hero";
import { Projetos } from "@/components/brutalist/Projetos";
import { Hackathons } from "@/components/brutalist/Hackathons";
import { Testemunhos } from "@/components/brutalist/Testemunhos";
import { Footer } from "@/components/brutalist/Footer";
import { HeaderBar } from "@/components/brutalist/HeaderBar";

export function BrutalistClient() {
  return (
    <LocaleProvider>
      <main className="bg-black font-display selection:bg-[#FF5722] selection:text-black scroll-smooth">
        <HeaderBar />
        <Hero />
        <Projetos />
        <Hackathons />
        <Testemunhos />
        <Footer />
      </main>
    </LocaleProvider>
  );
}
