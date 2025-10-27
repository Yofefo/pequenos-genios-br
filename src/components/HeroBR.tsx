import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroProps {
  onCtaClick: () => void;
}

export default function Hero({ onCtaClick }: HeroProps) {
  // Data dinâmica para o bônus (sempre hoje + 7 dias)
  const getBonusDate = () => {
    const today = new Date();
    const bonusDate = new Date(today);
    bonusDate.setDate(today.getDate() + 7);
    return bonusDate.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  return (
    <section className="bg-background py-16 px-4">
      <div className="max-w-6xl mx-auto">
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
              
                     <p className="text-2xl lg:text-3xl text-gray-800 leading-relaxed max-w-3xl mx-auto">
                       30 brincadeiras inteligentes que estimulam a criatividade e reduzem o tempo de tela — usando o que você já tem em casa.
                     </p>
            </div>

            {/* Bullets rápidos centralizados */}
            <div className="space-y-4 max-w-2xl mx-auto">
              <div className="flex items-center justify-center space-x-3">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <span className="text-xl font-medium text-gray-800">Atividades de 10–15 min</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <span className="text-xl font-medium text-gray-800">Zero materiais caros</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <span className="text-xl font-medium text-gray-800">Ideal para pais e professores (3–8 anos)</span>
              </div>
            </div>

            {/* Imagem demonstrativa */}
            <div className="flex justify-center max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-2xl p-6 transform hover:scale-105 transition-transform duration-300">
                <div className="rounded-lg overflow-hidden">
                  <Image
                    src="/images/hero/demo.png"
                    alt="Demonstração do Projeto Pequenos Gênios em ação"
                    width={600}
                    height={400}
                    className="w-full h-auto object-contain"
                    priority
                    loading="eager"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    quality={90}
                  />
                </div>
              </div>
            </div>

            {/* CTA Principal */}
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 max-w-2xl mx-auto">
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-2xl mb-2">
                      <span className="line-through text-red-300 decoration-red-400 decoration-2">De €19,90</span>
                    </div>
                    <div className="text-5xl font-black text-yellow-300 mb-2 drop-shadow-lg">
                      €14,90
                    </div>
                    <div className="text-green-300 text-lg font-semibold">
                      Economiza €5,00
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <p className="text-lg text-gray-700 mb-4">
                      <strong>Bônus exclusivo:</strong> Guia de Atividades para Férias (valor €29,90)
                    </p>
                    <p className="text-sm text-gray-600">
                      Disponível até {getBonusDate()} • Acesso vitalício
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  onClick={onCtaClick}
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl text-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2"
                >
                  <span>Quero Transformar o Tédio em Aprendizado</span>
                  <ArrowRight className="w-6 h-6" />
                </Button>
                
                <button
                  onClick={handleScrollToPitch}
                  className="text-gray-600 hover:text-gray-800 underline text-lg cursor-pointer"
                >
                  Ver mais detalhes ↓
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
