'use client';

import { useEffect } from 'react';

export default function VSL() {
  useEffect(() => {
    // Carregar o script VTurb apenas quando o componente estiver visível
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const script = document.createElement('script');
          script.src = 'https://scripts.converteai.net/41595fd6-b3b1-44b8-a62c-8a68ed990d55/players/68f8c62bb6eef1c8dc73be1e/v4/player.js';
          script.async = true;
          script.defer = true;
          document.head.appendChild(script);
          observer.disconnect();
        }
      });
    });

    const element = document.getElementById('vsl-container');
    if (element) {
      observer.observe(element);
    }

    return () => {
      observer.disconnect();
      const scriptToRemove = document.querySelector('script[src*="68f8c62bb6eef1c8dc73be1e"]');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, []);

  return (
    <div className="py-8" id="vsl-container">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              🎥 Veja como funciona na prática
            </h2>
                   <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                     Assista a esta micro-demonstração de apenas 1 minuto e veja como o Projeto Pequenos Gênios pode transformar o tempo com seus filhos.
                   </p>
          </div>
          
          {/* Container do vídeo com aspect ratio 16:9 */}
          <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl shadow-2xl overflow-hidden">
              <div 
                className="w-full h-full"
                dangerouslySetInnerHTML={{
                  __html: `<vturb-smartplayer id="vid-68f8c62bb6eef1c8dc73be1e" style="display: block; margin: 0 auto; width: 100%; "></vturb-smartplayer>`
                }}
              />
            </div>
          </div>
          
          {/* Call to action após o vídeo */}
          <div className="space-y-4">
                   <p className="text-lg font-semibold text-blue-700">
                     ✨ Pronto para começar a transformar o tempo com seus filhos?
                   </p>
                   <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                     <span>⏱️ Vídeo: 1 minuto</span>
                     <span>•</span>
                     <span>📱 Funciona em qualquer dispositivo</span>
                   </div>
          </div>
        </div>
      </div>
    </div>
  );
}
