import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Projeto Pequenos Génios - Método Brinca+ | 30 Brincadeiras Educativas",
  description: "Transforme qualquer momento em aprendizagem com 30 brincadeiras inteligentes usando materiais simples de casa. Ideal para pais e professores de crianças dos 3-8 anos.",
  keywords: "brincadeiras educativas, actividades infantis, desenvolvimento infantil, educação, criatividade, aprendizagem",
  authors: [{ name: "Projeto Pequenos Génios" }],
  other: {
    'font-display': 'swap',
  },
  openGraph: {
    title: "Projeto Pequenos Génios - Método Brinca+",
    description: "30 brincadeiras inteligentes para desenvolver criatividade e raciocínio com itens simples do dia a dia.",
    type: "website",
    locale: "pt_PT",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projeto Pequenos Génios - Método Brinca+",
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
    <html lang="pt-PT">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#5B8DEF" />
        
               {/* Otimizações de carregamento VTurb */}
               <script
                 dangerouslySetInnerHTML={{
                   __html: `!function(i,n){i._plt=i._plt||(n&&n.timeOrigin?n.timeOrigin+n.now():Date.now())}(window,performance);`
                 }}
               />
               
               {/* DNS Prefetch para recursos externos */}
               <link rel="dns-prefetch" href="https://cdn.converteai.net" />
               <link rel="dns-prefetch" href="https://scripts.converteai.net" />
               <link rel="dns-prefetch" href="https://images.converteai.net" />
               <link rel="dns-prefetch" href="https://api.vturb.com.br" />
               <link rel="dns-prefetch" href="https://cdn.utmify.com.br" />
               <link rel="dns-prefetch" href="https://connect.facebook.net" />
               <link rel="dns-prefetch" href="https://www.facebook.com" />
               
               {/* Preload de recursos críticos - apenas o essencial */}
               <link rel="preload" href="/images/hero/demo.gif" as="image" type="image/gif" />
               <link rel="preload" href="/images/hero/sem-metodo.png" as="image" type="image/png" />
               <link rel="preload" href="/images/hero/com-metodo.png" as="image" type="image/png" />
               
               {/* Preload de scripts críticos com defer */}
               <link rel="preload" href="https://scripts.converteai.net/41595fd6-b3b1-44b8-a62c-8a68ed990d55/players/68f8c62bb6eef1c8dc73be1e/v4/player.js" as="script" />
               <link rel="preload" href="https://scripts.converteai.net/lib/js/smartplayer-wc/v4/smartplayer.js" as="script" />
        
        {/* Script capturador de UTMs - Carregamento otimizado */}
        <script
          src="https://cdn.utmify.com.br/scripts/utms/latest.js"
          data-utmify-prevent-xcod-sck
          data-utmify-prevent-subids
          async
          defer
        />
        
        {/* Scripts para checkout brasileiro */}
        {/* TODO: Adicionar scripts do gateway de pagamento brasileiro */}
        
        {/* Script Utmify - Rastreamento de UTMs */}
        <script
          src="https://cdn.utmify.com.br/scripts/utms/latest.js"
          data-utmify-prevent-xcod-sck
          data-utmify-prevent-subids
          data-utmify-ignore-iframe
          async
          defer
        />
        
        {/* Script Hotjar - Heatmaps e Gravações */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function (c, s, q, u, a, r, e) {
                c.hj=c.hj||function(){(c.hj.q=c.hj.q||[]).push(arguments)};
                c._hjSettings = { hjid: a };
                r = s.getElementsByTagName('head')[0];
                e = s.createElement('script');
                e.async = true;
                e.src = q + c._hjSettings.hjid + u;
                r.appendChild(e);
              })(window, document, 'https://static.hj.contentsquare.net/c/csq-', '.js', 6557619);
            `,
          }}
        />
        
        {/* Meta Pixel - Rastreamento Facebook */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1397143025087613');
              fbq('track', 'PageView');
            `,
          }}
        />
        
        {/* Script de Rastreamento Kirvano */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              function initKirvano() {
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
              }
              
              if (window.requestIdleCallback) {
                window.requestIdleCallback(initKirvano);
              } else {
                setTimeout(initKirvano, 0);
              }
            `,
          }}
        />
        
        {/* Service Worker Registration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                function registerSW() {
                  navigator.serviceWorker.register('/sw.js')
                    .then(function(registration) {
                      console.log('SW registered: ', registration);
                    })
                    .catch(function(registrationError) {
                      console.log('SW registration failed: ', registrationError);
                    });
                }
                
                if (window.requestIdleCallback) {
                  window.requestIdleCallback(registerSW);
                } else {
                  setTimeout(registerSW, 0);
                }
              }
            `,
          }}
        />
      </head>
      <body className="antialiased">
        {children}
        
        {/* Noscript para Meta Pixel */}
        <noscript>
          <img height="1" width="1" style={{display: 'none'}} 
               src="https://www.facebook.com/tr?id=1397143025087613&ev=PageView&noscript=1" 
               alt="" />
        </noscript>
      </body>
    </html>
  );
}