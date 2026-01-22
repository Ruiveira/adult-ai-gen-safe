import Link from "next/link";

export const metadata = {
  title: "Adult AI Gen - O Maior Gerador de Pornô com IA",
  description:
    "Gere pornô com IA de alta qualidade, uncensored e personalizado. Imagens fotorrealistas, anime, vídeos curtos e mais. Mais de 5 milhões de gerações por criadores mundiais.",
  keywords:
    "gerador AI pornô, imagens NSFW IA, vídeos adultos anime, seduced alternativo, IA conteúdo adulto",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 overflow-hidden">
      {/* Age Gate Simples (como seduced) */}
      <section className="text-center py-16 bg-gradient-to-b from-purple-950 to-gray-950">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          Adult AI Gen
        </h1>
        <p className="text-2xl md:text-4xl mb-8 max-w-3xl mx-auto">
          O LÍDER EM GERADOR DE PORNÔ COM IA
        </p>
        <p className="text-xl mb-6">
          Para adultos apenas. Você tem 18 anos ou mais?
        </p>
        <div className="space-x-4">
          <button
            className="bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-full text-xl font-bold"
            onClick={() => alert("Entrando...")}
          >
            Sim, entrar
          </button>
          <button className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-full text-xl font-bold">
            Não, sair
          </button>
        </div>
      </section>

      {/* Headline Principal */}
      <section className="text-center py-24 bg-gray-900">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-purple-400">
          Crie Pornô com IA do Seu Jeito — Alta Qualidade, Sem Censura, Extremo
        </h2>
        <p className="text-xl mb-6 max-w-3xl mx-auto">
          Mais de 5 milhões de imagens e vídeos gerados por criadores no mundo
          inteiro
        </p>
        <p className="text-3xl font-bold mb-8 text-pink-500">
          REALIZE SUAS FANTASIAS
        </p>
        <Link
          href="/login"
          className="bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-full text-xl font-bold inline-block"
        >
          Junte-se Agora
        </Link>
      </section>

      {/* Conteúdo Gerado por Usuários (Amostras) */}
      <section className="py-16 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-3xl font-bold mb-8 text-center text-purple-400">
            Descubra Adult AI Gen
          </h3>
          <p className="text-xl mb-6 text-center">
            Pornô com IA gerado pelos nossos usuários
          </p>
          <div className="flex justify-center mb-8 space-x-4">
            <button className="bg-gray-800 hover:bg-purple-700 px-6 py-3 rounded-full">
              Imagens
            </button>
            <button className="bg-gray-800 hover:bg-purple-700 px-6 py-3 rounded-full">
              Vídeos
            </button>
            <button className="bg-gray-800 hover:bg-purple-700 px-6 py-3 rounded-full">
              Hetero
            </button>
            <button className="bg-gray-800 hover:bg-purple-700 px-6 py-3 rounded-full">
              Trans
            </button>
            <button className="bg-gray-800 hover:bg-purple-700 px-6 py-3 rounded-full">
              Gay
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["Amostra 1", "Amostra 2", "Amostra 3"].map((sample, i) => (
              <div key={i} className="bg-gray-800 p-4 rounded-lg">
                <img
                  src="/placeholder-nsFw.jpg"
                  alt={`Amostra gerada ${sample}`}
                  className="w-full h-48 object-cover rounded mb-4"
                  loading="lazy"
                />
                <p className="text-center">Gerado por um membro Adult AI Gen</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/pricing"
              className="bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-full text-xl font-bold inline-block"
            >
              Junte-se Agora
            </Link>
          </div>
        </div>
      </section>

      {/* Extensões / Fetishes */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-3xl font-bold mb-8 text-center text-purple-400">
            Temos seus Fetishes Cobertos
          </h3>
          <p className="text-xl mb-6 max-w-3xl mx-auto text-center">
            Extensões permitem gerar conteúdo fetish além do normal. Misture até
            4 para vídeos, 8 para imagens. Algumas exclusivas para modelos
            específicos.
          </p>
          <div className="flex justify-center mb-8 space-x-4">
            <button className="bg-gray-800 hover:bg-purple-700 px-6 py-3 rounded-full">
              Imagens
            </button>
            <button className="bg-gray-800 hover:bg-purple-700 px-6 py-3 rounded-full">
              Vídeos
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
              <button
                key={ext}
                className="bg-purple-900 hover:bg-purple-700 p-4 rounded-lg text-center"
              >
                {ext}
              </button>
            ))}
          </div>
          <p className="text-center mt-8 text-gray-400">
            Exemplos: E-girls + Bimbo Lips, Gooned + Bukkake, Bimbos + Front
            Pussy
          </p>
          <div className="text-center mt-8">
            <Link
              href="/login"
              className="bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-full text-xl font-bold inline-block"
            >
              Junte-se Agora
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h4 className="text-2xl font-bold mb-4 text-purple-400">
              Gere Vídeos Pornô com IA
            </h4>
            <p>
              Crie vídeos de alta qualidade até 10s. Misture até 4 extensions.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h4 className="text-2xl font-bold mb-4 text-purple-400">
              Resultados Únicos
            </h4>
            <p>
              Misture até 8 extensions para imagens únicas. Limite por plano.
            </p>
          </div>
          {/* Adicione mais features como seduced */}
        </div>
        <div className="text-center mt-8">
          <Link
            href="/pricing"
            className="bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-full text-xl font-bold inline-block"
          >
            Junte-se Agora
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-3xl font-bold mb-8 text-center text-purple-400">
            Perguntas Frequentes
          </h3>
          <div className="space-y-6">
            <div>
              <h5 className="text-xl font-bold mb-2">O que é Adult AI Gen?</h5>
              <p>Plataforma IA para gerar pornô personalizado.</p>
            </div>
            {/* Adicione mais FAQs como seduced */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-950 text-center text-gray-500 border-t border-gray-800">
        <p>UNDRESSO MEDIA GROUP SRL, Campinas, BR - CNPJ fictício</p>
        <p>© 2023-2026 ADULTAIGEN.COM</p>
        <p>
          Todo conteúdo AI-gerado. Para entretenimento. Não representa
          indivíduos reais.
        </p>
        <nav className="space-x-4 mt-4">
          <Link href="/help" className="hover:text-purple-400">
            Ajuda
          </Link>
          <Link href="/terms" className="hover:text-purple-400">
            Termos
          </Link>
          <Link href="/privacy" className="hover:text-purple-400">
            Privacidade
          </Link>
          <Link href="/pricing" className="hover:text-purple-400">
            Planos
          </Link>
        </nav>
      </footer>
    </div>
  );
}
