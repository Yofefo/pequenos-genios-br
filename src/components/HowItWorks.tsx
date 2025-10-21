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
    title: "2️⃣ Separe o que já tem em casa",
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
    title: "5️⃣ Repita sempre que quiser 🎉",
    description: "Há variações por idade para manter o interesse sempre renovado"
  }
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Como funciona
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Simples, prático e eficaz - em apenas 5 passos
          </p>
        </div>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 bg-white rounded-2xl p-8 shadow-lg"
            >
              {/* Número e ícone */}
              <div className="flex items-center space-x-4">
                <div className="bg-primary text-white text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center">
                  {step.number}
                </div>
                <div className="bg-primary/10 p-4 rounded-xl">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
              </div>

              {/* Conteúdo */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


