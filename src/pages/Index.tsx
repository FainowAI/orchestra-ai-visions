import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import SquadSection from '@/components/SquadSection';
import ProcessSection from '@/components/ProcessSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  console.log('Index component rendering...');
  return (
    <div className="fullscreen-layout">
      <Navigation />
      <main>
        <HeroSection />
        <ServicesSection />
        <SquadSection />
        <ProcessSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
