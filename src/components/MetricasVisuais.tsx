export default function MetricasVisuais() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Números que comprovam o sucesso
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Veja como o Método Brinca+ está transformando famílias
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Métrica 1 */}
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">📘</span>
            </div>
            <h3 className="text-4xl font-bold text-primary mb-2">+500</h3>
            <p className="text-lg font-semibold text-foreground mb-2">
              famílias já usam o Método Brinca+
            </p>
            <p className="text-gray-600">
              E o número cresce a cada dia!
            </p>
          </div>

          {/* Métrica 2 */}
          <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">💡</span>
            </div>
            <h3 className="text-4xl font-bold text-accent mb-2">95%</h3>
            <p className="text-lg font-semibold text-foreground mb-2">
              relatam mais criatividade e menos telas
            </p>
            <p className="text-gray-600">
              Resultados comprovados pelos pais
            </p>
          </div>

          {/* Métrica 3 */}
          <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">💰</span>
            </div>
            <h3 className="text-4xl font-bold text-secondary mb-2">R$ 200</h3>
            <p className="text-lg font-semibold text-foreground mb-2">
              economia por mês em brinquedos
            </p>
            <p className="text-gray-600">
              Usando apenas o que você já tem em casa
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
