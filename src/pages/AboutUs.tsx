import React from 'react';
import { Helmet } from 'react-helmet-async';
import AboutHeroSection from '@/components/about/AboutHeroSection';
import AboutWhoWeAreSection from '@/components/about/AboutWhoWeAreSection';
import AboutServicesSection from '@/components/about/AboutServicesSection';
import AboutBenefitsSection from '@/components/about/AboutBenefitsSection';
import AboutProcessSection from '@/components/about/AboutProcessSection';
import AboutTechSection from '@/components/about/AboutTechSection';
import AboutCasesSection from '@/components/about/AboutCasesSection';
import AboutImpactSection from '@/components/about/AboutImpactSection';
import AboutCTASection from '@/components/about/AboutCTASection';
import AboutFAQSection from '@/components/about/AboutFAQSection';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const AboutUs: React.FC = () => {
  // Schema.org JSON-LD
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Orchestra",
    "description": "Agência especializada na criação de avatares digitais hiper-realistas com IA Generativa",
    "url": "https://orchestra.ai",
    "logo": "https://orchestra.ai/logo.png",
    "sameAs": [
      "https://instagram.com/orchestra.ai",
      "https://linkedin.com/company/orchestra-ai"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "São Paulo",
      "addressCountry": "BR"
    }
  };

  return (
    <>
      <Helmet>
        <title>Quem Somos | Orchestra - Avatares de IA Hiper-Realistas</title>
        <meta 
          name="description" 
          content="Conheça a Orchestra, agência especializada em avatares digitais com IA Generativa. Criatividade, performance e tecnologia para sua marca se destacar." 
        />
        <meta name="keywords" content="avatares IA, inteligência artificial, marketing digital, avatares virtuais, clones digitais, IA generativa" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Quem Somos | Orchestra - Avatares de IA Hiper-Realistas" />
        <meta property="og:description" content="Conheça a Orchestra, agência especializada em avatares digitais com IA Generativa. Criatividade, performance e tecnologia para sua marca se destacar." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://orchestra.ai/og-about.jpg" />
        <meta property="og:url" content="https://orchestra.ai/quem-somos" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Quem Somos | Orchestra - Avatares de IA Hiper-Realistas" />
        <meta name="twitter:description" content="Conheça a Orchestra, agência especializada em avatares digitais com IA Generativa." />
        <meta name="twitter:image" content="https://orchestra.ai/og-about.jpg" />
        
        {/* JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background dark:bg-background">
        <Navigation />
        <AboutHeroSection />
        <AboutWhoWeAreSection />
        <AboutServicesSection />
        <AboutBenefitsSection />
        <AboutProcessSection />
        <AboutTechSection />
        <AboutCasesSection />
        <AboutImpactSection />
        <AboutCTASection />
        <AboutFAQSection />
        <Footer />
      </div>
    </>
  );
};

export default AboutUs;