/**
 * Mock services data for testing
 * Uses actual Service type but with simplified test data
 */

import { Hammer, Archive, type LucideIcon } from 'lucide-react';
import type { Service } from '@/data/services';

// Mock icon for testing (use simple ones to avoid complex imports)
const MockIcon: LucideIcon = Hammer;

export const mockService: Service = {
  id: 'test-service',
  title: 'Test Service',
  summary: 'This is a test service summary for component testing.',
  icon: MockIcon,
};

export const mockServices: Service[] = [
  {
    id: 'service-1',
    title: 'Test Service One',
    summary: 'First test service for testing component rendering.',
    icon: Hammer,
  },
  {
    id: 'service-2',
    title: 'Test Service Two',
    summary: 'Second test service for testing multiple items.',
    icon: Archive,
  },
];
