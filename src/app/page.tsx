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

  const handleScrollToPitch = () => {
    // Scroll suave e lento para a seção do pitch (CTA principal)
    const pitchSection = document.querySelector('[data-section="pitch"]') as HTMLElement;
    if (pitchSection) {
      const targetPosition = pitchSection.offsetTop - 100; // 100px de margem do topo
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 2000; // 2 segundos para scroll mais lento
      let start: number | null = null;

      const animation = (currentTime: number) => {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const progress = Math.min(timeElapsed / duration, 1);
        
        // Função de easing para movimento mais suave
        const easeInOutCubic = (t: number) => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
        
        window.scrollTo(0, startPosition + distance * easeInOutCubic(progress));
        
        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      };

      requestAnimationFrame(animation);
    }
  };

  const handleCtaClick = () => {
    // Rastrear evento de clique no CTA
    trackEvent('Lead', {
      content_name: 'Projeto Pequenos Génios - Método Brinca+',
      content_category: 'Digital Product',
      value: 14.90,
      currency: 'EUR'
    });
    
    // Redirecionar para o gateway de pagamento
    window.open('https://peskdigitalbusiness.mycartpanda.com/ckt/VoezV1', '_blank');
  };

  return (
    <>
      {/* CSS Crítico Inline para Hero */}
      <head>
        <style dangerouslySetInnerHTML={{
          __html: `
            .hero-critical {
              background: #FFF8E7;
              padding: 4rem 1rem;
            }
            .hero-title {
              font-size: 3rem;
              font-weight: 700;
              line-height: 1.1;
              color: #2D3748;
              margin-bottom: 1.5rem;
            }
            .hero-subtitle {
              font-size: 1.5rem;
              color: #4A5568;
              margin-bottom: 2rem;
            }
            .hero-cta {
              background: linear-gradient(135deg, #4A90E2, #FF6B6B);
              color: white;
              padding: 1rem 2rem;
              border-radius: 0.75rem;
              font-weight: 700;
              text-decoration: none;
              display: inline-block;
              transition: transform 0.3s;
            }
            .hero-cta:hover {
              transform: scale(1.05);
            }
            @media (max-width: 768px) {
              .hero-title { font-size: 2rem; }
              .hero-subtitle { font-size: 1.25rem; }
            }
          `
        }} />
        
        {/* Preload de recursos críticos */}
        <link rel="preload" href="/images/hero/demo.webp" as="image" type="image/webp" />
        <link rel="preload" href="/images/hero/cover.webp" as="image" type="image/webp" />
        
        {/* Preconnect para domínios externos */}
        <link rel="preconnect" href="https://assets.mycartpanda.com" />
        <link rel="preconnect" href="https://connect.facebook.net" />
        <link rel="preconnect" href="https://static.hj.contentsquare.net" />
        
        {/* DNS prefetch para outros recursos */}
        <link rel="dns-prefetch" href="https://peskdigitalbusiness.mycartpanda.com" />
        
        {/* Script CartPanda para Upsell Externa - Otimizado */}
        <script
          src="https://assets.mycartpanda.com/cartx-ecomm-ui-assets/js/libs/ocu-external.js"
          async
          defer
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.addEventListener('load', function() {
                setTimeout(function() {
                  if (typeof OcuExternal !== 'undefined') {
                    new OcuExternal();
                  }
                }, 1000);
              });
            `,
          }}
          async
        />
      </head>
      
      <div className="min-h-screen bg-background">
      {/* SESSÃO 1: Titulo - Transforme o tédio em aprendizagem com o Projeto Pequenos Génios */}
      <Hero onCtaClick={handleScrollToPitch} />
      
      {/* SESSÃO 2: Titulo - O problema de hoje */}
      <ProblemTransformation />
      
      {/* SESSÃO 3: Titulo - O que o seu filho/aluno ganha */}
      <Benefits />
      
      {/* SESSÃO 4: Titulo - Algumas das atividades que o seu filho irá fazer */}
      <LazyCarousel />
      
      {/* SESSÃO 5: Titulo - Veja o que vai receber + Você recebe */}
      <Includes />
      
      {/* SESSÃO 6: Titulo - Dê o primeiro passo agora! */}
      <CTAIntermediario onCtaClick={handleScrollToPitch} />
      
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