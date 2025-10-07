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
      'Custom-built staircases designed to fit your space perfectly with precision joinery.',
    icon: Layers,
  },
  {
    id: 'wardrobes',
    title: 'Fitted Wardrobes',
    summary:
      'Made-to-measure wardrobes maximising storage with elegant, functional design.',
    icon: Archive,
  },
  {
    id: 'kitchens',
    title: 'Custom Kitchens',
    summary:
      'Handcrafted kitchen units and cabinetry tailored to your style and requirements.',
    icon: UtensilsCrossed,
  },
  {
    id: 'alcoves',
    title: 'Alcove Units & Shelving',
    summary:
      'Bespoke shelving and storage solutions that make the most of every alcove.',
    icon: BookOpen,
  },
  {
    id: 'doors-skirting',
    title: 'Door Hanging & Skirting',
    summary:
      'Professional installation of doors and skirting boards with meticulous attention to detail.',
    icon: DoorClosed,
  },
  {
    id: 'decking',
    title: 'Garden Decking & Pergolas',
    summary:
      'Outdoor carpentry creating beautiful, durable spaces for your garden.',
    icon: Trees,
  },
  {
    id: 'renovations',
    title: 'Full Property Renovations',
    summary:
      'Complete joinery work for renovations, from structural to finishing touches.',
    icon: Hammer,
  },
]
