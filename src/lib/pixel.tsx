'use client';

import { useEffect } from 'react';

// TODO: Substitua pelo seu Meta Pixel ID
const META_PIXEL_ID = 'YOUR_PIXEL_ID_HERE';

export function MetaPixel() {
  useEffect(() => {
    if (typeof window !== 'undefined' && META_PIXEL_ID !== 'YOUR_PIXEL_ID_HERE') {
      // Carrega o script do Meta Pixel
      const script = document.createElement('script');
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
