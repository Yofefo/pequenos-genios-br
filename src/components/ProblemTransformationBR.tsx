import Image from 'next/image';

export default function ProblemTransformation() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            O problema de hoje
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Crianças cada vez mais dependentes de telas, pais sem tempo e brinquedos cada vez mais caros.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Card 1 - Sem o Método */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-red-500">
            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                <span className="text-3xl">❌</span>
              </div>
              <h3 className="text-2xl font-bold text-foreground">
                Sem o Método Brinca+
              </h3>
              
              {/* Imagem sem método */}
              <div className="bg-gray-50 rounded-xl p-4">
                     <Image
                       src="/images/hero/sem-metodo.png"
                       alt="Criança entediada sem atividades"
                       width={400}
                       height={300}
                       className="w-full h-auto object-contain rounded-lg"
                       placeholder="blur"
                       blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                       sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                       quality={90}
                     />
              </div>
              
              <div className="space-y-3 text-left">
                <div className="flex items-start space-x-3">
                  <span className="text-red-500 text-xl">•</span>
                  <span className="text-gray-700">Crianças entediadas e irritadas</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-red-500 text-xl">•</span>
                  <span className="text-gray-700">Muito tempo de tela</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-red-500 text-xl">•</span>
                  <span className="text-gray-700">Brinquedos caros que não duram</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-red-500 text-xl">•</span>
                  <span className="text-gray-700">Pais sem ideias criativas</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 - Com o Método */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-green-500">
            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <span className="text-3xl">✅</span>
              </div>
              <h3 className="text-2xl font-bold text-foreground">
                Com o Método Brinca+
              </h3>
              
              {/* Imagem com método */}
              <div className="bg-gray-50 rounded-xl p-4">
                     <Image
                       src="/images/hero/com-metodo.png"
                       alt="Criança feliz brincando e aprendendo"
                       width={400}
                       height={300}
                       className="w-full h-auto object-contain rounded-lg"
                       placeholder="blur"
                       blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                       sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                       quality={90}
                     />
              </div>
              
              <div className="space-y-3 text-left">
                <div className="flex items-start space-x-3">
                  <span className="text-green-500 text-xl">•</span>
                  <span className="text-gray-700">Crianças engajadas e felizes</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-green-500 text-xl">•</span>
                  <span className="text-gray-700">Menos tempo de tela</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-green-500 text-xl">•</span>
                  <span className="text-gray-700">Atividades com materiais de casa</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-green-500 text-xl">•</span>
                  <span className="text-gray-700">Pais com 30 ideias prontas</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <p className="text-xl text-gray-700 mb-6">
            Qual versão você quer para sua família?
          </p>
          <div className="flex justify-center">
            <div className="bg-gradient-to-r from-primary to-accent text-white px-8 py-4 rounded-xl text-xl font-bold shadow-lg">
              Escolha a transformação →
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
