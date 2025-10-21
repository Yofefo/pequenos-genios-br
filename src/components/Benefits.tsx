import { Brain, Lightbulb, Heart, Users, Clock, Shield } from 'lucide-react';

const benefits = [
  {
    icon: Brain,
    title: "Estimula criatividade e solução de problemas",
    description: "Desenvolve o pensamento criativo e a capacidade de resolver desafios"
  },
  {
    icon: Lightbulb,
    title: "Brincadeiras prontas com passo a passo",
    description: "Instruções claras e detalhadas para cada atividade"
  },
  {
    icon: Shield,
    title: "Sem telas e sem materiais caros",
    description: "Usa apenas itens simples que você já tem em casa"
  },
  {
    icon: Heart,
    title: "Fortalece vínculo entre adulto e criança",
    description: "Momentos especiais de conexão e aprendizado conjunto"
  },
  {
    icon: Users,
    title: "Pode ser usado com uma ou várias crianças",
    description: "Adaptável para uso individual ou em grupo"
  },
  {
    icon: Clock,
    title: "Atividades rápidas e práticas",
    description: "Perfeitas para o dia a dia corrido das famílias"
  }
];

export default function Benefits() {
  return (
    <section id="beneficios" className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            O que seu filho/aluno ganha
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Desenvolva habilidades essenciais de forma divertida e natural
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-primary/10 p-3 rounded-xl">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {benefit.title}
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

