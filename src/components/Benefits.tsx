import { Brain, Lightbulb, Heart, Users, Clock, Shield } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const benefits = [
  {
    icon: Brain,
    title: "Seu filho aprende a resolver problemas brincando",
    description: "Desenvolve o pensamento criativo e a capacidade de resolver desafios de forma natural e divertida"
  },
  {
    icon: Lightbulb,
    title: "Diminui o tempo de tela sem conflito",
    description: "Substitui telas por atividades que realmente engajam e desenvolvem seu pequeno"
  },
  {
    icon: Shield,
    title: "Economize com brinquedos caros",
    description: "Usa apenas itens simples que você já tem em casa - sem gastos extras"
  },
  {
    icon: Heart,
    title: "Fortalece a conexão entre pais e filhos",
    description: "Momentos especiais de conexão e aprendizado conjunto que ficam para sempre"
  },
  {
    icon: Users,
    title: "Estimula criatividade e coordenação",
    description: "Desenvolve habilidades motoras e cognitivas através de brincadeiras inteligentes"
  },
  {
    icon: Clock,
    title: "Atividades práticas em menos de 15 minutos",
    description: "Perfeitas para o dia a dia corrido das famílias - resultados rápidos e eficazes"
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
                <p className="text-gray-600 leading-relaxed">
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


