import avatar1 from '@/assets/avatar-1.jpg';
import avatar2 from '@/assets/avatar-2.jpg';
import avatar3 from '@/assets/avatar-3.jpg';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { generateSlug } from '@/lib/slug';

const SquadSection = () => {
  const [hoveredModel, setHoveredModel] = useState<number | null>(null);

  const models = [
    {
      id: 1,
      name: "ALEX",
      slug: generateSlug("ALEX"),
      image: avatar1
    },
    {
      id: 2,
      name: "MAYA",
      slug: generateSlug("MAYA"),
      image: avatar2
    },
    {
      id: 3,
      name: "OLIVER",
      slug: generateSlug("OLIVER"),
      image: avatar3
    }
  ];

  return (
    <section id="squad" className="w-screen min-h-screen bg-background">
      {/* Editorial Title */}
      <div className="px-16 lg:px-24 py-16">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-futura-light text-6xl md:text-7xl lg:text-8xl text-primary tracking-[0.2em] leading-none mb-8"
        >
          NOSSOS
          <br />
          MODELOS
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-futura text-lg text-foreground/60 max-w-lg font-light tracking-wide"
        >
          Uma seleção de avatares digitais criados para redefinir a presença visual das marcas mais visionárias.
        </motion.p>
      </div>

      {/* Full-width Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 h-auto">
        {models.map((model, index) => (
          <motion.div 
            key={model.id}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="relative group"
            onMouseEnter={() => setHoveredModel(model.id)}
            onMouseLeave={() => setHoveredModel(null)}
          >
            <Link 
              to={`/avatares/${model.slug}`}
              className="block relative h-[70vh] md:h-[80vh] overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              <img 
                src={model.image} 
                alt={`${model.name} - Avatar Digital`}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
              />
              
              {/* Minimal overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />
              
              {/* Model name */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <motion.h3 
                  initial={{ opacity: 0.7 }}
                  animate={{ 
                    opacity: hoveredModel === model.id ? 1 : 0.7,
                    y: hoveredModel === model.id ? -10 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="font-futura-light text-4xl md:text-5xl text-white tracking-[0.3em] leading-none"
                >
                  {model.name}
                </motion.h3>
              </div>
            </Link>
            
            {/* Vertical divider (except last item) */}
            {index < models.length - 1 && (
              <div className="hidden md:block absolute top-0 right-0 w-px h-full bg-border/30" />
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SquadSection;