import { Gift, Calendar, Star } from 'lucide-react';
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
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Além do Método Brinca+, você recebe estes materiais exclusivos gratuitamente.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {bonuses.map((bonus, index) => (
            <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <bonus.icon className="w-8 h-8 text-accent" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground">
                  {bonus.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center mb-4">
                  {bonus.description}
                </p>
                <div className="bg-accent/10 rounded-lg p-3 text-center">
                  <p className="text-accent font-semibold">
                    {bonus.highlight}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Valor total */}
        <div className="bg-white rounded-2xl p-8 shadow-lg text-center max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Valor Total dos Bônus
          </h3>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Método Brinca+ (30 brincadeiras)</span>
              <span className="font-semibold">€19,90</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Bônus SOS Tédio</span>
              <span className="font-semibold">€9,90</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Planner Semanal</span>
              <span className="font-semibold">€7,90</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Guia de Férias</span>
              <span className="font-semibold">€29,90</span>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between items-center text-xl font-bold">
              <span>Valor Total:</span>
              <span className="line-through text-gray-500">€67,60</span>
            </div>
            <div className="flex justify-between items-center text-2xl font-bold text-primary">
              <span>Hoje você paga apenas:</span>
              <span>€14,90</span>
            </div>
            <div className="text-green-600 font-semibold">
              Economia de €52,70!
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 max-w-2xl mx-auto">
            <h4 className="text-2xl font-bold text-foreground mb-4">
              Não perca esta oportunidade!
            </h4>
            <p className="text-gray-700 mb-6">
              Esta oferta especial está disponível apenas por tempo limitado.
            </p>
            <div className="bg-primary text-white px-8 py-4 rounded-xl text-xl font-bold inline-block">
              Garantir Minha Cópia Agora →
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
