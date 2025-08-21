import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles, Zap, Target } from 'lucide-react';

const AboutWhoWeAreSection: React.FC = () => {
  const highlights = [
    {
      icon: Sparkles,
      title: "Criatividade + Performance",
      description: "Combinamos arte visual com resultados mensuráveis para sua marca."
    },
    {
      icon: Zap,
      title: "IA Generativa",
      description: "Tecnologia de ponta para avatares hiper-realistas e únicos."
    },
    {
      icon: Target,
      title: "Branding Estratégico",
      description: "Cada avatar é desenvolvido para fortalecer sua identidade de marca."
    }
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
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-6">
            Quem Somos
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-8"></div>
        </motion.div>

        {/* Main content */}
        <div className="max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-card rounded-2xl p-8 md:p-12 shadow-lg border border-border/50"
          >
            <p className="font-inter text-lg md:text-xl text-foreground leading-relaxed mb-6">
              A <strong className="text-accent font-semibold">Orchestra</strong> é uma agência de criatividade e performance especializada na criação de avatares digitais hiper-realistas com IA Generativa.
            </p>
            
            <p className="font-inter text-lg md:text-xl text-foreground leading-relaxed mb-6">
              Desenvolvemos modelos virtuais e clones personalizados para campanhas de marketing, branding e posicionamento estratégico.
            </p>
            
            <p className="font-inter text-lg md:text-xl text-accent font-medium leading-relaxed">
              Nosso foco: criar experiências visuais que <em>vendem</em>, <em>encantam</em> e <em>diferenciam</em>.
            </p>
          </motion.div>
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
                  
                  <h3 className="font-playfair text-xl font-semibold text-primary mb-4">
                    {item.title}
                  </h3>
                  
                  <p className="font-inter text-muted-foreground leading-relaxed">
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