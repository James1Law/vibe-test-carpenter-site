import {
  Layers,
  Archive,
  UtensilsCrossed,
  BookOpen,
  DoorClosed,
  Trees,
  Hammer,
  type LucideIcon,
} from 'lucide-react'

export interface Service {
  id: string
  title: string
  summary: string
  icon: LucideIcon
}

export const services: Service[] = [
  {
    id: 'staircases',
    title: 'Bespoke Staircases',
    summary:
      'Custom-built staircases designed to fit your space perfectly with precision joinery. From traditional oak to contemporary designs, we create stunning staircases across Wareham, Poole, and Dorset using quality hardwoods and expert craftsmanship. Each staircase is built to last, combining structural integrity with beautiful finishing that becomes the centrepiece of your home.',
    icon: Layers,
  },
  {
    id: 'wardrobes',
    title: 'Fitted Wardrobes',
    summary:
      'Made-to-measure wardrobes maximising storage with elegant, functional design. We specialise in fitted bedroom furniture throughout Wareham and Dorset, creating bespoke wardrobes that perfectly utilise your space with clever internal layouts, soft-close doors, and quality materials. Whether modern or traditional, our fitted wardrobes blend seamlessly with your room.',
    icon: Archive,
  },
  {
    id: 'kitchens',
    title: 'Custom Kitchens',
    summary:
      'Handcrafted kitchen units and cabinetry tailored to your style and requirements. Serving homes across Poole, Wareham, and Dorset, we create bespoke kitchens using solid wood construction, from classic Shaker designs to contemporary handleless units. Every kitchen is designed around how you live, with quality joinery that stands the test of time.',
    icon: UtensilsCrossed,
  },
  {
    id: 'alcoves',
    title: 'Alcove Units & Shelving',
    summary:
      'Bespoke shelving and storage solutions that make the most of every alcove. Transform unused alcoves in your Dorset home with custom-built units featuring adjustable shelving, concealed storage, and beautiful finishing. Perfect for living rooms, home offices, or bedrooms, our alcove units are designed to fit exactly, eliminating wasted space.',
    icon: BookOpen,
  },
  {
    id: 'doors-skirting',
    title: 'Door Hanging & Skirting',
    summary:
      'Professional installation of doors and skirting boards with meticulous attention to detail. Providing expert carpentry services across Wareham, Poole, and surrounding areas, we ensure perfect alignment, smooth operation, and crisp mitred corners. Whether fitting new internal doors or replacing period features, we maintain the highest standards of traditional joinery.',
    icon: DoorClosed,
  },
  {
    id: 'decking',
    title: 'Garden Decking & Pergolas',
    summary:
      'Outdoor carpentry creating beautiful, durable spaces for your garden. Using pressure-treated softwood or premium hardwood timbers, we build decking and pergolas throughout Dorset designed to withstand British weather. From simple decking platforms to multi-level designs with integrated seating, we create outdoor spaces you will enjoy for years.',
    icon: Trees,
  },
  {
    id: 'renovations',
    title: 'Full Property Renovations',
    summary:
      'Complete joinery work for renovations, from structural to finishing touches. Supporting property renovations across Wareham, Poole, and Dorset with comprehensive carpentry services including first-fix structural work, stud walls, flooring, through to second-fix architraves, skirtings, and bespoke fitted furniture. One trusted joiner for your entire project.',
    icon: Hammer,
  },
]
