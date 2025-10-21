import { Gift, Clock, Calendar, Star } from 'lucide-react';

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
          <div className="inline-flex items-center space-x-2 bg-accent text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
            <Star className="w-4 h-4" />
            <span>Oferta por tempo limitado</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Bônus de Lançamento
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Materiais extras para maximizar o aprendizado e a diversão
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {bonuses.map((bonus, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg border-2 border-secondary/30 hover:border-secondary/50 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-start space-x-4 mb-4">
                <div className="bg-secondary/20 p-4 rounded-xl">
                  <bonus.icon className="w-8 h-8 text-secondary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {bonus.title}
                  </h3>
                  <p className="text-gray-600 text-lg mb-3">
                    {bonus.description}
                  </p>
                  <div className="bg-accent/10 text-accent px-4 py-2 rounded-lg text-sm font-semibold">
                    {bonus.highlight}
                  </div>
                </div>
              </div>
            </div>
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
