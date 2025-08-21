import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

const CTASection = () => {
  return (
    <section id="contact" className="py-24 bg-orchestra-gradient">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* Icon */}
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-8">
            <Sparkles className="w-10 h-10 text-white" />
          </div>

          {/* Headline */}
          <h2 className="font-futura-light text-5xl md:text-6xl text-white mb-6 tracking-widest">
            PRONTO PARA REVOLUCIONAR
            <br />
            SUA MARCA?
          </h2>

          <div className="w-24 h-px bg-white/50 mx-auto mb-8"></div>

          {/* Description */}
          <p className="font-futura text-xl md:text-2xl text-white/90 mb-12 tracking-wide leading-relaxed max-w-3xl mx-auto">
            Crie um avatar de IA único que transforme
            <br />
            a experiência digital da sua marca
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              className="font-futura tracking-wide bg-white text-black hover:bg-white/90 transition-all duration-300 px-8 py-4 text-lg"
            >
              Começar Agora
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              className="font-futura tracking-wide bg-transparent border-2 border-white text-white hover:bg-white/10 transition-all duration-300 px-8 py-4 text-lg"
            >
              Entre em contato
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="font-futura-medium text-3xl text-white mb-2">50+</div>
                <div className="font-futura text-white/80 text-sm tracking-wide">Avatares Criados</div>
              </div>
              <div>
                <div className="font-futura-medium text-3xl text-white mb-2">98%</div>
                <div className="font-futura text-white/80 text-sm tracking-wide">Satisfação Cliente</div>
              </div>
              <div>
                <div className="font-futura-medium text-3xl text-white mb-2">24h</div>
                <div className="font-futura text-white/80 text-sm tracking-wide">Tempo Resposta</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;