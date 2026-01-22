"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import Link from "next/link";

export default function Dashboard() {
  const [user, setUser] = useState<any>(null);
  const [prompt, setPrompt] = useState("");
  const [generating, setGenerating] = useState(false);
  const [history, setHistory] = useState<any[]>([]);
  const [isPro, setIsPro] = useState(false); // Verificação de plano

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
      if (user) loadHistory(user.id);
      setIsPro(true); // Placeholder – verifique com Stripe webhook em produção
    };
    getUser();
  }, []);

  const loadHistory = async (userId: string) => {
    const { data } = await supabase
      .from("generations")
      .select("*")
      .eq("user_id", userId)
      .order("created_at", { ascending: false });
    setHistory(data || []);
  };

  const handleGenerate = async () => {
    if (!isPro) {
      alert("Assine Pro ou Premium para acessar geração ilimitada.");
      window.location.href = "/pricing";
      return;
    }
    if (!prompt || generating) return;
    setGenerating(true);

    try {
      // Geração com Hugging Face
      const res = await fetch(
        "https://api-inference.huggingface.co/models/andite/anything-v4.0",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${process.env.HUGGINGFACE_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ inputs: prompt }),
        }
      );

      const blob = await res.blob();
      const imageUrl = URL.createObjectURL(blob);

      // Salva no Supabase
      await supabase.from("generations").insert({
        user_id: user.id,
        prompt,
        image_url: imageUrl,
      });

      loadHistory(user.id);
      setPrompt("");
    } catch (err) {
      console.error(err);
      alert("Erro ao gerar. Verifique a chave Hugging Face.");
    } finally {
      setGenerating(false);
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-950">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6 text-purple-400">Dashboard</h1>
          <p className="text-xl mb-8">Faça login para acessar suas gerações.</p>
          <Link
            href="/login"
            className="bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-full text-xl font-bold"
          >
            Entrar
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <h1 className="text-5xl font-bold text-purple-400 mb-8 text-center">
        Dashboard – Bem-vindo, {user.email}
      </h1>

      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Digite seu prompt (ex: mulher loira nua praia anime)"
            className="w-full p-4 bg-gray-800 rounded-xl border border-purple-700 focus:border-purple-500 text-white mb-4"
          />
          <button
            onClick={handleGenerate}
            disabled={generating}
            className="w-full bg-purple-600 hover:bg-purple-700 py-5 rounded-xl font-bold text-xl disabled:opacity-50"
          >
            {generating ? "Gerando..." : "Gerar Imagem"}
          </button>
        </div>

        <h2 className="text-3xl font-bold mb-6">Suas Gerações</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {history.map((item) => (
            <div
              key={item.id}
              className="bg-gray-800/50 p-4 rounded-xl border border-purple-800/30"
            >
              <img
                src={item.image_url}
                alt={item.prompt}
                className="w-full h-48 object-cover rounded mb-4"
              />
              <p className="text-sm text-gray-300 truncate">{item.prompt}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
