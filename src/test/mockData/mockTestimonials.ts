/**
 * Mock testimonials data for testing
 * Uses actual Testimonial type with test data
 */

import type { Testimonial } from '@/data/testimonials';

export const mockTestimonial: Testimonial = {
  id: 'test-testimonial',
  quote: 'This is a test testimonial quote for component testing.',
  author: 'Test Author',
  location: 'Test Location',
};

export const mockTestimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    quote: 'First test testimonial quote with positive feedback.',
    author: 'Alice Test',
    location: 'Test City',
  },
  {
    id: 'testimonial-2',
    quote: 'Second test testimonial showcasing quality work.',
    author: 'Bob Test',
    location: 'Test Town',
  },
  {
    id: 'testimonial-3',
    quote: 'Third test testimonial for testing carousels and lists.',
    author: 'Charlie Test',
    location: 'Test Village',
  },
];
