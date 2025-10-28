'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Componentes pesados com lazy loading
export const LazyCarousel = dynamic(() => import('./Carousel'), {
  ssr: false,
  loading: () => (
    <div className="carousel-container bg-gray-100 rounded-3xl flex items-center justify-center">
      <div className="animate-pulse text-gray-500">Carregando carrossel...</div>
    </div>
  ),
});

export const LazyVSL = dynamic(() => import('./VSL'), {
  ssr: false,
  loading: () => (
    <div className="bg-gray-100 rounded-2xl p-8 flex items-center justify-center min-h-[400px]">
      <div className="animate-pulse text-gray-500">Carregando vídeo...</div>
    </div>
  ),
});

export const LazyMetricasVisuais = dynamic(() => import('./MetricasVisuais'), {
  ssr: false,
  loading: () => (
    <div className="bg-gray-100 rounded-2xl p-8 flex items-center justify-center min-h-[300px]">
      <div className="animate-pulse text-gray-500">Carregando métricas...</div>
    </div>
  ),
});

export const LazySocialProof = dynamic(() => import('./SocialProof'), {
  ssr: false,
  loading: () => (
    <div className="bg-gray-100 rounded-2xl p-8 flex items-center justify-center min-h-[200px]">
      <div className="animate-pulse text-gray-500">Carregando depoimentos...</div>
    </div>
  ),
});

export const LazyBonus = dynamic(() => import('./Bonus'), {
  ssr: false,
  loading: () => (
    <div className="bg-gray-100 rounded-2xl p-8 flex items-center justify-center min-h-[200px]">
      <div className="animate-pulse text-gray-500">Carregando bônus...</div>
    </div>
  ),
});

export const LazyFAQ = dynamic(() => import('./FAQ'), {
  ssr: false,
  loading: () => (
    <div className="bg-gray-100 rounded-2xl p-8 flex items-center justify-center min-h-[200px]">
      <div className="animate-pulse text-gray-500">Carregando FAQ...</div>
    </div>
  ),
});

export const LazyPurchaseNotifications = dynamic(() => import('./PurchaseNotifications'), {
  ssr: false,
  loading: () => null, // Não mostrar loading para notificações
});

// Componente wrapper para Suspense
export function LazyWrapper({ children, fallback }: { children: React.ReactNode; fallback?: React.ReactNode }) {
  return (
    <Suspense fallback={fallback || <div className="animate-pulse bg-gray-100 rounded-lg h-32" />}>
      {children}
    </Suspense>
  );
}





