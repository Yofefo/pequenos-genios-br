'use client';

import { useEffect } from 'react';

export default function NonCriticalCSSLoader() {
  useEffect(() => {
    // Carregar apenas CSS essencial após primeira dobra
    const loadEssentialCSS = () => {
      const essentialCSS = `
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
        .section-dynamic { min-height: 400px; }
        .section-small { min-height: 200px; }
        .section-medium { min-height: 300px; }
        .section-large { min-height: 500px; }
        .loading-container { height: 200px; min-height: 200px; }
        .loading-container-small { height: 100px; min-height: 100px; }
        .loading-container-large { height: 400px; min-height: 400px; }
        .animate-bounce { animation: bounce 1s infinite; }
        .animate-pulse { animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
        .animate-spin { animation: spin 1s linear infinite; }
        @keyframes bounce { 0%, 100% { transform: translateY(-25%); } 50% { transform: translateY(0); } }
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .hover\\:scale-110:hover { transform: scale(1.1); }
        .hover\\:scale-105:hover { transform: scale(1.05); }
        .hover\\:shadow-2xl:hover { box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); }
        .group-hover\\:scale-105:hover { transform: scale(1.05); }
        .transition-all { transition-property: all; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms; }
        .duration-500 { transition-duration: 500ms; }
        .duration-1000 { transition-duration: 1000ms; }
        .delay-200 { transition-delay: 200ms; }
        .delay-300 { transition-delay: 300ms; }
        .delay-500 { transition-delay: 500ms; }
        .ease-in-out { transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); }
        .opacity-0 { opacity: 0; }
        .opacity-100 { opacity: 1; }
        .translate-y-0 { transform: translateY(0); }
        .translate-y-8 { transform: translateY(2rem); }
        .grid-responsive { display: grid; grid-template-columns: 1fr; gap: 1rem; }
        @media (min-width: 768px) { .grid-responsive { grid-template-columns: repeat(2, 1fr); gap: 2rem; } }
        @media (min-width: 1024px) { .grid-responsive { grid-template-columns: repeat(3, 1fr); gap: 2rem; } }
        .main-container { max-width: 1200px; margin: 0 auto; padding: 0 1rem; }
      `;

      const style = document.createElement('style');
      style.textContent = essentialCSS;
      style.setAttribute('data-non-critical', 'true');
      document.head.appendChild(style);
    };

    // Carregar após delay mínimo
    const timeoutId = setTimeout(loadEssentialCSS, 500);

    return () => clearTimeout(timeoutId);
  }, []);

  return null;
}