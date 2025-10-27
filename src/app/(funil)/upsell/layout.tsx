'use client';

export default function UpsellLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Scripts para checkout brasileiro */}
      {/* TODO: Adicionar scripts do gateway de pagamento brasileiro */}
      {children}
    </>
  );
}
