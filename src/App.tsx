import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Container } from '@/components/common/Container'
import { Section } from '@/components/common/Section'
import { SectionHeading } from '@/components/common/SectionHeading'
import { siteData } from '@/data/site'
import { Phone, Mail } from 'lucide-react'

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Section className="bg-primary text-primary-foreground">
        <Container>
          <div className="space-y-6 text-center">
            <h1 className="text-5xl font-bold md:text-6xl">{siteData.name}</h1>
            <p className="text-xl text-primary-foreground/90 md:text-2xl">
              {siteData.tagline}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" asChild>
                <a href={`tel:${siteData.contact.phone}`}>
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href={`mailto:${siteData.contact.email}`}>
                  <Mail className="mr-2 h-5 w-5" />
                  Email Us
                </a>
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading
            title="Design Tokens Demo"
            subtitle="Typography scale, colours, and spacing in action"
            centered
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Typography</CardTitle>
                <CardDescription>Responsive heading scales</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <h3>Heading 3</h3>
                <h4>Heading 4</h4>
                <h5>Heading 5</h5>
                <p className="text-lead">Lead paragraph text</p>
                <p>Regular body text with comfortable line height.</p>
                <p className="text-muted">Muted text for secondary info</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Colours</CardTitle>
                <CardDescription>Semantic colour tokens</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="rounded-md bg-primary p-3 text-primary-foreground">
                  Primary
                </div>
                <div className="rounded-md bg-secondary p-3 text-secondary-foreground">
                  Secondary
                </div>
                <div className="rounded-md bg-muted p-3 text-muted-foreground">
                  Muted
                </div>
                <div className="rounded-md bg-accent p-3 text-accent-foreground">
                  Accent
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Components</CardTitle>
                <CardDescription>Shadcn UI primitives</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full">Default Button</Button>
                <Button variant="secondary" className="w-full">
                  Secondary
                </Button>
                <Button variant="outline" className="w-full">
                  Outline
                </Button>
                <Button variant="ghost" className="w-full">
                  Ghost
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 space-y-4 rounded-lg border bg-card p-6 text-card-foreground">
            <h4>Site Constants</h4>
            <div className="grid gap-2 text-sm">
              <p>
                <strong>Phone:</strong> {siteData.contact.phone}
              </p>
              <p>
                <strong>Email:</strong> {siteData.contact.email}
              </p>
              <p>
                <strong>Areas:</strong> {siteData.areaServed.join(', ')}
              </p>
              <p>
                <strong>Address:</strong> {siteData.address.street},{' '}
                {siteData.address.city}, {siteData.address.postcode}
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  )
}

export default App
