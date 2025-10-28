// Configurações para checkout brasileiro
// TODO: Configurar gateway de pagamento brasileiro

export const CHECKOUT_CONFIG = {
  // URLs de checkout (substituir pelas URLs reais do gateway brasileiro)
  primary: 'https://pay.kirvano.com/84dc1856-cdba-41e6-91ce-259d8dd6369f',
  upsell: '#checkout-upsell-brasileiro',
  obrigado: '#obrigado',
  
  // Configurações de moeda
  currency: 'BRL', // Real brasileiro
  currencySymbol: 'R$',
  
  // Preços em reais (exemplo - ajustar conforme necessário)
  prices: {
    primary: 14.90, // R$ 14,90
    upsell: 19.90,  // R$ 19,90
    original: 29.90  // R$ 29,90
  },
  
  // Configurações de tracking
  tracking: {
    pixelId: 'YOUR_PIXEL_ID_HERE', // Meta Pixel ID brasileiro
    googleAnalytics: 'YOUR_GA_ID_HERE', // Google Analytics ID brasileiro
  },
  
  // Configurações de domínio
  domain: {
    production: 'https://pequenosgenios.com.br', // Domínio brasileiro
    checkout: 'https://checkout.pequenosgenios.com.br' // Subdomínio de checkout
  }
};

// Função para redirecionar para checkout brasileiro
export const redirectToCheckout = (type: 'primary' | 'upsell' = 'primary') => {
  console.log(`🚀 Redirecionando para checkout brasileiro: ${type}`);
  console.log(`🔗 URL: ${CHECKOUT_CONFIG.primary}`);
  
  // Prevenir qualquer comportamento padrão
  if (typeof window !== 'undefined') {
    // Redirecionamento real para Kirvano
    if (type === 'primary') {
      console.log('✅ Redirecionando para checkout Kirvano...');
      // Usar window.location.href para forçar redirecionamento imediato
      window.location.href = CHECKOUT_CONFIG.primary;
    } else {
      // Para upsell, ainda usar placeholder
      console.log('Upsell checkout - implementar quando necessário');
    }
  } else {
    console.error('❌ Window object não disponível');
  }
};

// Função para formatar preço em reais
export const formatPrice = (price: number) => {
  return `R$ ${price.toFixed(2).replace('.', ',')}`;
};
