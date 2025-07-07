import { Property } from '../types/GameTypes';

export const properties: Property[] = [
  {
    id: 1,
    title: "Modern Luxury Villa",
    price: 1250000,
    bedrooms: 4,
    bathrooms: 3,
    area: 3200,
    location: "Beverly Hills, CA",
    description: "Stunning modern villa with panoramic city views, featuring an open-plan design, state-of-the-art kitchen, and luxury finishes throughout.",
    image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
    gallery: [
      "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    amenities: ["Pool", "Garage", "Garden", "Security System"],
    type: "Villa",
    status: "For Sale",
    agent: {
      name: "Sarah Johnson",
      phone: "+1 (555) 123-4567",
      email: "sarah@luxuryrealty.com"
    }
  },
  {
    id: 2,
    title: "Charming Victorian Townhouse",
    price: 850000,
    bedrooms: 3,
    bathrooms: 2,
    area: 2100,
    location: "San Francisco, CA",
    description: "Beautiful Victorian townhouse with original architectural details, hardwood floors, and a private garden in the heart of the city.",
    image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800",
    gallery: [
      "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    amenities: ["Fireplace", "Garden", "Historic Details", "Parking"],
    type: "Townhouse",
    status: "For Sale",
    agent: {
      name: "Michael Chen",
      phone: "+1 (555) 234-5678",
      email: "michael@heritagehomes.com"
    }
  },
  {
    id: 3,
    title: "Contemporary Glass House",
    price: 2100000,
    bedrooms: 5,
    bathrooms: 4,
    area: 4500,
    location: "Malibu, CA",
    description: "Architectural masterpiece featuring floor-to-ceiling glass walls, infinity pool, and breathtaking ocean views.",
    image: "https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&w=800",
    gallery: [
      "https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    amenities: ["Ocean View", "Infinity Pool", "Smart Home", "Wine Cellar"],
    type: "Modern",
    status: "For Sale",
    agent: {
      name: "Emily Rodriguez",
      phone: "+1 (555) 345-6789",
      email: "emily@oceanview.com"
    }
  },
  {
    id: 4,
    title: "Rustic Farmhouse Estate",
    price: 750000,
    bedrooms: 4,
    bathrooms: 3,
    area: 2800,
    location: "Sonoma County, CA",
    description: "Charming farmhouse on 5 acres with vineyards, barn, and stunning valley views. Perfect for wine enthusiasts.",
    image: "https://images.pexels.com/photos/1974596/pexels-photo-1974596.jpeg?auto=compress&cs=tinysrgb&w=800",
    gallery: [
      "https://images.pexels.com/photos/1974596/pexels-photo-1974596.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    amenities: ["Vineyard", "Barn", "Fireplace", "Large Lot"],
    type: "Farmhouse",
    status: "For Sale",
    agent: {
      name: "David Wilson",
      phone: "+1 (555) 456-7890",
      email: "david@countryliving.com"
    }
  },
  {
    id: 5,
    title: "Mid-Century Modern Gem",
    price: 950000,
    bedrooms: 3,
    bathrooms: 2,
    area: 1900,
    location: "Palm Springs, CA",
    description: "Iconic mid-century modern home with original Eichler design, open floor plan, and stunning mountain views.",
    image: "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=800",
    gallery: [
      "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1571472/pexels-photo-1571472.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1648771/pexels-photo-1648771.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    amenities: ["Mountain View", "Pool", "Original Design", "Patio"],
    type: "Mid-Century",
    status: "For Sale",
    agent: {
      name: "Lisa Thompson",
      phone: "+1 (555) 567-8901",
      email: "lisa@retrogems.com"
    }
  },
  {
    id: 6,
    title: "Traditional Colonial Estate",
    price: 1100000,
    bedrooms: 5,
    bathrooms: 4,
    area: 3800,
    location: "Greenwich, CT",
    description: "Elegant colonial estate with formal gardens, library, and classic architectural details throughout.",
    image: "https://images.pexels.com/photos/1722183/pexels-photo-1722183.jpeg?auto=compress&cs=tinysrgb&w=800",
    gallery: [
      "https://images.pexels.com/photos/1722183/pexels-photo-1722183.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1571473/pexels-photo-1571473.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1643390/pexels-photo-1643390.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    amenities: ["Formal Gardens", "Library", "Multiple Fireplaces", "Guest House"],
    type: "Colonial",
    status: "For Sale",
    agent: {
      name: "Robert Davis",
      phone: "+1 (555) 678-9012",
      email: "robert@classicestates.com"
    }
  },
  {
    id: 7,
    title: "Minimalist Cube House",
    price: 1350000,
    bedrooms: 3,
    bathrooms: 3,
    area: 2400,
    location: "Austin, TX",
    description: "Ultra-modern cube house with clean lines, sustainable materials, and smart home technology throughout.",
    image: "https://images.pexels.com/photos/2102568/pexels-photo-2102568.jpeg?auto=compress&cs=tinysrgb&w=800",
    gallery: [
      "https://images.pexels.com/photos/2102568/pexels-photo-2102568.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1571474/pexels-photo-1571474.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1648777/pexels-photo-1648777.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    amenities: ["Smart Home", "Solar Panels", "Rooftop Deck", "Minimalist Design"],
    type: "Contemporary",
    status: "For Sale",
    agent: {
      name: "Amanda Garcia",
      phone: "+1 (555) 789-0123",
      email: "amanda@futuredesign.com"
    }
  },
  {
    id: 8,
    title: "Coastal Beach House",
    price: 1800000,
    bedrooms: 4,
    bathrooms: 3,
    area: 2900,
    location: "Outer Banks, NC",
    description: "Stunning beachfront home with wraparound porches, ocean views from every room, and private beach access.",
    image: "https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=800",
    gallery: [
      "https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1571475/pexels-photo-1571475.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1643391/pexels-photo-1643391.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    amenities: ["Beachfront", "Ocean View", "Private Beach", "Deck"],
    type: "Beach House",
    status: "For Sale",
    agent: {
      name: "Kevin Martinez",
      phone: "+1 (555) 890-1234",
      email: "kevin@coastalproperties.com"
    }
  },
  {
    id: 9,
    title: "Mountain Log Cabin",
    price: 650000,
    bedrooms: 3,
    bathrooms: 2,
    area: 1800,
    location: "Aspen, CO",
    description: "Authentic log cabin with stone fireplace, mountain views, and rustic charm. Perfect mountain retreat.",
    image: "https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=800",
    gallery: [
      "https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1571476/pexels-photo-1571476.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1648778/pexels-photo-1648778.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    amenities: ["Mountain View", "Stone Fireplace", "Wood Beams", "Hot Tub"],
    type: "Cabin",
    status: "For Sale",
    agent: {
      name: "Jennifer Lee",
      phone: "+1 (555) 901-2345",
      email: "jennifer@mountainretreat.com"
    }
  },
  {
    id: 10,
    title: "Art Deco Penthouse",
    price: 2500000,
    bedrooms: 4,
    bathrooms: 4,
    area: 3500,
    location: "Miami Beach, FL",
    description: "Spectacular Art Deco penthouse with panoramic bay views, rooftop terrace, and vintage architectural details.",
    image: "https://images.pexels.com/photos/2102567/pexels-photo-2102567.jpeg?auto=compress&cs=tinysrgb&w=800",
    gallery: [
      "https://images.pexels.com/photos/2102567/pexels-photo-2102567.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1571477/pexels-photo-1571477.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1643392/pexels-photo-1643392.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    amenities: ["Penthouse", "Bay View", "Rooftop Terrace", "Art Deco Details"],
    type: "Penthouse",
    status: "For Sale",
    agent: {
      name: "Carlos Rodriguez",
      phone: "+1 (555) 012-3456",
      email: "carlos@luxurymiami.com"
    }
  },
  {
    id: 11,
    title: "Tudor Style Manor",
    price: 1450000,
    bedrooms: 6,
    bathrooms: 5,
    area: 4200,
    location: "Westchester, NY",
    description: "Magnificent Tudor manor with original stonework, leaded glass windows, and formal gardens on 2 acres.",
    image: "https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=800",
    gallery: [
      "https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1571478/pexels-photo-1571478.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1648779/pexels-photo-1648779.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    amenities: ["Historic Features", "Formal Gardens", "Stone Construction", "Large Lot"],
    type: "Tudor",
    status: "For Sale",
    agent: {
      name: "Patricia Brown",
      phone: "+1 (555) 123-4567",
      email: "patricia@manorproperties.com"
    }
  },
  {
    id: 12,
    title: "Southwest Adobe House",
    price: 720000,
    bedrooms: 3,
    bathrooms: 2,
    area: 2200,
    location: "Santa Fe, NM",
    description: "Authentic adobe home with traditional vigas, kiva fireplace, and stunning desert views.",
    image: "https://images.pexels.com/photos/2102593/pexels-photo-2102593.jpeg?auto=compress&cs=tinysrgb&w=800",
    gallery: [
      "https://images.pexels.com/photos/2102593/pexels-photo-2102593.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1571479/pexels-photo-1571479.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1643393/pexels-photo-1643393.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    amenities: ["Adobe Construction", "Kiva Fireplace", "Desert Views", "Courtyard"],
    type: "Adobe",
    status: "For Sale",
    agent: {
      name: "Maria Gonzalez",
      phone: "+1 (555) 234-5678",
      email: "maria@southwestliving.com"
    }
  }
];