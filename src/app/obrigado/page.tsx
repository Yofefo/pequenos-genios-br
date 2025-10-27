'use client';

import { Button } from '@/components/ui/button';
import { Download, Heart, CheckCircle, Star, Gift, Home } from 'lucide-react';

export default function ObrigadoPage() {
  const handleDownloadClick = () => {
    window.open('https://drive.google.com/drive/folders/1zcgBsU6HCUQtZB61KKDZgph3Gxz00ZUP', '_blank');
  };

  const handleHomeClick = () => {
    window.location.href = '/';
  };

  return (
    <>
      {/* Script CartPanda para Upsell Externa */}
      <head>
        <script
          src="https://assets.mycartpanda.com/cartx-ecomm-ui-assets/js/libs/ocu-external.js"
          async
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `new OcuExternal();`,
          }}
          async
        />
      </head>
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-gray-800">Pequenos Génios</h1>
              <p className="text-sm text-gray-600">Transformando momentos em aprendizagem</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Success Message */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Obrigado! 🎉
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            A tua compra foi confirmada com sucesso. Estamos muito felizes por teres escolhido investir no desenvolvimento do teu pequeno génio!
          </p>
        </div>

        {/* What's Next */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
              O que acontece agora?
            </h2>
            <p className="text-lg text-gray-600">
              Tudo está pronto para começares a transformar momentos simples em grandes aprendizagens
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                <Download className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">1. Descarrega os Materiais</h3>
              <p className="text-gray-600 text-sm">
                Acede ao teu Google Drive e descarrega todos os materiais do Projeto Pequenos Génios
              </p>
            </div>

            <div className="text-center p-6 bg-purple-50 rounded-xl">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full mb-4">
                <Heart className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">2. Explora e Experimenta</h3>
              <p className="text-gray-600 text-sm">
                Lê os guias, experimenta as atividades e vê a magia acontecer com o teu filho
              </p>
            </div>

            <div className="text-center p-6 bg-green-50 rounded-xl">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4">
                <Star className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">3. Partilha os Resultados</h3>
              <p className="text-gray-600 text-sm">
                Quando vires os resultados, partilha connosco! Adoramos saber como está a correr
              </p>
            </div>
          </div>
        </div>

        {/* Download Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
            <Gift className="w-8 h-8 text-white" />
          </div>
          
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">
            Os teus materiais estão prontos!
          </h2>
          
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Descarrega agora todos os materiais do Projeto Pequenos Génios e começa a transformar cada momento em uma oportunidade de aprendizagem
          </p>

          <div className="flex justify-center">
            <Button
              onClick={handleDownloadClick}
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-xl text-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center space-x-3"
            >
              <Download className="w-6 h-6" />
              <span>Descarregar Todos os Materiais</span>
            </Button>
          </div>
        </div>

        {/* What You Get */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 text-center mb-8">
            O que recebeste hoje
          </h2>
          
          <div className="space-y-4 max-w-2xl mx-auto">
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-800">Projeto Pequenos Génios — Método Brinca+</h3>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-800">Conexão com a Natureza – 20 Atividades ao Ar Livre com a Família</h3>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-800">Acesso Vitalício - Atualizações Semanais dos PDFs</h3>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-800">Missão Criativa – 20 Desafios para Pequenos Gênios</h3>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-800">Calminhos & Soninho: 30 Brincadeiras para Relaxamento Infantil</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Support Section */}
        <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 text-center mb-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
            Precisa de ajuda?
          </h2>
          
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Estamos aqui para te apoiar em cada passo desta jornada. Se tiveres alguma dúvida ou precisares de orientação, não hesites em contactar-nos.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleHomeClick}
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2"
            >
              <Home className="w-5 h-5" />
              <span>Voltar ao Início</span>
            </Button>
          </div>
        </div>

        {/* Final Message */}
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-6">
            <Heart className="w-8 h-8 text-yellow-600" />
          </div>
          
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
            Bem-vindo à família Pequenos Génios!
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Estamos muito felizes por teres escolhido investir no desenvolvimento do teu filho. 
            Juntos, vamos transformar cada momento em uma oportunidade de crescimento, aprendizagem e diversão.
          </p>
          
          <div className="mt-8 text-sm text-gray-500">
            <p>Com carinho,</p>
            <p className="font-semibold text-gray-700">Equipa Pequenos Génios 💙</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-800 text-white py-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-sm opacity-80">
            © 2024 Pequenos Génios. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </div>
    </>
  );
}