import { lazy, Suspense } from 'react'
import { RootLayout } from '@/components/layout/RootLayout'
import { SEOHead } from '@/components/SEOHead'
import { Hero } from '@/sections/Hero'
import { About } from '@/sections/About'
import { Services } from '@/sections/Services'

// Analytics placeholder - uncomment when ready to enable
// import { Analytics } from '@vercel/analytics/react'
// OR for privacy-focused: npm install plausible-tracker

// Lazy load non-critical sections for better performance
const Gallery = lazy(() => import('@/sections/Gallery').then(module => ({ default: module.Gallery })))
const Testimonials = lazy(() => import('@/sections/Testimonials').then(module => ({ default: module.Testimonials })))
const Contact = lazy(() => import('@/sections/Contact').then(module => ({ default: module.Contact })))

// Minimal fallback to prevent layout shift
const SectionFallback = () => (
  <div className="min-h-[400px] w-full" aria-hidden="true" />
)

function App() {
  return (
    <RootLayout>
      <SEOHead />
      {/* Analytics - uncomment when ready to enable tracking */}
      {/* <Analytics /> */}
      {/* Hero section */}
      <Hero />

      {/* About section */}
      <About />

      {/* Services section */}
      <Services />

      {/* Gallery section - lazy loaded */}
      <Suspense fallback={<SectionFallback />}>
        <Gallery />
      </Suspense>

      {/* Testimonials section - lazy loaded */}
      <Suspense fallback={<SectionFallback />}>
        <Testimonials />
      </Suspense>

      {/* Contact section - lazy loaded */}
      <Suspense fallback={<SectionFallback />}>
        <Contact />
      </Suspense>
    </RootLayout>
  )
}

export default App
