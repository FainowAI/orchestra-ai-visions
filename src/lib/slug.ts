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
    slug: "lorenzo-bellini",
    subtitle: "Avatar de IA | Lifestyle, Elegância Mediterrânea e Moda Masculina",
    bio: [
      "Lorenzo Bellini é um flâneur contemporâneo que se move pelo mundo com leveza e intenção, entrelaçando cultura, moda e arte. Sua proposta é encantar sem excessos: elegância que nasce da autenticidade e sutileza.",
      "Com estética mediterrânea e olhar curatorial, inspira um viver refinado, consciente e inspirador — ideal para marcas que valorizam sofisticação discreta, qualidade de materiais e histórias atemporais."
    ],
    facts: [
      { label: "ORIGEM", value: "Florença, Itália" },
      { label: "IDADE", value: "32 anos" },
      { label: "ALTURA", value: "1,87 m" },
      { label: "CABELO", value: "castanho-escuro, ondulado" },
      { label: "OLHOS", value: "cor de mel" },
      { label: "IDIOMAS", value: "português, italiano, espanhol, inglês" }
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
    slug: "tay-jackson",
    subtitle: "Avatar de IA | Esporte, Luxo e Estilo Global",
    bio: [
      "Tay Jackson é um avatar criado pela Orchestra — espírito vencedor, energia contagiante e raízes que atravessam continentes. Nascido em Atlanta, filho de pai brasileiro e mãe americana, incorpora com orgulho sua descendência angolana. Leão por essência: confiante, magnético e competitivo.",
      "Atleta por natureza (golfe e atletismo), vive o lifestyle high ticket cercado de marcas esportivas premium e experiências exclusivas. Conectado à música (do rap ao rock e à clássica), tem Vivaldi como trilha antes de competir. Sauvage é sua assinatura olfativa."
    ],
    facts: [
      { label: "ORIGEM", value: "Atlanta (EUA) • pai brasileiro • mãe americana • descendência angolana" },
      { label: "IDADE", value: "29 anos" },
      { label: "ALTURA", value: "—" },
      { label: "CABELO", value: "curto, estilizado e impecável" },
      { label: "OLHOS", value: "—" },
      { label: "IDIOMAS", value: "inglês, português, espanhol e francês (fluentes)" }
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
    slug: "zack",
    subtitle: "Avatar de IA | Lifestyle, Humor e Esportes Radicais",
    bio: [
      "Zack é um avatar criado pela Orchestra — paulista, irreverente e cheio de energia. Carismático por natureza, chama atenção sem esforço: confiante, bem-humorado e pronto para transformar qualquer situação em cena memorável.",
      "De ascendência espanhola, cresceu no ritmo urbano de São Paulo e vive intensamente, com espírito aventureiro e humor contagiante. Gosta de esportes radicais (snowboard, paraquedismo, windsurf, skate), equilibra marcas premium com peças populares estilosas e cuida da aparência.",
      "É presença certa em restaurantes de hambúrguer artesanal, shows de rock/metal e eventos de networking jovem."
    ],
    facts: [
      { label: "ORIGEM", value: "São Paulo (SP) • descendência espanhola" },
      { label: "IDADE", value: "28 anos" },
      { label: "ALTURA", value: "—" },
      { label: "CABELO", value: "castanho, curto, bem cuidado (estilo casual)" },
      { label: "OLHOS", value: "—" },
      { label: "IDIOMAS", value: "—" }
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
