import { Brain, Lightbulb, Heart, Users, Clock, Shield, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const benefits = [
  {
    icon: Brain,
    title: "O seu filho aprende a resolver problemas a brincar",
    description: "Desenvolve o pensamento criativo e a capacidade de resolver desafios de forma natural e divertida"
  },
  {
    icon: Lightbulb,
    title: "Diminui o tempo de ecrã sem conflito",
    description: "Substitui ecrãs por actividades que realmente envolvem e desenvolvem o seu pequeno"
  },
  {
    icon: Shield,
    title: "Poupe com brinquedos caros",
    description: "Usa apenas itens simples que já tem em casa - sem gastos extras"
  },
  {
    icon: Heart,
    title: "Fortalecer a ligação entre pais e filhos",
    description: "Momentos especiais de ligação e aprendizagem conjunta que ficam para sempre"
  },
  {
    icon: Users,
    title: "Estimula criatividade e coordenação",
    description: "Desenvolve capacidades motoras e cognitivas através de brincadeiras inteligentes"
  },
  {
    icon: Clock,
    title: "Actividades práticas em menos de 15 minutos",
    description: "Perfeitas para o dia a dia corrido das famílias - resultados rápidos e eficazes"
  }
];

export default function Benefits() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Array de imagens placeholder - você pode adicionar mais conforme necessário
  const carouselImages = [
    { src: '/images/benefits/pqn-1.webp', alt: 'Benefício 1' },
    { src: '/images/benefits/pqn-2.webp', alt: 'Benefício 2' },
    { src: '/images/benefits/pqn-3.webp', alt: 'Benefício 3' },
    { src: '/images/benefits/pqn-4.webp', alt: 'Benefício 4' },
    { src: '/images/benefits/pqn-5.webp', alt: 'Benefício 5' },
  ];

  // Auto-play do carrossel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 4000); // Muda a cada 4 segundos

    return () => clearInterval(interval);
  }, [carouselImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  return (
    <section id="beneficios" className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Carrossel de Benefícios */}
        <div className="mb-16">
          <div className="relative bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-center text-foreground mb-8">
              Algumas das actividades que o seu filho irá fazer
            </h3>
            
            <div className="relative overflow-hidden rounded-xl">
              <div 
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {carouselImages.map((image, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="relative aspect-square max-w-md mx-auto rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 80vw, (max-width: 1200px) 50vw, 40vw"
                        quality={90}
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                      />
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Botões de navegação */}
              <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110 z-10"
                aria-label="Imagem anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110 z-10"
                aria-label="Próxima imagem"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
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
                  aria-label={`Ir para imagem ${index + 1}`}
                />
              ))}
            </div>
            
            {/* Indicador de auto-play */}
            <div className="text-center mt-4">
              <p className="text-sm text-gray-500">
                <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                Transição automática a cada 4 segundos
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            O que o seu filho/aluno ganha
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Desenvolva capacidades essenciais de forma divertida e natural
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0"
            >
              <CardHeader className="p-0 mb-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-xl">
                    <benefit.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground">
                    {benefit.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-foreground/70 leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}


