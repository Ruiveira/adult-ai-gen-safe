"use client";

export default function PricingPage() {
  // Seus links reais do Stripe Checkout
  const proUrl = "https://buy.stripe.com/fZu9AL9eGbPZ6qn7LN4c80C";
  const premiumUrl = "https://buy.stripe.com/cNi3cn1MeaLV9Czfef4c80D";

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-black text-center mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
          Escolha seu Plano
        </h1>

        <p className="text-xl md:text-2xl text-center mb-16 text-gray-300 max-w-3xl mx-auto">
          Comece grátis com 5 gerações. Desbloqueie ilimitado com Pro ou
          Premium.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Grátis */}
          <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-700 rounded-3xl p-8 flex flex-col h-full shadow-xl">
            <h2 className="text-4xl font-bold text-center mb-2">Grátis</h2>
            <div className="text-5xl font-black text-center mb-6 text-purple-400">
              R$ <span className="text-4xl">0</span>
              <span className="text-2xl font-normal">/mês</span>
            </div>
            <ul className="space-y-5 mb-10 flex-1 text-lg">
              <li>✓ 5 gerações por mês</li>
              <li>✓ Imagens básicas</li>
              <li className="text-gray-500 line-through">
                ✗ Gerações ilimitadas
              </li>
              <li className="text-gray-500 line-through">✗ Vídeos</li>
              <li className="text-gray-500 line-through">✗ Marketplace</li>
            </ul>
            <button
              disabled
              className="w-full bg-gray-700 text-gray-400 py-5 rounded-2xl font-bold text-xl cursor-not-allowed"
            >
              Plano Atual
            </button>
          </div>

          {/* Pro R$19,90 */}
          <div className="bg-gradient-to-b from-purple-900/80 to-purple-950/80 border-2 border-purple-500 rounded-3xl p-8 relative shadow-2xl flex flex-col h-full transform scale-105">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-purple-600 px-8 py-2 rounded-full font-bold text-white shadow-lg">
              MAIS POPULAR
            </div>
            <h2 className="text-4xl font-bold text-center mb-2 mt-8">Pro</h2>
            <div className="text-5xl font-black text-center mb-6">
              R$ <span className="text-6xl">19</span>
              <span className="text-3xl">,90</span>
              <span className="text-2xl font-normal">/mês</span>
            </div>
            <ul className="space-y-5 mb-10 flex-1 text-lg">
              <li>
                ✓ <strong>Gerações ilimitadas</strong>
              </li>
              <li>✓ Imagens e vídeos HD</li>
              <li>✓ Acesso ao Marketplace</li>
              <li>✓ Extensões avançadas</li>
              <li>✓ Prioridade nas filas</li>
            </ul>
            <button
              onClick={() =>
                (window.location.href =
                  "https://buy.stripe.com/fZu9AL9eGbPZ6qn7LN4c80C")
              }
              className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 py-6 rounded-2xl font-bold text-2xl shadow-xl transition-all transform hover:scale-105"
            >
              Assinar Pro
            </button>
          </div>

          {/* Premium R$49,90 */}
          <div className="bg-gradient-to-b from-purple-950/80 to-black border border-purple-700 rounded-3xl p-8 flex flex-col h-full shadow-2xl">
            <h2 className="text-4xl font-bold text-center mb-2 mt-8">
              Premium
            </h2>
            <div className="text-5xl font-black text-center mb-6">
              R$ <span className="text-6xl">49</span>
              <span className="text-3xl">,90</span>
              <span className="text-2xl font-normal">/mês</span>
            </div>
            <ul className="space-y-5 mb-10 flex-1 text-lg">
              <li>
                ✓ <strong>Tudo do Pro</strong>
              </li>
              <li>✓ Vídeos longos e avançados</li>
              <li>✓ Extensões exclusivas</li>
              <li>✓ Suporte prioritário</li>
              <li>✓ Acesso antecipado a novos modelos</li>
            </ul>
            <button
              onClick={() =>
                (window.location.href =
                  "https://buy.stripe.com/cNi3cn1MeaLV9Czfef4c80D")
              }
              className="w-full bg-gradient-to-r from-purple-700 to-purple-900 hover:from-purple-800 hover:to-purple-950 py-6 rounded-2xl font-bold text-2xl shadow-xl transition-all transform hover:scale-105"
            >
              Assinar Premium
            </button>
          </div>
        </div>

        <div className="text-center mt-16 text-gray-400 text-xl">
          <p>
            Qualquer dúvida?{" "}
            <a href="/contact" className="text-purple-400 hover:underline">
              Fale conosco
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
