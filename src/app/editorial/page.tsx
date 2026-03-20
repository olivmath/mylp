import { NavBar } from "@/components/editorial/NavBar";
import { Hero } from "@/components/editorial/Hero";
import { Projetos } from "@/components/editorial/Projetos";
import { Hackathons } from "@/components/editorial/Hackathons";
import { Testemunhos } from "@/components/editorial/Testemunhos";
import { Footer } from "@/components/editorial/Footer";

export default function EditorialPage() {
  return (
    <main className="font-sans">
      <NavBar />
      <Hero />
      <Projetos />
      <Hackathons />
      <Testemunhos />
      <Footer />
    </main>
  );
}
