import { Instagram, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  const quickLinks = [
    { label: "Serviços", href: "#services" },
    { label: "Portfólio", href: "#portfolio" },
    { label: "Processo", href: "#process" },
    { label: "Contato", href: "#contact" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <span className="font-futura-light text-3xl tracking-widest text-primary-foreground">
                ORCHESTRA
              </span>
            </div>
            <p className="font-futura text-muted-foreground leading-relaxed max-w-md mb-6">
              Criamos avatares de IA únicos que revolucionam a experiência digital das marcas mais inovadoras do mercado.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-orchestra-gradient transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-primary-foreground group-hover:text-primary-foreground" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-futura-medium text-lg text-primary-foreground mb-6 tracking-wide">
              Links Rápidos
            </h3>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.href)}
                  className="block font-futura text-muted-foreground hover:text-accent transition-colors duration-200"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-futura-medium text-lg text-primary-foreground mb-6 tracking-wide">
              Contato
            </h3>
            <div className="space-y-3">
              <a 
                href="mailto:comercial@agenciaorchestra.ai"
                className="flex items-center space-x-3 font-futura text-muted-foreground hover:text-accent transition-colors duration-200"
              >
                <Mail className="w-4 h-4" />
                <span>comercial@agenciaorchestra.ai</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-futura text-muted-foreground text-sm">
              © 2024 Orchestra. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="font-futura text-muted-foreground hover:text-primary-foreground text-sm transition-colors duration-200">
                Política de Privacidade
              </a>
              <a href="#" className="font-futura text-muted-foreground hover:text-primary-foreground text-sm transition-colors duration-200">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;