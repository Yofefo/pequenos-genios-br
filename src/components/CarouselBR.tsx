'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const images = [
    {
      src: '/images/hero/CARROSEL1.png',
      alt: 'Conteúdo do Projeto Pequenos Gênios - Slide 1'
    },
    {
      src: '/images/hero/CARROSEL2.png',
      alt: 'Conteúdo do Projeto Pequenos Gênios - Slide 2'
    },
    {
      src: '/images/hero/CARROSEL3.png',
      alt: 'Conteúdo do Projeto Pequenos Gênios - Slide 3'
    },
    {
      src: '/images/hero/CARROSEL4.png',
      alt: 'Conteúdo do Projeto Pequenos Gênios - Slide 4'
    }
  ];

  // Auto-play do carrossel
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, images.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-xl lg:text-2xl font-bold text-foreground mb-3">
            Veja o que você vai receber
          </h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            Uma prévia do conteúdo que está esperando por você
          </p>
        </div>

        <div className="relative">
          {/* Carrossel */}
          <div className="overflow-hidden rounded-2xl shadow-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {images.map((image, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="relative h-64 md:h-80 lg:h-96">
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

          {/* Controles de navegação */}
          <button
            onClick={prevSlide}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextSlide}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Indicadores */}
          <div className="flex justify-center mt-6 space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentSlide ? 'bg-primary' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Pronto para ver tudo isso?
            </h3>
            <p className="text-gray-700 mb-6">
              Este é apenas um exemplo do que você vai receber. Muito mais conteúdo está esperando por você!
            </p>
            <div className="bg-primary text-white px-6 py-3 rounded-xl text-lg font-bold inline-block">
              Ver Tudo Agora →
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
