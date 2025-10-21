import { ArrowRight } from 'lucide-react';

interface CTAIntermediarioProps {
  onCtaClick: () => void;
}

export default function CTAIntermediario({ onCtaClick }: CTAIntermediarioProps) {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-primary/10 to-accent/10">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-xl">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Dê o primeiro passo agora!
          </h2>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Em poucos minutos, você pode transformar a rotina da sua casa com o Método Brinca+.
          </p>

          <button
            onClick={onCtaClick}
            data-evt="cta-intermediario"
            className="bg-gradient-to-r from-primary to-accent hover:from-blue-600 hover:to-pink-500 text-white px-12 py-6 rounded-2xl text-2xl font-bold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center space-x-3 mx-auto"
          >
            <span>Quero Começar Hoje 🚀</span>
            <ArrowRight className="w-7 h-7" />
          </button>
        </div>
      </div>
    </section>
  );
}
