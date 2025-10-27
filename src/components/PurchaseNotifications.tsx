'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface PurchaseNotification {
  id: string;
  name: string;
  city: string;
  timeAgo: string;
  gender: 'male' | 'female';
}

export default function PurchaseNotifications() {
  const [notifications, setNotifications] = useState<PurchaseNotification[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Nomes e sobrenomes portugueses aleatórios com género
    const femaleNames = [
      'Ana', 'Maria', 'Fernanda', 'Juliana', 'Camila', 'Beatriz', 'Larissa', 'Amanda',
      'Patrícia', 'Carla', 'Sandra', 'Cristina', 'Vanessa', 'Daniela', 'Priscila', 'Renata',
      'Sofia', 'Inês', 'Matilde', 'Carolina', 'Rita', 'Joana', 'Teresa', 'Isabel'
    ];

    const maleNames = [
      'Carlos', 'João', 'Pedro', 'Rafael', 'Lucas', 'Gabriel', 'Diego', 'Filipe',
      'Rodrigo', 'Marcos', 'André', 'Tiago', 'Bruno', 'Leandro', 'Alexandre', 'Vicente',
      'Francisco', 'António', 'Miguel', 'José', 'Manuel', 'Ricardo', 'Nuno', 'Paulo'
    ];


    const lastNames = [
      'Silva', 'Santos', 'Oliveira', 'Sousa', 'Rodrigues', 'Ferreira', 'Alves', 'Pereira',
      'Lima', 'Gomes', 'Costa', 'Ribeiro', 'Martins', 'Carvalho', 'Almeida', 'Lopes',
      'Soares', 'Fernandes', 'Vieira', 'Barbosa', 'Rocha', 'Dias', 'Monteiro', 'Cardoso',
      'Reis', 'Araújo', 'Mendes', 'Nascimento', 'Moreira', 'Freitas', 'Campos', 'Teixeira'
    ];

    // Cidades portuguesas aleatórias
    const cities = [
      'Lisboa', 'Porto', 'Braga', 'Coimbra', 'Aveiro', 'Faro', 'Setúbal', 'Funchal',
      'Évora', 'Leiria', 'Viseu', 'Vila Nova de Gaia', 'Amadora', 'Bragança', 'Castelo Branco',
      'Guarda', 'Santarém', 'Beja', 'Portalegre', 'Viana do Castelo', 'Vila Real', 'Angra do Heroísmo',
      'Ponta Delgada', 'Horta', 'Lamego', 'Chaves', 'Vila do Conde', 'Póvoa de Varzim', 'Espinho',
      'Matosinhos', 'Gondomar', 'Valongo', 'Maia', 'Vila Nova de Famalicão', 'Barcelos'
    ];

    // Tempos aleatórios
    const timeAgoOptions = [
      'há 2 minutos', 'há 5 minutos', 'há 8 minutos', 'há 12 minutos', 'há 15 minutos',
      'há 20 minutos', 'há 25 minutos', 'há 30 minutos', 'há 1 hora', 'há 2 horas'
    ];
    const generateRandomNotification = (): PurchaseNotification => {
      const isFemale = Math.random() < 0.6; // 60% chance de ser mulher (mais comum em compras de produtos infantis)
      const nameList = isFemale ? femaleNames : maleNames;
      const randomFirstName = nameList[Math.floor(Math.random() * nameList.length)];
      const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];
      const fullName = `${randomFirstName} ${randomLastName}`;
      const randomCity = cities[Math.floor(Math.random() * cities.length)];
      const randomTime = timeAgoOptions[Math.floor(Math.random() * timeAgoOptions.length)];

      return {
        id: Math.random().toString(36).substr(2, 9),
        name: fullName,
        city: randomCity,
        timeAgo: randomTime,
        gender: isFemale ? 'female' : 'male'
      };
    };

    let hideTimeout: NodeJS.Timeout;

    const showNotification = () => {
      const newNotification = generateRandomNotification();
      setNotifications([newNotification]);
      setIsVisible(true);

      // Esconder após 3-4 segundos
      hideTimeout = setTimeout(() => {
        setIsVisible(false);
        setNotifications([]);
      }, Math.random() * 1000 + 3000); // Entre 3 e 4 segundos
    };

    // Mostrar primeira notificação após 15 segundos
    const initialTimeout = setTimeout(() => {
      showNotification();
    }, 15000);

    // Gerar novas notificações a cada 12-15 segundos
    const interval = setInterval(() => {
      showNotification();
    }, Math.random() * 3000 + 12000); // Entre 12 e 15 segundos

    return () => {
      clearTimeout(initialTimeout);
      clearTimeout(hideTimeout);
      clearInterval(interval);
    };
  }, []);

  if (!isVisible || notifications.length === 0) {
    return null;
  }

  return (
    <div className="fixed bottom-24 right-4 z-50 max-w-sm mx-auto">
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 transform transition-all duration-500 ease-out animate-slide-in-right hover:shadow-3xl hover:scale-105 transition-all duration-300 mx-auto"
        >
          <div className="flex items-start space-x-3">
            {/* Avatar */}
            <div className="flex-shrink-0">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200">
                <Image
                  src={`/images/avatars/${notification.gender}-${Math.floor(Math.random() * 3) + 6}.jpg`}
                  alt={`Foto de ${notification.name}`}
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                  sizes="40px"
                  quality={75}
                />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-2 mb-1">
                <span className="text-sm font-semibold text-gray-900">
                  {notification.name}
                </span>
                <span className="text-xs text-gray-600">•</span>
                <span className="text-xs text-gray-600">{notification.city}</span>
              </div>
              
              <p className="text-sm text-gray-800 mb-2">
                acabou de comprar o{' '}
                <span className="font-semibold text-blue-700">Projeto Pequenos Génios</span>
              </p>
              
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-600">{notification.timeAgo}</span>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs text-green-600 font-medium">Online</span>
                </div>
              </div>
            </div>

            {/* Purchase icon */}
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
