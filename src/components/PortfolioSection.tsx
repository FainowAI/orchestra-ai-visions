import { useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PortfolioSection = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      id: 1,
      title: "TechCorp Avatar",
      category: "Tecnologia",
      description: "Avatar corporativo para empresa de tecnologia, focado em comunicação técnica e liderança digital.",
      image: "/api/placeholder/800/600",
      results: ["30% aumento engajamento", "50% redução tempo resposta", "95% satisfação usuários"]
    },
    {
      id: 2,
      title: "Fashion Brand AI",
      category: "Moda",
      description: "Avatar de moda para marca premium, especializado em styling e tendências contemporâneas.",
      image: "/api/placeholder/800/600",
      results: ["45% crescimento vendas", "60% aumento tempo sessão", "200% mais interações"]
    },
    {
      id: 3,
      title: "Finance Assistant",
      category: "Finanças",
      description: "Avatar financeiro para consultoria especializada, focado em educação e assessoria personalizada.",
      image: "/api/placeholder/800/600",
      results: ["25% novos clientes", "40% redução churn", "80% aprovação NPS"]
    }
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const currentProj = projects[currentProject];

  return (
    <section id="portfolio" className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-futura-light text-5xl md:text-6xl text-white mb-6 tracking-widest">
            PORTFÓLIO
          </h2>
          <div className="w-24 h-px bg-orchestra-gradient mx-auto mb-8"></div>
          <p className="font-futura text-xl text-white/80 max-w-3xl mx-auto tracking-wide">
            Cases de sucesso que demonstram o poder
            <br />
            dos avatares de IA na transformação digital
          </p>
        </div>

        {/* Project Showcase */}
        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Project Image */}
            <div className="relative group animate-scale-in">
              <div className="aspect-[4/3] bg-gray-800 rounded-lg overflow-hidden">
                <img 
                  src={currentProj.image} 
                  alt={currentProj.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-orchestra-gradient opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>
              
              {/* Project Navigation */}
              <div className="absolute top-1/2 -translate-y-1/2 -left-6">
                <Button
                  onClick={prevProject}
                  variant="outline"
                  size="icon"
                  className="bg-black/80 border-white/20 text-white hover:bg-white hover:text-black"
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>
              </div>
              
              <div className="absolute top-1/2 -translate-y-1/2 -right-6">
                <Button
                  onClick={nextProject}
                  variant="outline"
                  size="icon"
                  className="bg-black/80 border-white/20 text-white hover:bg-white hover:text-black"
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Project Info */}
            <div className="animate-fade-in">
              <div className="mb-4">
                <span className="font-futura text-sm text-orchestra-gold-start tracking-wide uppercase">
                  {currentProj.category}
                </span>
              </div>
              
              <h3 className="font-futura-medium text-4xl text-white mb-6 tracking-wide">
                {currentProj.title}
              </h3>
              
              <p className="font-futura text-white/80 text-lg leading-relaxed mb-8">
                {currentProj.description}
              </p>

              {/* Results */}
              <div className="space-y-3 mb-8">
                <h4 className="font-futura-medium text-xl text-white tracking-wide">
                  Resultados
                </h4>
                {currentProj.results.map((result, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orchestra-gradient rounded-full"></div>
                    <span className="font-futura text-white/80">{result}</span>
                  </div>
                ))}
              </div>

              <Button 
                variant="outline"
                className="font-futura tracking-wide bg-transparent border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300"
              >
                Ver Case Completo
                <ExternalLink className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Project Indicators */}
          <div className="flex justify-center space-x-2 mt-12">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentProject(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentProject 
                    ? 'bg-orchestra-gradient scale-125' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;