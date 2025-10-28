'use client';

import { useEffect } from 'react';

export default function AdvancedPerformanceMonitor() {
  useEffect(() => {
    // Monitor de performance avançado
    const performanceData = {
      startTime: performance.now(),
      metrics: {
        lcp: 0,
        fid: 0,
        cls: 0,
        fcp: 0,
        ttfb: 0,
        bundleSize: 0,
        requests: 0
      }
    };

    // Observer para métricas Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'largest-contentful-paint') {
          performanceData.metrics.lcp = entry.startTime;
          console.log('🎯 LCP:', entry.startTime.toFixed(2) + 'ms');
        }
        if (entry.entryType === 'first-input') {
          const fidEntry = entry as PerformanceEventTiming;
          performanceData.metrics.fid = fidEntry.processingStart - fidEntry.startTime;
          console.log('⚡ FID:', performanceData.metrics.fid.toFixed(2) + 'ms');
        }
        if (entry.entryType === 'layout-shift') {
          const clsEntry = entry as PerformanceEntry & { value: number };
          performanceData.metrics.cls += clsEntry.value;
          console.log('📐 CLS:', clsEntry.value.toFixed(4));
        }
        if (entry.entryType === 'paint') {
          if (entry.name === 'first-contentful-paint') {
            performanceData.metrics.fcp = entry.startTime;
            console.log('🎨 FCP:', entry.startTime.toFixed(2) + 'ms');
          }
        }
      }
    });

    observer.observe({ 
      entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift', 'paint'] 
    });

    // Monitor de recursos
    const resourceObserver = new PerformanceObserver((list) => {
      let totalSize = 0;
      let requestCount = 0;
      
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'resource') {
          totalSize += (entry as PerformanceResourceTiming).transferSize || 0;
          requestCount++;
        }
      }
      
      performanceData.metrics.bundleSize = totalSize;
      performanceData.metrics.requests = requestCount;
    });

    resourceObserver.observe({ entryTypes: ['resource'] });

    // Métricas de carregamento
    window.addEventListener('load', () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      performanceData.metrics.ttfb = navigation.responseStart - navigation.requestStart;
      
      console.log('📊 PERFORMANCE DIAGNOSTIC:');
      console.log('  - LCP:', performanceData.metrics.lcp.toFixed(2) + 'ms');
      console.log('  - FID:', performanceData.metrics.fid.toFixed(2) + 'ms');
      console.log('  - CLS:', performanceData.metrics.cls.toFixed(4));
      console.log('  - FCP:', performanceData.metrics.fcp.toFixed(2) + 'ms');
      console.log('  - TTFB:', performanceData.metrics.ttfb.toFixed(2) + 'ms');
      console.log('  - Bundle Size:', (performanceData.metrics.bundleSize / 1024).toFixed(2) + 'KB');
      console.log('  - Requests:', performanceData.metrics.requests);
      console.log('  - Total Load Time:', (performance.now() - performanceData.startTime).toFixed(2) + 'ms');
      
      // Identificar gargalos
      if (performanceData.metrics.lcp > 2500) {
        console.warn('⚠️ LCP CRÍTICO: >2.5s - Otimizar imagens e CSS crítico');
      }
      if (performanceData.metrics.fid > 100) {
        console.warn('⚠️ FID CRÍTICO: >100ms - Reduzir JavaScript bloqueante');
      }
      if (performanceData.metrics.cls > 0.1) {
        console.warn('⚠️ CLS CRÍTICO: >0.1 - Definir dimensões fixas para imagens');
      }
      if (performanceData.metrics.bundleSize > 500000) {
        console.warn('⚠️ BUNDLE GRANDE: >500KB - Implementar code splitting');
      }
    });

    return () => {
      observer.disconnect();
      resourceObserver.disconnect();
    };
  }, []);

  return null;
}





