'use client';

// import { useRouter } from 'next/navigation';
import Hero from '@/components/Hero';
import Storytelling from '@/components/Storytelling';
import ProblemTransformation from '@/components/ProblemTransformation';
import Benefits from '@/components/Benefits';
import CTAIntermediario from '@/components/CTAIntermediario';
import Includes from '@/components/Includes';
import HowItWorks from '@/components/HowItWorks';
import Bonus from '@/components/Bonus';
import SocialProof from '@/components/SocialProof';
import MetricasVisuais from '@/components/MetricasVisuais';
import CTA from '@/components/CTA';
import Guarantee from '@/components/Guarantee';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import { trackEvent } from '@/lib/pixel';

export default function Home() {
  // const router = useRouter();

  const handleCtaClick = () => {
    // Rastrear evento de clique no CTA
    trackEvent('Lead', {
      content_name: 'Projeto Pequenos Gênios - Método Brinca+',
      content_category: 'Digital Product',
      value: 27.90,
      currency: 'BRL'
    });
    
    // Redirecionar para o gateway de pagamento
    window.open('https://pay.kirvano.com/84dc1856-cdba-41e6-91ce-259d8dd6369f', '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <Hero onCtaClick={handleCtaClick} />
      <Storytelling />
      <ProblemTransformation />
      <Benefits />
      <CTAIntermediario onCtaClick={handleCtaClick} />
      <Includes />
      <HowItWorks />
      <Bonus />
      <SocialProof />
      <MetricasVisuais />
      <CTA onCtaClick={handleCtaClick} />
      <Guarantee />
      <FAQ />
      <Footer />
    </div>
  );
}