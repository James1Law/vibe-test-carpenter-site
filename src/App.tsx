import { RootLayout } from '@/components/layout/RootLayout'
import { Container } from '@/components/common/Container'
import { Section } from '@/components/common/Section'
import { SectionHeading } from '@/components/common/SectionHeading'
import { Button } from '@/components/ui/button'
import { Hero } from '@/sections/Hero'
import { About } from '@/sections/About'
import { Services } from '@/sections/Services'
import { Gallery } from '@/sections/Gallery'

function App() {
  return (
    <RootLayout>
      {/* Hero section */}
      <Hero />

      {/* About section */}
      <About />

      {/* Services section */}
      <Services />

      {/* Gallery section */}
      <Gallery />

      {/* Placeholder sections - real content comes in later tasks */}

      <Section id="testimonials">
        <Container>
          <SectionHeading
            title="Testimonials"
            subtitle="Customer testimonials will appear here"
            centered
          />
        </Container>
      </Section>

      <Section id="contact" className="bg-muted/50">
        <Container>
          <SectionHeading
            title="Contact"
            subtitle="Contact form and details will appear here"
            centered
          />
          <div className="mx-auto max-w-md space-y-4">
            <p className="text-center text-sm text-muted-foreground">
              Form with validation will be added in T10.
            </p>
            <div className="flex justify-center gap-3">
              <Button variant="outline">Call</Button>
              <Button variant="outline">Email</Button>
              <Button>WhatsApp</Button>
            </div>
          </div>
        </Container>
      </Section>
    </RootLayout>
  )
}

export default App
