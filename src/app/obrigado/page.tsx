'use client';

import { CheckCircle, Download, Mail, MessageCircle } from 'lucide-react';
import Image from 'next/image';

export default function ObrigadoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 py-16">
        
        {/* Header de Sucesso */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-white" />
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Obrigado pela sua compra! 🎉
          </h1>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Você receberá um e-mail confirmando o seu pedido e com instruções para acessar o conteúdo.
          </p>
        </div>

        {/* Card Principal */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Sua Compra
            </h2>
            
            <div className="flex items-center justify-center space-x-4 mb-6">
              <Image
                src="/images/hero/demo.png"
                alt="Projeto Pequenos Gênios"
                width={80}
                height={80}
                className="rounded-lg"
              />
              <div className="text-left">
                <h3 className="font-bold text-gray-800">Projeto Pequenos Gênios - Brinca+</h3>
                <p className="text-green-600 font-bold text-lg">R$ 14,90</p>
              </div>
            </div>
          </div>

          {/* Informações de Acesso */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-blue-50 rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Mail className="w-6 h-6 text-blue-600" />
                <h3 className="font-bold text-gray-800">E-mail</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Você receberá um e-mail com o link para baixar o PDF completo do Projeto Pequenos Gênios.
              </p>
            </div>
            
            <div className="bg-green-50 rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <MessageCircle className="w-6 h-6 text-green-600" />
                <h3 className="font-bold text-gray-800">WhatsApp</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Também enviaremos o link pelo WhatsApp para acesso imediato ao conteúdo.
              </p>
            </div>
          </div>

          {/* Botão de Ação */}
          <div className="text-center">
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-3 mx-auto">
              <Download className="w-6 h-6" />
              <span>Acessar Conteúdo</span>
            </button>
          </div>
        </div>

        {/* Informações Adicionais */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
            O que você recebeu:
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">📋</span>
              </div>
              <h4 className="font-bold text-gray-800 mb-2">PDF Completo</h4>
              <p className="text-gray-600 text-sm">30 brincadeiras criativas com instruções detalhadas</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🎯</span>
              </div>
              <h4 className="font-bold text-gray-800 mb-2">Guia Brinca+</h4>
              <p className="text-gray-600 text-sm">5 elementos de cada brincadeira para máximo aproveitamento</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">📅</span>
              </div>
              <h4 className="font-bold text-gray-800 mb-2">Acesso Vitalício</h4>
              <p className="text-gray-600 text-sm">Use quantas vezes quiser com seus filhos</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 text-gray-500 text-sm">
          <p>Termos de Compra - Política de Privacidade</p>
          <p className="mt-2">KVN Tecnologia Kirvano © 2025 - Todos os direitos reservados</p>
          <div className="flex items-center justify-center space-x-2 mt-2">
            <CheckCircle className="w-4 h-4 text-green-500" />
            <span>Compra 100% segura</span>
          </div>
        </div>
      </div>
    </div>
  );
}
