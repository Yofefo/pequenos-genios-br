'use client';

import { useEffect } from 'react';

export default function PerformanceMonitor() {
  useEffect(() => {
    // Monitor de performance
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'largest-contentful-paint') {
          console.log('🎯 LCP:', entry.startTime.toFixed(2) + 'ms');
        }
        if (entry.entryType === 'first-input') {
          const fidEntry = entry as PerformanceEventTiming;
          console.log('⚡ FID:', fidEntry.processingStart - fidEntry.startTime + 'ms');
        }
        if (entry.entryType === 'layout-shift') {
          const clsEntry = entry as PerformanceEntry & { value: number };
          console.log('📐 CLS:', clsEntry.value);
        }
      }
    });

    observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });

    // Métricas de carregamento
    window.addEventListener('load', () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      console.log('📊 Performance Metrics:');
      console.log('  - DOM Content Loaded:', navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart + 'ms');
      console.log('  - Load Complete:', navigation.loadEventEnd - navigation.loadEventStart + 'ms');
      console.log('  - Total Load Time:', navigation.loadEventEnd - navigation.fetchStart + 'ms');
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
}
