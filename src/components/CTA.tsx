import { ArrowRight, Shield, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CTAProps {
  onCtaClick: (e?: React.MouseEvent) => void;
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
              <span className="text-2xl text-gray-500 line-through">De R$29,90</span>
              <span className="text-4xl font-bold text-primary">Por apenas R$14,90</span>
            </div>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
              Receba o guia completo + bônus exclusivos. Acesso imediato após a compra.
            </p>
          </div>

          <div className="flex justify-center mb-8">
            <Button
              type="button"
              onMouseDown={(e) => {
                e.preventDefault();
                e.stopPropagation();
                console.log('🎯 CTA Principal clicado!');
                onCtaClick(e);
              }}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                console.log('🎯 CTA Principal onClick!');
                onCtaClick(e);
              }}
              data-evt="cta-primary"
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 rounded-2xl text-2xl font-bold transition-all duration-300 transform hover:scale-110 shadow-2xl hover:shadow-3xl flex items-center space-x-3 animate-custom-pulse border-4 border-green-400"
            >
              <span>Baixar Agora 🧠</span>
              <ArrowRight className="w-8 h-8" />
            </Button>
          </div>

          {/* Selos de segurança */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
            <div className="flex items-center space-x-2 text-foreground/70">
              <Shield className="w-5 h-5 text-success" />
              <span className="font-semibold">Pagamento 100% seguro</span>
            </div>
            <div className="flex items-center space-x-2 text-foreground/70">
              <CreditCard className="w-5 h-5 text-success" />
              <span className="font-semibold">7 dias de garantia</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
