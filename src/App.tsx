import { RootLayout } from '@/components/layout/RootLayout'
import { SEOHead } from '@/components/SEOHead'
import { Hero } from '@/sections/Hero'
import { About } from '@/sections/About'
import { Services } from '@/sections/Services'
import { Gallery } from '@/sections/Gallery'
import { Testimonials } from '@/sections/Testimonials'
import { Contact } from '@/sections/Contact'

function App() {
  return (
    <RootLayout>
      <SEOHead />
      {/* Hero section */}
      <Hero />

      {/* About section */}
      <About />

      {/* Services section */}
      <Services />

      {/* Gallery section */}
      <Gallery />

      {/* Testimonials section */}
      <Testimonials />

      {/* Contact section */}
      <Contact />
    </RootLayout>
  )
}

export default App
