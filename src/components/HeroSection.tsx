import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const HeroSection = () => {
  // Animation variants for Framer Motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 30,
        stiffness: 300
      }
    }
  };

  const titleVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 200,
        duration: 1.5
      }
    }
  };

  const separatorVariants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: {
      scaleX: 1,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 400,
        delay: 0.8
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-5, 5, -5],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const scrollToServices = () => {
    const element = document.querySelector('#services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video 
          className="w-full h-full object-cover object-center"
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source src="/background-video.mp4" type="video/mp4" />
          {/* Fallback para imagem se vídeo não carregar */}
          <img 
            src="/hero-avatar.jpg" 
            alt="Avatar Digital da Orchestra"
            className="w-full h-full object-cover object-center"
          />
        </video>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <motion.div 
        className="relative z-10 text-center max-w-4xl mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div>
          <motion.h1 
            variants={titleVariants}
            className="font-futura-light text-6xl md:text-8xl lg:text-9xl text-white mb-8 tracking-widest cursor-pointer"
            whileHover={{ 
              scale: 1.05,
              transition: { type: "spring", damping: 15, stiffness: 400 }
            }}
          >
            ORCHESTRA
          </motion.h1>
          
          <motion.div 
            variants={separatorVariants}
            className="w-24 h-px bg-orchestra-gradient mx-auto mb-8"
            style={{ transformOrigin: 'center' }}
          />
          
          <motion.p 
            variants={itemVariants}
            className="font-futura text-xl md:text-2xl text-white/90 mb-12 tracking-wide leading-relaxed max-w-3xl mx-auto"
          >
            Criamos avatares de IA únicos e personalizados que revolucionam
            <br />
            a forma como as marcas se conectam com seu público
          </motion.p>

          <motion.div variants={itemVariants}>
            <Button 
              onClick={scrollToServices}
              variant="outline" 
              size="lg"
              className="font-futura tracking-wide bg-transparent border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 px-8 py-3 hover:scale-105"
            >
              Descobrir Como
            </Button>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        variants={floatingVariants}
        initial="animate"
        animate="animate"
      >
        <button 
          onClick={scrollToServices}
          className="text-white/80 hover:text-white transition-colors duration-200 hover:scale-110"
        >
          <ChevronDown size={32} />
        </button>
      </motion.div>
    </section>
  );
};

export default HeroSection;