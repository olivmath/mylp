import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Lucas Oliveira — Blockchain Engineer",
    short_name: "olivmath",
    description:
      "Senior Blockchain Engineer. Principal Engineer @ DREX, Stellar Ambassador, Creator of Merkly.",
    start_url: "/",
    display: "standalone",
    background_color: "#0D0D0D",
    theme_color: "#6B7FFF",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "32x32",
        type: "image/x-icon",
      },
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
