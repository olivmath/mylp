import { NavBar } from "@/components/magazine/NavBar";
import { Hero } from "@/components/magazine/Hero";
import { Projetos } from "@/components/magazine/Projetos";
import { Hackathons } from "@/components/magazine/Hackathons";
import { Testemunhos } from "@/components/magazine/Testemunhos";
import { Footer } from "@/components/magazine/Footer";

export default function MagazinePage() {
  return (
    <main className="bg-[#FAF9F6] text-[#2D2D2D]">
      <NavBar />
      <Hero />
      <Projetos />
      <Hackathons />
      <Testemunhos />
      <Footer />
    </main>
  );
}
