import Link from "next/link";

export const metadata = {
  title: "Adult AI Gen - O Maior Gerador de Pornô com IA",
  description:
    "Gere pornô com IA de alta qualidade, uncensored e personalizado. Imagens fotorrealistas, anime, vídeos curtos e mais. Mais de 5 milhões de gerações por criadores mundiais.",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-purple-950 to-black text-gray-100">
      {/* Age Gate */}
      <section
        className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
        id="age-gate"
      >
        <div className="text-center p-8 max-w-lg">
          <h1 className="text-6xl font-black mb-8 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Adult AI Gen
          </h1>
          <p className="text-2xl mb-8">
            Esta plataforma contém conteúdo adulto explícito. Você tem 18 anos
            ou mais?
          </p>
          <div className="space-x-6">
            <button
              onClick={() => document.getElementById("age-gate")?.remove()}
              className="bg-purple-600 hover:bg-purple-700 px-10 py-5 rounded-full text-2xl font-bold transition-all shadow-xl"
            >
              Sim, tenho 18+
            </button>
            <a
              href="https://www.google.com"
              className="bg-red-600 hover:bg-red-700 px-10 py-5 rounded-full text-2xl font-bold transition-all"
            >
              Não, sair
            </a>
          </div>
        </div>
      </section>

      {/* Header fixo */}
      <header className="fixed top-0 left-0 right-0 bg-black/70 backdrop-blur-md z-40 border-b border-purple-900/50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-black text-purple-400">Adult AI Gen</h1>
          <nav className="space-x-8">
            <Link href="/pricing" className="hover:text-purple-300 transition">
              Planos
            </Link>
            <Link href="/login" className="hover:text-purple-300 transition">
              Entrar
            </Link>
            <Link href="/contact" className="hover:text-purple-300 transition">
              Contato
            </Link>
          </nav>
        </div>
      </header>

      {/* Headline Principal */}
      <section className="pt-32 pb-24 text-center">
        <h2 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
          Crie Pornô com IA do Seu Jeito
        </h2>
        <p className="text-2xl md:text-3xl mb-8 max-w-4xl mx-auto text-gray-300">
          Alta qualidade, sem censura, extremo. Mais de 5 milhões de gerações
          por criadores no mundo inteiro.
        </p>
        <Link
          href="/login"
          className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-12 py-6 rounded-full text-3xl font-black shadow-2xl transition-all inline-block"
        >
          Começar Agora Grátis
        </Link>
      </section>

      {/* Amostras */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-4xl font-bold text-center mb-12 text-purple-400">
            Amostras Geradas por Usuários
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["Amostra 1", "Amostra 2", "Amostra 3"].map((_, i) => (
              <div
                key={i}
                className="bg-gray-800/50 p-6 rounded-2xl border border-purple-800/30 shadow-xl"
              >
                <div className="w-full h-80 bg-gradient-to-br from-purple-900/50 to-gray-900 rounded-xl mb-6" />{" "}
                {/* Placeholder */}
                <p className="text-center text-lg text-gray-300">
                  Gerado por membro Adult AI Gen
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Extensões / Fetishes */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-4xl font-bold text-center mb-12 text-purple-400">
            Temos seu Fetish Coberto
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "POV BJ V1",
              "Gooned",
              "Bimbo Lips V4",
              "E-Girls V2",
              "Titfuck V1",
              "Doggy Anal V1",
              "Futanari V4",
              "Bukkake V1",
            ].map((ext) => (
              <div
                key={ext}
                className="bg-purple-900/30 p-6 rounded-2xl text-center hover:bg-purple-800/50 transition"
              >
                <p className="text-xl font-bold">{ext}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-4xl font-bold text-center mb-12 text-purple-400">
            O que os usuários dizem
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                text: "Melhor que qualquer outro site de IA adulta. Ilimitado é vida!",
                name: "Usuário Pro",
              },
              {
                text: "Imagens perfeitas, vídeos rápidos. Recomendo o Premium.",
                name: "Criador Premium",
              },
              {
                text: "Marketplace de prompts mudou meu jogo. Vale cada centavo.",
                name: "João, Campinas",
              },
            ].map((dep, i) => (
              <div
                key={i}
                className="bg-gray-800/50 p-8 rounded-2xl border border-purple-800/30 italic"
              >
                <p className="text-lg mb-4">"{dep.text}"</p>
                <p className="text-purple-400 font-bold text-right">
                  - {dep.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 text-center bg-gradient-to-t from-purple-950 to-transparent">
        <h2 className="text-5xl md:text-6xl font-black mb-8 text-purple-400">
          Não perca tempo. Comece a criar hoje.
        </h2>
        <Link
          href="/pricing"
          className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-12 py-6 rounded-full text-3xl font-black shadow-2xl transition-all inline-block"
        >
          Ver Planos Agora
        </Link>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black text-center text-gray-500 border-t border-purple-900/30">
        <p>© 2026 Adult AI Gen. Todos os direitos reservados.</p>
        <div className="mt-4 space-x-6">
          <Link href="/terms" className="hover:text-purple-400">
            Termos
          </Link>
          <Link href="/privacy" className="hover:text-purple-400">
            Privacidade (LGPD)
          </Link>
          <Link href="/contact" className="hover:text-purple-400">
            Contato
          </Link>
        </div>
      </footer>
    </div>
  );
}
