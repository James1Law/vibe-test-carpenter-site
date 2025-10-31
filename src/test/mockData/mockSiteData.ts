/**
 * Mock site data for testing
 * Simplified version of actual site data with realistic test values
 */

export const mockSiteData = {
  name: 'Test Carpentry Co',
  tagline: 'Quality carpentry for testing',
  description: 'Test description for carpentry business',

  contact: {
    phoneDisplay: '07700 900000',
    phoneE164: '+447700900000',
    email: 'test@example.com',
    whatsapp: '+447700900000',
  },

  address: {
    street: 'Test Street',
    city: 'Test City',
    county: 'Test County',
    postcode: 'TE1 1ST',
    country: 'United Kingdom',
  },

  areaServed: ['Test City', 'Test Area'],

  hours: {
    monday: '9:00 AM – 5:00 PM',
    tuesday: '9:00 AM – 5:00 PM',
    wednesday: '9:00 AM – 5:00 PM',
    thursday: '9:00 AM – 5:00 PM',
    friday: '9:00 AM – 5:00 PM',
    saturday: '10:00 AM – 2:00 PM',
    sunday: 'Closed',
  },

  founder: {
    name: 'Test Craftsperson',
    experience: '10+ years',
    qualifications: ['Test Qualification', 'Test Certification'],
  },

  social: {
    facebook: 'https://facebook.com/test',
    instagram: 'https://instagram.com/test',
  },

  seo: {
    title: 'Test Carpentry - Test SEO Title',
    description: 'Test SEO description for carpentry business',
    keywords: ['test', 'carpentry', 'testing'],
  },
};
