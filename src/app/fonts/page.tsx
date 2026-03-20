"use client";

import {
  Bebas_Neue, Anton, Archivo_Black, Barlow_Condensed, Oswald,
  Inter, Space_Grotesk, Outfit, Sora,
  Playfair_Display, Cormorant_Garamond, DM_Serif_Display,
  JetBrains_Mono, Space_Mono,
  Caveat, Dancing_Script, Permanent_Marker, Patrick_Hand,
  Satisfy, Kalam, Gloria_Hallelujah,
  Great_Vibes, Alex_Brush, Parisienne, Sacramento,
  Pinyon_Script, Allura, Mr_De_Haviland,
} from "next/font/google";

// Brutalista
const bebasNeue = Bebas_Neue({ weight: "400", subsets: ["latin"], display: "swap" });
const anton = Anton({ weight: "400", subsets: ["latin"], display: "swap" });
const archivoBlack = Archivo_Black({ weight: "400", subsets: ["latin"], display: "swap" });
const barlowCondensed = Barlow_Condensed({ weight: ["400", "700", "900"], subsets: ["latin"], display: "swap" });
const oswald = Oswald({ weight: ["400", "700"], subsets: ["latin"], display: "swap" });

// Sans-serif
const inter = Inter({ subsets: ["latin"], display: "swap" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], display: "swap" });
const outfit = Outfit({ subsets: ["latin"], display: "swap" });
const sora = Sora({ subsets: ["latin"], display: "swap" });

// Serif
const playfairDisplay = Playfair_Display({ subsets: ["latin"], display: "swap" });
const cormorantGaramond = Cormorant_Garamond({ weight: ["400", "700"], subsets: ["latin"], display: "swap" });
const dmSerifDisplay = DM_Serif_Display({ weight: "400", subsets: ["latin"], display: "swap" });

// Monospace
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], display: "swap" });
const spaceMono = Space_Mono({ weight: ["400", "700"], subsets: ["latin"], display: "swap" });

// Handwriting
const caveat = Caveat({ subsets: ["latin"], display: "swap" });
const dancingScript = Dancing_Script({ subsets: ["latin"], display: "swap" });
const permanentMarker = Permanent_Marker({ weight: "400", subsets: ["latin"], display: "swap" });
const patrickHand = Patrick_Hand({ weight: "400", subsets: ["latin"], display: "swap" });
const satisfy = Satisfy({ weight: "400", subsets: ["latin"], display: "swap" });
const kalam = Kalam({ weight: ["400", "700"], subsets: ["latin"], display: "swap" });
const gloriaHallelujah = Gloria_Hallelujah({ weight: "400", subsets: ["latin"], display: "swap" });

// Signature
const greatVibes = Great_Vibes({ weight: "400", subsets: ["latin"], display: "swap" });
const alexBrush = Alex_Brush({ weight: "400", subsets: ["latin"], display: "swap" });
const parisienne = Parisienne({ weight: "400", subsets: ["latin"], display: "swap" });
const sacramento = Sacramento({ weight: "400", subsets: ["latin"], display: "swap" });
const pinyonScript = Pinyon_Script({ weight: "400", subsets: ["latin"], display: "swap" });
const allura = Allura({ weight: "400", subsets: ["latin"], display: "swap" });
const mrDeHaviland = Mr_De_Haviland({ weight: "400", subsets: ["latin"], display: "swap" });

const categories = [
  {
    title: "Brutalista",
    fonts: [
      { name: "Bebas Neue", style: bebasNeue.style, desc: "Condensada, puro impacto" },
      { name: "Anton", style: anton.style, desc: "Ultra bold, grita na tela" },
      { name: "Archivo Black", style: archivoBlack.style, desc: "Grossa, sólida" },
      { name: "Barlow Condensed", style: barlowCondensed.style, desc: "Industrial, compacta" },
      { name: "Oswald", style: oswald.style, desc: "Condensada, industrial" },
    ],
  },
  {
    title: "Sans-serif (força/tech)",
    fonts: [
      { name: "Inter", style: inter.style, desc: "Limpa, moderna, tech" },
      { name: "Space Grotesk", style: spaceGrotesk.style, desc: "Geométrica, futurista" },
      { name: "Outfit", style: outfit.style, desc: "Geométrica, bold bonito" },
      { name: "Sora", style: sora.style, desc: "Clean, boa em tamanhos grandes" },
    ],
  },
  {
    title: "Serif (autoridade/elegância)",
    fonts: [
      { name: "Playfair Display", style: playfairDisplay.style, desc: "Clássica, contraste alto" },
      { name: "Cormorant Garamond", style: cormorantGaramond.style, desc: "Elegante, refined" },
      { name: "DM Serif Display", style: dmSerifDisplay.style, desc: "Moderna com personalidade" },
    ],
  },
  {
    title: "Monospace (hacker/dev)",
    fonts: [
      { name: "JetBrains Mono", style: jetbrainsMono.style, desc: "Dev aesthetic" },
      { name: "Space Mono", style: spaceMono.style, desc: "Combina com o tema space" },
    ],
  },
  {
    title: "Handwriting (letra de mão)",
    preserveCase: true,
    fonts: [
      { name: "Caveat", style: caveat.style, desc: "Casual, natural, anotação" },
      { name: "Dancing Script", style: dancingScript.style, desc: "Cursiva elegante, fluida" },
      { name: "Permanent Marker", style: permanentMarker.style, desc: "Escrito com marcador" },
      { name: "Patrick Hand", style: patrickHand.style, desc: "Letra de mão limpa" },
      { name: "Satisfy", style: satisfy.style, desc: "Cursiva sofisticada" },
      { name: "Kalam", style: kalam.style, desc: "Handwriting natural" },
      { name: "Gloria Hallelujah", style: gloriaHallelujah.style, desc: "Estilo caderno/sketch" },
    ],
  },
  {
    title: "Signature (assinatura)",
    preserveCase: true,
    fonts: [
      { name: "Great Vibes", style: greatVibes.style, desc: "Assinatura elegante, clássica" },
      { name: "Alex Brush", style: alexBrush.style, desc: "Cursiva fina, fluida" },
      { name: "Parisienne", style: parisienne.style, desc: "Assinatura francesa" },
      { name: "Sacramento", style: sacramento.style, desc: "Assinatura moderna, leve" },
      { name: "Pinyon Script", style: pinyonScript.style, desc: "Formal, caligráfica" },
      { name: "Allura", style: allura.style, desc: "Cursiva ornamental" },
      { name: "Mr De Haviland", style: mrDeHaviland.style, desc: "Assinatura pura, traço fino" },
    ],
  },
];

export default function FontSamples() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-2xl mb-4 text-neutral-500 uppercase tracking-widest">Font Samples</h1>
      <p className="text-sm text-neutral-600 mb-16">14 fontes organizadas por categoria</p>

      {categories.map((cat) => (
        <div key={cat.title} className="mb-24">
          <h2 className="text-lg text-[var(--accent)] uppercase tracking-widest mb-12 border-b border-neutral-800 pb-4">
            {cat.title}
          </h2>

          <div className="space-y-24">
            {cat.fonts.map((font) => (
              <section key={font.name}>
                <div className="flex items-baseline gap-4 mb-2">
                  <span className="text-sm text-neutral-500 uppercase tracking-wider">{font.name}</span>
                  <span className="text-xs text-neutral-700">{font.desc}</span>
                </div>

                <div style={font.style}>
                  <h3 className={`text-[12vw] leading-[0.85] tracking-tighter select-none ${cat.preserveCase ? "" : "uppercase"}`}>
                    <span className="text-[var(--accent)]">{cat.preserveCase ? "Lucas" : "Lucas"}</span>
                    <br />
                    {cat.preserveCase ? "Bispo de" : "Bispo de"}
                    <br />
                    {cat.preserveCase ? "Oliveira" : "Oliveira"}
                  </h3>
                </div>

                <div style={font.style} className="mt-8 space-y-4">
                  <p className="text-4xl uppercase tracking-tight">
                    Senior Blockchain Engineer
                  </p>
                  <p className="text-xl uppercase tracking-wider text-neutral-400">
                    Matemático | Engenheiro Criptografia | Embaixador Stellar
                  </p>
                  <div className="flex gap-12 mt-4">
                    <div>
                      <span className="text-5xl text-[var(--accent)]">58.967</span>
                      <span className="text-sm text-neutral-500 block uppercase">downloads</span>
                    </div>
                    <div>
                      <span className="text-5xl text-[var(--accent)]">8000+</span>
                      <span className="text-sm text-neutral-500 block uppercase">alunos</span>
                    </div>
                    <div>
                      <span className="text-5xl text-[var(--accent)]">6+</span>
                      <span className="text-sm text-neutral-500 block uppercase">anos</span>
                    </div>
                  </div>
                </div>
              </section>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
