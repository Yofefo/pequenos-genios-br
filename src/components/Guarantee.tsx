import { Shield, RotateCcw, Clock } from 'lucide-react';

export default function Guarantee() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg text-center">
          <div className="mb-8">
            <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Garantia de 7 dias — sem risco!
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Se o projeto não transformar a rotina do seu pequeno, devolvemos 100% do valor pago. 
              <span className="font-semibold text-foreground"> Sem burocracia, sem perguntas.</span>
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="flex flex-col items-center space-y-3">
              <div className="bg-primary/10 p-4 rounded-xl">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">100% Seguro</h3>
              <p className="text-gray-600 text-sm text-center">
                Compra protegida e processamento confiável
              </p>
            </div>

            <div className="flex flex-col items-center space-y-3">
              <div className="bg-accent/10 p-4 rounded-xl">
                <RotateCcw className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground">Reembolso Total</h3>
              <p className="text-gray-600 text-sm text-center">
                Devolução integral do valor investido
              </p>
            </div>

            <div className="flex flex-col items-center space-y-3">
              <div className="bg-secondary/10 p-4 rounded-xl">
                <Clock className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="font-semibold text-foreground">7 Dias</h3>
              <p className="text-gray-600 text-sm text-center">
                Tempo suficiente para testar e comprovar
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


