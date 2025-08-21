import { Button } from '@/components/ui/button';
import avatar1 from '@/assets/avatar-1.jpg';
import avatar2 from '@/assets/avatar-2.jpg';
import avatar3 from '@/assets/avatar-3.jpg';
import { useRef } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { sectionEntrance, slideInStagger, luxuryHover, luxuryHoverOut } from '@/utils/animations';

const SquadSection = () => {
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const sectionRef = useScrollAnimation(() => {
    // Animate section entrance
    sectionEntrance('.squad-title', '.squad-separator', '.squad-subtitle');
    
    // Animate avatar cards with stagger
    slideInStagger(cardsRef.current, 200);
    
    // Animate button
    setTimeout(() => {
      if (buttonRef.current) {
        luxuryHover(buttonRef.current);
        setTimeout(() => luxuryHoverOut(buttonRef.current), 300);
      }
    }, 1000);
  });

  const avatars = [
    {
      id: 1,
      name: "Alex Corporate",
      category: "Executivo Digital",
      image: avatar1,
      description: "Avatar corporativo para liderança empresarial"
    },
    {
      id: 2,
      name: "Maya Creative",
      category: "Artista Digital",
      image: avatar2,
      description: "Avatar criativo para marcas inovadoras"
    },
    {
      id: 3,
      name: "Tech Oliver",
      category: "Especialista Tech",
      image: avatar3,
      description: "Avatar especializado em tecnologia"
    }
  ];

  return (
    <section ref={sectionRef} id="squad" className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="squad-title font-futura-light text-5xl md:text-6xl text-primary mb-6 tracking-widest opacity-0">
            NOSSO SQUAD
          </h2>
          <div className="squad-separator w-24 h-px bg-orchestra-gradient mx-auto mb-8 opacity-0" style={{ transformOrigin: 'center' }}></div>
          <p className="squad-subtitle font-futura text-xl text-foreground/70 max-w-3xl mx-auto tracking-wide opacity-0">
            Conheça alguns dos avatares de IA que criamos
            <br />
            para revolucionar a presença digital das marcas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {avatars.map((avatar, index) => (
            <div 
              key={avatar.id}
              ref={(el) => { if (el) cardsRef.current[index] = el; }}
              className="group cursor-pointer opacity-0"
              onMouseEnter={(e) => luxuryHover(e.currentTarget)}
              onMouseLeave={(e) => luxuryHoverOut(e.currentTarget)}
            >
              <div className="relative overflow-hidden rounded-lg bg-card shadow-lg hover:shadow-2xl transition-shadow duration-500">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={avatar.image} 
                    alt={avatar.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                
                <div className="p-6">
                  <div className="mb-2">
                    <span className="font-futura text-sm text-accent tracking-wide uppercase">
                      {avatar.category}
                    </span>
                  </div>
                  
                  <h3 className="font-futura-medium text-xl text-primary mb-2 tracking-wide">
                    {avatar.name}
                  </h3>
                  
                  <p className="font-futura text-foreground/60 text-sm">
                    {avatar.description}
                  </p>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-orchestra-gradient opacity-0 group-hover:opacity-90 transition-all duration-500 flex items-center justify-center">
                  <span className="font-futura text-primary-foreground tracking-wide transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    Ver Detalhes
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            ref={buttonRef}
            variant="outline"
            size="lg"
            className="font-futura tracking-wide border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 px-8 py-3 opacity-0"
            onMouseEnter={(e) => luxuryHover(e.currentTarget)}
            onMouseLeave={(e) => luxuryHoverOut(e.currentTarget)}
          >
            Ver Todos os Avatares
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SquadSection;