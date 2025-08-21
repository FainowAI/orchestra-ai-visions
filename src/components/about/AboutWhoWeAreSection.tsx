import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sparkles, Zap, Target, ArrowRight, CheckCircle } from 'lucide-react';

const AboutWhoWeAreSection: React.FC = () => {
  const highlights = [
    {
      icon: Sparkles,
      title: "Criatividade + Performance",
      description: "Unimos arte visual com resultados mensuráveis que impulsionam sua marca."
    },
    {
      icon: Zap,
      title: "IA Generativa de Ponta",
      description: "Tecnologia avançada para criar avatares digitais hiper-realistas e únicos."
    },
    {
      icon: Target,
      title: "Estratégia de Branding",
      description: "Cada modelo virtual é desenvolvido para fortalecer sua identidade de marca."
    }
  ];

  const benefits = [
    "Avatares digitais 100% personalizados para sua marca",
    "Clones hiper-realistas com IA generativa avançada",
    "Campanhas de marketing de alto impacto visual",
    "Posicionamento estratégico diferenciado no mercado",
    "Experiências visuais que geram resultados mensuráveis"
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="font-futura-light text-5xl md:text-7xl text-primary mb-6 tracking-widest">
            QUEM SOMOS
          </h1>
          <div className="w-24 h-px bg-orchestra-gradient mx-auto mb-8"></div>
          <p className="font-futura text-xl md:text-2xl text-foreground/80 max-w-4xl mx-auto leading-relaxed">
            Agência de criatividade e performance especializada em 
            <span className="text-accent font-medium"> avatares digitais hiper-realistas</span> com IA generativa
          </p>
        </motion.div>

        {/* Main content */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="font-futura-medium text-3xl md:text-4xl text-primary mb-6 tracking-wide">
                Transformamos ideias em experiências visuais que vendem
              </h2>
              
              <p className="font-futura text-lg text-foreground/80 leading-relaxed mb-6">
                Desenvolvemos <strong className="text-accent">modelos virtuais e clones personalizados</strong> para 
                campanhas de marketing, branding e posicionamento estratégico que realmente geram resultados.
              </p>
              
              <p className="font-futura text-lg text-foreground/80 leading-relaxed mb-8">
                Nossa promessa é simples: <span className="text-accent font-medium">criar experiências visuais que vendem, encantam e diferenciam</span> sua marca no mercado.
              </p>

              <Button 
                size="lg"
                className="font-futura tracking-wide bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3"
              >
                Conheça nossos casos
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>

            {/* Right Content - Benefits List */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-card rounded-2xl p-8 border border-border/50 shadow-lg"
            >
              <h3 className="font-futura-medium text-xl text-primary mb-6 tracking-wide">
                Por que escolher a Orchestra?
              </h3>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="font-futura text-foreground/80 leading-relaxed">
                      {benefit}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="h-full group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-border/50 hover:border-accent/50">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors">
                    <item.icon className="w-8 h-8 text-accent" />
                  </div>
                  
                  <h3 className="font-futura-medium text-xl text-primary mb-4 tracking-wide">
                    {item.title}
                  </h3>
                  
                  <p className="font-futura text-foreground/70 leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutWhoWeAreSection;