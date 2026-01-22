'use client';

import Link from 'next/link';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <h1 className="text-5xl font-bold text-purple-400 mb-8 text-center">Dashboard</h1>
      <p className="text-xl text-center mb-8">Faça login para acessar gerações e histórico.</p>
      <Link href="/login" className="block w-fit mx-auto bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-full text-xl font-bold">
        Entrar
      </Link>
    </div>
  );
}
