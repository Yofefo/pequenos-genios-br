'use client';

import { Suspense, ReactNode, lazy } from 'react';

interface SuspenseWrapperProps {
  children: ReactNode;
  fallback?: ReactNode;
}

export default function SuspenseWrapper({ 
  children, 
  fallback = <div className="loading-container bg-gray-100 animate-pulse rounded-lg" />
}: SuspenseWrapperProps) {
  return (
    <Suspense fallback={fallback}>
      {children}
    </Suspense>
  );
}

// Componente de loading otimizado
export function OptimizedLoading({ 
  height = '200px', 
  width = '100%',
  className = '' 
}: { 
  height?: string; 
  width?: string; 
  className?: string; 
}) {
  return (
    <div 
      className={`bg-gray-100 animate-pulse rounded-lg ${className}`}
      style={{ height, width }}
    >
      <div className="flex items-center justify-center h-full">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-500"></div>
      </div>
    </div>
  );
}

// Hook para lazy loading com Suspense
export function useLazyComponent<T extends React.ComponentType<any>>(
  importFunc: () => Promise<{ default: T }>,
  fallback?: ReactNode
) {
  const LazyComponent = lazy(importFunc);
  
  const WrappedComponent = (props: React.ComponentProps<T>) => (
    <Suspense fallback={fallback || <OptimizedLoading />}>
      <LazyComponent {...props} />
    </Suspense>
  );
  
  WrappedComponent.displayName = 'LazyComponent';
  
  return WrappedComponent;
}
