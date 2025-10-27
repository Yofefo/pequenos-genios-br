'use client';

import { useEffect, useState } from 'react';

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
    // Nomes e sobrenomes brasileiros aleatórios com gênero
    const femaleNames = [
      'Ana', 'Maria', 'Fernanda', 'Juliana', 'Camila', 'Beatriz', 'Larissa', 'Amanda',
      'Patrícia', 'Carla', 'Sandra', 'Cristina', 'Vanessa', 'Daniela', 'Priscila', 'Renata',
      'Sofia', 'Inês', 'Matilde', 'Carolina', 'Rita', 'Joana', 'Teresa', 'Isabel'
    ];

    const maleNames = [
      'Carlos', 'João', 'Pedro', 'Rafael', 'Lucas', 'Gabriel', 'Diego', 'Filipe',
      'Rodrigo', 'Marcos', 'André', 'Tiago', 'Bruno', 'Leandro', 'Alexandre', 'Vicente',
      'Francisco', 'Antônio', 'Miguel', 'José', 'Manuel', 'Ricardo', 'Nuno', 'Paulo'
    ];

    const surnames = [
      'Silva', 'Santos', 'Oliveira', 'Souza', 'Rodrigues', 'Ferreira', 'Alves', 'Pereira',
      'Lima', 'Gomes', 'Costa', 'Ribeiro', 'Martins', 'Carvalho', 'Almeida', 'Lopes',
      'Soares', 'Fernandes', 'Vieira', 'Barbosa', 'Rocha', 'Dias', 'Monteiro', 'Moreira'
    ];

    const cities = [
      'São Paulo', 'Rio de Janeiro', 'Belo Horizonte', 'Salvador', 'Brasília', 'Fortaleza',
      'Manaus', 'Curitiba', 'Recife', 'Goiânia', 'Belém', 'Porto Alegre', 'Guarulhos',
      'Campinas', 'São Luís', 'São Gonçalo', 'Maceió', 'Duque de Caxias', 'Natal', 'Teresina'
    ];

    const generateNotification = (): PurchaseNotification => {
      const gender = Math.random() > 0.5 ? 'female' : 'male';
      const names = gender === 'female' ? femaleNames : maleNames;
      const name = names[Math.floor(Math.random() * names.length)];
      const surname = surnames[Math.floor(Math.random() * surnames.length)];
      const city = cities[Math.floor(Math.random() * cities.length)];
      
      const timeOptions = ['há 2 min', 'há 5 min', 'há 8 min', 'há 12 min', 'há 15 min', 'há 18 min', 'há 22 min'];
      const timeAgo = timeOptions[Math.floor(Math.random() * timeOptions.length)];

      return {
        id: Math.random().toString(36).substr(2, 9),
        name: `${name} ${surname}`,
        city,
        timeAgo,
        gender
      };
    };

    // Gerar notificações iniciais
    const initialNotifications = Array.from({ length: 3 }, generateNotification);
    setNotifications(initialNotifications);

    // Mostrar componente após 3 segundos
    const showTimer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    // Adicionar nova notificação a cada 8-15 segundos
    const addNotification = () => {
      const newNotification = generateNotification();
      setNotifications(prev => {
        const updated = [newNotification, ...prev.slice(0, 4)]; // Manter máximo 5
        return updated;
      });
    };

    const notificationInterval = setInterval(addNotification, Math.random() * 7000 + 8000);

    return () => {
      clearTimeout(showTimer);
      clearInterval(notificationInterval);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-sm">
      {notifications.slice(0, 3).map((notification, index) => (
        <div
          key={notification.id}
          className="bg-white rounded-lg shadow-lg p-4 mb-3 border-l-4 border-green-500 animate-slideInRight"
          style={{
            animationDelay: `${index * 0.5}s`,
            animationFillMode: 'both'
          }}
        >
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
              <span className="text-green-600 font-bold text-sm">
                {notification.name.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-gray-800">
                {notification.name}
              </p>
              <p className="text-xs text-gray-600">
                de {notification.city}
              </p>
              <p className="text-xs text-green-600 font-medium">
                ✓ Comprou o Método Brinca+ {notification.timeAgo}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
