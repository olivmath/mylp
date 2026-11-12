import type { Metadata } from "next";
import { BrutalistClient } from "./client";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Senior Blockchain Engineer & Cryptography Specialist. Principal Engineer @ DREX, Stellar Ambassador, 4x Hackathon Winner. Criador do Merkly (105k+ downloads).",
  alternates: {
    canonical: "/brutalist",
  },
  openGraph: {
    title: "Lucas Oliveira — Portfolio",
    description:
      "Senior Blockchain Engineer. Principal Engineer @ DREX, Stellar Ambassador, Creator of Merkly.",
    url: "/brutalist",
  },
};

export default function BrutalistPage() {
  return <BrutalistClient />;
}
