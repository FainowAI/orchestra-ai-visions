import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import heroFallback from '@/assets/avatar-2.jpg';
import { useEffect, useRef } from 'react';

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Debug: verificar se o vídeo carregou
    const video = videoRef.current;
    if (video) {
      video.addEventListener('loadeddata', () => {
        console.log('✅ Vídeo carregado com sucesso!');
      });
      
      video.addEventListener('error', (e) => {
        console.error('❌ Erro ao carregar vídeo:', e);
      });
      
      video.addEventListener('canplay', () => {
        console.log('🎬 Vídeo pode ser reproduzido!');
      });
    }
  }, []);

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
        type: "spring" as const,
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
        type: "spring" as const,
        damping: 20,
        stiffness: 200
      }
    }
  };

  const separatorVariants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: {
      scaleX: 1,
      opacity: 1,
      transition: {
        type: "spring" as const,
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
        ease: "easeInOut" as const
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
    <section id="hero" className="relative w-screen h-screen overflow-hidden">
      {/* Background Video - Full bleed */}
      <div className="absolute inset-0 z-0">
        <video 
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay 
          loop 
          muted 
          playsInline
          preload="auto"
          onLoadStart={() => console.log('🔄 Iniciando carregamento do vídeo...')}
          onLoadedData={() => console.log('✅ Vídeo carregado com sucesso!')}
          onError={(e) => console.error('❌ Erro no vídeo:', e)}
          onCanPlay={() => console.log('🎬 Vídeo pode ser reproduzido!')}
        >
          <source src="/background-video.mp4" type="video/mp4" />
          <img 
            src={heroFallback} 
            alt="Avatar Digital da Orchestra"
            className="w-full h-full object-cover"
          />
        </video>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Minimal Content Overlay */}
      <motion.div 
        className="absolute inset-0 z-10 flex flex-col justify-center items-start px-16 lg:px-24"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-2xl">
          <motion.h1 
            variants={titleVariants}
            className="font-futura-light text-7xl md:text-8xl lg:text-9xl text-white mb-6 tracking-[0.2em] leading-none"
          >
            ORCHESTRA
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="font-futura text-xl md:text-2xl text-white/80 mb-16 tracking-wide leading-relaxed max-w-lg font-light"
          >
            Criatividade digital sem limites.
            <br />
            Avatares de IA que transformam marcas.
          </motion.p>

          <motion.div variants={itemVariants}>
            <Button 
              onClick={scrollToServices}
              variant="ghost" 
              size="lg"
              className="font-futura tracking-widest bg-transparent border-none text-white hover:bg-white/10 transition-all duration-500 px-0 py-6 text-lg uppercase underline decoration-1 underline-offset-8 hover:decoration-2"
            >
              Explorar
            </Button>
          </motion.div>
        </div>
      </motion.div>

      {/* Minimal Scroll Indicator */}
      <motion.div 
        className="absolute bottom-12 right-16 lg:right-24"
        variants={floatingVariants}
        initial="animate"
        animate="animate"
      >
        <button 
          onClick={scrollToServices}
          className="text-white/60 hover:text-white transition-all duration-300 text-sm font-futura tracking-widest uppercase writing-mode-vertical-rl"
        >
          Scroll
        </button>
      </motion.div>
    </section>
  );
};

export default HeroSection;