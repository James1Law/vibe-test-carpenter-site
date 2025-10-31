/**
 * Custom render utility for component testing
 * Wraps Testing Library's render with any necessary providers
 */

import { render, type RenderOptions } from '@testing-library/react';
import type { ReactElement } from 'react';

/**
 * Custom render function that wraps components with providers
 * Currently returns render directly, but can be extended with:
 * - Theme providers
 * - Router providers
 * - State management providers
 * - Any other context providers needed
 */
function customRender(
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) {
  // For now, no providers needed for this project
  // If providers are added later, wrap ui here:
  // const Wrapper = ({ children }: { children: React.ReactNode }) => (
  //   <ThemeProvider>
  //     <RouterProvider>
  //       {children}
  //     </RouterProvider>
  //   </ThemeProvider>
  // );

  return render(ui, options);
}

// Re-export everything from Testing Library
export * from '@testing-library/react';
export { userEvent } from '@testing-library/user-event';

// Export custom render as default and named export
export { customRender as render };
