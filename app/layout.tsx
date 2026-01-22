import type { Metadata } from "next";
import "./globals.css";

// Remova SessionProvider por agora (causa erro se next-auth não instalado)
// Se quiser auth, instale next-auth primeiro e adicione depois
export const metadata: Metadata = {
  title: "Adult AI Gen",
  description: "Crie conteúdo adulto com IA",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-gray-950 text-gray-100 antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
