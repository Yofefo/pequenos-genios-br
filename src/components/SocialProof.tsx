import { Star } from 'lucide-react';
import Image from 'next/image';

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
    name: "Carla M.",
    role: "Mãe",
    content: "Economizei muito em brinquedos! Meu filho prefere essas brincadeiras do que os brinquedos caros.",
    rating: 5,
    avatar: "CM",
    gender: "female",
    timeAgo: "há 4 horas"
  },
  {
    name: "Prof. Ana",
    role: "Professora",
    content: "Transformou minha sala de aula. As crianças ficam mais criativas e menos dependentes de ecrãs.",
    rating: 5,
    avatar: "PA",
    gender: "female",
    timeAgo: "há 1 semana"
  }
];

export default function SocialProof() {
  return (
    <section id="depoimentos" className="py-16 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Pais e professores aprovam!
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto mb-6">
            Mais de 500 famílias transformando o tédio em aprendizado.
          </p>
          <div className="inline-flex items-center space-x-2 bg-secondary/10 px-6 py-3 rounded-full">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-secondary fill-current" />
              ))}
            </div>
            <span className="text-lg font-semibold text-foreground">
              Avaliação média: 5.0
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
            >
              {/* Header estilo Instagram */}
              <div className="flex items-center justify-between p-4 border-b border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200">
                    <Image
                      src={`/images/avatars/${testimonial.gender === 'male' ? 'male' : 'female'}-${index + 1}.jpg`}
                      alt={`Foto de ${testimonial.name}`}
                      width={40}
                      height={40}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-500 text-xs">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <div className="text-gray-400">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                  </svg>
                </div>
              </div>

              {/* Conteúdo do depoimento */}
              <div className="p-4">
                <div className="flex items-center space-x-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-800 text-sm leading-relaxed">
                  {testimonial.content}
                </p>
              </div>

              {/* Footer estilo Instagram */}
              <div className="px-4 pb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <button className="text-gray-400 hover:text-red-500 transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </button>
                    <button className="text-gray-400 hover:text-blue-500 transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </button>
                    <button className="text-gray-400 hover:text-blue-500 transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                      </svg>
                    </button>
                  </div>
                  <button className="text-gray-400 hover:text-gray-600 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                    </svg>
                  </button>
                </div>
                <div className="mt-2 text-xs text-gray-500">
                  {testimonial.timeAgo}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
