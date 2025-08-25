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
    name: "Isabella Matos",
    slug: "isabella-matos",
    subtitle: "Avatar de IA — editorial • lifestyle • tech",
    bio: [
      "Presença sofisticada com foco em campanhas editoriais e tech-lifestyle.",
      "Direcionada a marcas inovadoras, moda premium e produtos digitais.",
      "Disponível para imagens, vídeo e ativações digitais."
    ],
    facts: [
      { label: "Origem", value: "[placeholder]" },
      { label: "Idade aparente", value: "[placeholder]" },
      { label: "Altura", value: "[placeholder]" },
      { label: "Cabelo", value: "[placeholder]" },
      { label: "Olhos", value: "[placeholder]" },
      { label: "Idiomas", value: "[placeholder]" }
    ],
    heroImages: [
      "/placeholder-hero-isabella-1.jpg",
      "/placeholder-hero-isabella-2.jpg",
      "/placeholder-hero-isabella-3.jpg"
    ],
    gallery: [
      "/placeholder-gallery-isabella-1.jpg",
      "/placeholder-gallery-isabella-2.jpg",
      "/placeholder-gallery-isabella-3.jpg",
      "/placeholder-gallery-isabella-4.jpg",
      "/placeholder-gallery-isabella-5.jpg",
      "/placeholder-gallery-isabella-6.jpg",
      "/placeholder-gallery-isabella-7.jpg",
      "/placeholder-gallery-isabella-8.jpg",
      "/placeholder-gallery-isabella-9.jpg",
      "/placeholder-gallery-isabella-10.jpg",
      "/placeholder-gallery-isabella-11.jpg",
      "/placeholder-gallery-isabella-12.jpg"
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
