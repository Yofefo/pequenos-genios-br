'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function BackRedirectPage() {
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutos em segundos

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
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

  const handleCheckoutClick = () => {
    // TODO: Configurar checkout brasileiro
    console.log('Redirecionando para checkout brasileiro...');
    // window.open('URL_DO_CHECKOUT_BRASILEIRO', '_blank');
  };

  return (
    <>
      {/* Script de Backredirect */}
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              var urlBackRedirect = 'https://pequenos-genios-2m7cc6oal-fernandos-projects-32ecaa0a.vercel.app'; // lembre-se de usar a url sem espaços
              // não altere nada abaixo dessa linha
              urlBackRedirect = urlBackRedirect = urlBackRedirect.trim() +
                      (urlBackRedirect.indexOf("?") > 0 ? '&' : '?') +
                      document.location.search.replace('?', '').toString();
              history.pushState({}, "", location.href);
              history.pushState({}, "", location.href);
              window.onpopstate = function () {
                  setTimeout(function () {
                      location.href = urlBackRedirect;
                  }, 1);
              };
            `,
          }}
        />
      </head>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">

      {/* Banner Vermelho de Urgência */}
      <div className="bg-red-600 text-white text-center py-3 px-4 relative overflow-hidden">
        <div className="flex items-center justify-center space-x-2">
          <span className="font-bold text-sm md:text-base">
            ⚠️ OFERTA EXCLUSIVA DESTA PÁGINA ⚠️
          </span>
          <div className="bg-red-500 px-3 py-1 rounded-full text-xs font-bold">
            {formatTime(timeLeft)}
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
            Última oportunidade: Projeto Pequenos Génios por apenas €9,90
          </h1>
          
          {/* Card Principal com Pitch */}
          <div className="mb-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 shadow-2xl">
              <div className="text-center">
                <Image
                  src="/images/hero/demo.png"
                  alt="Demo Projeto Pequenos Génios"
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
                    <span className="text-red-200 text-sm font-bold tracking-wide">DESCONTO DE 50%</span>
                  </div>
                  <div className="text-2xl mb-2">
                    <span className="line-through text-red-300 decoration-red-400 decoration-2">De €14,90</span>
                  </div>
                  <div className="text-5xl font-black text-yellow-300 mb-2 drop-shadow-lg">
                    €9,90
                  </div>
                  <div className="text-green-300 text-lg font-semibold">
                    Economiza €5,00
                  </div>
                </div>
                
                <p className="text-lg text-white/90 mb-6">Acesso imediato • Garantia de 7 dias</p>
                
                <div className="flex justify-center mb-6">
                  <Button
                    onClick={handleCheckoutClick}
                    size="lg"
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-2xl text-lg md:text-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl flex items-center space-x-2"
                  >
                    <span>SIM, quero por €9,90</span>
                    <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SESSÃO 1: Problema */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-8">
            O problema de hoje
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="flex items-start space-x-3 p-4 bg-red-50 rounded-lg">
              <span className="text-red-500 text-xl">❌</span>
              <div className="text-left">
                <h3 className="font-semibold text-gray-800">Crianças entediadas</h3>
                <p className="text-gray-600 text-sm">Sem atividades estimulantes, ficam irritadas e inquietas</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3 p-4 bg-red-50 rounded-lg">
              <span className="text-red-500 text-xl">❌</span>
              <div className="text-left">
                <h3 className="font-semibold text-gray-800">Dependência de ecrãs</h3>
                <p className="text-gray-600 text-sm">Tablets e telemóveis como única distração</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3 p-4 bg-red-50 rounded-lg">
              <span className="text-red-500 text-xl">❌</span>
              <div className="text-left">
                <h3 className="font-semibold text-gray-800">Falta de criatividade</h3>
                <p className="text-gray-600 text-sm">Pouco desenvolvimento da imaginação e habilidades</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3 p-4 bg-red-50 rounded-lg">
              <span className="text-red-500 text-xl">❌</span>
              <div className="text-left">
                <h3 className="font-semibold text-gray-800">Stress familiar</h3>
                <p className="text-gray-600 text-sm">Pais sem ideias para entreter os filhos</p>
              </div>
            </div>
          </div>
          
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Se identificaste com pelo menos um destes problemas, ainda falta a parte mais importante: 
            <strong> aprender a transformar o tédio em aprendizagem divertida.</strong>
          </p>
        </div>
      </section>

      {/* SESSÃO 2: Solução */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-8">
            A solução que transforma tudo
          </h2>
          
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-6">O que recebes hoje</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <span className="text-green-500 text-xl">✅</span>
                <div className="text-left">
                  <h4 className="font-semibold text-gray-800">Projeto Pequenos Génios — Método Brinca+</h4>
                  <p className="text-gray-600 text-sm">Guia completo com 50+ atividades</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <span className="text-green-500 text-xl">✅</span>
                <div className="text-left">
                  <h4 className="font-semibold text-gray-800">Conexão com a Natureza</h4>
                  <p className="text-gray-600 text-sm">20 atividades ao ar livre com a família</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <span className="text-green-500 text-xl">✅</span>
                <div className="text-left">
                  <h4 className="font-semibold text-gray-800">Acesso Vitalício</h4>
                  <p className="text-gray-600 text-sm">Atualizações semanais dos PDFs</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <span className="text-green-500 text-xl">✅</span>
                <div className="text-left">
                  <h4 className="font-semibold text-gray-800">Missão Criativa</h4>
                  <p className="text-gray-600 text-sm">20 desafios para pequenos génios</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Valor total: <span className="line-through decoration-red-500 decoration-4">€127</span></h3>
            <p className="text-lg mb-6">Hoje por apenas €9,90</p>
            <p className="text-sm opacity-90">Acesso imediato • Garantia de 7 dias</p>
          </div>
        </div>
      </section>

      {/* SESSÃO 3: Prova Social */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-8">
            Mais de 500 famílias já resolveram o problema do tédio
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gray-50 rounded-2xl p-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">⭐</span>
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                &ldquo;O meu filho adorou as atividades! Agora passa horas brincando sem precisar do tablet. 
                A criatividade dele explodiu!&rdquo;
              </p>
              <div className="text-sm text-gray-600">
                <strong>Marina S.</strong><br />
                Mãe de 2 filhos
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">⭐</span>
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                &ldquo;Como professora, recomendo este método. As crianças ficam mais focadas e criativas. 
                Mudou completamente a dinâmica da sala de aula.&rdquo;
              </p>
              <div className="text-sm text-gray-600">
                <strong>Prof. Diego G.</strong><br />
                Professor do 1º ciclo
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Resultados típicos em 7-14 dias:</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">-80%</div>
                <p className="text-sm opacity-90">Tempo de ecrãs</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">+200%</div>
                <p className="text-sm opacity-90">Criatividade</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">95%</div>
                <p className="text-sm opacity-90">Satisfação dos pais</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SESSÃO 4: Garantia */}
      <section className="py-16 px-4 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-8">
            Garantia de 7 dias — sem risco!
          </h2>
          
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <p className="text-lg text-gray-700 mb-6">
              Experimenta o Projeto Pequenos Génios por 7 dias completos. 
              Se não sentires uma diferença clara na criatividade e felicidade do teu filho, 
              devolvemos 100% do valor.
            </p>
            
            <div className="flex justify-center space-x-8">
              <div className="flex items-center space-x-2">
                <span className="text-green-500 text-xl">🛡️</span>
                <span className="text-sm text-gray-600">Pagamento seguro</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-500 text-xl">⏰</span>
                <span className="text-sm text-gray-600">7 dias de garantia</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-500 text-xl">📱</span>
                <span className="text-sm text-gray-600">Acesso imediato</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-8">
            Última oportunidade por €9,90
          </h2>
          
          <div className="flex justify-center mb-6">
            <Button
              onClick={handleCheckoutClick}
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 rounded-2xl text-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl flex items-center space-x-3"
            >
              <span>SIM, quero por €9,90</span>
              <ArrowRight className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </section>

      {/* Sticky Bar Mobile */}
      <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 md:hidden z-50">
        <div className="flex items-center justify-between">
          <div className="text-sm">
            <p className="font-semibold">Projeto Pequenos Génios</p>
            <p className="text-xs opacity-90">Por apenas €9,90</p>
          </div>
          <div className="flex space-x-2">
            <Button
              onClick={handleCheckoutClick}
              size="sm"
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-bold"
            >
              SIM
            </Button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
