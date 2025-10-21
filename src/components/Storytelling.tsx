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
              O Projeto Pequenos Gênios nasceu da rotina corrida de pais que queriam estimular seus filhos sem depender de telas, brinquedos caros ou muito tempo livre. O que parecia impossível virou um método simples e acessível — o Brinca+.
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
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8">
              <Image
                src="/images/storytelling/family-playing.png"
                alt="Família brincando juntos com o Método Brinca+"
                width={500}
                height={400}
                className="w-full h-auto object-contain rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
