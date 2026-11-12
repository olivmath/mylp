import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://olivmath.vercel.app";
const SITE_NAME = "Lucas Oliveira — Blockchain Engineer";
const SITE_TITLE = "Lucas Oliveira — Senior Blockchain Engineer | DREX | Stellar";
const SITE_DESCRIPTION =
  "Senior Blockchain Engineer com 6+ anos de experiência. Principal Engineer no DREX (CBDC Brasil), Head of Education na NearX, Stellar Ambassador. Criador do Merkly (105k+ downloads). 4x Web3 hackathon winner.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "blockchain",
    "smart contracts",
    "ethereum",
    "stellar",
    "soroban",
    "rust",
    "solidity",
    "zkp",
    "zero knowledge proofs",
    "drex",
    "cbdc",
    "defi",
    "web3",
    "merkle tree",
    "criptografia",
    "lucas oliveira",
    "olivmath",
  ],
  authors: [{ name: "Lucas Oliveira", url: "https://github.com/olivmath" }],
  creator: "Lucas Oliveira",
  publisher: "Lucas Oliveira",
  category: "technology",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "/lucas-portrait.png",
        width: 800,
        height: 800,
        alt: "Lucas Oliveira — Senior Blockchain Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    creator: "@olivmath_",
    images: ["/lucas-portrait.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Lucas Bispo de Oliveira",
  alternateName: "olivmath",
  url: SITE_URL,
  image: `${SITE_URL}/lucas-portrait.png`,
  jobTitle: "Senior Blockchain Engineer",
  description: SITE_DESCRIPTION,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Florianópolis",
    addressRegion: "SC",
    addressCountry: "BR",
  },
  sameAs: [
    "https://github.com/olivmath",
    "https://linkedin.com/in/olivmath",
    "https://twitter.com/olivmath_",
  ],
  knowsAbout: [
    "Blockchain",
    "Smart Contracts",
    "Cryptography",
    "Zero Knowledge Proofs",
    "Rust",
    "Solidity",
    "Stellar",
    "DREX",
    "CBDC",
    "Merkle Trees",
  ],
  worksFor: [
    {
      "@type": "Organization",
      name: "DREX — Banco Central do Brasil",
    },
    {
      "@type": "Organization",
      name: "NearX",
      url: "https://nearx.com.br",
    },
  ],
  award: [
    "1st Place — Stellar Hackathon 2024",
    "2nd Place — Chiliz Hackathon 2024",
    "2nd Place — XRPL Hackathon 2025",
    "2nd Place — NASA Space Apps 2022",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased" style={spaceGrotesk.style}>
        {children}
      </body>
    </html>
  );
}
