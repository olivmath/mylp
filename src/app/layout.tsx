import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DevPortfolio - Transformando Ideias em Realidade",
  description: "Desenvolvedor apaixonado por criar soluções inovadoras através de código limpo e design intuitivo. Especialista em React, Next.js, Node.js e muito mais.",
  keywords: "desenvolvedor, programador, react, nextjs, nodejs, typescript, portfolio, web development",
  authors: [{ name: "DevPortfolio" }],
  openGraph: {
    title: "DevPortfolio - Transformando Ideias em Realidade",
    description: "Desenvolvedor apaixonado por criar soluções inovadoras através de código limpo e design intuitivo.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
