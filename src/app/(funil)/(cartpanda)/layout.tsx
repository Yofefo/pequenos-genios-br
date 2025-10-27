'use client';
import Script from 'next/script';
import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    OcuExternal?: new () => any;
    __OCU_INIT_DONE__?: boolean;
  }
}

export default function CartPandaLayout({ children }: { children: React.ReactNode }) {
  const tried = useRef(false);

  useEffect(() => {
    // segurança extra em DEV (StrictMode chama efeitos 2x)
    if (tried.current) return;
    tried.current = true;

    const tryInit = () => {
      if (window.__OCU_INIT_DONE__) return;
      if (typeof window.OcuExternal === 'function') {
        window.__OCU_INIT_DONE__ = true;
        try { 
          new window.OcuExternal(); 
          console.log('CartPanda OcuExternal inicializado com sucesso');
        } catch (e) { 
          console.warn('OCU init error', e); 
        }
      }
    };

    // tenta inicializar quando tudo estiver pronto
    window.addEventListener('load', tryInit);
    const id = setTimeout(tryInit, 1200);
    return () => { 
      window.removeEventListener('load', tryInit); 
      clearTimeout(id); 
    };
  }, []);

  return (
    <>
      {/* Carrega a lib depois da interação */}
      <Script
        src="https://assets.mycartpanda.com/cartx-ecomm-ui-assets/js/libs/ocu-external.js"
        strategy="afterInteractive"
        onLoad={() => {
          if (!window.__OCU_INIT_DONE__ && typeof window.OcuExternal === 'function') {
            window.__OCU_INIT_DONE__ = true;
            try { 
              new window.OcuExternal(); 
              console.log('CartPanda OcuExternal carregado e inicializado');
            } catch (e) { 
              console.warn('OCU init error', e); 
            }
          }
        }}
      />
      {children}
    </>
  );
}
