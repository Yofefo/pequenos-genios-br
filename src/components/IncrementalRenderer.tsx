'use client';

import { useEffect, useState, ReactNode } from 'react';

interface IncrementalRendererProps {
  children: ReactNode;
  priority?: 'high' | 'medium' | 'low';
  delay?: number;
  fallback?: ReactNode;
}

export default function IncrementalRenderer({ 
  children, 
  priority = 'medium',
  delay = 0,
  fallback = <div className="loading-container bg-gray-100 animate-pulse rounded-lg" />
}: IncrementalRendererProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    // Renderização baseada na prioridade
    const getDelayByPriority = () => {
      switch (priority) {
        case 'high': return 0;
        case 'medium': return 100;
        case 'low': return 300;
        default: return 100;
      }
    };

    const totalDelay = delay + getDelayByPriority();

    const timer = setTimeout(() => {
      setIsVisible(true);
      setShouldRender(true);
    }, totalDelay);

    return () => clearTimeout(timer);
  }, [priority, delay]);

  if (!shouldRender) {
    return <>{fallback}</>;
  }

  return (
    <div 
      className={`transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      {children}
    </div>
  );
}

// Hook para renderização incremental com Intersection Observer
export function useIncrementalRender(options: {
  threshold?: number;
  rootMargin?: string;
  priority?: 'high' | 'medium' | 'low';
} = {}) {
  const { threshold = 0.1, rootMargin = '50px', priority = 'medium' } = options;
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasRendered, setHasRendered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasRendered) {
          setIsIntersecting(true);
          
          // Delay baseado na prioridade
          const delay = priority === 'high' ? 0 : priority === 'medium' ? 100 : 300;
          
          setTimeout(() => {
            setHasRendered(true);
          }, delay);
        }
      },
      { threshold, rootMargin }
    );

    const element = document.getElementById('incremental-render-target');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, rootMargin, priority, hasRendered]);

  return { isIntersecting, hasRendered };
}

// Componente para streaming de conteúdo
export function StreamingContent({ 
  children, 
  chunks = 3,
  delayBetweenChunks = 100 
}: { 
  children: ReactNode[]; 
  chunks?: number;
  delayBetweenChunks?: number;
}) {
  const [visibleChunks, setVisibleChunks] = useState<number[]>([]);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleChunks(prev => {
        const nextChunk = prev.length;
        if (nextChunk < chunks) {
          return [...prev, nextChunk];
        }
        clearInterval(timer);
        return prev;
      });
    }, delayBetweenChunks);

    return () => clearInterval(timer);
  }, [chunks, delayBetweenChunks]);

  return (
    <div>
      {children.map((chunk, index) => (
        <div
          key={index}
          className={`transition-all duration-300 ${
            visibleChunks.includes(index) 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-4'
          }`}
        >
          {chunk}
        </div>
      ))}
    </div>
  );
}





