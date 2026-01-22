"use client";

import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

export default function Dashboard() {
  const { data: session } = useSession();
  const [prompt, setPrompt] = useState("");
  const [style, setStyle] = useState("fotorrealista");
  const [imageUrl, setImageUrl] = useState("");

  if (!session) return <p>Faça login para acessar.</p>;

  const generate = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/generate", {
      method: "POST",
      body: JSON.stringify({ prompt, style }),
    });
    const data = await res.json();
    setImageUrl(data.imageUrl || "Gerando...");
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between mb-8">
          <h1 className="text-4xl font-bold">Dashboard {session.user?.name}</h1>
          <button
            onClick={() => signOut()}
            className="bg-red-600 px-6 py-2 rounded"
          >
            Sair
          </button>
        </div>
        <form onSubmit={generate} className="bg-gray-800 p-8 rounded-2xl mb-8">
          <input
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Descreva: mulher anime loira nua praia"
            className="w-full bg-gray-700 p-4 mb-4 rounded-lg text-black"
          />
          <select
            value={style}
            onChange={(e) => setStyle(e.target.value)}
            className="w-full bg-gray-700 p-4 mb-4 rounded-lg text-black"
          >
            <option value="fotorrealista">Fotorrealista</option>
            <option value="anime">Anime</option>
            <option value="hibrido">Híbrido (Inovador)</option>
          </select>
          <button
            type="submit"
            className="w-full bg-purple-600 py-4 rounded-lg font-bold text-xl"
          >
            Gerar Imagem
          </button>
        </form>
        {imageUrl && (
          <img
            src={imageUrl}
            alt="Gerada"
            className="w-full max-h-96 object-contain rounded-lg"
          />
        )}
        <Link
          href="/pricing"
          className="block mt-8 bg-purple-600 px-6 py-3 rounded text-center font-bold"
        >
          Assine para Ilimitado
        </Link>
      </div>
    </div>
  );
}
