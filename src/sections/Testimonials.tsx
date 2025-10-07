import { Card, CardContent } from '@/components/ui/card'
import { Container } from '@/components/common/Container'
import { Section } from '@/components/common/Section'
import { SectionHeading } from '@/components/common/SectionHeading'
import { testimonials } from '@/data/testimonials'
import { Quote } from 'lucide-react'

export function Testimonials() {
  return (
    <section id="testimonials" aria-labelledby="testimonials-heading">
      <Section>
        <Container>
          <SectionHeading
            title="Testimonials"
            subtitle="What clients say"
            centered
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="relative">
                <CardContent className="pt-6">
                  <Quote
                    className="mb-4 h-8 w-8 text-primary/20"
                    aria-hidden={true}
                  />
                  <blockquote className="mb-4 text-base italic leading-relaxed text-foreground">
                    "{testimonial.quote}"
                  </blockquote>
                  <cite className="mt-3 block text-sm font-medium not-italic text-muted-foreground">
                    — {testimonial.author}, {testimonial.location}
                  </cite>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </section>
  )
}
