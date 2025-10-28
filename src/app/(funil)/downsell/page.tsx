'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function DownsellPage() {
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutos em segundos

  // Contador de 5 minutos
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          return 300; // Reset para 5 minutos
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleAcceptClick = () => {
    console.log('Botão ACEITAR clicado!', ACCEPT);
    hardNav(ACCEPT);
  };

  const handleRefuseClick = () => {
    console.log('Botão RECUSAR clicado!', DECLINE);
    hardNav(DECLINE);
  };

  const hardNav = (url: string) => {
    // Redirecionamento para checkout brasileiro (Kirvano)
    if (url.includes('kirvano')) {
      window.open(url, '_blank');
    } else {
      window.location.href = url;
    }
  };

  // URLs para checkout brasileiro
  const ACCEPT = 'https://pay.kirvano.com/3da84882-a25b-4832-91f2-de78259dda5c';
  const DECLINE = 'https://cadastroseguro.fun/obrigado';

  return (
    <>
      <head>
        {/* Scripts removidos - usando redirecionamento simples */}
      </head>
      <div className="min-h-screen bg-gradient-to-br from-red-600 to-purple-600">
      {/* Disclaimer Impactante */}
      <div className="bg-red-800 py-4 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-800 via-red-700 to-red-800 animate-pulse"></div>
        <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4">
          <span className="text-white font-bold text-lg md:text-xl text-center">
            ⚠️ ÚLTIMA OPORTUNIDADE - OFERTA TERMINA EM:
          </span>
          <div className="bg-red-600 px-4 py-2 rounded-full text-lg font-bold text-white border-2 border-white">
            {formatTime(timeLeft)}
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 leading-tight drop-shadow-lg">
            ÚLTIMA CHANCE!
            <br />
            <span className="text-yellow-300">Calminhos & Soninho</span>
            <br />
            <span className="text-3xl md:text-4xl">por apenas R$ 9,90</span>
          </h1>
          
          {/* Imagem Pitch */}
          <div className="mb-8">
            <Image
              src="/images/Upsell/pitch.webp"
              alt="Calminhos & Soninho - Última Oportunidade"
              width={800}
              height={600}
              className="w-full h-auto object-contain rounded-xl shadow-2xl mx-auto"
              priority
              loading="eager"
            />
          </div>

          {/* Comunicação Agressiva */}
          <div className="bg-white/10 backdrop-blur-sm border-2 border-yellow-300 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              🚨 ATENÇÃO: Esta é sua ÚLTIMA OPORTUNIDADE! 🚨
            </h2>
            
            <div className="space-y-4 text-lg text-white">
              <p className="font-bold">❌ Você PERDEU a oferta de R$ 14,90</p>
              <p className="font-bold">❌ Você PERDEU a oferta de R$ 19,90</p>
              <p className="text-yellow-300 font-black text-xl">✅ Esta é sua ÚLTIMA CHANCE por R$ 9,90</p>
            </div>
            
            <div className="mt-6 bg-red-600 rounded-xl p-4">
              <p className="text-white font-bold text-lg">
                ⏰ Após {formatTime(timeLeft)}, esta oferta DESAPARECE PARA SEMPRE!
              </p>
            </div>
          </div>

          {/* Preços */}
          <div className="bg-white rounded-2xl p-8 mb-8 shadow-2xl">
            <div className="text-center">
              <div className="text-2xl mb-2">
                <span className="line-through text-red-500 decoration-red-500 decoration-4">De R$ 39,00</span>
              </div>
              <div className="text-6xl font-black text-green-600 mb-2 drop-shadow-lg">
                R$ 9,90
              </div>
              <div className="text-green-600 text-xl font-bold">
                Economiza R$ 29,10
              </div>
              <p className="text-gray-600 mt-4">Acesso imediato • Garantia de 7 dias</p>
            </div>
          </div>

          {/* Botões de Ação */}
          <div className="space-y-4">
            <a
              href={ACCEPT}
              rel="external noopener"
              onClick={handleAcceptClick}
              className="w-full bg-green-600 hover:bg-green-700 text-white px-8 py-6 rounded-2xl text-2xl font-black transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center justify-center cursor-pointer pointer-events-auto border-4 border-yellow-300"
            >
              🚀 SIM, QUERO POR R$ 9,90 AGORA!
            </a>
            
            <a
              href={DECLINE}
              rel="external noopener"
              onClick={handleRefuseClick}
              className="text-white/80 hover:text-white underline text-lg cursor-pointer pointer-events-auto block mx-auto"
            >
              Não, prefiro perder esta oportunidade
            </a>
          </div>

          {/* Urgência Final */}
          <div className="mt-8 bg-red-800 rounded-xl p-6 border-2 border-red-400">
            <h3 className="text-white font-bold text-xl mb-2">
              ⚠️ AVISO FINAL ⚠️
            </h3>
            <p className="text-white text-lg">
              Esta página só aparece UMA VEZ. Se você sair agora, 
              <strong className="text-yellow-300"> NUNCA MAIS</strong> terá acesso a esta oferta.
            </p>
          </div>
        </div>
      </section>

      {/* Sticky Bar Mobile */}
      <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-red-600 to-purple-600 text-white p-4 md:hidden z-50 border-t-2 border-yellow-300">
        <div className="flex items-center justify-between">
          <div className="text-sm">
            <p className="font-bold">ÚLTIMA CHANCE!</p>
            <p className="text-xs opacity-90">R$ 9,90 - Termina em {formatTime(timeLeft)}</p>
          </div>
          <div className="flex space-x-2">
            <a
              href={ACCEPT}
              rel="external noopener"
              onClick={handleAcceptClick}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-bold border-2 border-yellow-300"
            >
              SIM!
            </a>
            <a
              href={DECLINE}
              rel="external noopener"
              onClick={handleRefuseClick}
              className="text-white/80 hover:text-white underline text-sm"
            >
              Não
            </a>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
