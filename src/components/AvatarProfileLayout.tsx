import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { getOtherAvatars } from '@/lib/slug';

interface AvatarData {
  id: number;
  name: string;
  slug: string;
  subtitle: string;
  bio: string[];
  facts: { label: string; value: string; }[];
  heroImages: string[];
  gallery: string[];
}

interface AvatarProfileLayoutProps {
  avatar: AvatarData;
}

const AvatarProfileLayout: React.FC<AvatarProfileLayoutProps> = ({ avatar }) => {
  const [currentHeroImage, setCurrentHeroImage] = useState(0);
  const otherAvatars = getOtherAvatars(avatar.slug);

  const nextHeroImage = () => {
    setCurrentHeroImage((prev) => (prev + 1) % avatar.heroImages.length);
  };

  const prevHeroImage = () => {
    setCurrentHeroImage((prev) => (prev - 1 + avatar.heroImages.length) % avatar.heroImages.length);
  };

  return (
    <main className="pt-20">
      {/* Breadcrumb */}
      <div className="px-6 lg:px-24 py-4">
        <nav className="font-futura text-sm tracking-wide text-foreground/60">
          <Link to="/#squad" className="hover:text-primary transition-colors">
            Avatares
          </Link>
          <span className="mx-2">›</span>
          <span className="text-foreground">{avatar.name}</span>
        </nav>
      </div>

      {/* Hero Editorial */}
      <section className="relative w-full h-[90vh] overflow-hidden">
        <div className="relative w-full h-full">
          {/* Hero Image Slider */}
          <motion.div 
            key={currentHeroImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <img
              src={avatar.heroImages[currentHeroImage]}
              alt={`${avatar.name} - Imagem ${currentHeroImage + 1}`}
              className="w-full h-full object-cover"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </motion.div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          {/* Navigation Controls */}
          {avatar.heroImages.length > 1 && (
            <>
              <button
                onClick={prevHeroImage}
                className="absolute left-6 top-1/2 -translate-y-1/2 font-futura text-white/80 hover:text-white transition-colors tracking-widest text-sm uppercase"
              >
                Anterior
              </button>
              <button
                onClick={nextHeroImage}
                className="absolute right-6 top-1/2 -translate-y-1/2 font-futura text-white/80 hover:text-white transition-colors tracking-widest text-sm uppercase"
              >
                Próxima
              </button>
            </>
          )}

          {/* Hero Content */}
          <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-2xl"
            >
              <h1 className="font-futura-light text-6xl md:text-7xl lg:text-8xl text-white mb-4 tracking-[0.2em] leading-none">
                {avatar.name}
              </h1>
              <p className="font-futura text-xl md:text-2xl text-white/80 tracking-wide font-light">
                {avatar.subtitle}
              </p>
            </motion.div>
          </div>

          {/* Image Counter Dots */}
          {avatar.heroImages.length > 1 && (
            <div className="absolute bottom-6 right-6 lg:right-24 flex space-x-2">
              {avatar.heroImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentHeroImage(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentHeroImage ? 'bg-white' : 'bg-white/40'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Bio Section */}
      <section className="px-6 lg:px-24 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="font-futura-light text-4xl md:text-5xl text-primary mb-8 tracking-wide">
              Sobre {avatar.name}
            </h2>
            <div className="space-y-6 max-w-[70ch] mx-auto">
              {avatar.bio.map((paragraph, index) => (
                <p 
                  key={index}
                  className="font-futura text-lg text-foreground/80 leading-relaxed font-light"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="px-6 lg:px-24 py-16 bg-background">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl"
        >
          <h3 className="font-futura-light text-3xl md:text-4xl text-primary mb-12 tracking-wide">
            Detalhes
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {avatar.facts.map((fact, index) => (
              <div key={index} className="text-center lg:text-left">
                <dt className="font-futura text-sm tracking-widest uppercase text-foreground/60 mb-2">
                  {fact.label}
                </dt>
                <dd className="font-futura-light text-lg text-foreground">
                  {fact.value}
                </dd>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Posicionamento & Proposta de Valor */}
      <section className="px-6 lg:px-24 py-16 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="font-futura-light text-4xl md:text-5xl text-primary mb-12 tracking-wide">
            Posicionamento & Proposta de Valor
          </h3>
          <div className="space-y-8">
            <div className="bg-accent/5 p-8 rounded-lg">
              <h4 className="font-futura text-lg tracking-widest uppercase text-foreground/60 mb-4">
                Função
              </h4>
              <p className="font-futura-light text-lg text-foreground leading-relaxed">
                Influencer de IA para ambiental, bem-estar, arte e moda sustentável.
              </p>
            </div>
            <div className="bg-accent/5 p-8 rounded-lg">
              <h4 className="font-futura text-lg tracking-widest uppercase text-foreground/60 mb-4">
                Entrega de Marca
              </h4>
              <p className="font-futura-light text-lg text-foreground leading-relaxed">
                Storytelling natural + estética editorial clean + mensagens com responsabilidade socioambiental.
              </p>
            </div>
            <div className="bg-accent/5 p-8 rounded-lg">
              <h4 className="font-futura text-lg tracking-widest uppercase text-foreground/60 mb-4">
                Adequação
              </h4>
              <p className="font-futura-light text-lg text-foreground leading-relaxed">
                Campanhas com propósito, produtos "clean/eco", experiências na natureza e projetos culturais.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Estética & Styling */}
      <section className="px-6 lg:px-24 py-16 lg:py-24 bg-accent/5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="font-futura-light text-4xl md:text-5xl text-primary mb-12 tracking-wide">
            Estética & Styling
          </h3>
          <div className="space-y-8">
            <div>
              <h4 className="font-futura text-lg tracking-widest uppercase text-foreground/60 mb-4">
                Beleza Natural
              </h4>
              <p className="font-futura-light text-lg text-foreground leading-relaxed">
                Pele iluminada; make minimalista (realçar pele e olhar).
              </p>
            </div>
            <div>
              <h4 className="font-futura text-lg tracking-widest uppercase text-foreground/60 mb-4">
                Estilo
              </h4>
              <p className="font-futura-light text-lg text-foreground leading-relaxed">
                Boêmio-brasileiro com influências cariocas e nordestinas (vestidos fluidos, tecidos crus/linho/algodão, acessórios artesanais, sandálias de palha, tons terrosos).
              </p>
            </div>
            <div>
              <h4 className="font-futura text-lg tracking-widest uppercase text-foreground/60 mb-4">
                Paleta de Campanha
              </h4>
              <p className="font-futura-light text-lg text-foreground leading-relaxed">
                Verdes (musgo/oliva/verde-claro), marrons (caramelo/terracota/areia), neutros (cru/bege/off-white), toques de coral queimado/mostarda/azul-petróleo.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Portfolio Section */}
      <section className="px-6 lg:px-24 py-16 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="font-futura-light text-4xl md:text-5xl text-primary mb-12 tracking-wide">
            Portfólio
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {avatar.gallery.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group overflow-hidden rounded-lg"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={image}
                    alt={`${avatar.name} - Portfólio ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                    style={{ contentVisibility: 'auto' }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>






    </main>
  );
};

export default AvatarProfileLayout;
