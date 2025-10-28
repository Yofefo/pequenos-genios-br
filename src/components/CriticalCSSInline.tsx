'use client';

export default function CriticalCSSInline() {
  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
          /* Critical CSS - Primeira dobra apenas */
          :root {
            --font-inter: var(--font-inter);
            --font-poppins: var(--font-poppins);
            --primary: #4A90E2;
            --secondary: #FFD93D;
            --accent: #FF6B6B;
            --background: #FFF8E7;
            --foreground: #2D3748;
            --card: #FFFFFF;
            --card-foreground: #2D3748;
            --muted: #F7FAFC;
            --muted-foreground: #718096;
            --border: #E2E8F0;
            --ring: #4A90E2;
          }
          
          html { 
            font-display: swap; 
            overflow-x: hidden;
          }
          body { 
            font-family: var(--font-inter), system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            font-display: swap;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            overflow-x: hidden;
            -webkit-overflow-scrolling: touch;
          }
          
          * { box-sizing: border-box; }
          
          /* Hero Section Critical */
          .hero-section { 
            min-height: 100vh; 
            min-height: 100dvh; /* Dynamic viewport height */
            height: 100vh; 
            height: 100dvh;
            background: linear-gradient(135deg, #1e293b 0%, #334155 50%, #1e293b 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0 1rem;
            position: relative;
            overflow: hidden;
            padding-top: 5rem;
            -webkit-overflow-scrolling: touch;
          }
          
          /* Critical Typography */
          h1 { 
            font-size: clamp(2rem, 5vw, 4rem);
            font-weight: 900;
            color: white;
            line-height: 1.1;
            margin: 0 0 2rem 0;
            text-align: center;
          }
          
          p { 
            font-size: clamp(1.125rem, 2.5vw, 1.5rem);
            color: #e2e8f0;
            line-height: 1.6;
            margin: 0 0 1.5rem 0;
            text-align: center;
            max-width: 4xl;
            margin-left: auto;
            margin-right: auto;
          }
          
          /* Critical Layout */
          .max-w-6xl { max-width: 72rem; margin: 0 auto; }
          .text-center { text-align: center; }
          .relative { position: relative; }
          .z-10 { z-index: 10; }
          .space-y-12 > * + * { margin-top: 3rem; }
          
          /* Critical Animations */
          .transition-all { transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1); }
          .duration-1000 { transition-duration: 1000ms; }
          .delay-300 { transition-delay: 300ms; }
          .delay-500 { transition-delay: 500ms; }
          
          .opacity-0 { opacity: 0; }
          .opacity-100 { opacity: 1; }
          .translate-y-0 { transform: translateY(0); }
          .translate-y-8 { transform: translateY(2rem); }
          
          /* Critical Gradients */
          .bg-gradient-to-r { background-image: linear-gradient(to right, var(--tw-gradient-stops)); }
          .from-blue-400 { --tw-gradient-from: #60a5fa; --tw-gradient-to: rgba(96, 165, 250, 0); --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to); }
          .via-purple-500 { --tw-gradient-to: rgba(168, 85, 247, 0); --tw-gradient-stops: var(--tw-gradient-from), #a855f7, var(--tw-gradient-to); }
          .to-pink-500 { --tw-gradient-to: #ec4899; }
          .bg-clip-text { background-clip: text; }
          .text-transparent { color: transparent; }
          
          /* Critical Colors */
          .text-white { color: white; }
          .text-gray-300 { color: #d1d5db; }
          .text-gray-200 { color: #e5e7eb; }
          
          /* Critical Spacing */
          .mb-4 { margin-bottom: 1rem; }
          .mb-8 { margin-bottom: 2rem; }
          .mt-4 { margin-top: 1rem; }
          
          /* Critical Flexbox */
          .flex { display: flex; }
          .items-center { align-items: center; }
          .justify-center { justify-content: center; }
          .space-x-4 > * + * { margin-left: 1rem; }
          .space-y-6 > * + * { margin-top: 1.5rem; }
          
          /* Critical Background Elements */
          .absolute { position: absolute; }
          .inset-0 { top: 0; right: 0; bottom: 0; left: 0; }
          .opacity-5 { opacity: 0.05; }
          .bg-radial-gradient { background: radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1), transparent 50%); }
          
          /* Critical Responsive */
          @media (min-width: 768px) {
            .md\\:text-5xl { font-size: 3rem; }
            .md\\:text-6xl { font-size: 3.75rem; }
            .md\\:text-2xl { font-size: 1.5rem; }
            .md\\:text-3xl { font-size: 1.875rem; }
          }
          
          @media (min-width: 1024px) {
            .lg\\:text-6xl { font-size: 3.75rem; }
            .lg\\:text-7xl { font-size: 4.5rem; }
            .lg\\:text-3xl { font-size: 1.875rem; }
          }
          
          @media (min-width: 1280px) {
            .xl\\:text-7xl { font-size: 4.5rem; }
            .xl\\:text-8xl { font-size: 6rem; }
            .xl\\:text-6xl { font-size: 3.75rem; }
          }
          
          /* Critical Loading States */
          .animate-pulse { animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
          @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
          
          /* Critical Accessibility */
          :focus-visible { outline: 2px solid var(--primary); outline-offset: 2px; }
          
          /* Critical Performance */
          @media (prefers-reduced-motion: reduce) {
            *, *::before, *::after { 
              animation-duration: 0.01ms !important; 
              animation-iteration-count: 1 !important; 
              transition-duration: 0.01ms !important; 
            }
          }
        `,
      }}
    />
  );
}



