import { Gift, Clock, Calendar, Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const bonuses = [
  {
    icon: Gift,
    title: "10 brincadeiras extra de 5 minutos",
    description: "PDF 'SOS Tédio' para momentos de emergência",
    highlight: "Perfeito para quando a criança está entediada"
  },
  {
    icon: Calendar,
    title: "Planner semanal de brincadeiras",
    description: "Organize a semana com atividades planejadas",
    highlight: "Imprimível e personalizável"
  }
];

export default function Bonus() {
  return (
    <section id="bonus" className="py-16 px-4 bg-gradient-to-br from-secondary/20 to-accent/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <Badge className="bg-accent text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
            <Star className="w-4 h-4 mr-2" />
            Presente de Lançamento 🎁
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Presente de Lançamento 🎁
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            Ao garantir seu acesso hoje, você ainda leva 10 brincadeiras extras + Planner semanal de brincadeiras.
          </p>
          <Badge variant="destructive" className="px-6 py-3 rounded-full text-lg font-bold">
            ⚠️ Disponível por tempo limitado!
          </Badge>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {bonuses.map((bonus, index) => (
            <Card
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg border-2 border-secondary/30 hover:border-secondary/50 transition-all duration-300 transform hover:-translate-y-2 border-0"
            >
              <CardHeader className="p-0">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="bg-secondary/20 p-4 rounded-xl">
                    <bonus.icon className="w-8 h-8 text-secondary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl font-bold text-foreground mb-2">
                      {bonus.title}
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-gray-600 text-lg mb-3">
                  {bonus.description}
                </p>
                <Badge className="bg-accent/10 text-accent px-4 py-2 rounded-lg text-sm font-semibold">
                  {bonus.highlight}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Selo de oferta limitada */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-accent to-primary text-white px-8 py-4 rounded-2xl shadow-lg">
            <Clock className="w-6 h-6" />
            <span className="text-lg font-semibold">
              Oferta válida apenas durante o lançamento
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}


