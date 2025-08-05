import { Brain, Palette, Users, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ServicesSection = () => {
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
    <section id="services" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-futura-light text-5xl md:text-6xl text-primary mb-6 tracking-widest">
            O QUE FAZEMOS
          </h2>
          <div className="w-24 h-px bg-orchestra-gradient mx-auto mb-8"></div>
          <p className="font-futura text-xl text-muted-foreground max-w-3xl mx-auto tracking-wide">
            Transformamos ideias em avatares de IA que redefinem
            <br />
            a experiência digital das marcas mais inovadoras
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="border-0 bg-white hover-lift group transition-all duration-500 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-orchestra-gradient rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="font-futura-medium text-xl text-primary mb-4 tracking-wide">
                  {service.title}
                </h3>
                
                <p className="font-futura text-muted-foreground leading-relaxed">
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