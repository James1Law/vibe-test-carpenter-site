import { RootLayout } from '@/components/layout/RootLayout'
import { Container } from '@/components/common/Container'
import { Section } from '@/components/common/Section'
import { SectionHeading } from '@/components/common/SectionHeading'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'

function App() {
  return (
    <RootLayout>
      {/* Placeholder sections - real content comes in later tasks */}
      <Section id="about" className="bg-muted/50">
        <Container>
          <SectionHeading
            title="About"
            subtitle="This section will contain the about content"
            centered
          />
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-muted-foreground">
              Layout shell complete. Navigation anchors are wired up. Real
              content will be added in upcoming tasks.
            </p>
          </div>
        </Container>
      </Section>

      <Section id="services">
        <Container>
          <SectionHeading
            title="Services"
            subtitle="Grid of services will appear here"
            centered
          />
          <div className="grid gap-6 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <Card key={i}>
                <CardHeader>
                  <CardTitle>Service {i}</CardTitle>
                  <CardDescription>Placeholder card</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Service content will be added in T07.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="gallery" className="bg-muted/50">
        <Container>
          <SectionHeading
            title="Gallery"
            subtitle="Image gallery will appear here"
            centered
          />
        </Container>
      </Section>

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
