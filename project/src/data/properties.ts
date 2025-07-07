export interface Property {
  id: number;
  title: string;
  description: string;
  price: number;
  type: 'venda' | 'aluguel';
  bedrooms: number;
  bathrooms: number;
  area: number;
  parking: number;
  location: string;
  city: string;
  state: string;
  neighborhood: string;
  zipCode: string;
  image: string;
  images: string[];
  features: string[];
  rating: number;
  agentId: number;
}

export interface Agent {
  id: number;
  name: string;
  email: string;
  phone: string;
  avatar: string;
  rating: number;
  experience: number;
  specialties: string[];
}

export const agents: Agent[] = [
  {
    id: 1,
    name: 'Helias Andrei',
    email: 'heliasandrei16@gmail.com',
    phone: '(41) 99999-9999',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1',
    rating: 4.9,
    experience: 15,
    specialties: ['Casas de Luxo', 'Apartamentos', 'Investimentos']
  },
  {
    id: 2,
    name: 'Ana Carolina Silva',
    email: 'ana.silva@heyhouse.com',
    phone: '(11) 98888-7777',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1',
    rating: 4.8,
    experience: 12,
    specialties: ['Apartamentos', 'Primeiro Imóvel', 'Financiamento']
  },
  {
    id: 3,
    name: 'Roberto Santos',
    email: 'roberto.santos@heyhouse.com',
    phone: '(48) 97777-6666',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1',
    rating: 4.7,
    experience: 10,
    specialties: ['Casas', 'Terrenos', 'Comercial']
  }
];

export const properties: Property[] = [
  // PARANÁ - Curitiba
  {
    id: 1,
    title: 'Apartamento Moderno no Batel',
    description: 'Apartamento de alto padrão com 3 suítes, varanda gourmet e vista panorâmica da cidade. Localizado no coração do Batel, próximo aos melhores restaurantes e shopping centers. Condomínio com infraestrutura completa incluindo piscina, academia, salão de festas e segurança 24h.',
    price: 850000,
    type: 'venda',
    bedrooms: 3,
    bathrooms: 4,
    area: 120,
    parking: 2,
    location: 'Batel, Curitiba - PR',
    city: 'Curitiba',
    state: 'PR',
    neighborhood: 'Batel',
    zipCode: '80420-000',
    image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    images: [
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    ],
    features: ['Varanda Gourmet', 'Suíte Master', 'Piscina', 'Academia', 'Portaria 24h', 'Elevador', 'Ar Condicionado'],
    rating: 4.8,
    agentId: 1
  },
  {
    id: 2,
    title: 'Casa Contemporânea em Condomínio Fechado',
    description: 'Casa moderna com arquitetura contemporânea, 4 suítes, piscina privativa e área gourmet completa. Localizada em condomínio fechado de alto padrão com segurança 24h, área verde preservada e clube completo.',
    price: 1200000,
    type: 'venda',
    bedrooms: 4,
    bathrooms: 5,
    area: 280,
    parking: 3,
    location: 'Santa Felicidade, Curitiba - PR',
    city: 'Curitiba',
    state: 'PR',
    neighborhood: 'Santa Felicidade',
    zipCode: '82410-000',
    image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    images: [
      'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    ],
    features: ['Piscina Privativa', 'Área Gourmet', 'Jardim', 'Churrasqueira', 'Suíte Master', 'Closet', 'Aquecimento Solar'],
    rating: 4.9,
    agentId: 1
  },
  {
    id: 3,
    title: 'Apartamento Compacto no Centro',
    description: 'Apartamento funcional e bem localizado no centro de Curitiba. Ideal para jovens profissionais ou investimento. Próximo ao transporte público, universidades e comércio. Prédio com portaria e elevador.',
    price: 2800,
    type: 'aluguel',
    bedrooms: 1,
    bathrooms: 1,
    area: 45,
    parking: 1,
    location: 'Centro, Curitiba - PR',
    city: 'Curitiba',
    state: 'PR',
    neighborhood: 'Centro',
    zipCode: '80010-000',
    image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    images: [
      'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/1571461/pexels-photo-1571461.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/1571464/pexels-photo-1571464.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    ],
    features: ['Mobiliado', 'Portaria', 'Elevador', 'Próximo ao Metrô', 'Internet Inclusa'],
    rating: 4.5,
    agentId: 2
  },

  // PARANÁ - Londrina
  {
    id: 4,
    title: 'Casa Familiar na Gleba Palhano',
    description: 'Casa espaçosa com 3 quartos, sendo 1 suíte, em um dos bairros mais valorizados de Londrina. Quintal amplo, garagem para 2 carros e área de lazer. Próxima a escolas, supermercados e parques.',
    price: 650000,
    type: 'venda',
    bedrooms: 3,
    bathrooms: 2,
    area: 180,
    parking: 2,
    location: 'Gleba Palhano, Londrina - PR',
    city: 'Londrina',
    state: 'PR',
    neighborhood: 'Gleba Palhano',
    zipCode: '86050-000',
    image: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    images: [
      'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/1571472/pexels-photo-1571472.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/1648771/pexels-photo-1648771.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    ],
    features: ['Quintal Amplo', 'Área de Lazer', 'Garagem Coberta', 'Próximo a Escolas', 'Jardim'],
    rating: 4.6,
    agentId: 3
  },

  // SÃO PAULO - Capital
  {
    id: 5,
    title: 'Cobertura Duplex em Moema',
    description: 'Cobertura duplex de luxo com 4 suítes, terraço com piscina privativa e vista deslumbrante da cidade. Localizada em uma das regiões mais nobres de São Paulo, próxima ao Parque Ibirapuera e aos melhores restaurantes da cidade.',
    price: 2800000,
    type: 'venda',
    bedrooms: 4,
    bathrooms: 5,
    area: 320,
    parking: 3,
    location: 'Moema, São Paulo - SP',
    city: 'São Paulo',
    state: 'SP',
    neighborhood: 'Moema',
    zipCode: '04077-000',
    image: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    images: [
      'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    ],
    features: ['Terraço Privativo', 'Piscina', 'Vista Panorâmica', 'Suíte Master', 'Closet', 'Lareira', 'Adega'],
    rating: 4.9,
    agentId: 1
  },
  {
    id: 6,
    title: 'Apartamento Studio em Pinheiros',
    description: 'Studio moderno e funcional no coração de Pinheiros. Ideal para jovens profissionais que buscam praticidade e localização privilegiada. Próximo ao metrô, bares, restaurantes e vida noturna agitada.',
    price: 3500,
    type: 'aluguel',
    bedrooms: 0,
    bathrooms: 1,
    area: 35,
    parking: 1,
    location: 'Pinheiros, São Paulo - SP',
    city: 'São Paulo',
    state: 'SP',
    neighborhood: 'Pinheiros',
    zipCode: '05422-000',
    image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    images: [
      'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/1571461/pexels-photo-1571461.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    ],
    features: ['Mobiliado', 'Ar Condicionado', 'Próximo ao Metrô', 'Portaria 24h', 'Internet Inclusa'],
    rating: 4.4,
    agentId: 2
  },

  // SÃO PAULO - Campinas
  {
    id: 7,
    title: 'Casa de Alto Padrão no Cambuí',
    description: 'Casa de arquitetura moderna com 4 suítes, piscina, área gourmet e jardim paisagístico. Localizada no nobre bairro Cambuí, próxima ao Parque Taquaral e aos principais shopping centers de Campinas.',
    price: 1800000,
    type: 'venda',
    bedrooms: 4,
    bathrooms: 5,
    area: 350,
    parking: 4,
    location: 'Cambuí, Campinas - SP',
    city: 'Campinas',
    state: 'SP',
    neighborhood: 'Cambuí',
    zipCode: '13025-000',
    image: 'https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    images: [
      'https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    ],
    features: ['Piscina', 'Área Gourmet', 'Jardim Paisagístico', 'Suíte Master', 'Closet', 'Escritório', 'Aquecimento Solar'],
    rating: 4.8,
    agentId: 1
  },

  // SANTA CATARINA - Florianópolis
  {
    id: 8,
    title: 'Apartamento Frente Mar em Canasvieiras',
    description: 'Apartamento com vista para o mar na praia de Canasvieiras. 2 quartos, varanda ampla e acesso direto à praia. Ideal para quem busca qualidade de vida ou investimento em temporada. Condomínio com piscina e área de lazer.',
    price: 750000,
    type: 'venda',
    bedrooms: 2,
    bathrooms: 2,
    area: 85,
    parking: 1,
    location: 'Canasvieiras, Florianópolis - SC',
    city: 'Florianópolis',
    state: 'SC',
    neighborhood: 'Canasvieiras',
    zipCode: '88054-000',
    image: 'https://images.pexels.com/photos/1648771/pexels-photo-1648771.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    images: [
      'https://images.pexels.com/photos/1648771/pexels-photo-1648771.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    ],
    features: ['Vista para o Mar', 'Varanda Ampla', 'Piscina', 'Acesso à Praia', 'Portaria', 'Área de Lazer'],
    rating: 4.7,
    agentId: 3
  },
  {
    id: 9,
    title: 'Casa de Praia em Jurerê Internacional',
    description: 'Casa de luxo em Jurerê Internacional com 5 suítes, piscina infinity e área gourmet completa. A apenas 200 metros da praia, em condomínio fechado de alto padrão com segurança 24h e clube privativo.',
    price: 3200000,
    type: 'venda',
    bedrooms: 5,
    bathrooms: 6,
    area: 420,
    parking: 4,
    location: 'Jurerê Internacional, Florianópolis - SC',
    city: 'Florianópolis',
    state: 'SC',
    neighborhood: 'Jurerê Internacional',
    zipCode: '88053-000',
    image: 'https://images.pexels.com/photos/1571472/pexels-photo-1571472.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    images: [
      'https://images.pexels.com/photos/1571472/pexels-photo-1571472.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    ],
    features: ['Piscina Infinity', 'Vista para o Mar', 'Área Gourmet', 'Jardim', 'Suíte Master', 'Closet', 'Sauna'],
    rating: 4.9,
    agentId: 1
  },

  // SANTA CATARINA - Blumenau
  {
    id: 10,
    title: 'Apartamento Familiar no Centro',
    description: 'Apartamento espaçoso com 3 quartos no centro de Blumenau. Próximo ao comércio, escolas e pontos turísticos. Prédio com elevador, portaria e área de lazer. Ideal para famílias que buscam praticidade e localização.',
    price: 4200,
    type: 'aluguel',
    bedrooms: 3,
    bathrooms: 2,
    area: 95,
    parking: 2,
    location: 'Centro, Blumenau - SC',
    city: 'Blumenau',
    state: 'SC',
    neighborhood: 'Centro',
    zipCode: '89010-000',
    image: 'https://images.pexels.com/photos/1571464/pexels-photo-1571464.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    images: [
      'https://images.pexels.com/photos/1571464/pexels-photo-1571464.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/1571461/pexels-photo-1571461.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    ],
    features: ['Elevador', 'Portaria', 'Área de Lazer', 'Próximo ao Comércio', 'Varanda'],
    rating: 4.5,
    agentId: 2
  },

  // Mais propriedades para completar o catálogo
  {
    id: 11,
    title: 'Loft Industrial em Vila Madalena',
    description: 'Loft com conceito industrial no coração da Vila Madalena. Espaço integrado, pé direito alto e acabamentos modernos. Localização privilegiada próxima a bares, restaurantes e vida cultural de São Paulo.',
    price: 5800,
    type: 'aluguel',
    bedrooms: 1,
    bathrooms: 1,
    area: 65,
    parking: 1,
    location: 'Vila Madalena, São Paulo - SP',
    city: 'São Paulo',
    state: 'SP',
    neighborhood: 'Vila Madalena',
    zipCode: '05433-000',
    image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    images: [
      'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    ],
    features: ['Conceito Industrial', 'Pé Direito Alto', 'Mobiliado', 'Ar Condicionado', 'Próximo ao Metrô'],
    rating: 4.6,
    agentId: 2
  },
  {
    id: 12,
    title: 'Casa Colonial em Águas Claras',
    description: 'Casa de estilo colonial com 3 quartos, jardim amplo e varanda. Localizada em bairro residencial tranquilo, ideal para famílias. Próxima a escolas, parques e comércio local.',
    price: 580000,
    type: 'venda',
    bedrooms: 3,
    bathrooms: 2,
    area: 160,
    parking: 2,
    location: 'Águas Claras, Curitiba - PR',
    city: 'Curitiba',
    state: 'PR',
    neighborhood: 'Águas Claras',
    zipCode: '82640-000',
    image: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    images: [
      'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/1571472/pexels-photo-1571472.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/1648771/pexels-photo-1648771.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    ],
    features: ['Estilo Colonial', 'Jardim Amplo', 'Varanda', 'Garagem Coberta', 'Próximo a Escolas'],
    rating: 4.4,
    agentId: 3
  }
];

export const getPropertyById = (id: number): Property | undefined => {
  return properties.find(property => property.id === id);
};

export const getAgentById = (id: number): Agent | undefined => {
  return agents.find(agent => agent.id === id);
};

export const getPropertiesByCity = (city: string): Property[] => {
  return properties.filter(property => property.city.toLowerCase() === city.toLowerCase());
};

export const getPropertiesByState = (state: string): Property[] => {
  return properties.filter(property => property.state === state);
};

export const getPropertiesByType = (type: 'venda' | 'aluguel'): Property[] => {
  return properties.filter(property => property.type === type);
};

export const getPropertiesByPriceRange = (minPrice: number, maxPrice: number): Property[] => {
  return properties.filter(property => property.price >= minPrice && property.price <= maxPrice);
};