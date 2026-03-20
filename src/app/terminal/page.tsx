import { TerminalFrame } from "@/components/terminal/TerminalFrame";
import { CommandBar } from "@/components/terminal/CommandBar";
import { Hero } from "@/components/terminal/Hero";
import { Projetos } from "@/components/terminal/Projetos";
import { Hackathons } from "@/components/terminal/Hackathons";
import { Testemunhos } from "@/components/terminal/Testemunhos";
import { StatusBar } from "@/components/terminal/StatusBar";

export const metadata = {
  title: "olivmath@portfolio ~ $ | Lucas Oliveira",
  description:
    "Senior Blockchain Engineer & Cryptography Specialist. Terminal-style portfolio.",
};

export default function TerminalPage() {
  return (
    <TerminalFrame>
      <CommandBar />
      <Hero />
      <Projetos />
      <Hackathons />
      <Testemunhos />
      <StatusBar />
    </TerminalFrame>
  );
}
