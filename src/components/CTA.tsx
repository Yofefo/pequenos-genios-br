import { ArrowRight, Shield, CreditCard } from 'lucide-react';

interface CTAProps {
  onCtaClick: () => void;
}

export default function CTA({ onCtaClick }: CTAProps) {
  return (
    <section id="oferta" className="py-16 px-4 bg-gradient-to-br from-primary to-accent">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-2xl">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Comece hoje por{' '}
            <span className="text-primary">R$ 27,90</span>
          </h2>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Acesso imediato ao Projeto Pequenos Gênios — Método Brinca+ + bônus de lançamento.
          </p>

          <button
            onClick={onCtaClick}
            data-evt="cta-primary"
            className="bg-primary hover:bg-blue-600 text-white px-12 py-6 rounded-2xl text-2xl font-bold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center space-x-3 mx-auto mb-8"
          >
            <span>Quero o Guia Agora</span>
            <ArrowRight className="w-8 h-8" />
          </button>

          {/* Selos de segurança */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
            <div className="flex items-center space-x-2 text-gray-600">
              <Shield className="w-5 h-5 text-green-500" />
              <span className="font-semibold">Pagamento seguro</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <CreditCard className="w-5 h-5 text-green-500" />
              <span className="font-semibold">7 dias de garantia</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
