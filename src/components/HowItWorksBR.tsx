import { Download, Target, Home, Play, RotateCcw } from 'lucide-react';

const steps = [
  {
    number: "1",
    icon: Target,
    title: "1️⃣ Escolha uma brincadeira",
    description: "Selecione a atividade ideal para o momento e a idade da criança"
  },
  {
    number: "2", 
    icon: Home,
    title: "2️⃣ Separe o que você já tem em casa",
    description: "Papel, canetas, objetos do dia a dia - nada de compras especiais"
  },
  {
    number: "3",
    icon: Play,
    title: "3️⃣ Siga o passo a passo do Método Brinca+",
    description: "Instruções claras e detalhadas para cada atividade"
  },
  {
    number: "4",
    icon: Download,
    title: "4️⃣ Observe o aprendizado acontecer",
    description: "Veja como seu filho desenvolve habilidades e se diverte aprendendo"
  },
  {
    number: "5",
    icon: RotateCcw,
    title: "5️⃣ Repita e varie",
    description: "Use as variações sugeridas para manter o interesse sempre alto"
  }
];

export default function HowItWorks() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Como funciona
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Em apenas 5 passos simples, você transforma qualquer momento em uma oportunidade de aprendizado.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 max-w-2xl mx-auto">
            <h4 className="text-2xl font-bold text-foreground mb-4">
              Simples assim!
            </h4>
            <p className="text-gray-700 mb-6">
              Não precisa ser especialista em educação. O Método Brinca+ guia você em cada passo.
            </p>
            <div className="bg-primary text-white px-6 py-3 rounded-xl text-lg font-bold inline-block">
              Começar Agora →
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
