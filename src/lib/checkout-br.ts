// Configurações para checkout brasileiro
// TODO: Configurar gateway de pagamento brasileiro

export const CHECKOUT_CONFIG = {
  // URLs de checkout (substituir pelas URLs reais do gateway brasileiro)
  primary: '#checkout-brasileiro',
  upsell: '#checkout-upsell-brasileiro',
  obrigado: '#obrigado',
  
  // Configurações de moeda
  currency: 'BRL', // Real brasileiro
  currencySymbol: 'R$',
  
  // Preços em reais (exemplo - ajustar conforme necessário)
  prices: {
    primary: 29.90, // R$ 29,90
    upsell: 19.90,  // R$ 19,90
    original: 49.90  // R$ 49,90
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
  console.log(`Redirecionando para checkout brasileiro: ${type}`);
  
  // TODO: Implementar redirecionamento real
  // Exemplo:
  // window.location.href = `${CHECKOUT_CONFIG.domain.checkout}/${type}`;
  
  // Por enquanto, apenas log
  console.log('Configuração de checkout:', CHECKOUT_CONFIG);
};

// Função para formatar preço em reais
export const formatPrice = (price: number) => {
  return `R$ ${price.toFixed(2).replace('.', ',')}`;
};
