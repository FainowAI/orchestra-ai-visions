import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroAvatar from '@/assets/hero-avatar.jpg';

const HeroSection = () => {
  const scrollToServices = () => {
    const element = document.querySelector('#services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroAvatar}
          alt="Avatar Digital da Orchestra"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="animate-fade-in">
          <h1 className="font-futura-light text-6xl md:text-8xl lg:text-9xl text-white mb-8 tracking-widest">
            ORCHESTRA
          </h1>
          
          <div className="w-24 h-px bg-orchestra-gradient mx-auto mb-8"></div>
          
          <p className="font-futura text-xl md:text-2xl text-white/90 mb-12 tracking-wide leading-relaxed max-w-3xl mx-auto">
            Criamos avatares de IA únicos e personalizados que revolucionam
            <br />
            a forma como as marcas se conectam com seu público
          </p>

          <Button 
            onClick={scrollToServices}
            variant="outline" 
            size="lg"
            className="font-futura tracking-wide bg-transparent border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 px-8 py-3"
          >
            Descobrir Como
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={scrollToServices}
          className="text-white/80 hover:text-white transition-colors duration-200"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;