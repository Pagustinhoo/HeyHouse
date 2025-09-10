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
    name: 'HeyHouse Consultoria',
    email: 'heyhouseimoveis@gmail.com',
    phone: '(45) 92002-9986',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
    rating: 4.9,
    experience: 15,
    specialties: ['Residencial', 'Comercial', 'Investimentos']
  },
  {
    id: 2,
    name: 'Maria Santos',
    email: 'maria@heyhouseimoveis.com',
    phone: '(45) 92002-9987',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
    rating: 4.8,
    experience: 8,
    specialties: ['Apartamentos', 'Primeiro Imóvel']
  }
];

export const properties: Property[] = [
  {
    id: 1,
    title: 'Apartamento Moderno no Centro',
    description: 'Lindo apartamento com 3 quartos, sendo 1 suíte, localizado no coração da cidade. Próximo a shopping centers, escolas e transporte público. Condomínio com área de lazer completa.',
    price: 450000,
    type: 'venda',
    bedrooms: 3,
    bathrooms: 2,
    area: 85,
    parking: 1,
    location: 'Centro, Curitiba - PR',
    city: 'Curitiba',
    state: 'PR',
    image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    images: [
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/2029667/pexels-photo-2029667.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    ],
    features: ['Piscina', 'Academia', 'Portaria 24h', 'Elevador', 'Varanda'],
    rating: 4.8,
    agentId: 1
  },
  {
    id: 2,
    title: 'Casa com Piscina em Condomínio',
    description: 'Casa térrea em condomínio fechado com 4 quartos, piscina privativa e amplo quintal. Ideal para famílias que buscam segurança e tranquilidade.',
    price: 3200,
    type: 'aluguel',
    bedrooms: 4,
    bathrooms: 3,
    area: 180,
    parking: 2,
    location: 'Batel, Curitiba - PR',
    city: 'Curitiba',
    state: 'PR',
    image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    images: [
      'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/2029541/pexels-photo-2029541.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/1571457/pexels-photo-1571457.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    ],
    features: ['Piscina', 'Churrasqueira', 'Jardim', 'Garagem Coberta', 'Segurança 24h'],
    rating: 4.9,
    agentId: 1
  },
  {
    id: 3,
    title: 'Cobertura Duplex com Vista',
    description: 'Magnífica cobertura duplex com vista panorâmica da cidade. 3 suítes, terraço gourmet e acabamento de primeira qualidade.',
    price: 850000,
    type: 'venda',
    bedrooms: 3,
    bathrooms: 4,
    area: 220,
    parking: 3,
    location: 'Água Verde, Curitiba - PR',
    city: 'Curitiba',
    state: 'PR',
    image: 'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    images: [
      'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/1571461/pexels-photo-1571461.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/2029670/pexels-photo-2029670.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/1571454/pexels-photo-1571454.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    ],
    features: ['Terraço', 'Churrasqueira', 'Suíte Master', 'Closet', 'Vista Panorâmica'],
    rating: 5.0,
    agentId: 2
  },
  {
    id: 4,
    title: 'Apartamento Compacto para Solteiros',
    description: 'Apartamento studio moderno e funcional, perfeito para jovens profissionais. Localização privilegiada próximo ao metrô.',
    price: 1800,
    type: 'aluguel',
    bedrooms: 1,
    bathrooms: 1,
    area: 35,
    parking: 1,
    location: 'Vila Madalena, São Paulo - SP',
    city: 'São Paulo',
    state: 'SP',
    image: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    images: [
      'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/2029542/pexels-photo-2029542.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    ],
    features: ['Mobiliado', 'Internet', 'Próximo ao Metrô', 'Lavanderia'],
    rating: 4.5,
    agentId: 2
  },
  {
    id: 5,
    title: 'Casa de Campo com Lago',
    description: 'Casa de campo com vista para o lago, ideal para quem busca tranquilidade e contato com a natureza. 5 quartos e ampla área social.',
    price: 680000,
    type: 'venda',
    bedrooms: 5,
    bathrooms: 4,
    area: 300,
    parking: 4,
    location: 'Campos do Jordão, São Paulo - SP',
    city: 'Campos do Jordão',
    state: 'SP',
    image: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    images: [
      'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/1571469/pexels-photo-1571469.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/2029543/pexels-photo-2029543.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    ],
    features: ['Vista para o Lago', 'Lareira', 'Quintal Grande', 'Área Gourmet', 'Garagem Coberta'],
    rating: 4.7,
    agentId: 1
  },
  {
    id: 6,
    title: 'Apartamento Frente Mar',
    description: 'Apartamento com vista direta para o mar, 2 quartos, varanda ampla e localização privilegiada na orla de Florianópolis.',
    price: 4500,
    type: 'aluguel',
    bedrooms: 2,
    bathrooms: 2,
    area: 75,
    parking: 1,
    location: 'Beira Mar, Florianópolis - SC',
    city: 'Florianópolis',
    state: 'SC',
    image: 'https://images.pexels.com/photos/1571470/pexels-photo-1571470.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    images: [
      'https://images.pexels.com/photos/1571470/pexels-photo-1571470.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/2029544/pexels-photo-2029544.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      'https://images.pexels.com/photos/1571472/pexels-photo-1571472.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
    ],
    features: ['Vista para o Mar', 'Varanda', 'Ar Condicionado', 'Mobiliado', 'Piscina'],
    rating: 4.9,
    agentId: 2
  }
];

export const getPropertyById = (id: number): Property | undefined => {
  return properties.find(property => property.id === id);
};

export const getAgentById = (id: number): Agent | undefined => {
  return agents.find(agent => agent.id === id);
};