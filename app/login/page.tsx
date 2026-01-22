"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });
    if (res?.error) {
      setError("Credenciais inválidas");
    } else {
      window.location.href = "/dashboard";
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-8 rounded-2xl max-w-md w-full"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full p-4 mb-4 bg-gray-700 rounded"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Senha"
          className="w-full p-4 mb-4 bg-gray-700 rounded"
          required
        />
        <button
          type="submit"
          className="w-full bg-purple-600 py-4 rounded font-bold"
        >
          Entrar
        </button>
        {error && <p className="text-red-400 mt-4 text-center">{error}</p>}
      </form>
    </div>
  );
}
