'use client';

import { useEffect } from 'react';

export default function CriticalCSSLoader() {
  useEffect(() => {
    // Carregar CSS crítico primeiro
    const loadCriticalCSS = () => {
      // CSS crítico para renderização inicial
      const criticalStyle = document.createElement('style');
      criticalStyle.textContent = `
        /* CSS Crítico - Renderização inicial */
        .hero-section { min-height: 100vh; height: 100vh; }
        .carousel-container { height: 500px; min-height: 500px; }
        .button-primary { height: 60px; min-height: 60px; }
        .button-secondary { height: 48px; min-height: 48px; }
        .vsl-container { min-height: 400px; height: 400px; }
        .testimonials-container { min-height: 300px; height: auto; }
        .metrics-container { min-height: 250px; height: auto; }
        .faq-container { min-height: 200px; height: auto; }
        .bonus-container { min-height: 200px; height: auto; }
        .image-container { aspect-ratio: 16/9; width: 100%; }
        .image-container-square { aspect-ratio: 1/1; width: 100%; }
        .image-container-portrait { aspect-ratio: 3/4; width: 100%; }
        .text-container { min-height: 120px; }
        .heading-container { min-height: 80px; }
        .subheading-container { min-height: 60px; }
      `;
      document.head.insertBefore(criticalStyle, document.head.firstChild);
    };

    // Carregar CSS não crítico após o carregamento inicial
    const loadNonCriticalCSS = () => {
      // CSS não crítico será carregado via lazy loading

      // Aplicar estilos não críticos após carregamento
      setTimeout(() => {
        const style = document.createElement('style');
        style.textContent = `
          .animate-bounce { animation: bounce 1s infinite; }
          .animate-pulse { animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
          .animate-spin { animation: spin 1s linear infinite; }
          .hover\\:scale-110:hover { transform: scale(1.1); }
          .hover\\:shadow-2xl:hover { box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); }
          .group-hover\\:scale-105:hover { transform: scale(1.05); }
          .transition-all { transition-property: all; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); }
          .duration-500 { transition-duration: 500ms; }
          .ease-in-out { transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); }
        `;
        document.head.appendChild(style);
      }, 1000);
    };

    // Carregar CSS crítico imediatamente
    loadCriticalCSS();

    // Carregar CSS não crítico após o carregamento da página
    if (document.readyState === 'complete') {
      loadNonCriticalCSS();
    } else {
      window.addEventListener('load', loadNonCriticalCSS);
    }

    return () => {
      window.removeEventListener('load', loadNonCriticalCSS);
    };
  }, []);

  return null;
};
