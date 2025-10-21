import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import Logo from './Logo';
import { Button } from '@/components/ui/button';

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
                Transforme o tédio em aprendizado com o{' '}
                <span className="text-primary bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Projeto Pequenos Gênios 🧠
                </span>
              </h1>
              
              <p className="text-2xl lg:text-3xl text-foreground/80 leading-relaxed max-w-3xl mx-auto">
                30 brincadeiras inteligentes que estimulam a criatividade e reduzem o tempo de tela — usando o que você já tem em casa.
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
            <div className="space-y-4">
              <div className="flex justify-center">
                <Button
                  onClick={onCtaClick}
                  data-evt="cta-primary"
                  size="lg"
                  className="bg-gradient-to-r from-primary to-accent hover:from-blue-600 hover:to-pink-500 text-white px-12 py-6 rounded-2xl text-2xl font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl flex items-center space-x-3"
                >
                  <span>Baixar o Guia Agora</span>
                  <ArrowRight className="w-7 h-7" />
                </Button>
              </div>
              
              {/* Linha de urgência */}
              <p className="text-lg font-semibold text-accent">
                🔥 Bônus de lançamento disponível só até 31/12/2024!
              </p>
              
              {/* Badge de prova social */}
              <div className="inline-flex items-center space-x-2 bg-secondary/10 px-6 py-3 rounded-full">
                <span className="text-lg font-semibold text-foreground">
                  🎉 Mais de 500 famílias já estão participando!
                </span>
              </div>
            </div>
          </div>

          {/* Mockup harmonioso */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 max-w-4xl mx-auto">
            {/* Mockup principal - Capa do PDF */}
            <div className="bg-white rounded-2xl shadow-2xl p-6 transform rotate-1 hover:rotate-0 transition-transform duration-300 flex-shrink-0">
              <div className="rounded-lg overflow-hidden">
                <Image
                  src="/images/hero/cover.png"
                  alt="Capa do PDF - Projeto Pequenos Gênios"
                  width={350}
                  height={260}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
            </div>
            
            {/* Mockup secundário - Crianças brincando */}
            <div className="bg-white rounded-2xl shadow-2xl p-4 transform -rotate-1 hover:rotate-0 transition-transform duration-300 flex-shrink-0">
              <div className="rounded-lg overflow-hidden">
                <Image
                  src="/images/hero/kids-playing.png"
                  alt="Crianças brincando com o Método Brinca+"
                  width={250}
                  height={190}
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
