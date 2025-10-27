import Image from 'next/image';

export default function Storytelling() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Conteúdo */}
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Como nasceu o Método Brinca+
            </h2>
            <p className="text-xl text-foreground/80 leading-relaxed">
              O Projeto Pequenos Génios nasceu da rotina corrida de pais que queriam estimular os seus filhos sem depender de ecrãs, brinquedos caros ou muito tempo livre. O que parecia impossível tornou-se um método simples e acessível — o Brinca+.
            </p>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-2xl">💡</span>
              </div>
              <p className="text-lg font-semibold text-foreground">
                Criado por pais, para pais
              </p>
            </div>
          </div>
          
          {/* Imagem */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 min-h-[400px] flex items-center justify-center">
                <Image
                  src="/images/storytelling/family-playing.png"
                  alt="Família a brincar juntos com o Método Brinca+"
                  width={500}
                  height={400}
                  className="w-full h-auto object-cover rounded-xl hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    // Fallback visual quando a imagem não carregar
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `
                        <div class="flex flex-col items-center justify-center space-y-4 p-8 text-center">
                          <div class="text-6xl">👨‍👩‍👧‍👦</div>
                          <h3 class="text-2xl font-bold text-foreground">Família a Brincar Juntos</h3>
                          <p class="text-foreground/70">Pais e filhos a divertirem-se com o Método Brinca+</p>
                          <div class="flex space-x-2">
                            <span class="text-2xl">🎨</span>
                            <span class="text-2xl">🧩</span>
                            <span class="text-2xl">🎯</span>
                            <span class="text-2xl">🌟</span>
                          </div>
                        </div>
                      `;
                    }
                  }}
                />
                {/* Overlay com emoji */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                  <span className="text-2xl">👨‍👩‍👧‍👦</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
