'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqs = [
  {
    question: "Preciso de materiais especiais?",
    answer: "Não. As brincadeiras usam itens simples e comuns de casa como papel, canetas, objetos do dia a dia e materiais recicláveis."
  },
  {
    question: "Para que idade serve?",
    answer: "Recomendado para 3–8 anos, com variações por faixa etária. Cada atividade tem adaptações específicas para diferentes idades."
  },
  {
    question: "Quanto tempo demora?",
    answer: "A maioria demora 10–15 minutos. Há extras de 5 minutos para momentos mais rápidos. Perfeito para o dia a dia corrido das famílias."
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
    <section className="py-16 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-foreground/80">
            Tire suas dúvidas sobre o Método Brinca+
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
              <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ainda tem dúvidas?
            </h3>
            <p className="text-gray-700 mb-6">
              Entre em contato conosco pelo WhatsApp ou e-mail. Estamos aqui para ajudar!
            </p>
            <div className="bg-primary text-white px-6 py-3 rounded-xl text-lg font-bold inline-block">
              Falar Conosco →
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
