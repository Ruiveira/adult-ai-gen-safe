import Link from "next/link";

export const metadata = {
  title: "Adult AI Gen - O Maior Gerador de Pornô com IA",
  description:
    "Gere pornô com IA de alta qualidade, uncensored e personalizado. Imagens fotorrealistas, anime, vídeos curtos e mais.",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Age Gate */}
      <section className="text-center py-16 bg-gradient-to-b from-purple-950 to-gray-950">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          Adult AI Gen
        </h1>
        <p className="text-2xl md:text-4xl mb-8">
          Para adultos apenas. Você tem 18 anos ou mais?
        </p>
        <div className="space-x-4">
          <Link
            href="/dashboard"
            className="bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-full text-xl font-bold"
          >
            Sim, entrar
          </Link>
          <button className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-full text-xl font-bold">
            Não, sair
          </button>
        </div>
      </section>

      {/* Headline */}
      <section className="text-center py-24 bg-gray-900">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-purple-400">
          Crie Pornô com IA do Seu Jeito
        </h2>
        <p className="text-xl mb-6 max-w-3xl mx-auto">
          Alta qualidade, sem censura, extremo. Mais de 5 milhões de gerações.
        </p>
        <Link
          href="/login"
          className="bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-full text-xl font-bold inline-block"
        >
          Começar Agora
        </Link>
      </section>

      {/* Amostras */}
      <section className="py-16 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-3xl font-bold mb-8 text-center text-purple-400">
            Amostras Geradas por Usuários
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["Amostra 1", "Amostra 2", "Amostra 3"].map((_, i) => (
              <div key={i} className="bg-gray-800 p-4 rounded-lg">
                <div className="w-full h-64 bg-gray-700 rounded mb-4" />{" "}
                {/* Placeholder */}
                <p className="text-center">Gerado por membro Adult AI Gen</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="text-center py-16">
        <Link
          href="/pricing"
          className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-10 py-5 rounded-full text-2xl font-bold shadow-2xl transition-all inline-block"
        >
          Assine Pro e Libere Tudo
        </Link>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-950 text-center text-gray-500 border-t border-gray-800">
        <p>© 2026 Adult AI Gen</p>
      </footer>
    </div>
  );
}
