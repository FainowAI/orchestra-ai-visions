import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';

// Componente do Logo Orchestra
const OrchestraLogo = ({ isScrolled, isHomePage }: { isScrolled: boolean; isHomePage: boolean }) => {
  const textColor = isScrolled || !isHomePage ? 'text-primary' : 'text-white';
  const logoColor = isScrolled || !isHomePage ? '#0f172a' : '#ffffff'; // primary para scrolled, branco para transparent
  
  return (
    <div className="flex items-center space-x-3">
      {/* Logo gráfico */}
      <svg 
        width="40" 
        height="40" 
        viewBox="0 0 40 40" 
        className="flex-shrink-0"
      >
        {/* Semicírculo dourado com segmentos */}
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#fbbf24', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#f59e0b', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        
        {/* Semicírculo base */}
        <path 
          d="M20 35 A15 15 0 0 1 5 20 A15 15 0 0 1 35 20 A15 15 0 0 1 20 35 Z" 
          fill="none" 
          stroke="url(#goldGradient)" 
          strokeWidth="1.5"
        />
        
        {/* Segmentos radiais */}
        <path d="M20 20 L20 35" stroke="url(#goldGradient)" strokeWidth="1.5" />
        <path d="M20 20 L15 25" stroke="url(#goldGradient)" strokeWidth="1.5" />
        <path d="M20 20 L25 25" stroke="url(#goldGradient)" strokeWidth="1.5" />
        <path d="M20 20 L12 28" stroke="url(#goldGradient)" strokeWidth="1.5" />
        <path d="M20 20 L28 28" stroke="url(#goldGradient)" strokeWidth="1.5" />
        
        {/* Segmentos curvos */}
        <path d="M5 20 A15 15 0 0 1 20 35" fill="none" stroke="url(#goldGradient)" strokeWidth="1.5" />
        <path d="M20 35 A15 15 0 0 1 35 20" fill="none" stroke="url(#goldGradient)" strokeWidth="1.5" />
        
        {/* Linha horizontal base */}
        <line x1="5" y1="35" x2="35" y2="35" stroke="url(#goldGradient)" strokeWidth="1.5" />
      </svg>
      
      {/* Texto ORCHESTRA */}
      <span className={`font-futura-light text-2xl tracking-widest transition-colors duration-200 ${textColor}`}>
        ORCHESTRA
      </span>
    </div>
  );
};

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Início', href: '#hero', type: 'section' },
    { label: 'Quem somos', href: '/quem-somos', type: 'page' },
    { label: 'Serviços', href: '#services', type: 'section' },
    { label: 'Squad', href: '#squad', type: 'section' },
    { label: 'Processo', href: '#process', type: 'section' },
    { label: 'Portfólio', href: '#portfolio', type: 'section' },
    { label: 'Contato', href: '#contact', type: 'section' }
  ];

  const handleNavigation = (item: { label: string; href: string; type: string }) => {
    if (item.type === 'page') {
      navigate(item.href);
    } else if (item.type === 'section') {
      // Se estamos em outra página que não seja home, navegar para home primeiro
      if (location.pathname !== '/') {
        navigate('/');
        // Aguardar um momento para a página carregar e então fazer scroll
        setTimeout(() => {
          const element = document.querySelector(item.href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        // Se já estamos na home, fazer scroll direto
        const element = document.querySelector(item.href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
    setIsMobileMenuOpen(false);
  };

  const isHomePage = location.pathname === '/';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled || !isHomePage 
        ? 'bg-background/95 backdrop-blur-md border-b border-border' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => navigate('/')}
              className="transition-opacity duration-200 hover:opacity-80"
            >
              <OrchestraLogo isScrolled={isScrolled} isHomePage={isHomePage} />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavigation(item)}
                  className={`font-futura text-sm tracking-wide transition-colors duration-200 ${
                    isScrolled || !isHomePage
                      ? 'text-foreground/70 hover:text-primary' 
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile menu button and theme toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`transition-colors duration-200 ${
                isScrolled || !isHomePage
                  ? 'text-primary hover:text-accent' 
                  : 'text-white hover:text-white/80'
              }`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border">
          <div className="px-6 py-6 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavigation(item)}
                className="block font-futura text-sm tracking-wide text-foreground/80 hover:text-primary transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;