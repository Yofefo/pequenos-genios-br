import { Brain, Lightbulb, Heart, Users, Clock, Shield, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const benefits = [
  {
    icon: Brain,
    title: "Seu filho aprende a resolver problemas brincando",
    description: "Desenvolve o pensamento criativo e a capacidade de resolver desafios de forma natural e divertida"
  },
  {
    icon: Lightbulb,
    title: "Diminui o tempo de tela sem conflito",
    description: "Substitui telas por atividades que realmente envolvem e desenvolvem seu pequeno"
  },
  {
    icon: Shield,
    title: "Economize com brinquedos caros",
    description: "Usa apenas itens simples que você já tem em casa - sem gastos extras"
  },
  {
    icon: Heart,
    title: "Fortalecer a conexão entre pais e filhos",
    description: "Momentos especiais de conexão e aprendizado conjunto que ficam para sempre"
  },
  {
    icon: Users,
    title: "Estimula criatividade e coordenação",
    description: "Desenvolve capacidades motoras e cognitivas através de brincadeiras inteligentes"
  },
  {
    icon: Clock,
    title: "Atividades rápidas e práticas",
    description: "Apenas 10-15 minutos por atividade - perfeito para o dia a dia corrido"
  }
];

const carouselImages = [
  { src: '/images/benefits/pqn-1.png', alt: 'Benefício 1 - Aprendizado através da brincadeira' },
  { src: '/images/benefits/pqn-2.png', alt: 'Benefício 2 - Menos tempo de tela' },
  { src: '/images/benefits/pqn-3.png', alt: 'Benefício 3 - Economia com brinquedos' },
  { src: '/images/benefits/pqn-4.png', alt: 'Benefício 4 - Conexão familiar' },
  { src: '/images/benefits/pqn-5.png', alt: 'Benefício 5 - Desenvolvimento motor' }
];

export default function Benefits() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">
            Algumas das atividades que seu filho irá fazer
          </h3>
        </div>

        {/* Carrossel de imagens */}
        <div className="relative mb-12">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {carouselImages.map((image, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="relative h-64 md:h-80">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
                      quality={90}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Controles do carrossel */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-200"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-200"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          
          {/* Indicadores */}
          <div className="flex justify-center mt-4 space-x-2">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentSlide ? 'bg-primary' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Grid de benefícios */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-lg font-bold text-foreground">
                  {benefit.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 max-w-2xl mx-auto">
            <h4 className="text-2xl font-bold text-foreground mb-4">
              Pronto para transformar o tédio em aprendizado?
            </h4>
            <p className="text-gray-700 mb-6">
              Junte-se a centenas de famílias que já descobriram o poder das brincadeiras inteligentes.
            </p>
            <div className="bg-primary text-white px-6 py-3 rounded-xl text-lg font-bold inline-block">
              Começar agora →
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
