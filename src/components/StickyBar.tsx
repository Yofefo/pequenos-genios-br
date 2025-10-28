'use client';

import { useEffect, useState } from 'react';

export default function StickyBar() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const phrases = [
    "🚨 Enquanto você pensa, o algoritmo do YouTube já escolheu o próximo vídeo pro seu filho.",
    "⚠️ Cada hora de tela é uma hora a menos de imaginação.",
    "⏳ A infância não volta — mas ainda dá tempo de mudar o futuro.",
    "💀 As telas estão roubando a infância — e quase ninguém percebe.",
    "🧠 Reprograme o cérebro do seu filho antes que as telas façam isso por você.",
    "🔥 O vício em telas não espera — mas você ainda pode agir hoje.",
    "🧩 Crianças viciadas em estímulo, pais viciados em silêncio. Acorda.",
    "💔 O mundo ensina seu filho a deslizar o dedo. Ensine ele a pensar.",
    "⏰ Cada minuto de tela é um minuto a menos de infância.",
    "🧠 As telas treinam o cérebro pra reagir. O Projeto Pequenos Gênios ensina a criar."
  ];

  useEffect(() => {
    // Animação de fade-in inicial após 0.8s
    const initialTimer = setTimeout(() => {
      setIsVisible(true);
    }, 800);

    return () => clearTimeout(initialTimer);
  }, []);

  useEffect(() => {
    // Rotação das frases a cada 7 segundos
    const interval = setInterval(() => {
      setIsTransitioning(true);
      
      // Após 500ms (meio da transição), muda a frase
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        setIsTransitioning(false);
      }, 500);
    }, 7000);

    return () => clearInterval(interval);
  }, [phrases.length]);

  return (
    <div className="fixed top-0 left-0 right-0 z-[9999] bg-gradient-to-r from-red-600 to-orange-600 text-white py-2 md:py-3 px-4 shadow-lg sticky-bar-mobile">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center text-center">
          <p 
            className={`font-sans text-xs md:text-sm lg:text-base leading-tight md:leading-relaxed transition-opacity duration-1000 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            } ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
          >
            {phrases[currentIndex]}
          </p>
        </div>
      </div>
    </div>
  );
}
