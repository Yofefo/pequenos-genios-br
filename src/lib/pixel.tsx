'use client';

import { useEffect } from 'react';

// Meta Pixel ID fornecido
const META_PIXEL_ID = '1397143025087613';

export function MetaPixel() {
  useEffect(() => {
    if (typeof window !== 'undefined' && META_PIXEL_ID) {
      // Carrega o script do Meta Pixel de forma otimizada
      const script = document.createElement('script');
      script.async = true;
      script.defer = true;
      script.innerHTML = `
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '${META_PIXEL_ID}');
        fbq('track', 'PageView');
      `;
      document.head.appendChild(script);
      
      // Adicionar noscript para Meta Pixel
      const noscript = document.createElement('noscript');
      const img = document.createElement('img');
      img.height = 1;
      img.width = 1;
      img.style.display = 'none';
      img.src = `https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`;
      noscript.appendChild(img);
      document.body.appendChild(noscript);
    }
  }, []);

  return null;
}

// Função para disparar eventos personalizados
export function trackEvent(eventName: string, parameters?: Record<string, unknown>) {
  if (typeof window !== 'undefined' && (window as unknown as { fbq: unknown }).fbq) {
    (window as unknown as { fbq: (event: string, name: string, params?: Record<string, unknown>) => void }).fbq('track', eventName, parameters);
  }
}
