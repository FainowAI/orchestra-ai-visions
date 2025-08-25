/**
 * Gera slug a partir do nome do avatar
 * Converte para minúsculas, remove acentos, substitui espaços por hífens
 * Mantém apenas caracteres [a-z0-9-]
 */
export function generateSlug(name: string): string {
  return name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remove acentos
    .replace(/[^a-z0-9\s-]/g, '') // Remove caracteres especiais
    .replace(/\s+/g, '-') // Substitui espaços por hífens
    .replace(/-+/g, '-') // Remove hífens duplicados
    .trim()
    .replace(/^-+|-+$/g, ''); // Remove hífens do início e fim
}

/**
 * Dados mock dos avatares
 */
export const avatarMockData = [
  {
    id: 1,
    name: "Lorenzo Bellini",
    slug: generateSlug("Lorenzo Bellini"),
    subtitle: "Digital Model & Brand Ambassador",
    bio: [
      "Lorenzo representa a nova geração de modelos digitais, combinando elegância clássica com inovação tecnológica. Especializado em campanhas de moda e lifestyle, tem presença marcante em diversas plataformas.",
      "Criado com tecnologia de IA generativa avançada, Lorenzo adapta-se perfeitamente a diferentes contextos de marca, mantendo sempre sua personalidade única e autêntica.",
      "Ideal para marcas que buscam representação moderna e sofisticada, Lorenzo já participou de campanhas para segmentos de moda, tecnologia e luxo."
    ],
    facts: [
      { label: "Origem", value: "São Paulo, Brasil" },
      { label: "Idade", value: "25 anos" },
      { label: "Altura", value: "1,85m" },
      { label: "Cabelo", value: "Castanho escuro" },
      { label: "Olhos", value: "Castanhos" },
      { label: "Idiomas", value: "Português, Inglês" }
    ],
    heroImages: [
      "/placeholder-hero-1.jpg",
      "/placeholder-hero-2.jpg",
      "/placeholder-hero-3.jpg"
    ],
    gallery: [
      "/placeholder-gallery-1.jpg",
      "/placeholder-gallery-2.jpg",
      "/placeholder-gallery-3.jpg",
      "/placeholder-gallery-4.jpg",
      "/placeholder-gallery-5.jpg",
      "/placeholder-gallery-6.jpg",
      "/placeholder-gallery-7.jpg",
      "/placeholder-gallery-8.jpg"
    ]
  },
  {
    id: 2,
    name: "Isabela Matos",
    slug: "isabela-matos",
    subtitle: "Avatar de IA | Natureza, Bem-estar e Moda Sustentável",
    bio: [
      "Isabela representa a nova geração de avatares de IA com propósito: alma carioca, raízes nordestinas e presença serena. Focada em causas ambientais, bem-estar, arte e moda sustentável, une estética natural com narrativa brasileira autêntica.",
      "Vegetariana, formada em Artes Cênicas (UFRJ), prefere exemplo a discurso e cria conteúdo atemporal, elegante e conectado à natureza — ideal para marcas que buscam propósito, estética limpa e responsabilidade socioambiental."
    ],
    facts: [
      { label: "ORIGEM", value: "Rio de Janeiro (RJ) • vivência em São Luís (MA)" },
      { label: "IDADE", value: "27 anos" },
      { label: "ALTURA", value: "—" },
      { label: "CABELO", value: "castanho-escuro ondulado (franja suave)" },
      { label: "OLHOS", value: "verde-claros" },
      { label: "IDIOMAS", value: "—" }
    ],
    heroImages: [
      "/placeholder-hero-isabela-1.jpg",
      "/placeholder-hero-isabela-2.jpg",
      "/placeholder-hero-isabela-3.jpg"
    ],
    gallery: [
      "/placeholder-gallery-isabela-1.jpg",
      "/placeholder-gallery-isabela-2.jpg",
      "/placeholder-gallery-isabela-3.jpg",
      "/placeholder-gallery-isabela-4.jpg",
      "/placeholder-gallery-isabela-5.jpg",
      "/placeholder-gallery-isabela-6.jpg",
      "/placeholder-gallery-isabela-7.jpg",
      "/placeholder-gallery-isabela-8.jpg",
      "/placeholder-gallery-isabela-9.jpg",
      "/placeholder-gallery-isabela-10.jpg",
      "/placeholder-gallery-isabela-11.jpg",
      "/placeholder-gallery-isabela-12.jpg"
    ]
  },
  {
    id: 3,
    name: "Tay Jackson",
    slug: generateSlug("Tay Jackson"),
    subtitle: "Luxury Brand Ambassador",
    bio: [
      "Tay representa o epítome da sofisticação masculina no mundo digital. Com sua presença imponente e carisma natural, ele estabelece novos padrões de excelência em modelagem virtual.",
      "Especializado em segmentos de luxo, automobilístico e lifestyle premium, Tay combina elegância atemporal com um toque moderno que ressoa com audiências globais.",
      "Sua versatilidade permite adaptação perfeita a diferentes contextos de marca, mantendo sempre a autenticidade que o torna único no mercado de avatares digitais."
    ],
    facts: [
      { label: "Origem", value: "Londres, Reino Unido" },
      { label: "Idade", value: "28 anos" },
      { label: "Altura", value: "1,88m" },
      { label: "Cabelo", value: "Preto" },
      { label: "Olhos", value: "Azuis" },
      { label: "Idiomas", value: "Inglês, Português, Espanhol" }
    ],
    heroImages: [
      "/placeholder-hero-tay-1.jpg",
      "/placeholder-hero-tay-2.jpg",
      "/placeholder-hero-tay-3.jpg"
    ],
    gallery: [
      "/placeholder-gallery-tay-1.jpg",
      "/placeholder-gallery-tay-2.jpg",
      "/placeholder-gallery-tay-3.jpg",
      "/placeholder-gallery-tay-4.jpg",
      "/placeholder-gallery-tay-5.jpg",
      "/placeholder-gallery-tay-6.jpg",
      "/placeholder-gallery-tay-7.jpg",
      "/placeholder-gallery-tay-8.jpg"
    ]
  },
  {
    id: 4,
    name: "Zack Blanco",
    slug: generateSlug("Zack Blanco"),
    subtitle: "Tech & Innovation Ambassador",
    bio: [
      "Zack personifica a fusão perfeita entre tecnologia e estilo contemporâneo. Com sua aparência moderna e versatilidade digital, ele é ideal para marcas que buscam representação inovadora.",
      "Especializado em campanhas de tecnologia, gaming e lifestyle urbano, Zack conecta-se naturalmente com audiências jovens e tecnologicamente avançadas.",
      "Sua capacidade de adaptação a diferentes contextos digitais o torna uma escolha perfeita para marcas que valorizam inovação e autenticidade."
    ],
    facts: [
      { label: "Origem", value: "Los Angeles, EUA" },
      { label: "Idade", value: "26 anos" },
      { label: "Altura", value: "1,82m" },
      { label: "Cabelo", value: "Loiro" },
      { label: "Olhos", value: "Verdes" },
      { label: "Idiomas", value: "Inglês, Espanhol" }
    ],
    heroImages: [
      "/placeholder-hero-zack-1.jpg",
      "/placeholder-hero-zack-2.jpg",
      "/placeholder-hero-zack-3.jpg"
    ],
    gallery: [
      "/placeholder-gallery-zack-1.jpg",
      "/placeholder-gallery-zack-2.jpg",
      "/placeholder-gallery-zack-3.jpg",
      "/placeholder-gallery-zack-4.jpg",
      "/placeholder-gallery-zack-5.jpg",
      "/placeholder-gallery-zack-6.jpg",
      "/placeholder-gallery-zack-7.jpg",
      "/placeholder-gallery-zack-8.jpg"
    ]
  }
];

/**
 * Busca avatar por slug
 */
export function getAvatarBySlug(slug: string) {
  return avatarMockData.find(avatar => avatar.slug === slug);
}

/**
 * Retorna outros avatares (exceto o atual)
 */
export function getOtherAvatars(currentSlug: string) {
  return avatarMockData.filter(avatar => avatar.slug !== currentSlug);
}
