/**
 * Mock gallery data for testing
 * Uses actual GalleryImage type with test data
 */

import type { GalleryImage } from '@/data/gallery';

export const mockGalleryImage: GalleryImage = {
  id: 'test-image',
  src: '/test-image.jpg',
  alt: 'Test image alt text',
  width: 800,
  height: 600,
  caption: 'Test Image Caption',
};

export const mockGalleryImages: GalleryImage[] = [
  {
    id: 'image-1',
    src: '/test-image-1.jpg',
    alt: 'First test image alt text',
    width: 800,
    height: 600,
    caption: 'First Test Image',
  },
  {
    id: 'image-2',
    src: '/test-image-2.jpg',
    alt: 'Second test image alt text',
    width: 800,
    height: 600,
    caption: 'Second Test Image',
  },
  {
    id: 'image-3',
    src: '/test-image-3.jpg',
    alt: 'Third test image alt text',
    width: 800,
    height: 600,
  },
];
