import Image from 'next/image';

export default function TestImage() {
  return (
    <div className="p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Teste de Imagem</h2>
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold mb-2">Capa do PDF:</h3>
          <div className="w-64 h-80 border-2 border-gray-300 rounded-lg overflow-hidden">
            <Image
              src="/images/hero/cover.png"
              alt="Capa do PDF - Projeto Pequenos Gênios"
              width={1024}
              height={1024}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-2">Crianças brincando:</h3>
          <div className="w-64 h-32 border-2 border-gray-300 rounded-lg overflow-hidden">
            <Image
              src="/images/hero/kids-playing.png"
              alt="Crianças brincando com o Método Brinca+"
              width={1024}
              height={1024}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}



