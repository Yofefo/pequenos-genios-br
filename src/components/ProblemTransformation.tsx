export default function ProblemTransformation() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            O problema de hoje
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Crianças cada vez mais dependentes de telas, pais sem tempo e brinquedos cada vez mais caros.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Card 1 - Sem o Método */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-red-500">
            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                <span className="text-3xl">❌</span>
              </div>
              <h3 className="text-2xl font-bold text-foreground">
                Sem o Método Brinca+
              </h3>
              <div className="space-y-3 text-gray-600">
                <p className="text-lg">• Tédio constante</p>
                <p className="text-lg">• Dependência de telas</p>
                <p className="text-lg">• Brinquedos caros</p>
                <p className="text-lg">• Pouco aprendizado real</p>
                <p className="text-lg">• Distrações constantes</p>
              </div>
            </div>
          </div>

          {/* Card 2 - Com o Método */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-green-500">
            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <span className="text-3xl">✅</span>
              </div>
              <h3 className="text-2xl font-bold text-foreground">
                Com o Método Brinca+
              </h3>
              <div className="space-y-3 text-gray-600">
                <p className="text-lg">• Aprendizado leve e divertido</p>
                <p className="text-lg">• Vínculo em família</p>
                <p className="text-lg">• Muita criatividade</p>
                <p className="text-lg">• Menos tempo de tela</p>
                <p className="text-lg">• Desenvolvimento real</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
