"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegister, setIsRegister] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      if (isRegister) {
        // Registro
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: { username: email.split("@")[0] },
            emailRedirectTo: window.location.origin + "/dashboard",
          },
        });
        if (error) throw error;
        alert(
          "Conta criada! Verifique seu email para confirmar (confira spam)."
        );
      } else {
        // Login
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) throw error;
        window.location.href = "/dashboard";
      }
    } catch (err: any) {
      setError(err.message || "Erro ao processar. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950">
      <div className="bg-gray-800/80 backdrop-blur-sm p-10 rounded-3xl w-full max-w-md border border-purple-700/50 shadow-2xl">
        <h1 className="text-4xl font-black text-center mb-8 text-purple-400">
          {isRegister ? "Criar Conta" : "Entrar"}
        </h1>

        {error && <p className="text-red-400 text-center mb-6">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Seu email"
            className="w-full p-4 bg-gray-700 rounded-xl border border-gray-600 focus:border-purple-500 focus:ring-purple-500 text-white"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Senha"
            className="w-full p-4 bg-gray-700 rounded-xl border border-gray-600 focus:border-purple-500 focus:ring-purple-500 text-white"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-purple-600 hover:bg-purple-700 py-4 rounded-xl font-bold text-xl transition-all disabled:opacity-50"
          >
            {loading ? "Carregando..." : isRegister ? "Registrar" : "Entrar"}
          </button>
        </form>

        <button
          onClick={() => setIsRegister(!isRegister)}
          className="mt-6 text-purple-400 hover:text-purple-300 w-full text-center block"
        >
          {isRegister ? "Já tenho conta? Entrar" : "Não tem conta? Criar"}
        </button>
      </div>
    </div>
  );
}
