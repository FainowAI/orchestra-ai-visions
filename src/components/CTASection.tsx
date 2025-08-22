import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const CTASection = () => {
  return (
    <section id="contact" className="w-screen min-h-screen bg-primary flex items-center justify-center">
      <div className="max-w-6xl mx-auto px-16 lg:px-24 text-left">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Content */}
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-futura-light text-6xl md:text-7xl lg:text-8xl text-white mb-8 tracking-[0.2em] leading-none"
            >
              VAMOS
              <br />
              CRIAR
              <br />
              JUNTOS?
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-futura text-xl text-white/70 mb-12 font-light tracking-wide leading-relaxed max-w-lg"
            >
              Transforme sua visão em realidade digital. 
              Criamos experiências visuais que redefinem o futuro das marcas.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-4"
            >
              <Button 
                size="lg"
                className="font-futura tracking-widest bg-white text-black hover:bg-white/90 transition-all duration-500 px-12 py-6 text-lg uppercase"
              >
                Começar Projeto
              </Button>
              
              <div className="block">
                <Button 
                  variant="ghost"
                  size="lg"
                  className="font-futura tracking-widest bg-transparent border-none text-white/60 hover:text-white hover:bg-transparent transition-all duration-500 px-0 py-6 text-lg uppercase underline decoration-1 underline-offset-8"
                >
                  Ver Portfolio
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Statistics */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="space-y-12"
          >
            <div className="border-l border-white/20 pl-8">
              <div className="font-futura-light text-5xl text-white mb-2 tracking-wide">50+</div>
              <div className="font-futura text-white/60 text-sm tracking-widest uppercase">Projetos Criados</div>
            </div>
            
            <div className="border-l border-white/20 pl-8">
              <div className="font-futura-light text-5xl text-white mb-2 tracking-wide">98%</div>
              <div className="font-futura text-white/60 text-sm tracking-widest uppercase">Satisfação</div>
            </div>
            
            <div className="border-l border-white/20 pl-8">
              <div className="font-futura-light text-5xl text-white mb-2 tracking-wide">24h</div>
              <div className="font-futura text-white/60 text-sm tracking-widest uppercase">Resposta</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;