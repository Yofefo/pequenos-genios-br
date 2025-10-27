'use client';
import Script from 'next/script';

export default function UpsellLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script
        src="https://assets.mycartpanda.com/cartx-ecomm-ui-assets/js/libs/ocu-external.js"
        strategy="beforeInteractive" // entra antes da hidratação
      />
      {children}
    </>
  );
}
