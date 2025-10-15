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
    <section id="about" aria-labelledby="about-heading" tabIndex={-1}>
      <Section className="bg-muted/50">
        <Container>
          <SectionHeading
            title="About"
            subtitle="Craftsmanship you can trust"
            centered
          />

          {/* Business copy */}
          <div className="mx-auto max-w-3xl space-y-6 text-center">
            <p className="text-lg leading-relaxed text-foreground">
              <strong className="font-semibold text-foreground">
                {siteData.name}
              </strong>{' '}
              is a master joinery practice with over{' '}
              <strong className="font-semibold text-foreground">
                20 years' experience
              </strong>{' '}
              creating bespoke fitted furniture and structural carpentry for homes across{' '}
              <strong className="font-semibold text-foreground">
                {siteData.areaServed.slice(0, -1).join(', ')}
              </strong>
              .
            </p>

            <p className="text-lg leading-relaxed text-foreground">
              Founded by James Law in 2004, the practice specialises in traditional joinery techniques combined with contemporary design. From{' '}
              <strong className="font-semibold text-foreground">
                bespoke staircases
              </strong>{' '}
              and{' '}
              <strong className="font-semibold text-foreground">
                fitted wardrobes
              </strong>{' '}
              to{' '}
              <strong className="font-semibold text-foreground">
                handcrafted kitchens
              </strong>
              ,{' '}
              <strong className="font-semibold text-foreground">
                alcove units
              </strong>{' '}
              and{' '}
              <strong className="font-semibold text-foreground">
                complete property renovations
              </strong>
              , every piece is built to last with meticulous attention to detail.
            </p>

            <p className="text-base leading-relaxed text-foreground">
              As a sole trader, you work directly with James throughout your project — ensuring consistent quality, clear communication, and a personal service from initial quote to final installation.
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
