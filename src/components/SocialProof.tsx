import { Star, Quote } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    name: "Marina S.",
    role: "Mãe",
    content: "Simples e eficiente — meu filho amou! As brincadeiras são fáceis de fazer e ele fica super concentrado.",
    rating: 5,
    avatar: "MS"
  },
  {
    name: "Prof. Diego",
    role: "Professor",
    content: "Uso na sala com 5 crianças, funcionou muito. As atividades são adaptáveis e todas ficaram engajadas.",
    rating: 5,
    avatar: "PD"
  },
  {
    name: "Aline F.",
    role: "Mãe",
    content: "Virou nosso ritual do fim de tarde. Meu filho sempre pergunta qual brincadeira vamos fazer hoje!",
    rating: 5,
    avatar: "AF"
  }
];

export default function SocialProof() {
  return (
    <section id="depoimentos" className="py-16 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Pais e professores aprovam
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Veja o que quem já usa o Método Brinca+ tem a dizer
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-secondary fill-current" />
                ))}
              </div>

              {/* Quote */}
              <div className="mb-6">
                <Quote className="w-8 h-8 text-primary/30 mb-4" />
                <p className="text-gray-700 text-lg leading-relaxed italic">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                  <Image
                    src={`/images/testimonials/${testimonial.name.toLowerCase().replace(' ', '-').replace('.', '')}.png`}
                    alt={`Foto de ${testimonial.name}`}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-500 text-sm">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Nota média */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 bg-secondary/10 px-6 py-3 rounded-full">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-secondary fill-current" />
              ))}
            </div>
            <span className="text-lg font-semibold text-foreground">
              Média de 5.0 estrelas
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
