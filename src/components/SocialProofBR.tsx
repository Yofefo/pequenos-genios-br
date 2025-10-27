import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Marina S.",
    role: "Mãe",
    content: "Simples e eficiente — meu filho amou! As brincadeiras são fáceis de fazer e ele fica super concentrado.",
    rating: 5,
    avatar: "MS",
    gender: "female",
    timeAgo: "há 3 horas"
  },
  {
    name: "Prof. Diego",
    role: "Professor",
    content: "Uso na sala com 5 crianças, funcionou muito. As atividades são adaptáveis e todas ficaram engajadas.",
    rating: 5,
    avatar: "PD",
    gender: "male",
    timeAgo: "há 1 dia"
  },
  {
    name: "Aline F.",
    role: "Mãe",
    content: "Virou nosso ritual do fim de tarde. Meu filho sempre pergunta qual brincadeira vamos fazer hoje!",
    rating: 5,
    avatar: "AF",
    gender: "female",
    timeAgo: "há 2 dias"
  },
  {
    name: "Carlos M.",
    role: "Pai",
    content: "Economizei muito em brinquedos. Agora usamos o que temos em casa e ele se diverte mais!",
    rating: 5,
    avatar: "CM",
    gender: "male",
    timeAgo: "há 3 dias"
  },
  {
    name: "Ana L.",
    role: "Mãe",
    content: "Minha filha de 4 anos adora! As atividades são perfeitas para a idade dela e desenvolvem muito.",
    rating: 5,
    avatar: "AL",
    gender: "female",
    timeAgo: "há 4 dias"
  },
  {
    name: "Prof. João",
    role: "Professor",
    content: "Excelente material! Uso com meus alunos e todos ficam envolvidos. Recomendo para outros professores.",
    rating: 5,
    avatar: "PJ",
    gender: "male",
    timeAgo: "há 5 dias"
  }
];

export default function SocialProof() {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            O que as famílias estão dizendo
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Depoimentos reais de pais e professores que já transformaram a rotina com o Método Brinca+
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <span className="text-primary font-bold text-lg">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex items-center mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
                <span className="text-sm text-gray-500 ml-2">{testimonial.timeAgo}</span>
              </div>
              
              <p className="text-gray-700 leading-relaxed">
                &ldquo;{testimonial.content}&rdquo;
              </p>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Junte-se a essas famílias!
            </h3>
            <p className="text-gray-700 mb-6">
              Transforme a rotina da sua casa com brincadeiras que realmente funcionam.
            </p>
            <div className="bg-primary text-white px-6 py-3 rounded-xl text-lg font-bold inline-block">
              Começar Agora →
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
