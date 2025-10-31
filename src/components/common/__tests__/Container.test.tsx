/**
 * Container Component Tests
 * Example test file demonstrating testing infrastructure and best practices
 */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@/test/helpers/renderWithProviders';
import { Container } from '../Container';

describe('Container', () => {
  describe('Rendering', () => {
    it('renders children correctly', () => {
      render(
        <Container>
          <p>Test content</p>
        </Container>
      );

      expect(screen.getByText('Test content')).toBeInTheDocument();
    });

    it('renders with default div element', () => {
      const { container } = render(
        <Container>
          <p>Content</p>
        </Container>
      );

      expect(container.firstChild?.nodeName).toBe('DIV');
    });
  });

  describe('Props', () => {
    it('applies custom className', () => {
      const { container } = render(
        <Container className="custom-class">
          <p>Content</p>
        </Container>
      );

      const containerElement = container.firstChild as HTMLElement;
      expect(containerElement).toHaveClass('custom-class');
    });

    it('maintains default classes when custom className provided', () => {
      const { container } = render(
        <Container className="custom-class">
          <p>Content</p>
        </Container>
      );

      const containerElement = container.firstChild as HTMLElement;
      // Should have both default and custom classes
      expect(containerElement).toHaveClass('container');
      expect(containerElement).toHaveClass('mx-auto');
      expect(containerElement).toHaveClass('custom-class');
    });

    it('renders as section when as prop is "section"', () => {
      const { container } = render(
        <Container as="section">
          <p>Content</p>
        </Container>
      );

      expect(container.firstChild?.nodeName).toBe('SECTION');
    });

    it('renders as header when as prop is "header"', () => {
      const { container } = render(
        <Container as="header">
          <p>Content</p>
        </Container>
      );

      expect(container.firstChild?.nodeName).toBe('HEADER');
    });

    it('renders as footer when as prop is "footer"', () => {
      const { container } = render(
        <Container as="footer">
          <p>Content</p>
        </Container>
      );

      expect(container.firstChild?.nodeName).toBe('FOOTER');
    });

    it('renders as main when as prop is "main"', () => {
      const { container } = render(
        <Container as="main">
          <p>Content</p>
        </Container>
      );

      expect(container.firstChild?.nodeName).toBe('MAIN');
    });

    it('renders as article when as prop is "article"', () => {
      const { container } = render(
        <Container as="article">
          <p>Content</p>
        </Container>
      );

      expect(container.firstChild?.nodeName).toBe('ARTICLE');
    });
  });

  describe('Responsive Behavior', () => {
    it('applies responsive padding classes', () => {
      const { container } = render(
        <Container>
          <p>Content</p>
        </Container>
      );

      const containerElement = container.firstChild as HTMLElement;
      // Check for responsive padding classes
      expect(containerElement).toHaveClass('px-4');
      expect(containerElement).toHaveClass('sm:px-6');
    });
  });

  describe('Accessibility', () => {
    it('uses semantic HTML when as prop is provided', () => {
      const { container } = render(
        <Container as="main">
          <h1>Main Content</h1>
        </Container>
      );

      const mainElement = container.querySelector('main');
      expect(mainElement).toBeInTheDocument();
      expect(mainElement).toHaveTextContent('Main Content');
    });
  });
});
