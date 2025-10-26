import Hero from "@/components/Hero";
import Projetos from "@/components/Projetos";
import Hackathons from "@/components/Hackathons";
import Testemunhos from "@/components/Testemunhos";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Projetos />
      <Hackathons />
      <Testemunhos />
      <FAQ />
      <Footer />
    </div>
  );
}
