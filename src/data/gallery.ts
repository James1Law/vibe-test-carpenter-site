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
    src: 'https://placehold.co/800x600/334155/f1f5f9?text=Bespoke+Staircase',
    alt: 'Bespoke oak staircase with turned spindles and handrail',
    width: 800,
    height: 600,
    caption: 'Bespoke Oak Staircase, Wareham',
  },
  {
    id: 'wardrobe-fitted',
    src: 'https://placehold.co/800x600/475569/f1f5f9?text=Fitted+Wardrobe',
    alt: 'Fitted wardrobe with sliding doors and internal lighting',
    width: 800,
    height: 600,
    caption: 'Fitted Wardrobe Suite, Poole',
  },
  {
    id: 'kitchen-units',
    src: 'https://placehold.co/800x600/334155/f1f5f9?text=Kitchen+Units',
    alt: 'Custom kitchen units with shaker-style doors',
    width: 800,
    height: 600,
    caption: 'Handcrafted Kitchen, Dorset',
  },
  {
    id: 'alcove-shelving',
    src: 'https://placehold.co/800x600/475569/f1f5f9?text=Alcove+Shelving',
    alt: 'Built-in alcove shelving with adjustable shelves',
    width: 800,
    height: 600,
    caption: 'Alcove Shelving Unit, Wareham',
  },
  {
    id: 'door-installation',
    src: 'https://placehold.co/800x600/334155/f1f5f9?text=Door+Installation',
    alt: 'Period-style internal door with architrave detail',
    width: 800,
    height: 600,
    caption: 'Door Hanging & Architrave',
  },
  {
    id: 'decking-pergola',
    src: 'https://placehold.co/800x600/475569/f1f5f9?text=Garden+Decking',
    alt: 'Garden decking with integrated pergola and seating',
    width: 800,
    height: 600,
    caption: 'Garden Decking & Pergola, Poole',
  },
  {
    id: 'renovation-detail',
    src: 'https://placehold.co/800x600/334155/f1f5f9?text=Renovation+Work',
    alt: 'Property renovation showing bespoke joinery throughout',
    width: 800,
    height: 600,
    caption: 'Full Property Renovation',
  },
  {
    id: 'staircase-detail',
    src: 'https://placehold.co/800x600/475569/f1f5f9?text=Staircase+Detail',
    alt: 'Close-up detail of staircase newel post and joinery',
    width: 800,
    height: 600,
    caption: 'Precision Joinery Detail',
  },
]
