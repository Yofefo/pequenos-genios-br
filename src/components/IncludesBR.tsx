import { FileText, BookOpen, CheckSquare, Table, MessageCircle } from 'lucide-react';

const includes = [
  {
    icon: FileText,
    title: "PDF com 30 brincadeiras inteligentes",
    description: "Versão para imprimir e digital, com instruções detalhadas"
  },
  {
    icon: BookOpen,
    title: "Guia Brinca+: 5 elementos de cada brincadeira",
    description: "Objetivo, materiais, preparo, execução e variações"
  },
  {
    icon: CheckSquare,
    title: "Checklist de preparo rápido",
    description: "Tudo pronto em apenas 2 minutos"
  },
  {
    icon: Table,
    title: "Tabela de faixa etária e objetivos",
    description: "Organize as atividades por idade e objetivos de aprendizado"
  }
];

export default function Includes() {
  return (
    <section id="inclui" className="py-16 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            O que está incluído
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Tudo que você precisa para transformar o tédio em aprendizado, organizado e pronto para usar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {includes.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-primary hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Seção de bônus */}
        <div className="mt-16 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Bônus Exclusivo: Guia de Atividades para Férias
            </h3>
            <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
              Mais 15 atividades especiais para manter as crianças engajadas durante as férias escolares. 
              Valor de €29,90 - <strong>grátis para você!</strong>
            </p>
            <div className="bg-primary text-white px-6 py-3 rounded-xl text-lg font-bold inline-block">
              Disponível até o final da oferta
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h4 className="text-2xl font-bold text-foreground mb-4">
              Pronto para começar?
            </h4>
            <p className="text-gray-700 mb-6">
              Acesso imediato a todos os materiais após a compra.
            </p>
            <div className="bg-gradient-to-r from-primary to-accent text-white px-8 py-4 rounded-xl text-xl font-bold inline-block">
              Garantir Minha Cópia Agora →
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
