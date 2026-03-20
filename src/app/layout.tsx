import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lucas Oliveira - Senior Blockchain Engineer | DREX | Stellar",
  description: "Senior Blockchain Engineer com 6+ anos de experiência. Principal Engineer no DREX (CBDC Brasil), Head of Education na NearX, Stellar Ambassador. Criador do Merkly (55k+ downloads). 4x Web3 hackathon winner.",
  keywords: "blockchain, smart contracts, ethereum, stellar, rust, solidity, zkp, zero knowledge proofs, drex, cbdc, defi, web3, lucas oliveira, olivmath",
  authors: [{ name: "Lucas Oliveira", url: "https://github.com/olivmath" }],
  openGraph: {
    title: "Lucas Oliveira - Senior Blockchain Engineer",
    description: "Principal Engineer @ DREX | Head of Education @ NearX | Stellar Ambassador | Creator of Merkly",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`scroll-smooth ${spaceGrotesk.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
