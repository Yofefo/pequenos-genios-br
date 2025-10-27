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
                  href="/politica-privacidade" 
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link 
                  href="/termos" 
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link 
                  href="/contato" 
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Contato
            </h4>
            <div className="space-y-2 text-white/80">
              <p>E-mail: suporte@pequenosgenios.fun</p>
              <p>Instagram: @projeto.pequenosgenios</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p className="mb-4">
            Cada brincadeira é uma oportunidade de aprendizado. Dê esse presente ao seu pequeno.
          </p>
          <p>
            Desenvolvido com ❤️ para inspirar o desenvolvimento das crianças
          </p>
        </div>
      </div>
    </footer>
  );
}

