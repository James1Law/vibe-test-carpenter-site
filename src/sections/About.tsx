import { Container } from '@/components/common/Container'
import { Section } from '@/components/common/Section'
import { SectionHeading } from '@/components/common/SectionHeading'
import { siteData } from '@/data/site'
import { Hammer, Award, MapPin, ShieldCheck } from 'lucide-react'

const trustBadges = [
  {
    icon: Hammer,
    label: 'Master Joiner',
  },
  {
    icon: Award,
    label: "20+ Years' Experience",
  },
  {
    icon: MapPin,
    label: 'Local & Reliable',
  },
  {
    icon: ShieldCheck,
    label: 'Fully Insured',
  },
]

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading">
      <Section className="bg-muted/50">
        <Container>
          <SectionHeading
            title="About"
            subtitle="Craftsmanship you can trust"
            centered
          />

          {/* Business copy */}
          <div className="mx-auto max-w-3xl space-y-6 text-center">
            <p className="text-lg leading-relaxed text-muted-foreground">
              <strong className="font-semibold text-foreground">
                {siteData.name}
              </strong>{' '}
              is a master joinery practice with{' '}
              <strong className="font-semibold text-foreground">
                20+ years' experience
              </strong>
              , delivering precise, made-to-measure work for homes across{' '}
              <strong className="font-semibold text-foreground">
                {siteData.areaServed.join(', ')}
              </strong>
              .
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground">
              From{' '}
              <strong className="font-semibold text-foreground">
                bespoke staircases
              </strong>{' '}
              and{' '}
              <strong className="font-semibold text-foreground">
                fitted wardrobes
              </strong>{' '}
              to{' '}
              <strong className="font-semibold text-foreground">
                custom kitchens
              </strong>
              ,{' '}
              <strong className="font-semibold text-foreground">
                alcove units
              </strong>{' '}
              and{' '}
              <strong className="font-semibold text-foreground">
                full property renovations
              </strong>
              , every project is built to last with exceptional attention to
              detail.
            </p>

            <p className="text-base leading-relaxed text-muted-foreground">
              Fully insured, punctual and tidy on site — with clear
              communication from first quote to final handover.
            </p>
          </div>

          {/* Trust badges */}
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {trustBadges.map((badge) => {
              const Icon = badge.icon
              return (
                <div
                  key={badge.label}
                  className="flex flex-col items-center gap-3 text-center"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-8 w-8" aria-hidden="true" />
                  </div>
                  <p className="font-medium text-foreground">{badge.label}</p>
                </div>
              )
            })}
          </div>
        </Container>
      </Section>
    </section>
  )
}
