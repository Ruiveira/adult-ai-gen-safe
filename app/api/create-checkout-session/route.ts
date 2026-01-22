import Stripe from "stripe";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-06-20",
});

export async function GET() {
  try {
    // Use o Price ID real do seu Stripe Dashboard (Products → seu produto → Prices → copie o ID)
    // Exemplo: price_1ABC123xyz (não use o fallback "price_1SeuPriceIDAqui")
    const priceId = process.env.STRIPE_PRICE_ID_PRO;

    if (!priceId) {
      throw new Error(
        "STRIPE_PRICE_ID_PRO não definido nas Environment Variables"
      );
    }

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      payment_method_types: ["card"],
      line_items: [
        {
          price: priceId, // Agora é string válida
          quantity: 1,
        },
      ],
      success_url: `${process.env.NEXTAUTH_URL}/success`,
      cancel_url: `${process.env.NEXTAUTH_URL}/pricing`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Erro ao criar sessão Stripe:", error);
    return NextResponse.json(
      { error: "Erro ao criar sessão de checkout" },
      { status: 500 }
    );
  }
}
