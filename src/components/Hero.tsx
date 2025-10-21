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

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Conteúdo principal */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Projeto Pequenos Gênios —{' '}
                <span className="text-primary">Método Brinca+</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Um guia visual com 30 brincadeiras inteligentes para desenvolver 
                criatividade e raciocínio com itens simples do dia a dia.
              </p>
            </div>

            {/* Bullets rápidos */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-lg">Atividades de 10–15 min</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-lg">Zero materiais caros</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-lg">Ideal para pais e professores (3–8 anos)</span>
              </div>
            </div>

            {/* CTA */}
            <button
              onClick={onCtaClick}
              data-evt="cta-primary"
              className="bg-primary hover:bg-blue-600 text-white px-8 py-4 rounded-2xl text-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2"
            >
              <span>Quero o Guia Agora</span>
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>

          {/* Mockup */}
          <div className="relative max-w-md mx-auto lg:mx-0">
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
