'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star } from 'lucide-react';

export default function DownsellPage() {
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutos em segundos


  // Timer countdown
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
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
    // Inicializar CartPanda antes de redirecionar
    if ((window as any).CartPandaOcuExternal && !(window as any).ocuExternalInitialized) {
      try {
        new (window as any).CartPandaOcuExternal();
        (window as any).ocuExternalInitialized = true;
      } catch (error) {
        console.log('Erro ao inicializar CartPanda:', error);
      }
    }
    
    // Redirecionar para CartPanda
    window.location.href = 'https://peskdigitalbusiness.mycartpanda.com/ex-ocu/next-offer/XEEIZEku8M?accepted=yes';
  };

  const handleRefuseClick = () => {
    // Inicializar CartPanda antes de redirecionar
    if ((window as any).CartPandaOcuExternal && !(window as any).ocuExternalInitialized) {
      try {
        new (window as any).CartPandaOcuExternal();
        (window as any).ocuExternalInitialized = true;
      } catch (error) {
        console.log('Erro ao inicializar CartPanda:', error);
      }
    }
    
    // Redirecionar para CartPanda
    window.location.href = 'https://peskdigitalbusiness.mycartpanda.com/ex-ocu/next-offer/XEEIZEku8M?accepted=no';
  };

  return (
    <>
      {/* Script CartPanda com controle de inicialização */}
      <head>
        <script
          src="https://assets.mycartpanda.com/cartx-ecomm-ui-assets/js/libs/ocu-external.js"
          async
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Carregar script mas não inicializar automaticamente
              window.addEventListener('load', function() {
                // Aguardar um tempo para garantir que a página carregou completamente
                setTimeout(function() {
                  if (typeof OcuExternal !== 'undefined') {
                    // Armazenar a classe para uso posterior
                    window.CartPandaOcuExternal = OcuExternal;
                    console.log('CartPanda OcuExternal carregado e pronto');
                  }
                }, 1000);
              });
            `,
          }}
        />
      </head>
      
      <div className="min-h-screen bg-background">
      {/* Disclaimer Impactante */}
      <div className="bg-red-600 py-3 px-4 relative overflow-hidden">
        <div className="text-center">
          <p className="text-white font-bold text-sm md:text-base">
            O DESCONTO DE 30% É EXCLUSIVO DESTA PÁGINA
          </p>
          <div className="text-white text-xs mt-1">
            Tempo restante: <span className="font-bold">{formatTime(timeLeft)}</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-10 px-4 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight">
            Última oportunidade: Calminhos & Soninho por apenas €6,90
          </h1>
          
          {/* Card do Pitch */}
          <div className="mb-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 shadow-2xl">
              <div className="text-center">
                <Image
                  src="/images/Upsell/pitch.png"
                  alt="Pitch Calminhos & Soninho"
                  width={600}
                  height={400}
                  className="w-full h-auto object-contain rounded-xl mb-6"
                  priority
                  loading="eager"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
                  quality={90}
                />
                
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Esta oferta não volta a aparecer
                </h2>
                
                <div className="mb-6">
                  <div className="inline-block bg-red-500/20 border border-red-400/30 rounded-lg px-4 py-2 mb-3">
                    <span className="text-red-200 text-sm font-bold tracking-wide">DESCONTO DE 30%</span>
                  </div>
                  <div className="text-2xl mb-2">
                    <span className="line-through text-red-300 decoration-red-400 decoration-2">De €9,90</span>
                  </div>
                  <div className="text-5xl font-black text-yellow-300 mb-2 drop-shadow-lg">
                    €6,90
                  </div>
                  <div className="text-green-300 text-lg font-semibold">
                    Economiza €3,00
                  </div>
                </div>
                
                <p className="text-lg text-white/90 mb-6">Adição em 1 clique • Acesso imediato</p>
                
                <div className="flex justify-center mb-6">
                  <Button
                    onClick={handleAcceptClick}
                    size="lg"
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-2xl text-lg md:text-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl flex items-center space-x-2"
                  >
                    <span>SIM, quero por €6,90</span>
                    <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
                  </Button>
                </div>
                
                <button
                  onClick={handleRefuseClick}
                  className="text-white/80 hover:text-white underline text-lg transition-colors duration-300"
                >
                  Não, obrigado
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SESSÃO 1: Pergunta Honesta */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-8">
            O teu filho tem dificuldades para dormir?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {[
              "Demora mais de 30 min para adormecer",
              "Acorda várias vezes durante a noite",
              "Fica agitado na hora de dormir",
              "Precisa de ecrãs para acalmar"
            ].map((problem, index) => (
              <div key={index} className="flex items-center justify-center space-x-3 p-4 bg-red-50 rounded-lg border border-red-200">
                <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">✕</span>
                </div>
                <span className="text-red-700 font-medium">{problem}</span>
              </div>
            ))}
          </div>
          
          <p className="text-xl text-gray-700 font-semibold">
            Se sim, esta é a tua última oportunidade de resolver isso por apenas €6,90.
          </p>
        </div>
      </section>

      {/* SESSÃO 2: Valor Simplificado */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
            O que recebes por apenas €6,90
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Tudo o que precisas para criar noites tranquilas desde hoje
          </p>
          
          <div className="bg-white rounded-2xl p-8 shadow-xl mb-8">
            <div className="space-y-6 text-left max-w-2xl mx-auto">
              <div className="flex items-start space-x-3">
                <span className="text-2xl">📚</span>
                <div>
                  <p className="font-semibold text-gray-800">PDF Completo com 30 Técnicas</p>
                  <p className="text-gray-600">Respiração do Balão, Copo da Calma, História Sussurrada e muito mais.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <span className="text-2xl">🎵</span>
                <div>
                  <p className="font-semibold text-gray-800">5 Áudios Guiados</p>
                  <p className="text-gray-600">Para usar quando precisar de ajuda extra para acalmar o teu filho.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <span className="text-2xl">📋</span>
                <div>
                  <p className="font-semibold text-gray-800">Guia de Implementação</p>
                  <p className="text-gray-600">Como criar uma rotina personalizada que funciona para a tua família.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* SESSÃO 4: Prova Social Simples */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-8">
            Mais de 500 famílias já resolveram o problema do sono
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                &ldquo;O meu filho agora dorme em 10 minutos. Vale cada cêntimo!&rdquo;
              </p>
              <p className="font-semibold text-gray-800">— Marina S.</p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                &ldquo;Por €6,90 resolvi um problema que me custava horas todas as noites.&rdquo;
              </p>
              <p className="font-semibold text-gray-800">— Prof. Diego</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Bar Mobile */}
      <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 z-50 md:hidden">
        <div className="flex items-center justify-between">
          <div className="text-sm font-semibold">
            Última oportunidade: €6,90
          </div>
          <div className="flex space-x-2">
            <Button
              onClick={handleAcceptClick}
              size="sm"
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-bold"
            >
              SIM
            </Button>
            <Button
              onClick={handleRefuseClick}
              size="sm"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 px-4 py-2 rounded-lg text-sm"
            >
              NÃO
            </Button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
