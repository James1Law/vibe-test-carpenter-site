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
    src: '/modern-bespoke-staircase.png',
    alt: 'Modern bespoke oak staircase with clean lines and natural finish, featuring contemporary design and expert craftsmanship',
    width: 800,
    height: 600,
    caption: 'Bespoke Oak Staircase',
  },
  {
    id: 'kitchen-modern',
    src: '/modern-kitchen.png',
    alt: 'Modern handcrafted kitchen with custom wooden cabinets, quality joinery, and contemporary design showcasing expert craftsmanship',
    width: 800,
    height: 600,
    caption: 'Handcrafted Kitchen',
  },
  {
    id: 'wardrobe-fitted',
    src: '/modern-fitted-wardrobe.png',
    alt: 'Fitted wardrobe suite in bedroom with built-in storage, featuring floor-to-ceiling cabinets with modern design and quality joinery',
    width: 800,
    height: 600,
    caption: 'Fitted Wardrobe Suite',
  },
  {
    id: 'staircase-traditional',
    src: '/staircase-traditional.png',
    alt: 'Traditional wooden staircase with turned spindles, carved newel post, and polished oak handrail in residential interior',
    width: 800,
    height: 600,
    caption: 'Traditional Staircase Restoration',
  },
  {
    id: 'shelving-alcove',
    src: '/alcove-unit.png',
    alt: 'Built-in alcove shelving unit with multiple shelves, white painted finish, perfect for display and storage',
    width: 800,
    height: 600,
    caption: 'Alcove Shelving Unit',
  },
  {
    id: 'kitchen-shaker',
    src: '/shaker-kitchen.png',
    alt: 'Shaker-style kitchen cabinets with classic design, quality craftsmanship, and traditional joinery details',
    width: 800,
    height: 600,
    caption: 'Shaker Kitchen Installation',
  },
  {
    id: 'decking-garden',
    src: '/decking-pergola.png',
    alt: 'Outdoor wooden decking with pergola structure, featuring quality timber and professional carpentry installation',
    width: 800,
    height: 600,
    caption: 'Garden Decking & Pergola',
  },
  {
    id: 'joinery-detail',
    src: '/traditional-tools.png',
    alt: 'Traditional carpentry hand tools including chisels, planes, and measuring tools showing quality craftsmanship equipment',
    width: 800,
    height: 600,
    caption: 'Precision Joinery Detail',
  },
]
