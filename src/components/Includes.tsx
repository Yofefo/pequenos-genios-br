import { FileText, BookOpen, CheckSquare, Table, Download, MessageCircle } from 'lucide-react';

const includes = [
  {
    icon: FileText,
    title: "PDF com 30 brincadeiras criativas",
    description: "Versão para imprimir e digital, com instruções passo a passo"
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
    description: "Organize as atividades por idade e tipo de aprendizado"
  }
];

export default function Includes() {
  return (
    <section id="inclui" className="py-16 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Você recebe:
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tudo o que precisa para começar a brincar e aprender hoje mesmo
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {includes.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-primary"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-xl flex-shrink-0">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Selo de acesso imediato */}
        <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 text-center text-white">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Download className="w-8 h-8" />
            <MessageCircle className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold mb-2">
            Acesso imediato após a compra
          </h3>
          <p className="text-lg opacity-90">
            Link enviado por e-mail ou WhatsApp para download instantâneo
          </p>
        </div>
      </div>
    </section>
  );
}




