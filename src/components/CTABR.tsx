import { ArrowRight, Shield, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CTAProps {
  onCtaClick: () => void;
}

export default function CTA({ onCtaClick }: CTAProps) {
  return (
    <section id="oferta" data-section="pitch" className="py-16 px-4 bg-gradient-to-br from-primary to-accent">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-2xl">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Garanta seu acesso com desconto de lançamento!
          </h2>
          
          <div className="mb-8">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <span className="text-2xl text-gray-500 line-through">De €29,90</span>
              <span className="text-4xl font-bold text-primary">Por apenas €14,90</span>
            </div>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
              recebe o guia completo + bônus exclusivos. Acesso imediato após a compra.
            </p>
          </div>

          <div className="flex justify-center mb-8">
            <Button
              onClick={onCtaClick}
              data-evt="cta-primary"
              size="lg"
              className="bg-gradient-to-r from-primary to-accent hover:from-blue-600 hover:to-pink-500 text-white px-12 py-6 rounded-2xl text-2xl font-bold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center space-x-3"
            >
              <span>Quero Garantir Minha Cópia Agora 🚀</span>
              <ArrowRight className="w-7 h-7" />
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="flex items-center justify-center space-x-2">
              <Shield className="w-5 h-5 text-green-600" />
              <span className="text-gray-700">Garantia de 7 dias</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <CreditCard className="w-5 h-5 text-green-600" />
              <span className="text-gray-700">Pagamento seguro</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <ArrowRight className="w-5 h-5 text-green-600" />
              <span className="text-gray-700">Acesso imediato</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
