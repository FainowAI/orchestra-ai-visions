import { Button } from '@/components/ui/button';
import avatar1 from '@/assets/avatar-1.jpg';
import avatar2 from '@/assets/avatar-2.jpg';
import avatar3 from '@/assets/avatar-3.jpg';

const SquadSection = () => {
  const avatars = [
    {
      id: 1,
      name: "Alex Corporate",
      category: "Executivo Digital",
      image: avatar1,
      description: "Avatar corporativo para liderança empresarial"
    },
    {
      id: 2,
      name: "Maya Creative",
      category: "Artista Digital",
      image: avatar2,
      description: "Avatar criativo para marcas inovadoras"
    },
    {
      id: 3,
      name: "Tech Oliver",
      category: "Especialista Tech",
      image: avatar3,
      description: "Avatar especializado em tecnologia"
    }
  ];

  return (
    <section id="squad" className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-futura-light text-5xl md:text-6xl text-primary mb-6 tracking-widest">
            NOSSO SQUAD
          </h2>
          <div className="w-24 h-px bg-orchestra-gradient mx-auto mb-8"></div>
          <p className="font-futura text-xl text-muted-foreground max-w-3xl mx-auto tracking-wide">
            Conheça alguns dos avatares de IA que criamos
            <br />
            para revolucionar a presença digital das marcas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {avatars.map((avatar, index) => (
            <div 
              key={avatar.id}
              className="group cursor-pointer animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden rounded-lg bg-white hover-lift">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={avatar.image} 
                    alt={avatar.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                
                <div className="p-6">
                  <div className="mb-2">
                    <span className="font-futura text-sm text-accent tracking-wide uppercase">
                      {avatar.category}
                    </span>
                  </div>
                  
                  <h3 className="font-futura-medium text-xl text-primary mb-2 tracking-wide">
                    {avatar.name}
                  </h3>
                  
                  <p className="font-futura text-muted-foreground text-sm">
                    {avatar.description}
                  </p>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-orchestra-gradient opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
                  <span className="font-futura text-white tracking-wide">
                    Ver Detalhes
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            variant="outline"
            size="lg"
            className="font-futura tracking-wide border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 px-8 py-3"
          >
            Ver Todos os Avatares
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SquadSection;