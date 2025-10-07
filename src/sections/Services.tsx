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
import { services } from '@/data/services'

export function Services() {
  return (
    <section id="services" aria-labelledby="services-heading">
      <Section>
        <Container>
          <SectionHeading
            title="Services"
            subtitle="Bespoke joinery crafted to last"
            centered
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <Card
                  key={service.id}
                  className="transition-shadow hover:shadow-lg"
                >
                  <CardHeader>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" aria-hidden={true} />
                    </div>
                    <CardTitle>
                      <h3 className="text-xl">{service.title}</h3>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {service.summary}
                    </CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </Container>
      </Section>
    </section>
  )
}
