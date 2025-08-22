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
    name: "ALEX",
    slug: generateSlug("ALEX"),
    subtitle: "Digital Model & Brand Ambassador",
    bio: [
      "Alex representa a nova geração de modelos digitais, combinando elegância clássica com inovação tecnológica. Especializado em campanhas de moda e lifestyle, tem presença marcante em diversas plataformas.",
      "Criado com tecnologia de IA generativa avançada, Alex adapta-se perfeitamente a diferentes contextos de marca, mantendo sempre sua personalidade única e autêntica.",
      "Ideal para marcas que buscam representação moderna e sofisticada, Alex já participou de campanhas para segmentos de moda, tecnologia e luxo."
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
    name: "MAYA",
    slug: generateSlug("MAYA"),
    subtitle: "Fashion Icon & Creative Muse",
    bio: [
      "Maya é a personificação da criatividade e versatilidade na modelagem digital. Com sua presença magnética e estilo único, ela transcende as fronteiras entre o real e o virtual.",
      "Especializada em campanhas de alta costura e beauty, Maya traz uma perspectiva fresca e contemporânea para cada projeto, adaptando-se com naturalidade a diferentes estéticas.",
      "Sua personalidade cativante e profissionalismo a tornaram referência no mercado de avatares digitais, sendo escolha preferida para marcas premium e campanhas inovadoras."
    ],
    facts: [
      { label: "Origem", value: "Rio de Janeiro, Brasil" },
      { label: "Idade", value: "23 anos" },
      { label: "Altura", value: "1,72m" },
      { label: "Cabelo", value: "Louro" },
      { label: "Olhos", value: "Verdes" },
      { label: "Idiomas", value: "Português, Inglês, Francês" }
    ],
    heroImages: [
      "/placeholder-hero-maya-1.jpg",
      "/placeholder-hero-maya-2.jpg",
      "/placeholder-hero-maya-3.jpg"
    ],
    gallery: [
      "/placeholder-gallery-maya-1.jpg",
      "/placeholder-gallery-maya-2.jpg",
      "/placeholder-gallery-maya-3.jpg",
      "/placeholder-gallery-maya-4.jpg",
      "/placeholder-gallery-maya-5.jpg",
      "/placeholder-gallery-maya-6.jpg",
      "/placeholder-gallery-maya-7.jpg",
      "/placeholder-gallery-maya-8.jpg"
    ]
  },
  {
    id: 3,
    name: "OLIVER",
    slug: generateSlug("OLIVER"),
    subtitle: "Luxury Brand Ambassador",
    bio: [
      "Oliver representa o epítome da sofisticação masculina no mundo digital. Com sua presença imponente e carisma natural, ele estabelece novos padrões de excelência em modelagem virtual.",
      "Especializado em segmentos de luxo, automobilístico e lifestyle premium, Oliver combina elegância atemporal com um toque moderno que ressoa com audiências globais.",
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
      "/placeholder-hero-oliver-1.jpg",
      "/placeholder-hero-oliver-2.jpg",
      "/placeholder-hero-oliver-3.jpg"
    ],
    gallery: [
      "/placeholder-gallery-oliver-1.jpg",
      "/placeholder-gallery-oliver-2.jpg",
      "/placeholder-gallery-oliver-3.jpg",
      "/placeholder-gallery-oliver-4.jpg",
      "/placeholder-gallery-oliver-5.jpg",
      "/placeholder-gallery-oliver-6.jpg",
      "/placeholder-gallery-oliver-7.jpg",
      "/placeholder-gallery-oliver-8.jpg"
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
