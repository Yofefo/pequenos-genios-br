import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroProps {
  onCtaClick: () => void;
}

export default function Hero({ onCtaClick }: HeroProps) {
  // Data dinâmica para o bónus (sempre hoje + 7 dias)
  const getBonusDate = () => {
    const today = new Date();
    const bonusDate = new Date(today);
    bonusDate.setDate(today.getDate() + 7);
    return bonusDate.toLocaleDateString('pt-PT', {
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
                Transforme o tédio em aprendizagem com o{' '}
                <span className="text-primary bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Projeto Pequenos Génios 🧠
                </span>
              </h1>
              
                     <p className="text-2xl lg:text-3xl text-gray-800 leading-relaxed max-w-3xl mx-auto">
                       30 brincadeiras inteligentes que estimulam a criatividade e reduzem o tempo de ecrã — usando o que já tem em casa.
                     </p>
            </div>

            {/* Bullets rápidos centralizados */}
            <div className="space-y-4 max-w-2xl mx-auto">
              <div className="flex items-center justify-center space-x-3">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <span className="text-xl font-medium text-gray-800">Actividades de 10–15 min</span>
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
                    alt="Demonstração do Projeto Pequenos Génios em acção"
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

            {/* CTA centralizado */}
            <div className="space-y-4">
              <div className="flex justify-center">
                <Button
                  onClick={onCtaClick}
                  data-evt="cta-primary"
                  size="lg"
                  className="bg-gradient-to-r from-primary to-accent hover:from-blue-600 hover:to-pink-500 text-white px-8 py-6 rounded-2xl text-2xl font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl flex items-center space-x-3"
                >
                  <span>Descarregar o Guia Agora</span>
                  <ArrowRight className="w-7 h-7" />
                </Button>
              </div>
              
              
              {/* Linha de urgência */}
              <p className="text-lg font-semibold text-orange-600">
                🔥 Bónus de lançamento disponível só até {getBonusDate()}!
              </p>
              
              {/* Badge de prova social */}
              <div className="inline-flex items-center space-x-2 bg-secondary/10 px-6 py-3 rounded-full">
                <span className="text-lg font-semibold text-gray-800">
                  🎉 Mais de 500 famílias já estão a participar!
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
