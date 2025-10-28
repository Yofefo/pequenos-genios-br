'use client';

// import { useRouter } from 'next/navigation';
import Hero from '@/components/Hero';
import ProblemTransformation from '@/components/ProblemTransformation';
import Benefits from '@/components/Benefits';
import CTAIntermediario from '@/components/CTAIntermediario';
import Includes from '@/components/Includes';
import HowItWorks from '@/components/HowItWorks';
import CTA from '@/components/CTA';
import Guarantee from '@/components/Guarantee';
import Footer from '@/components/Footer';
import dynamic from 'next/dynamic';
import { redirectToCheckout } from '@/lib/checkout-br';

// Lazy loading para componentes não críticos - Otimizado
const LazyPurchaseNotifications = dynamic(() => import('@/components/PurchaseNotifications'), {
  ssr: false,
  loading: () => null
});

const LazyCarousel = dynamic(() => import('@/components/Carousel'), {
  loading: () => <div className="py-8 px-4 bg-gradient-to-br from-primary/5 to-accent/5"><div className="max-w-4xl mx-auto"><div className="animate-pulse bg-gray-200 rounded-lg h-64"></div></div></div>
});

const LazySocialProof = dynamic(() => import('@/components/SocialProof'), {
  loading: () => <div className="py-16 px-4 bg-background"><div className="max-w-6xl mx-auto"><div className="animate-pulse bg-gray-200 rounded-lg h-96"></div></div></div>
});

// Lazy loading para componentes adicionais
const LazyMetricasVisuais = dynamic(() => import('@/components/MetricasVisuais'), {
  loading: () => <div className="py-16 px-4 bg-white"><div className="max-w-6xl mx-auto"><div className="animate-pulse bg-gray-200 rounded-lg h-64"></div></div></div>
});

const LazyBonus = dynamic(() => import('@/components/Bonus'), {
  loading: () => <div className="py-16 px-4 bg-gradient-to-br from-secondary/20 to-accent/20"><div className="max-w-6xl mx-auto"><div className="animate-pulse bg-gray-200 rounded-lg h-96"></div></div></div>
});

const LazyFAQ = dynamic(() => import('@/components/FAQ'), {
  loading: () => <div className="py-16 px-4 bg-background"><div className="max-w-4xl mx-auto"><div className="animate-pulse bg-gray-200 rounded-lg h-64"></div></div></div>
});
import { trackEvent } from '@/lib/pixel';

export default function Home() {
  // const router = useRouter();


  const handleCtaClick = (e?: React.MouseEvent) => {
    // Prevenir qualquer comportamento padrão
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    
    // Rastrear evento de clique no CTA
    trackEvent('Lead', {
      content_name: 'Projeto Pequenos Génios - Método Brinca+',
      content_category: 'Digital Product',
      value: 14.90,
      currency: 'EUR'
    });
    
    // Redirecionar para o gateway de pagamento brasileiro (Kirvano)
    redirectToCheckout('primary');
  };

  return (
    <>
      <head>
        {/* Scripts para checkout brasileiro */}
        {/* TODO: Adicionar scripts do gateway de pagamento brasileiro */}
      </head>
      
      <div className="min-h-screen bg-background">
      {/* SESSÃO 1: Titulo - Transforme o tédio em aprendizagem com o Projeto Pequenos Génios */}
      <Hero onCtaClick={handleCtaClick} />
      
      {/* SESSÃO 2: Titulo - O problema de hoje */}
      <ProblemTransformation />
      
      {/* SESSÃO 3: Titulo - O que o seu filho/aluno ganha */}
      <Benefits />
      
      {/* SESSÃO 4: Titulo - Algumas das atividades que o seu filho irá fazer */}
      <LazyCarousel />
      
      {/* SESSÃO 5: Titulo - Veja o que vai receber + Você recebe */}
      <Includes />
      
      {/* SESSÃO 6: Titulo - Dê o primeiro passo agora! */}
      <CTAIntermediario onCtaClick={handleCtaClick} />
      
      {/* SESSÃO 7: Titulo - Pais e professores aprovam! */}
      <LazySocialProof />
      
      {/* SESSÃO 8: Titulo - Como funciona */}
      <HowItWorks />
      
      {/* SESSÃO 9: Titulo - Números que comprovam o sucesso */}
      <LazyMetricasVisuais />
      
      {/* SESSÃO 10: Titulo - Garanta o seu acesso com desconto de lançamento! */}
      <CTA onCtaClick={handleCtaClick} />
      
      {/* SESSÃO 11: Titulo - Presente de Lançamento 🎁 */}
      <LazyBonus />
      
      {/* SESSÃO 12: Titulo - Garantia de 7 dias — sem risco! */}
      <Guarantee />
      
      {/* SESSÃO 13: Titulo - Perguntas frequentes */}
      <LazyFAQ />
      
      <Footer />
      
      {/* Notificações de compra */}
      <LazyPurchaseNotifications />
    </div>
    </>
  );
}