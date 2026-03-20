import Link from "next/link";

export const metadata = {
  title: "Blog - olivmath",
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] text-[#F2F2F2] flex flex-col items-center justify-center px-6">
      <p className="text-sm uppercase tracking-[0.3em] text-[#6B7FFF] mb-4">
        Blog
      </p>
      <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-6">
        Em breve.
      </h1>
      <p className="text-neutral-400 text-lg max-w-md text-center mb-10">
        Estou preparando conteudo sobre blockchain, criptografia e engenharia de software.
      </p>
      <Link
        href="/brutalist"
        className="text-sm uppercase tracking-[0.2em] font-bold border px-6 py-3 hover:bg-[#1E3AD9] hover:text-white transition-colors duration-200"
        style={{ color: "#6B7FFF", borderColor: "#6B7FFF" }}
      >
        &larr; Voltar
      </Link>
    </div>
  );
}
