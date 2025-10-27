'use client';

import { useState, useEffect } from 'react';
import { Shield, Star, Check, X, Clock, CircleSlash, Smile, Moon, ChevronDown } from 'lucide-react';
import Image from 'next/image';

export default function UpsellPage() {
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutos em segundos
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentProductSlide, setCurrentProductSlide] = useState(0);

  // Imagens do carrossel
  const carouselImages = [
    { src: '/images/Upsell/carrosel1.webp', alt: 'Calminhos & Soninho - Slide 1' },
    { src: '/images/Upsell/carrosel2.webp', alt: 'Calminhos & Soninho - Slide 2' },
    { src: '/images/Upsell/carrosel3.webp', alt: 'Calminhos & Soninho - Slide 3' },
    { src: '/images/Upsell/carrosel4.webp', alt: 'Calminhos & Soninho - Slide 4' }
  ];

  // Imagens do produto
  const productImages = [
    { src: '/images/Upsell/produto1.webp', alt: 'Produto Calminhos & Soninho - Slide 1' },
    { src: '/images/Upsell/produto2.webp', alt: 'Produto Calminhos & Soninho - Slide 2' },
    { src: '/images/Upsell/produto3.webp', alt: 'Produto Calminhos & Soninho - Slide 3' }
  ];

  // Auto-play do carrossel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [carouselImages.length]);

  // Auto-play do carrossel do produto
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProductSlide((prev) => (prev + 1) % productImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [productImages.length]);

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


  // URLs para checkout brasileiro
  const ACCEPT = 'https://pay.kirvano.com/84dc1856-cdba-41e6-91ce-259d8dd6369f';
  const DECLINE = 'https://pequenos-genios-9o55u1lpl-fernandos-projects-32ecaa0a.vercel.app/obrigado';

  const hardNav = (url: string) => {
    // Redirecionamento para checkout brasileiro (Kirvano)
    if (url.includes('kirvano')) {
      window.open(url, '_blank');
    } else {
      window.location.href = url;
    }
  };

  const handleAcceptClick = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log('Botão ACEITAR clicado!', ACCEPT);
    hardNav(ACCEPT);
  };

  const handleRefuseClick = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log('Botão RECUSAR clicado!', DECLINE);
    hardNav(DECLINE);
  };

  return (
    <>
      <head>
        {/* Script da Kirvano para Upsell */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              var offer = "84dc1856-cdba-41e6-91ce-259d8dd6369f";
              var nextPageURL = "https://pequenos-genios-9o55u1lpl-fernandos-projects-32ecaa0a.vercel.app/upsell";
              var refusePageURL = "https://pequenos-genios-9o55u1lpl-fernandos-projects-32ecaa0a.vercel.app/obrigado";
            `,
          }}
        />
        <script src="https://snippets.kirvano.com/upsell.min.js" />
      </head>
      <div className="min-h-screen bg-background">
      {/* Disclaimer Impactante */}
      <div className="bg-red-600 py-3 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-red-700 to-red-600 animate-pulse"></div>
        <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4">
          <div className="bg-white rounded-full px-3 py-1 flex items-center space-x-2">
            <Clock className="w-4 h-4 text-red-600 animate-pulse" />
            <span className="text-red-600 font-bold text-lg">{formatTime(timeLeft)}</span>
          </div>
          <p className="text-white font-bold text-center uppercase tracking-wide text-base sm:text-lg">
            Por favor, percorra a página até o fim para finalizar a sua compra.
          </p>
        </div>
      </div>

      {/* SESSÃO 1: Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 py-10 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Antes de sair: existe algo que vai dar ao seu filho a{' '}
            <span className="text-blue-300">calma</span> que o dia precisa.
          </h1>
          
          {/* Diagrama Quadrado - Elementos nas Pontas */}
          <div className="mb-8 max-w-4xl mx-auto">
            {/* Container Quadrado */}
            <div className="relative w-full max-w-lg mx-auto">
              <div className="aspect-square relative bg-gradient-to-br from-slate-800/50 to-blue-900/50 rounded-3xl p-8 md:p-12">
                
                {/* Texto Central */}
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="text-center max-w-sm px-4">
                    <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-2 leading-tight">
                      De que adianta<br />
                      desenvolver o seu<br />
                      pequeno gênio...<br />
                      se ele não descansa?
                    </h2>
                  </div>
                </div>

                {/* Elementos nas 4 Pontas */}
                {/* Canto Superior Esquerdo */}
                <div className="absolute top-4 left-4">
                  <div className="bg-pink-500 rounded-xl px-3 py-2 shadow-lg">
                    <div className="flex items-center space-x-2">
                      <CircleSlash className="w-4 h-4 text-white flex-shrink-0" />
                      <span className="text-white font-semibold text-xs leading-tight">
                        Brincadeira<br />sem tela
                      </span>
                    </div>
                  </div>
                </div>

                {/* Canto Superior Direito */}
                <div className="absolute top-4 right-4">
                  <div className="bg-orange-500 rounded-xl px-3 py-2 shadow-lg">
                    <div className="flex items-center space-x-2">
                      <Smile className="w-4 h-4 text-white flex-shrink-0" />
                      <span className="text-white font-semibold text-xs leading-tight">
                        Criança<br />renovada
                      </span>
                    </div>
                  </div>
                </div>

                {/* Canto Inferior Esquerdo */}
                <div className="absolute bottom-4 left-4">
                  <div className="bg-sky-300 rounded-xl px-3 py-2 shadow-lg">
                    <div className="flex items-center space-x-2">
                      <Moon className="w-4 h-4 text-white flex-shrink-0" />
                      <span className="text-white font-semibold text-xs leading-tight">
                        Sono<br />tranquilo
                      </span>
                    </div>
                  </div>
                </div>

                {/* Canto Inferior Direito */}
                <div className="absolute bottom-4 right-4">
                  <div className="bg-pink-500 rounded-xl px-3 py-2 shadow-lg">
                    <div className="flex items-center space-x-2">
                      <ChevronDown className="w-4 h-4 text-white flex-shrink-0" />
                      <span className="text-white font-semibold text-xs leading-tight">
                        Técnicas<br />Calminhos &<br />Soninho
                      </span>
                    </div>
                  </div>
                </div>

                {/* Setas SVG - Ajustes Finais */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                  {/* Seta superior: menor, entre os cards superiores */}
                  <line x1="35" y1="12" x2="65" y2="12" stroke="#FF69B4" strokeWidth="0.5" />
                  <polygon points="63,10 67,12 63,14" fill="#FF69B4" />
                  
                  {/* Seta direita: mais para a borda */}
                  <line x1="92" y1="30" x2="92" y2="70" stroke="#FFA500" strokeWidth="0.5" />
                  <polygon points="90,68 92,72 94,68" fill="#FFA500" />
                  
                  {/* Seta inferior: ainda menor, entre os cards inferiores */}
                  <line x1="60" y1="88" x2="40" y2="88" stroke="#87CEEB" strokeWidth="0.5" />
                  <polygon points="42,86 38,88 42,90" fill="#87CEEB" />
                  
                  {/* Seta esquerda: mais para a borda */}
                  <line x1="8" y1="70" x2="8" y2="30" stroke="#FF69B4" strokeWidth="0.5" />
                  <polygon points="10,32 8,28 6,32" fill="#FF69B4" />
                </svg>
              </div>
            </div>
          </div>
          
          {/* Subtítulo abaixo do esquema */}
          <div className="text-center mb-8">
            <p className="text-lg md:text-xl lg:text-2xl font-semibold text-white leading-relaxed max-w-3xl mx-auto px-4">
              Transforme a energia da brincadeira em calma e sono gostoso com técnicas simples e naturais.
            </p>
          </div>
          
          {/* Disclaimer Ornamental */}
          <div className="text-center mb-8">
            <div className="relative inline-block">
              {/* Decoração superior */}
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
              
              {/* Container principal com bordas decorativas */}
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-8 py-6 shadow-2xl">
                {/* Ícones decorativos */}
                <div className="flex items-center justify-center space-x-4 mb-3">
                  <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                  <div className="w-3 h-3 bg-white/80 rounded-full"></div>
                  <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                </div>
                
                {/* Texto principal */}
                <p className="text-white font-semibold text-lg mb-2">
                  Baixe o PDF &ldquo;Calminhos & Soninho&rdquo;
                </p>
                <p className="text-white/80 text-sm">
                  no final desta página
                </p>
                
                {/* Ícones decorativos inferiores */}
                <div className="flex items-center justify-center space-x-4 mt-3">
                  <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                  <div className="w-3 h-3 bg-white/80 rounded-full"></div>
                  <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                </div>
              </div>
              
              {/* Decoração inferior */}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* SESSÃO 2: Pergunta Honesta */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8 text-center">
            Você tem controle na hora de dormir?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {[
              "Birra ou choradeira para ir pra cama",
              "Precisa de tela para se acalmar",
              "Demora mais de 40 minutos para adormecer",
              "Acorda várias vezes durante a noite"
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-red-50 border border-red-200 rounded-lg">
                <div className="bg-red-500 rounded-full p-1">
                  <X className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-800 font-medium">{item}</span>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <p className="text-xl text-gray-700 font-semibold">
              Se marcou 1 ou mais, ainda falta a parte mais importante: aprender a desacelerar.
            </p>
          </div>
        </div>
      </section>

      {/* SESSÃO 3: Bloco Valor - O complemento perfeito para o Guia de Brincadeiras */}
      <section className="py-16 px-4 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-6xl mx-auto">
          {/* Carrossel */}
          <div className="mb-16">
            <div className="relative bg-white rounded-2xl p-8 shadow-lg">
              {/* Título do Carrossel */}
              <div className="text-center mb-8">
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
                  Algumas das técnicas que o seu filho vai aprender
                </h3>
              </div>
              
              <div className="relative overflow-hidden rounded-xl mb-8">
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {carouselImages.map((image, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                      <div className="relative bg-gray-50 rounded-md p-4 h-64 md:h-80 lg:h-96">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="object-contain rounded"
                          priority={index === 0}
                          loading="eager"
                          placeholder="blur"
                          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
                          quality={90}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Indicadores */}
                <div className="flex justify-center space-x-2 mt-6">
                  {carouselImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-200 ${
                        index === currentSlide 
                          ? 'bg-primary scale-125' 
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                      aria-label={`Ir para slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
              
              {/* Lista de Técnicas */}
              <div className="grid md:grid-cols-2 gap-4 text-left max-w-4xl mx-auto mt-8">
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <span className="text-primary font-bold">•</span>
                    <span className="text-gray-700">Respiração do Balão (3 níveis de idade)</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-primary font-bold">•</span>
                    <span className="text-gray-700">Escaneamento Corporal Guiado (2–3 min)</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-primary font-bold">•</span>
                    <span className="text-gray-700">Mimo Sonoro (ruído branco caseiro + instruções)</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-primary font-bold">•</span>
                    <span className="text-gray-700">Areia Mágica (imaginação + relaxamento das mãos)</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-primary font-bold">•</span>
                    <span className="text-gray-700">Massagem com Meia de Algodão</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-primary font-bold">•</span>
                    <span className="text-gray-700">Conto Calmo de 3 Passos</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-primary font-bold">•</span>
                    <span className="text-gray-700">Ioga do Bichinho (3 posturas seguras)</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-primary font-bold">•</span>
                    <span className="text-gray-700">Copo da Calma (fácil e caseiro)</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <span className="text-primary font-bold">•</span>
                    <span className="text-gray-700">Técnica da Tartaruga (ritual lento)</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-primary font-bold">•</span>
                    <span className="text-gray-700">Caixinha do Suspiro (respiração 4-2-6)</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-primary font-bold">•</span>
                    <span className="text-gray-700">Cheiro do Sonho (aromas neutros e seguros)</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-primary font-bold">•</span>
                    <span className="text-gray-700">Tap Tap Relax (toques leves)</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-primary font-bold">•</span>
                    <span className="text-gray-700">Abraço de Borboleta (versão infantil do EMDR)</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-primary font-bold">•</span>
                    <span className="text-gray-700">Manta Pesa-Leve (com materiais simples de casa)</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-primary font-bold">•</span>
                    <span className="text-gray-700">Ritual &lsquo;Boa Noite, Corpo&rsquo; (script de 90 segundos)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              O complemento perfeito para o guia Pequenos Gênios
            </h2>
            
            <p className="text-xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
              Calminhos & Soninho ensina a fechar o dia com calma, aconchego e previsibilidade — em 10 minutos.
            </p>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Imagine essa cena todas as noites:
              </h3>
              <div className="text-left space-y-6 text-lg text-gray-700">
                <div>
                  <p className="font-bold text-gray-800">🌙 <strong>19h30 – Técnica/Brincadeira (5–10 min)</strong></p>
                  <p className="ml-6 mt-1">Escolhe uma das 30 técnicas (ex.: Massagem das Estrelinhas, Manta-Peso, Jogo do Sopro Lento). É o gatilho de relaxamento.</p>
                </div>
                <div>
                  <p className="font-bold text-gray-800">🧘 <strong>19h40 – Respiração (2 min)</strong></p>
                  <p className="ml-6 mt-1">Fazem 3–5 ciclos: inspirar pelo nariz, expirar devagar pela boca. Só para assentar.</p>
                </div>
                <div>
                  <p className="font-bold text-gray-800">📖 <strong>19h50 – História sussurrada (3–5 min)</strong></p>
                  <p className="ml-6 mt-1">Luz baixa, voz mansa, história curtinha (ou áudio breve). Fecha o ritual.</p>
                </div>
                <div>
                  <p className="font-bold text-gray-800">😴 <strong>20h00 – Sono</strong></p>
                  <p className="ml-6 mt-1">Abraço, boa-noite e cama. Sem ecrãs, sem estímulos. Rotina previsível = adormece mais rápido.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              "Rotina previsível e mais rápida",
              "Menos disputa na hora de dormir",
              "Criança aprende auto-regulação de forma lúdica",
              "Mais tempo de qualidade para ti"
            ].map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-green-100 rounded-full p-2 flex-shrink-0 mt-1">
                  <Check className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <span className="text-gray-800 font-medium text-lg">{benefit}</span>
                  <p className="text-gray-600 text-sm mt-2">
                    {index === 0 && "Em vez de 1 hora de stress, apenas 10 minutos de conexão"}
                    {index === 1 && "Sem gritos, sem birras, sem negociações intermináveis"}
                    {index === 2 && "Ele aprende a reconhecer e gerir as suas próprias emoções"}
                    {index === 3 && "Tempo para ti, para o teu parceiro, para descansar"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SESSÃO 4: Seção Problema Expandida */}
      <section className="py-16 px-4 bg-red-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-red-800 mb-6">
              O que acontece quando não há rotina de relaxamento?
            </h2>
            <p className="text-xl text-red-700 max-w-3xl mx-auto">
              Sem técnicas de desaceleração, o cérebro da criança fica em estado de alerta constante
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-red-500">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <Image
                    src="/images/Upsell/para-filhos.webp"
                    alt="Para os filhos"
                    width={32}
                    height={32}
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <h3 className="font-bold text-red-800">Para a criança:</h3>
              </div>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• Ansiedade crescente ao final do dia</li>
                <li>• Dificuldade em adormecer</li>
                <li>• Sono fragmentado e inquieto</li>
                <li>• Irritabilidade no dia seguinte</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-orange-500">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <Image
                    src="/images/Upsell/para-pais.webp"
                    alt="Para os pais"
                    width={32}
                    height={32}
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <h3 className="font-bold text-orange-800">Para os pais:</h3>
              </div>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• Stress e frustração diários</li>
                <li>• Menos tempo para descansar</li>
                <li>• Sensação de impotência</li>
                <li>• Relacionamento tenso com o filho</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-yellow-500">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                  <Image
                    src="/images/Upsell/para-familia.webp"
                    alt="Para a família"
                    width={32}
                    height={32}
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <h3 className="font-bold text-yellow-800">Para a família:</h3>
              </div>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• Ambiente doméstico tenso</li>
                <li>• Menos momentos de qualidade</li>
                <li>• Rotinas caóticas</li>
                <li>• Impacto no relacionamento do casal</li>
              </ul>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-xl text-red-800 font-semibold">
              Mas há uma solução simples e natural...
            </p>
          </div>
        </div>
      </section>

      {/* SESSÃO 5: Cards de Benefícios - Como funciona o Calminhos & Soninho */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Como funciona o Calminhos & Soninho?
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              4 pilares científicos que transformam a energia em calma
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { 
                title: "Respiração guiada", 
                desc: "acalma em minutos",
                detail: "Técnicas como 'Respiração do Balão' que ativam o sistema nervoso parassimpático, reduzindo cortisol e promovendo relaxamento natural.",
                image: "/images/Upsell/respiracao.webp"
              },
              { 
                title: "Histórias e visualizações", 
                desc: "foco suave e imaginação tranquila",
                detail: "Narrativas guiadas como 'Barquinho no Lago' que distraem a mente ativa e criam imagens mentais relaxantes.",
                image: "/images/Upsell/historias.webp"
              },
              { 
                title: "Movimentos suaves", 
                desc: "libera tensões",
                detail: "Ioga do bichinho e alongamentos gentis que libertam tensão muscular e promovem consciência corporal.",
                image: "/images/Upsell/movimentos.webp"
              },
              { 
                title: "Rituais aconchegantes", 
                desc: "sinal de 'hora de descansar'",
                detail: "Criação de ambiente e rotinas que sinalizam ao cérebro que é hora de desacelerar e preparar para o sono.",
                image: "/images/Upsell/rituais.webp"
              }
            ].map((card, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                <div className="mb-4 flex justify-center">
                  <Image
                    src={card.image}
                    alt={card.title}
                    width={120}
                    height={120}
                    className="w-30 h-30 object-contain"
                    priority={index === 0}
                    loading="eager"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                    sizes="(max-width: 768px) 20vw, (max-width: 1200px) 15vw, 10vw"
                    quality={90}
                  />
                </div>
                <h3 className="font-bold text-gray-800 mb-2 text-lg">{card.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{card.desc}</p>
                <p className="text-gray-500 text-xs leading-relaxed">{card.detail}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              O resultado? Uma criança que sabe desacelerar naturalmente
            </h3>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Em vez de depender de ecrãs ou ficar horas a lutar contra o sono, o teu filho desenvolve 
              <strong className="text-primary"> capacidades internas de auto-regulação</strong> que o acompanham para toda a vida.
            </p>
          </div>
        </div>
      </section>

      {/* SESSÃO 6: O que recebes hoje */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              O que recebes hoje
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Tudo o que precisas para criar noites tranquilas desde o primeiro dia
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-4xl mx-auto">
            {/* Card Quadrado com Carrossel */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 aspect-square">
              <div className="h-full flex flex-col justify-center items-center text-center">
                <h3 className="font-bold text-gray-800 mb-6 text-xl">Material Completo</h3>
                
                {/* Carrossel de Produtos */}
                <div className="relative w-full h-64 overflow-hidden rounded-lg bg-gray-100">
                  <div 
                    className="flex transition-transform duration-500 ease-in-out h-full"
                    style={{ transform: `translateX(-${currentProductSlide * 100}%)` }}
                  >
                    {productImages.map((image, index) => (
                      <div key={index} className="w-full flex-shrink-0 h-full">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          width={256}
                          height={256}
                          className="w-full h-full object-contain"
                          priority={index === 0}
                          loading="eager"
                          placeholder="blur"
                          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
                          quality={90}
                        />
                      </div>
                    ))}
                  </div>
                  
                  {/* Indicadores */}
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
                    {productImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentProductSlide(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-200 ${
                          index === currentProductSlide 
                            ? 'bg-primary scale-125' 
                            : 'bg-gray-300 hover:bg-gray-400'
                        }`}
                        aria-label={`Ir para slide ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {[
              { 
                title: "PDF com as 30 técnicas passo a passo",
                desc: "Guia completo com instruções detalhadas, adaptadas por idade e situação",
                icon: "📋",
                color: "blue"
              },
              { 
                title: "10 roteiros de áudio para guiares a voz",
                desc: "Scripts prontos para contares histórias relaxantes com a voz certa",
                icon: "🎙️",
                color: "green"
              },
              { 
                title: "Folha-resumo imprimível",
                desc: "Cartão de referência rápida para ter sempre à mão",
                icon: "📄",
                color: "purple"
              },
              { 
                title: "Planner de 14 dias para criar hábito",
                desc: "Cronograma estruturado para implementar gradualmente",
                icon: "📅",
                color: "orange"
              }
            ].map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 min-h-[300px] flex">
                <div className="flex flex-col items-center text-center justify-center w-full">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="font-bold text-gray-800 mb-3 text-lg leading-tight">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed max-w-xs">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Valor total: <span className="line-through decoration-red-500 decoration-4">€127</span>
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              Se fosses contratar um especialista em sono infantil, gastarias centenas de euros. 
              Aqui tens tudo condensado, testado e pronto para usar.
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
              <span className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>Acesso imediato</span>
              </span>
              <span className="flex items-center space-x-1">
                <Shield className="w-4 h-4" />
                <span>Garantia de 7 dias</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SESSÃO 7: Pitch - Box de Oferta/FOMO */}
      <section className="py-16 px-4 bg-gradient-to-br from-primary to-accent">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <div className="mb-6">
              <p className="text-sm text-gray-600 mb-2">Só aqui. Só agora.</p>
              <p className="text-lg font-bold text-gray-800 mb-6">Esta oferta não volta a aparecer.</p>
              
              {/* Imagem Pitch */}
              <div className="mb-6">
                <Image
                  src="/images/Upsell/pitch.webp"
                  alt="Oferta especial Calminhos & Soninho"
                  width={500}
                  height={300}
                  className="w-full max-w-md mx-auto h-auto object-contain rounded-lg shadow-md"
                  priority
                  loading="eager"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
                  quality={90}
                />
              </div>
              
              <div className="mb-6">
                <span className="text-2xl text-gray-500 line-through">R$39,00</span>
                <span className="text-4xl font-bold text-primary ml-4">Hoje: R$14,90</span>
              </div>
              
              <p className="text-sm text-gray-600 mb-6">
                Adição em 1 clique • Acesso imediato
              </p>
            </div>
            
            <div className="space-y-4">
              <a
                href={ACCEPT}
                rel="external noopener"
                onClick={handleAcceptClick}
                className="kirvano-payment-trigger w-full bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center cursor-pointer pointer-events-auto"
              >
                SIM, quero noites mais tranquilas
              </a>
              
              <a
                href={DECLINE}
                rel="external noopener"
                onClick={handleRefuseClick}
                className="kirvano-refuse-trigger text-gray-600 hover:text-gray-800 underline text-sm cursor-pointer pointer-events-auto"
              >
                Não, obrigado — vou seguir sem o relaxamento
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SESSÃO 8: Prova Social - Mais de 500 famílias já transformaram as suas noites */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Mais de 500 famílias já transformaram suas noites
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Resultados reais de pais que implementaram o Calminhos & Soninho
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 italic mb-6 text-lg leading-relaxed">
                &ldquo;&lsquo;O Copo da Calma e o Barquinho no Lago mudaram nossa rotina. 
                O Tiago adormece mais rápido e eu tenho tempo pra mim à noite. 
                Acabou o stress na hora de dormir!&rsquo;&rdquo;
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold">M</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Marta</p>
                  <p className="text-gray-600 text-sm">Mãe do Tiago (5 anos)</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 italic mb-6 text-lg leading-relaxed">
                &ldquo;&lsquo;O áudio História Sussurrada virou ritual aqui em casa. 
                A Inês pede pra fazer toda noite e já não precisa de tela pra acalmar. 
                Mudou completamente o clima da casa.&rsquo;&rdquo;
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <span className="text-accent font-bold">P</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Pedro</p>
                  <p className="text-gray-600 text-sm">Pai da Inês (6 anos)</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">
              Resultados típicos em 7-14 dias:
            </h3>
            <div className="grid sm:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">80%</div>
                <p className="text-sm opacity-90">Redução no tempo para adormecer</p>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">90%</div>
                <p className="text-sm opacity-90">Menos stress na hora de dormir</p>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">95%</div>
                <p className="text-sm opacity-90">Satisfação dos pais</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SESSÃO 9: Garantia de 7 dias */}
      <section className="py-16 px-4 bg-gradient-to-br from-secondary/5 to-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="mb-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Garantia de 7 dias
              </h2>
              <p className="text-lg text-gray-700 mb-2">
                Experimente por 7 dias. Se não sentir diferença, devolvemos seu dinheiro.
              </p>
              <p className="text-sm text-gray-600">
                Conteúdo lúdico; não substitui aconselhamento médico.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SESSÃO 10: CTA Final - Só botão de compra */}
      <section className="py-16 px-4 bg-gradient-to-br from-primary to-accent">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-6">
            <a
              href={ACCEPT}
              rel="external noopener"
              onClick={handleAcceptClick}
              className="kirvano-payment-trigger bg-green-600 hover:bg-green-700 text-white px-8 py-6 rounded-2xl text-xl md:text-2xl font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl w-full sm:w-auto flex items-center justify-center cursor-pointer pointer-events-auto"
            >
              SIM, quero noites mais tranquilas
            </a>
            
            <a
              href={DECLINE}
              rel="external noopener"
              onClick={handleRefuseClick}
              className="kirvano-refuse-trigger text-white/80 hover:text-white underline text-lg cursor-pointer pointer-events-auto block mx-auto"
            >
              Não, prefiro seguir sem o relaxamento
            </a>
          </div>
        </div>
      </section>

      {/* Sticky Bar Mobile - Melhorado */}
      <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-primary to-accent text-white p-4 z-50 md:hidden shadow-2xl">
        <div className="flex items-center justify-between max-w-sm mx-auto">
          <div className="flex-1 mr-4">
            <p className="text-sm font-medium leading-tight">
              Noites mais tranquilas?<br />
              <span className="text-xs opacity-90">Adiciona com 1 clique</span>
            </p>
          </div>
          <div className="flex space-x-2">
            <a
              href={ACCEPT}
              rel="external noopener"
              onClick={handleAcceptClick}
              className="kirvano-payment-trigger bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-bold transition-colors min-w-[60px] cursor-pointer pointer-events-auto"
            >
              SIM
            </a>
            <a
              href={DECLINE}
              rel="external noopener"
              onClick={handleRefuseClick}
              className="kirvano-refuse-trigger text-white/80 hover:text-white underline text-sm transition-colors cursor-pointer pointer-events-auto"
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