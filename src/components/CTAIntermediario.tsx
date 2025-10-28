import { ArrowRight } from 'lucide-react';

export default function CTAIntermediario() {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-primary/10 to-accent/10">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-xl">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Dê o primeiro passo agora!
          </h2>
          
          <p className="text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
            Em poucos minutos, pode transformar a rotina da sua casa com o Método Brinca+.
          </p>

          <div className="flex justify-center">
            <div className="bg-gradient-to-r from-primary to-accent text-white px-8 py-6 rounded-2xl text-2xl font-bold shadow-xl flex items-center space-x-3 opacity-50">
              <span>Quero Começar Hoje 🚀</span>
              <ArrowRight className="w-7 h-7" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
