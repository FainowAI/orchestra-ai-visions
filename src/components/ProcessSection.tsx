import { MessageCircle, Brush, Cpu, Rocket } from 'lucide-react';
import { useEffect, useRef } from 'react';
const anime = require('animejs');

const ProcessSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const stepsRef = useRef<HTMLDivElement[]>([]);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate title section
            anime.timeline({
              easing: 'easeOutExpo'
            })
            .add({
              targets: '.process-title',
              opacity: [0, 1],
              translateY: [40, 0],
              duration: 1000,
              easing: 'easeOutQuart'
            })
            .add({
              targets: '.process-separator',
              scaleX: [0, 1],
              opacity: [0, 1],
              duration: 600,
              easing: 'easeOutCubic'
            }, '-=600')
            .add({
              targets: '.process-subtitle',
              opacity: [0, 1],
              translateY: [30, 0],
              duration: 800,
              easing: 'easeOutQuart'
            }, '-=300');

            // Animate timeline
            anime({
              targets: timelineRef.current,
              opacity: [0, 1],
              scaleX: [0, 1],
              duration: 1000,
              delay: 500,
              easing: 'easeOutQuart'
            });

            // Animate steps with beautiful stagger
            anime({
              targets: stepsRef.current,
              opacity: [0, 1],
              translateY: [80, 0],
              scale: [0.8, 1],
              duration: 1000,
              delay: anime.stagger(200, {start: 800}),
              easing: 'easeOutBack(1.4)',
            });

            // Animate step numbers with delay
            anime({
              targets: '.step-number',
              opacity: [0, 1],
              scale: [0, 1],
              rotate: [180, 0],
              duration: 800,
              delay: anime.stagger(200, {start: 1200}),
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

  const steps = [
    {
      number: "01",
      icon: MessageCircle,
      title: "Briefing",
      description: "Entendemos sua marca, objetivos e visão para o avatar perfeito"
    },
    {
      number: "02", 
      icon: Brush,
      title: "Design",
      description: "Criamos conceitos visuais únicos que refletem sua identidade"
    },
    {
      number: "03",
      icon: Cpu,
      title: "IA Training",
      description: "Treinamos a inteligência artificial com dados específicos da sua marca"
    },
    {
      number: "04",
      icon: Rocket,
      title: "Deploy",
      description: "Implementamos e integramos o avatar nas suas plataformas digitais"
    }
  ];

  return (
    <section ref={sectionRef} id="process" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="process-title font-futura-light text-5xl md:text-6xl text-primary mb-6 tracking-widest opacity-0">
            CRIAÇÃO PERSONALIZADA
          </h2>
          <div className="process-separator w-24 h-px bg-orchestra-gradient mx-auto mb-8 opacity-0" style={{ transformOrigin: 'center' }}></div>
          <p className="process-subtitle font-futura text-xl text-foreground/70 max-w-3xl mx-auto tracking-wide opacity-0">
            Nosso processo de criação em 4 etapas garante
            <br />
            um avatar de IA único e perfeitamente alinhado à sua marca
          </p>
        </div>

        <div className="relative">
          {/* Process Timeline */}
          <div 
            ref={timelineRef}
            className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-border transform -translate-y-1/2 opacity-0"
            style={{ transformOrigin: 'center' }}
          ></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div 
                key={index}
                ref={(el) => { if (el) stepsRef.current[index] = el; }}
                className="relative text-center opacity-0"
                onMouseEnter={() => {
                  anime({
                    targets: stepsRef.current[index]?.querySelector('.step-icon-container'),
                    scale: [1, 1.1],
                    duration: 300,
                    easing: 'easeOutBack'
                  });
                }}
                onMouseLeave={() => {
                  anime({
                    targets: stepsRef.current[index]?.querySelector('.step-icon-container'),
                    scale: [1.1, 1],
                    duration: 300,
                    easing: 'easeOutBack'
                  });
                }}
              >
                {/* Step Number */}
                <div className="step-number relative z-10 w-24 h-24 bg-orchestra-gradient rounded-full flex items-center justify-center mx-auto mb-6 opacity-0">
                  <span className="font-futura-medium text-2xl text-primary-foreground tracking-wide">
                    {step.number}
                  </span>
                </div>

                {/* Icon */}
                <div className="step-icon-container w-16 h-16 bg-background border-2 border-border rounded-full flex items-center justify-center mx-auto mb-6 hover:border-accent transition-colors duration-300">
                  <step.icon className="w-8 h-8 text-accent" />
                </div>

                {/* Content */}
                <h3 className="font-futura-medium text-xl text-primary mb-4 tracking-wide">
                  {step.title}
                </h3>
                
                <p className="font-futura text-foreground/70 leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>

                {/* Connection Line for Mobile */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden w-px h-12 bg-border mx-auto mt-8"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;