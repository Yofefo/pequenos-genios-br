import type { Metadata } from "next";
import "./globals.css";
import { MetaPixel } from "@/lib/pixel";

export const metadata: Metadata = {
  title: "Projeto Pequenos Gênios - Método Brinca+ | 30 Brincadeiras Educativas",
  description: "Transforme qualquer momento em aprendizado com 30 brincadeiras inteligentes usando materiais simples de casa. Ideal para pais e professores de crianças de 3-8 anos.",
  keywords: "brincadeiras educativas, atividades infantis, desenvolvimento infantil, educação, criatividade, aprendizado",
  authors: [{ name: "Projeto Pequenos Gênios" }],
  openGraph: {
    title: "Projeto Pequenos Gênios - Método Brinca+",
    description: "30 brincadeiras inteligentes para desenvolver criatividade e raciocínio com itens simples do dia a dia.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projeto Pequenos Gênios - Método Brinca+",
    description: "30 brincadeiras inteligentes para desenvolver criatividade e raciocínio com itens simples do dia a dia.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#5B8DEF" />
      </head>
      <body className="antialiased">
        <MetaPixel />
        {children}
        
        {/* Script de Rastreamento Kirvano */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.onload = (event) => {
                const links = document.querySelectorAll("a");
                links.forEach(function (link) {
                  const href = link.href;
                  if (href !== null || href !== "") {
                    if (href.includes("kirvano")) {
                      let search_params = document.location.search.replace("?", "");
                      let urlFinal = href + (href.indexOf("?") > 0 ? "&" : "?") + search_params.toString();
                      link.href = urlFinal;
                    }
                  }
                });
              };
            `,
          }}
        />
      </body>
    </html>
  );
}