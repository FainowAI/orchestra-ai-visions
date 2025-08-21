import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroAvatar from '@/assets/hero-avatar.jpg';
import { useEffect, useRef } from 'react';
import anime from 'animejs';

const HeroSection = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const separatorRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Elegant entrance animation sequence
    const timeline = anime.timeline({
      easing: 'easeOutExpo',
      duration: 1200
    });

    timeline
      .add({
        targets: titleRef.current,
        opacity: [0, 1],
        translateY: [60, 0],
        letterSpacing: ['0.5em', '0.2em'],
        duration: 1500,
        easing: 'easeOutQuart'
      })
      .add({
        targets: separatorRef.current,
        scaleX: [0, 1],
        opacity: [0, 1],
        duration: 800,
        easing: 'easeOutCubic'
      }, '-=800')
      .add({
        targets: subtitleRef.current,
        opacity: [0, 1],
        translateY: [40, 0],
        duration: 1000,
        easing: 'easeOutQuart'
      }, '-=400')
      .add({
        targets: buttonRef.current,
        opacity: [0, 1],
        translateY: [30, 0],
        scale: [0.9, 1],
        duration: 800,
        easing: 'easeOutBack'
      }, '-=200')
      .add({
        targets: scrollIndicatorRef.current,
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 600
      }, '-=100');

    // Subtle floating animation for the scroll indicator
    anime({
      targets: scrollIndicatorRef.current,
      translateY: [-5, 5],
      duration: 2000,
      easing: 'easeInOutSine',
      direction: 'alternate',
      loop: true,
      delay: 2000
    });

    // Elegant letter animation on hover for title
    const handleTitleHover = () => {
      anime({
        targets: titleRef.current?.querySelectorAll('span'),
        translateY: [-10, 0],
        duration: 600,
        delay: anime.stagger(50),
        easing: 'easeOutElastic(1, .8)'
      });
    };

    // Split title into letters for animation
    if (titleRef.current) {
      const text = titleRef.current.textContent || '';
      titleRef.current.innerHTML = text.split('').map(char => 
        char === ' ' ? ' ' : `<span class="inline-block">${char}</span>`
      ).join('');
      
      titleRef.current.addEventListener('mouseenter', handleTitleHover);
    }

    return () => {
      if (titleRef.current) {
        titleRef.current.removeEventListener('mouseenter', handleTitleHover);
      }
    };
  }, []);

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
        <div>
          <h1 
            ref={titleRef}
            className="font-futura-light text-6xl md:text-8xl lg:text-9xl text-white mb-8 tracking-widest cursor-pointer opacity-0"
            style={{ transformOrigin: 'center' }}
          >
            ORCHESTRA
          </h1>
          
          <div 
            ref={separatorRef}
            className="w-24 h-px bg-orchestra-gradient mx-auto mb-8 opacity-0"
            style={{ transformOrigin: 'center' }}
          ></div>
          
          <p 
            ref={subtitleRef}
            className="font-futura text-xl md:text-2xl text-white/90 mb-12 tracking-wide leading-relaxed max-w-3xl mx-auto opacity-0"
          >
            Criamos avatares de IA únicos e personalizados que revolucionam
            <br />
            a forma como as marcas se conectam com seu público
          </p>

          <Button 
            ref={buttonRef}
            onClick={scrollToServices}
            variant="outline" 
            size="lg"
            className="font-futura tracking-wide bg-transparent border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 px-8 py-3 opacity-0 hover:scale-105"
          >
            Descobrir Como
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        ref={scrollIndicatorRef}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0"
      >
        <button 
          onClick={scrollToServices}
          className="text-white/80 hover:text-white transition-colors duration-200 hover:scale-110"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;