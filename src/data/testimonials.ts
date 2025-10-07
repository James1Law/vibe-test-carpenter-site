export interface Testimonial {
  id: string
  quote: string
  author: string
  location: string
}

export const testimonials: Testimonial[] = [
  {
    id: 'emma',
    quote:
      'Our bespoke wardrobes were perfect — exceptional craftsmanship and tidy work.',
    author: 'Emma',
    location: 'Wareham',
  },
  {
    id: 'david',
    quote:
      'Professional from start to finish. Highly recommended for custom joinery.',
    author: 'David',
    location: 'Poole',
  },
  {
    id: 'lucy',
    quote:
      'The new kitchen exceeded expectations — precise, reliable and great to deal with.',
    author: 'Lucy',
    location: 'Dorset',
  },
]
