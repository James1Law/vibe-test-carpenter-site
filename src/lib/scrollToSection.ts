/**
 * Scroll utility for handling navigation to sections with lazy loading support
 * Resolves timing issues between drawer close animations and hash navigation
 */

/**
 * Waits for an element to appear in the DOM (useful for lazy-loaded sections)
 * @param selector - CSS selector for the target element
 * @param timeout - Maximum time to wait in milliseconds
 * @returns Promise that resolves with the element or null if timeout
 */
function waitForElement(
  selector: string,
  timeout = 2000
): Promise<HTMLElement | null> {
  return new Promise((resolve) => {
    const element = document.querySelector<HTMLElement>(selector)

    // Element already exists
    if (element) {
      resolve(element)
      return
    }

    // Set up observer to watch for element
    const observer = new MutationObserver(() => {
      const element = document.querySelector<HTMLElement>(selector)
      if (element) {
        observer.disconnect()
        resolve(element)
      }
    })

    // Watch for changes in the body
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    })

    // Timeout fallback
    setTimeout(() => {
      observer.disconnect()
      resolve(null)
    }, timeout)
  })
}

/**
 * Smoothly scrolls to a section by ID, waiting for lazy-loaded sections if needed
 * @param sectionId - ID of the section to scroll to (without '#')
 * @returns Promise that resolves when scroll is complete
 */
export async function scrollToSection(sectionId: string): Promise<void> {
  // Remove '#' if present
  const id = sectionId.replace('#', '')

  // Wait for element to exist (handles lazy loading)
  const element = await waitForElement(`#${id}`)

  if (!element) {
    console.warn(`Section #${id} not found after waiting`)
    return
  }

  // Scroll to element with smooth behavior
  element.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  })

  // Update URL hash without triggering navigation
  if (window.history.replaceState) {
    window.history.replaceState(null, '', `#${id}`)
  }
}
