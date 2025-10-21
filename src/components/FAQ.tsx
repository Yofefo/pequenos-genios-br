'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqs = [
  {
    question: "Preciso de materiais especiais?",
    answer: "Não. As brincadeiras usam itens simples e comuns de casa como papel, canetas, objetos do dia a dia e materiais recicláveis."
  },
  {
    question: "Para qual idade serve?",
    answer: "Recomendado para 3–8 anos, com variações por faixa etária. Cada atividade tem adaptações específicas para diferentes idades."
  },
  {
    question: "Quanto tempo leva?",
    answer: "A maioria leva 10–15 minutos. Há extras de 5 minutos para momentos mais rápidos. Perfeito para o dia a dia corrido das famílias."
  },
  {
    question: "Posso usar com várias crianças?",
    answer: "Sim. Serve para 1 ou mais crianças. As atividades são adaptáveis para uso individual ou em grupo, ideal para famílias e professores."
  },
  {
    question: "Como recebo?",
    answer: "Após a compra, você recebe o link por e-mail/WhatsApp para baixar o PDF. Acesso imediato e vitalício ao material."
  },
  {
    question: "Posso imprimir quantas vezes quiser?",
    answer: "Sim! O material é seu após a compra. Pode ser reimpresso e usado com quantas crianças quiser (desde que não seja revendido)."
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


