import { describe, it, expect } from 'vitest';
import { contactSchema } from '../contactSchema';

describe('contactSchema', () => {
  describe('valid data', () => {
    it('should accept valid contact form data with all fields', () => {
      const validData = {
        name: 'John Smith',
        email: 'john@example.com',
        phone: '07700 900000',
        message: 'I would like a quote for kitchen cabinets.',
      };

      const result = contactSchema.safeParse(validData);
      expect(result.success).toBe(true);
    });

    it('should accept valid data without optional phone field', () => {
      const validData = {
        name: 'Jane Doe',
        email: 'jane@example.com',
        message: 'Interested in custom wardrobes.',
      };

      const result = contactSchema.safeParse(validData);
      expect(result.success).toBe(true);
    });

    it('should accept minimum length values', () => {
      const validData = {
        name: 'Jo',
        email: 'j@e.co',
        message: '10 chars!!',
      };

      const result = contactSchema.safeParse(validData);
      expect(result.success).toBe(true);
    });
  });

  describe('name validation', () => {
    it('should reject name with less than 2 characters', () => {
      const invalidData = {
        name: 'J',
        email: 'john@example.com',
        message: 'This is a test message.',
      };

      const result = contactSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues[0].message).toBe('Name must be at least 2 characters');
      }
    });

    it('should reject name with more than 80 characters', () => {
      const invalidData = {
        name: 'a'.repeat(81),
        email: 'john@example.com',
        message: 'This is a test message.',
      };

      const result = contactSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues[0].message).toBe('Name must be less than 80 characters');
      }
    });

    it('should reject empty name', () => {
      const invalidData = {
        name: '',
        email: 'john@example.com',
        message: 'This is a test message.',
      };

      const result = contactSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
    });
  });

  describe('email validation', () => {
    it('should reject invalid email format', () => {
      const invalidData = {
        name: 'John Smith',
        email: 'not-an-email',
        message: 'This is a test message.',
      };

      const result = contactSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues[0].message).toBe('Please enter a valid email address');
      }
    });

    it('should reject email without @', () => {
      const invalidData = {
        name: 'John Smith',
        email: 'johnexample.com',
        message: 'This is a test message.',
      };

      const result = contactSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
    });

    it('should reject email without domain', () => {
      const invalidData = {
        name: 'John Smith',
        email: 'john@',
        message: 'This is a test message.',
      };

      const result = contactSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
    });
  });

  describe('message validation', () => {
    it('should reject message with less than 10 characters', () => {
      const invalidData = {
        name: 'John Smith',
        email: 'john@example.com',
        message: 'Too short',
      };

      const result = contactSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues[0].message).toBe('Message must be at least 10 characters');
      }
    });

    it('should reject message with more than 1000 characters', () => {
      const invalidData = {
        name: 'John Smith',
        email: 'john@example.com',
        message: 'a'.repeat(1001),
      };

      const result = contactSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues[0].message).toBe('Message must be less than 1000 characters');
      }
    });

    it('should accept message with exactly 1000 characters', () => {
      const validData = {
        name: 'John Smith',
        email: 'john@example.com',
        message: 'a'.repeat(1000),
      };

      const result = contactSchema.safeParse(validData);
      expect(result.success).toBe(true);
    });
  });

  describe('phone validation', () => {
    it('should accept empty phone field', () => {
      const validData = {
        name: 'John Smith',
        email: 'john@example.com',
        phone: '',
        message: 'This is a test message.',
      };

      const result = contactSchema.safeParse(validData);
      expect(result.success).toBe(true);
    });

    it('should accept UK phone number format', () => {
      const validData = {
        name: 'John Smith',
        email: 'john@example.com',
        phone: '07753 958 395',
        message: 'This is a test message.',
      };

      const result = contactSchema.safeParse(validData);
      expect(result.success).toBe(true);
    });
  });

  describe('multiple validation errors', () => {
    it('should return all validation errors for completely invalid data', () => {
      const invalidData = {
        name: 'J',
        email: 'invalid-email',
        message: 'short',
      };

      const result = contactSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues.length).toBeGreaterThan(1);
      }
    });
  });
});
