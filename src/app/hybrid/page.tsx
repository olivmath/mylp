import NavBar from "@/components/hybrid/NavBar";
import Hero from "@/components/hybrid/Hero";
import Projetos from "@/components/hybrid/Projetos";
import Hackathons from "@/components/hybrid/Hackathons";
import Testemunhos from "@/components/hybrid/Testemunhos";
import Footer from "@/components/hybrid/Footer";

export const metadata = {
  title: "Lucas Oliveira - Hybrid Portfolio",
  description:
    "Senior Blockchain Engineer. Principal Engineer @ DREX, Stellar Ambassador, 4x Hackathon Champion.",
};

export default function HybridPage() {
  return (
    <div className="min-h-screen">
      <NavBar />
      {/* Main content offset for desktop side nav */}
      <main className="overflow-x-hidden md:pl-[72px]">
        <Hero />
        <Projetos />
        <Hackathons />
        <Testemunhos />
        <Footer />
      </main>
      {/* Mobile bottom nav spacer */}
      <div className="h-16 md:hidden" />
    </div>
  );
}
