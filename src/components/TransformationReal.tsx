'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function TransformationReal() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        {/* Título Principal */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-800 mb-6">
            A diferença que você vê em poucos dias
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            O impacto do Método Brinca+ vai além das palavras — veja a transformação na rotina das famílias.
          </p>
        </div>

        {/* Imagens de Transformação */}
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          {/* Imagem ANTES */}
          <div className="text-center group">
            <div className="relative mb-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 group-hover:shadow-2xl group-hover:scale-105 transition-all duration-500 transform">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
                  <Image
                    src="/images/hero/antes.png"
                    alt="Antes do Método Brinca+"
                    width={800}
                    height={600}
                    className="object-cover group-hover:brightness-110 transition-all duration-500"
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                    quality={80}
                  />
                </div>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">
              Antes do Método Brinca+
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Cérebro preso em estímulos digitais.
            </p>
          </div>

          {/* Imagem DEPOIS */}
          <div className="text-center group">
            <div className="relative mb-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 group-hover:shadow-2xl group-hover:scale-105 transition-all duration-500 transform">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
                  <Image
                    src="/images/hero/depois.png"
                    alt="Depois do Método Brinca+"
                    width={800}
                    height={600}
                    className="object-cover group-hover:brightness-110 transition-all duration-500"
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                    quality={80}
                  />
                </div>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">
              Depois do Método Brinca+
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Cérebro livre pra criar, aprender e se conectar.
            </p>
          </div>

        </div>

        {/* Elemento Visual de Separação */}
        <div className={`text-center mt-20 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center space-x-4">
            <div className="w-16 h-1 bg-gradient-to-r from-red-400 to-red-600 rounded-full"></div>
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            <div className="w-16 h-1 bg-gradient-to-r from-green-400 to-green-600 rounded-full"></div>
          </div>
        </div>

      </div>
    </section>
  );
}
