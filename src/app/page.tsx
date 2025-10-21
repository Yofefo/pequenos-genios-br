'use client';

// import { useRouter } from 'next/navigation';
import Hero from '@/components/Hero';
import Benefits from '@/components/Benefits';
import Includes from '@/components/Includes';
import HowItWorks from '@/components/HowItWorks';
import Bonus from '@/components/Bonus';
import SocialProof from '@/components/SocialProof';
import CTA from '@/components/CTA';
import Guarantee from '@/components/Guarantee';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Home() {
  // const router = useRouter();

  const handleCtaClick = () => {
    // Redirecionar para o gateway de pagamento
    window.open('https://pay.kirvano.com/84dc1856-cdba-41e6-91ce-259d8dd6369f', '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <Hero onCtaClick={handleCtaClick} />
      <Benefits />
      <Includes />
      <HowItWorks />
      <Bonus />
      <SocialProof />
      <CTA onCtaClick={handleCtaClick} />
      <Guarantee />
      <FAQ />
      <Footer />
    </div>
  );
}