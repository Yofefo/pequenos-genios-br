import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import Logo from './Logo';

interface HeroProps {
  onCtaClick: () => void;
}

export default function Hero({ onCtaClick }: HeroProps) {
  return (
    <section className="bg-background py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Logo */}
        <Logo />

        <div className="text-center space-y-12">
          {/* Conteúdo principal centralizado */}
          <div className="space-y-8 max-w-4xl mx-auto">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-tight">
                Projeto Pequenos Gênios —{' '}
                <span className="text-primary bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Método Brinca+
                </span>
              </h1>
              
              <p className="text-2xl lg:text-3xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Um guia visual com 30 brincadeiras inteligentes para desenvolver 
                criatividade e raciocínio com itens simples do dia a dia.
              </p>
            </div>

            {/* Bullets rápidos centralizados */}
            <div className="space-y-4 max-w-2xl mx-auto">
              <div className="flex items-center justify-center space-x-3">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <span className="text-xl font-medium">Atividades de 10–15 min</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <span className="text-xl font-medium">Zero materiais caros</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <span className="text-xl font-medium">Ideal para pais e professores (3–8 anos)</span>
              </div>
            </div>

            {/* CTA centralizado */}
            <div className="flex justify-center">
              <button
                onClick={onCtaClick}
                data-evt="cta-primary"
                className="bg-gradient-to-r from-primary to-accent hover:from-blue-600 hover:to-pink-500 text-white px-12 py-6 rounded-2xl text-2xl font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl flex items-center space-x-3"
              >
                <span>Quero o Guia Agora</span>
                <ArrowRight className="w-7 h-7" />
              </button>
            </div>
          </div>

          {/* Mockup centralizado */}
          <div className="relative max-w-md mx-auto">
            {/* Mockup principal - Capa do PDF */}
            <div className="bg-white rounded-2xl shadow-2xl p-6 transform rotate-3 hover:rotate-0 transition-transform duration-300 relative z-10">
              <div className="rounded-lg overflow-hidden">
                <Image
                  src="/images/hero/cover.png"
                  alt="Capa do PDF - Projeto Pequenos Gênios"
                  width={400}
                  height={300}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
            </div>
            
            {/* Mockup secundário - Crianças brincando */}
            <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl shadow-2xl p-4 transform -rotate-3 hover:rotate-0 transition-transform duration-300 z-20">
              <div className="rounded-lg overflow-hidden">
                <Image
                  src="/images/hero/kids-playing.png"
                  alt="Crianças brincando com o Método Brinca+"
                  width={200}
                  height={150}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
