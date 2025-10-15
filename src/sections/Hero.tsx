import { Button } from '@/components/ui/button'
import { Container } from '@/components/common/Container'
import { siteData } from '@/data/site'
import { Phone, Mail, MessageCircle, Shield, Award, MapPin } from 'lucide-react'

export function Hero() {
  const phoneHref = `tel:${siteData.contact.phoneE164}`
  const emailHref = `mailto:${siteData.contact.email}?subject=${encodeURIComponent('Quote request')}`
  const whatsappHref = `https://wa.me/${siteData.contact.whatsapp.replace(/\+/g, '')}?text=${encodeURIComponent("Hi James, I'd like a quote for joinery work.")}`

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-gradient-to-b from-primary to-primary/90 py-20 text-primary-foreground md:py-32"
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          {/* Main Heading */}
          <h1
            id="hero-heading"
            className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl"
          >
            {siteData.name}
          </h1>

          {/* Tagline & Service Area */}
          <p className="mb-4 text-xl text-primary-foreground/90 md:text-2xl">
            {siteData.tagline}
          </p>
          <div className="mb-8 flex justify-center">
            <p className="flex items-center gap-2 text-lg text-primary-foreground/80">
              <MapPin className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
              <span>Proudly serving {siteData.areaServed.join(', ')}</span>
            </p>
          </div>

          {/* Trust Bullets */}
          <div className="mb-10 flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-primary-foreground/90">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5" aria-hidden="true" />
              <span>Fully Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5" aria-hidden="true" />
              <span>Free Quotes</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5" aria-hidden="true" />
              <span>Local & Reliable</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              variant="secondary"
              className="w-full sm:w-auto"
              asChild
            >
              <a
                href={emailHref}
                aria-label={`Get a quote via email at ${siteData.contact.email}`}
              >
                <Mail className="mr-2 h-5 w-5" />
                Get a Quote
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20 sm:w-auto"
              asChild
            >
              <a
                href={phoneHref}
                aria-label={`Call us at ${siteData.contact.phoneDisplay}`}
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20 sm:w-auto"
              asChild
            >
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Message us on WhatsApp for a quote"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </Container>

      {/* Decorative background element (respects prefers-reduced-motion) */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.1),transparent_50%)]"
        aria-hidden="true"
      />
    </section>
  )
}
