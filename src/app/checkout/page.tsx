'use client';

import Link from 'next/link';
import { ArrowLeft, CreditCard, Shield } from 'lucide-react';
import { trackEvent } from '@/lib/pixel';

export default function CheckoutPage() {
  const handlePurchaseClick = () => {
    // Rastrear evento de início de compra
    trackEvent('InitiateCheckout', {
      content_name: 'Projeto Pequenos Gênios - Método Brinca+',
      content_category: 'Digital Product',
      value: 14.90,
      currency: 'BRL'
    });
    
    // Redirecionar para o gateway de pagamento
    window.open('https://pay.kirvano.com/84dc1856-cdba-41e6-91ce-259d8dd6369f', '_blank');
  };

  return (
    <div className="min-h-screen bg-background py-16 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Botão voltar */}
        <Link 
          href="/"
          className="inline-flex items-center space-x-2 text-primary hover:text-blue-600 transition-colors duration-200 mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Voltar para a página principal</span>
        </Link>

        {/* Conteúdo da página de checkout */}
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
          <div className="mb-8">
            <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CreditCard className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-4">
              Página de Checkout
            </h1>
            <p className="text-xl text-gray-600">
              Esta é uma página stub para demonstração. 
              Aqui você integraria seu sistema de pagamento.
            </p>
          </div>

          {/* Informações do produto */}
          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              Projeto Pequenos Gênios - Método Brinca+
            </h2>
            <div className="space-y-2 text-gray-600">
              <p>• 30 brincadeiras inteligentes</p>
              <p>• Bônus: 10 brincadeiras extra de 5 minutos</p>
              <p>• Bônus: Planner semanal de brincadeiras</p>
              <p>• Acesso imediato após a compra</p>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold">Total:</span>
                <span className="text-2xl font-bold text-primary">R$ 14,90</span>
              </div>
            </div>
          </div>

          {/* Botão de pagamento */}
          <button 
            onClick={handlePurchaseClick}
            className="w-full bg-primary hover:bg-blue-600 text-white px-8 py-4 rounded-2xl text-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl mb-6"
          >
            Finalizar Compra
          </button>

          {/* Selos de segurança */}
          <div className="flex items-center justify-center space-x-6 text-gray-500">
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-green-500" />
              <span className="text-sm">Pagamento seguro</span>
            </div>
            <div className="flex items-center space-x-2">
              <CreditCard className="w-5 h-5 text-green-500" />
              <span className="text-sm">7 dias de garantia</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
