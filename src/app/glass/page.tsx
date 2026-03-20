import { NavBar } from "@/components/glass/NavBar";
import { Hero } from "@/components/glass/Hero";
import { Projetos } from "@/components/glass/Projetos";
import { Hackathons } from "@/components/glass/Hackathons";
import { Testemunhos } from "@/components/glass/Testemunhos";
import { Footer } from "@/components/glass/Footer";

export const metadata = {
  title: "Lucas Oliveira - Senior Blockchain Engineer | Glass",
  description:
    "Senior Blockchain Engineer. Principal Engineer @ DREX, Stellar Ambassador, NASA 1st Place.",
};

export default function GlassPage() {
  return (
    <main className="min-h-screen bg-[#0a1628] text-white">
      <NavBar />
      <Hero />
      <Projetos />
      <Hackathons />
      <Testemunhos />
      <Footer />
    </main>
  );
}
