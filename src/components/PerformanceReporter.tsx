'use client';

import { useEffect } from 'react';

export default function PerformanceReporter() {
  useEffect(() => {
    const generateReport = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const resources = performance.getEntriesByType('resource') as PerformanceResourceTiming[];
      
      const report = {
        timestamp: new Date().toISOString(),
        metrics: {
          lcp: 0,
          fid: 0,
          cls: 0,
          fcp: 0,
          ttfb: navigation.responseStart - navigation.requestStart,
          totalLoadTime: navigation.loadEventEnd - navigation.fetchStart,
          domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
        },
        resources: {
          totalSize: resources.reduce((sum, resource) => sum + (resource.transferSize || 0), 0),
          requestCount: resources.length,
          jsSize: resources
            .filter(r => r.name.includes('.js'))
            .reduce((sum, resource) => sum + (resource.transferSize || 0), 0),
          cssSize: resources
            .filter(r => r.name.includes('.css'))
            .reduce((sum, resource) => sum + (resource.transferSize || 0), 0),
          imageSize: resources
            .filter(r => r.name.match(/\.(jpg|jpeg|png|webp|avif|gif)$/i))
            .reduce((sum, resource) => sum + (resource.transferSize || 0), 0),
        },
        recommendations: [] as string[]
      };

      // Calcular métricas Core Web Vitals
      const lcpEntries = performance.getEntriesByType('largest-contentful-paint');
      if (lcpEntries.length > 0) {
        report.metrics.lcp = lcpEntries[lcpEntries.length - 1].startTime;
      }

      const fidEntries = performance.getEntriesByType('first-input');
      if (fidEntries.length > 0) {
        const fid = fidEntries[0] as PerformanceEventTiming;
        report.metrics.fid = fid.processingStart - fid.startTime;
      }

      const clsEntries = performance.getEntriesByType('layout-shift');
      report.metrics.cls = clsEntries.reduce((sum, entry) => {
        const clsEntry = entry as PerformanceEntry & { value: number };
        return sum + clsEntry.value;
      }, 0);

      const fcpEntries = performance.getEntriesByType('paint');
      const fcp = fcpEntries.find(entry => entry.name === 'first-contentful-paint');
      if (fcp) {
        report.metrics.fcp = fcp.startTime;
      }

      // Gerar recomendações
      if (report.metrics.lcp > 2500) {
        report.recommendations.push('LCP crítico: Otimizar imagens e CSS crítico');
      }
      if (report.metrics.fid > 100) {
        report.recommendations.push('FID crítico: Reduzir JavaScript bloqueante');
      }
      if (report.metrics.cls > 0.1) {
        report.recommendations.push('CLS crítico: Definir dimensões fixas para imagens');
      }
      if (report.resources.totalSize > 500000) {
        report.recommendations.push('Bundle grande: Implementar code splitting');
      }

      // Salvar relatório
      const reportJson = JSON.stringify(report, null, 2);
      console.log('📊 PERFORMANCE REPORT:', reportJson);
      
      // Criar arquivo de relatório (simulado)
      if (typeof window !== 'undefined') {
        const blob = new Blob([reportJson], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'performance-report.json';
        a.style.display = 'none';
        document.body.appendChild(a);
        // a.click(); // Descomente para download automático
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      }

      return report;
    };

    // Gerar relatório após carregamento completo
    window.addEventListener('load', () => {
      setTimeout(generateReport, 1000); // Aguardar 1s para estabilizar métricas
    });

    return () => {
      // Cleanup se necessário
    };
  }, []);

  return null;
}
