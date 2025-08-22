import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import SquadSection from '@/components/SquadSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  console.log('Index component rendering...');
  return (
    <div className="fullscreen-layout">
      <Navigation />
      <main>
        <HeroSection />
        <SquadSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
