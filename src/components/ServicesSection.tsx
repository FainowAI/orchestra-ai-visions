import { Brain, Palette, Users, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useEffect, useRef } from 'react';
const anime = require('animejs');

const ServicesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate title and subtitle first
            anime.timeline({
              easing: 'easeOutExpo'
            })
            .add({
              targets: '.services-title',
              opacity: [0, 1],
              translateY: [40, 0],
              duration: 1000,
              easing: 'easeOutQuart'
            })
            .add({
              targets: '.services-separator',
              scaleX: [0, 1],
              opacity: [0, 1],
              duration: 600,
              easing: 'easeOutCubic'
            }, '-=600')
            .add({
              targets: '.services-subtitle',
              opacity: [0, 1],
              translateY: [30, 0],
              duration: 800,
              easing: 'easeOutQuart'
            }, '-=300');

            // Animate cards with stagger
            anime({
              targets: cardsRef.current,
              opacity: [0, 1],
              translateY: [60, 0],
              scale: [0.9, 1],
              duration: 800,
              delay: anime.stagger(150, {start: 500}),
              easing: 'easeOutBack(1.7)',
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Brain,
      title: "IA Personalizada",
      description: "Desenvolvemos avatares únicos usando tecnologia de ponta em inteligência artificial"
    },
    {
      icon: Palette,
      title: "Design Exclusivo",
      description: "Criação visual refinada que reflete perfeitamente a identidade da sua marca"
    },
    {
      icon: Users,
      title: "Experiência Humana",
      description: "Avatares que criam conexões emocionais autênticas com seu público-alvo"
    },
    {
      icon: Zap,
      title: "Implementação Rápida",
      description: "Integração eficiente em suas plataformas digitais existentes"
    }
  ];

  return (
    <section ref={sectionRef} id="services" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="services-title font-futura-light text-5xl md:text-6xl text-primary mb-6 tracking-widest opacity-0">
            O QUE FAZEMOS
          </h2>
          <div className="services-separator w-24 h-px bg-orchestra-gradient mx-auto mb-8 opacity-0" style={{ transformOrigin: 'center' }}></div>
          <p className="services-subtitle font-futura text-xl text-foreground/70 max-w-3xl mx-auto tracking-wide opacity-0">
            Transformamos ideias em avatares de IA que redefinem
            <br />
            a experiência digital das marcas mais inovadoras
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              ref={(el) => { if (el) cardsRef.current[index] = el; }}
              className="border-0 bg-card group transition-all duration-300 hover:shadow-2xl opacity-0"
              onMouseEnter={() => {
                anime({
                  targets: cardsRef.current[index]?.querySelector('.service-icon'),
                  scale: [1, 1.1],
                  rotate: [0, 5],
                  duration: 300,
                  easing: 'easeOutBack'
                });
              }}
              onMouseLeave={() => {
                anime({
                  targets: cardsRef.current[index]?.querySelector('.service-icon'),
                  scale: [1.1, 1],
                  rotate: [5, 0],
                  duration: 300,
                  easing: 'easeOutBack'
                });
              }}
            >
              <CardContent className="p-8 text-center">
                <div className="service-icon w-16 h-16 bg-orchestra-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                
                <h3 className="font-futura-medium text-xl text-primary mb-4 tracking-wide">
                  {service.title}
                </h3>
                
                <p className="font-futura text-foreground/70 leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;