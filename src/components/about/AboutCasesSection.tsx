import React from 'react';
import { motion } from 'framer-motion';

const AboutCasesSection: React.FC = () => {
  const cases = [
    {
      title: "Avatar de apresentadora",
      subtitle: "para Reels semanais",
      tag: "Social Media"
    },
    {
      title: "Influenciador fitness",
      subtitle: "para linha de suplementos",
      tag: "Fitness"
    },
    {
      title: "Modelo virtual",
      subtitle: "para campanha de moda de luxo",
      tag: "Moda"
    },
    {
      title: "Personagem digital",
      subtitle: "para lançamento de infoproduto",
      tag: "Edtech"
    },
    {
      title: "Avatares inclusivos",
      subtitle: "para diversidade/causas sociais",
      tag: "Social Impact"
    },
    {
      title: "Porta-voz corporativo",
      subtitle: "para comunicação institucional",
      tag: "Corporate"
    }
  ];

  return (
    <section className="py-24 bg-muted/30 dark:bg-card/30">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-futura-medium text-4xl md:text-5xl font-bold text-primary mb-6">
            Casos e Aplicações
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-8"></div>
          <p className="font-futura text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            Exemplos reais de como avatares de IA transformam diferentes segmentos
          </p>
        </motion.div>

        {/* Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {cases.map((caseItem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-background rounded-2xl p-6 border border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              {/* Tag */}
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium font-futura mb-4">
                {caseItem.tag}
              </div>
              
              {/* Content */}
              <div className="space-y-2">
                <h3 className="font-futura-medium text-lg font-semibold text-primary group-hover:text-accent transition-colors">
                  {caseItem.title}
                </h3>
                <p className="font-futura text-foreground/70 text-sm leading-relaxed">
                  {caseItem.subtitle}
                </p>
              </div>

              {/* Hover effect background */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-background rounded-2xl p-8 border border-border/50 max-w-2xl mx-auto">
            <p className="font-futura text-lg font-medium text-primary mb-4">
              Qual será o próximo caso de sucesso?
            </p>
            <p className="font-futura text-foreground/70">
              Cada projeto é único e desenvolvido sob medida para suas necessidades específicas
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutCasesSection;