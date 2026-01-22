"use client";

import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

export default function PricingPage() {
  const handleCheckout = async (priceId: string) => {
    const stripe = await stripePromise;
    if (!stripe) return;

    const { error } = await stripe.redirectToCheckout({
      lineItems: [{ price: priceId, quantity: 1 }],
      mode: "subscription",
      successUrl: `${window.location.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancelUrl: `${window.location.origin}/pricing`,
    });

    if (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-12 text-purple-500">
          Escolha seu Plano
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Plano Grátis */}
          <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 shadow-xl">
            <h2 className="text-3xl font-bold mb-4 text-center">Grátis</h2>
            <p className="text-center text-2xl mb-6">R$ 0,00</p>
            <ul className="space-y-3 mb-8">
              <li>✓ 5 gerações por mês</li>
              <li>✓ Imagens básicas</li>
              <li>✗ Marketplace</li>
            </ul>
            <button className="w-full bg-gray-600 py-4 rounded-lg font-bold text-lg cursor-not-allowed">
              Plano Atual
            </button>
          </div>

          {/* Plano Pro */}
          <div className="bg-purple-900 p-8 rounded-2xl border-2 border-purple-500 shadow-2xl relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-purple-600 px-6 py-2 rounded-full font-bold">
              Recomendado
            </div>
            <h2 className="text-3xl font-bold mb-4 text-center">Pro</h2>
            <p className="text-center text-2xl mb-6">
              R$ 19,90 <span className="text-lg">/mês</span>
            </p>
            <ul className="space-y-3 mb-8">
              <li>✓ Gerações ilimitadas</li>
              <li>✓ Imagens e vídeos HD</li>
              <li>✓ Acesso ao Marketplace</li>
            </ul>
            <button
              onClick={() =>
                handleCheckout("https://buy.stripe.com/fZu9AL9eGbPZ6qn7LN4c80C")
              }
              className="w-full bg-purple-600 hover:bg-purple-700 py-4 rounded-lg font-bold text-lg transition-colors"
            >
              Assinar Pro
            </button>
          </div>

          {/* Plano Premium */}
          <div className="bg-purple-950 p-8 rounded-2xl border border-purple-700 shadow-xl">
            <h2 className="text-3xl font-bold mb-4 text-center">Premium</h2>
            <p className="text-center text-2xl mb-6">
              R$ 49,90 <span className="text-lg">/mês</span>
            </p>
            <ul className="space-y-3 mb-8">
              <li>✓ Tudo do Pro</li>
              <li>✓ Vídeos longos e avançados</li>
              <li>✓ Prioridade nas filas</li>
            </ul>
            <button
              onClick={() => handleCheckout("price_SEU_ID_DO_PREMIUM_AQUI")}
              className="w-full bg-purple-600 hover:bg-purple-700 py-4 rounded-lg font-bold text-lg transition-colors"
            >
              Assinar Premium
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
