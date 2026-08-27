import "./globals.css";

export const metadata = {
  title: "Mini Bio - React & Next.js",
  description: "Página de Mini Bio desenvolvida em React e Next.js com arquitetura em componentes.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
