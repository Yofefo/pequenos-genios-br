'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqs = [
  {
    question: "Preciso de materiais especiais?",
    answer: "Não. As brincadeiras usam itens simples que você já tem em casa: papel, canetas, potes, tampas, materiais recicláveis."
  },
  {
    question: "Para que idade serve?",
    answer: "Recomendado para crianças de 3 a 8 anos, com variações por faixa etária. Cada atividade tem adaptações específicas."
  },
  {
    question: "Quanto tempo leva cada atividade?",
    answer: "A maioria dura entre 10 e 15 minutos. Há extras de 5 minutos para momentos mais rápidos. Ideal para o dia a dia."
  },
  {
    question: "Posso usar com mais de uma criança?",
    answer: "Sim! As atividades funcionam individualmente ou em grupo — perfeitas para irmãos ou turmas de escola."
  },
  {
    question: "Como recebo o material?",
    answer: "Assim que finalizar a compra, você recebe o link no e-mail e no WhatsApp para baixar o PDF imediatamente."
  },
  {
    question: "Posso imprimir quantas vezes quiser?",
    answer: "Sim! O material é seu. Pode imprimir e usar quantas vezes quiser — só não é permitido revender."
  }
];

export default function FAQ() {
  return (
    <section id="faq" className="py-16 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Perguntas frequentes
          </h2>
          <p className="text-xl text-foreground/80">
            Tire suas dúvidas sobre o Método Brinca+
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border-0"
            >
              <AccordionTrigger className="px-8 py-6 text-left hover:bg-gray-50 transition-colors duration-200">
                <h3 className="text-lg font-semibold text-foreground pr-4">
                  {faq.question}
                </h3>
              </AccordionTrigger>
              <AccordionContent className="px-8 pb-6">
                <p className="text-foreground/70 leading-relaxed">
                  {faq.answer}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}


