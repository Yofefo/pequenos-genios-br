import Image from 'next/image';

export default function Logo() {
  return (
    <div className="text-center mb-12">
      <div className="inline-block bg-white rounded-2xl shadow-lg p-8 mb-8 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
        <div className="w-80 h-32 relative">
          <Image
            src="/images/logo.png"
            alt="Projeto Pequenos Gênios - Método Brinca+"
            width={320}
            height={128}
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}
