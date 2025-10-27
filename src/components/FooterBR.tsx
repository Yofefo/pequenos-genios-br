import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">
              Projeto Pequenos Gênios
            </h3>
            <p className="text-white/80 mb-6 max-w-md">
              Transforme qualquer momento em aprendizado — usando só o que você já tem em casa.
            </p>
            <div className="text-sm text-gray-400">
              © {currentYear} Projeto Pequenos Gênios. Todos os direitos reservados.
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Links Úteis
            </h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="#oferta" 
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Oferta Especial
                </Link>
              </li>
              <li>
                <Link 
                  href="#inclui" 
                  className="text-white/80 hover:text-white transition-colors"
                >
                  O que está incluído
                </Link>
              </li>
              <li>
                <Link 
                  href="#bonus" 
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Bônus Exclusivos
                </Link>
              </li>
              <li>
                <Link 
                  href="#garantia" 
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Garantia
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Contato
            </h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="mailto:contato@pequenosgenios.com" 
                  className="text-white/80 hover:text-white transition-colors"
                >
                  E-mail
                </a>
              </li>
              <li>
                <a 
                  href="https://wa.me/5511999999999" 
                  className="text-white/80 hover:text-white transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Suporte
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. 
            Uma vez que você sair do Facebook, não é responsabilidade deles e sim do nosso site.
          </p>
        </div>
      </div>
    </footer>
  );
}
