export interface GalleryImage {
  id: string
  src: string
  alt: string
  width: number
  height: number
  caption?: string
}

export const galleryImages: GalleryImage[] = [
  {
    id: 'staircase-oak',
    src: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&h=600&fit=crop&q=80',
    alt: 'Modern wooden staircase with clean lines and natural oak finish, featuring wooden steps and contemporary design',
    width: 800,
    height: 600,
    caption: 'Bespoke Oak Staircase',
  },
  {
    id: 'kitchen-modern',
    src: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&h=600&fit=crop&q=80',
    alt: 'Custom kitchen with handcrafted wooden cabinets, quartz countertops, and integrated appliances showcasing quality joinery',
    width: 800,
    height: 600,
    caption: 'Handcrafted Kitchen',
  },
  {
    id: 'wardrobe-fitted',
    src: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&h=600&fit=crop&q=80',
    alt: 'Fitted wardrobe with sliding doors in bedroom, featuring floor-to-ceiling storage with white finish and wooden accents',
    width: 800,
    height: 600,
    caption: 'Fitted Wardrobe Suite',
  },
  {
    id: 'staircase-traditional',
    src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop&q=80',
    alt: 'Traditional wooden staircase with turned spindles, carved newel post, and polished oak handrail in residential interior',
    width: 800,
    height: 600,
    caption: 'Traditional Staircase Restoration',
  },
  {
    id: 'shelving-alcove',
    src: 'https://images.unsplash.com/photo-1595428773255-97a8c2c4d6e0?w=800&h=600&fit=crop&q=80',
    alt: 'Built-in alcove shelving unit with multiple shelves, white painted finish, perfect for display and storage',
    width: 800,
    height: 600,
    caption: 'Alcove Shelving Unit',
  },
  {
    id: 'kitchen-shaker',
    src: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800&h=600&fit=crop&q=80',
    alt: 'Shaker-style kitchen cabinets in warm wood tones with classic design and quality craftsmanship',
    width: 800,
    height: 600,
    caption: 'Shaker Kitchen Installation',
  },
  {
    id: 'decking-garden',
    src: 'https://images.unsplash.com/photo-1598904414032-2def6d0893a2?w=800&h=600&fit=crop&q=80',
    alt: 'Outdoor wooden decking in garden setting, featuring quality pressure-treated timber with professional installation',
    width: 800,
    height: 600,
    caption: 'Garden Decking & Pergola',
  },
  {
    id: 'joinery-detail',
    src: 'https://images.unsplash.com/photo-1567427018141-0584cfcbf1b8?w=800&h=600&fit=crop&q=80',
    alt: 'Traditional carpentry hand tools including chisels, planes, and measuring tools showing quality craftsmanship equipment',
    width: 800,
    height: 600,
    caption: 'Precision Joinery Detail',
  },
]
