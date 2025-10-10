import { Container } from '@/components/common/Container'
import { Logo } from '@/components/common/Logo'
import { siteData } from '@/data/site'
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'

const socialIcons = {
  facebook: Facebook,
  instagram: Instagram,
  linkedin: Linkedin,
  twitter: Twitter,
}

const socialLabels = {
  facebook: 'Facebook',
  instagram: 'Instagram',
  linkedin: 'LinkedIn',
  twitter: 'Twitter',
}

export function Footer() {
  const phoneHref = `tel:${siteData.contact.phoneE164}`

  const activeSocials = Object.entries(siteData.socials)
    .filter(([_, url]) => url !== null && url !== '')
    .map(([platform, url]) => ({
      platform: platform as keyof typeof socialIcons,
      url: url as string,
    }))

  return (
    <footer className="border-t bg-muted/50" aria-labelledby="site-footer">
      <Container className="py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* NAP - Name, Address, Phone */}
          <div>
            <div className="mb-4">
              <Logo size="sm" showText={false} className="opacity-70 mb-2" />
              <h2 id="site-footer" className="text-lg font-semibold">
                {siteData.name}
              </h2>
            </div>
            <address className="text-sm not-italic text-muted-foreground">
              {siteData.address.street && <p>{siteData.address.street}</p>}
              <p>{siteData.address.city}</p>
              <p>
                {siteData.address.county} {siteData.address.postcode}
              </p>
              <p className="mt-3">
                <a
                  href={phoneHref}
                  className="hover:text-foreground"
                  aria-label={`Call us at ${siteData.contact.phoneDisplay}`}
                >
                  {siteData.contact.phoneDisplay}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${siteData.contact.email}`}
                  className="hover:text-foreground"
                  aria-label={`Email us at ${siteData.contact.email}`}
                >
                  {siteData.contact.email}
                </a>
              </p>
            </address>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Opening Hours</h3>
            <dl className="space-y-1 text-sm text-muted-foreground">
              <div className="flex justify-between">
                <dt>Monday:</dt>
                <dd>{siteData.hours.monday}</dd>
              </div>
              <div className="flex justify-between">
                <dt>Tuesday:</dt>
                <dd>{siteData.hours.tuesday}</dd>
              </div>
              <div className="flex justify-between">
                <dt>Wednesday:</dt>
                <dd>{siteData.hours.wednesday}</dd>
              </div>
              <div className="flex justify-between">
                <dt>Thursday:</dt>
                <dd>{siteData.hours.thursday}</dd>
              </div>
              <div className="flex justify-between">
                <dt>Friday:</dt>
                <dd>{siteData.hours.friday}</dd>
              </div>
              <div className="flex justify-between">
                <dt>Saturday:</dt>
                <dd>{siteData.hours.saturday}</dd>
              </div>
              <div className="flex justify-between">
                <dt>Sunday:</dt>
                <dd className="font-medium">{siteData.hours.sunday}</dd>
              </div>
            </dl>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Service Areas</h3>
            <ul className="space-y-1 text-sm text-muted-foreground">
              {siteData.areaServed.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Follow Us</h3>
            {activeSocials.length > 0 ? (
              <div className="flex gap-4">
                {activeSocials.map(({ platform, url }) => {
                  const Icon = socialIcons[platform]
                  const label = socialLabels[platform]
                  return (
                    <a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground transition-colors hover:text-foreground"
                      aria-label={`Follow us on ${label}`}
                    >
                      <Icon className="h-5 w-5" aria-hidden={true} />
                    </a>
                  )
                })}
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">
                Connect with us for updates
              </p>
            )}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} {siteData.name}. All rights
            reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
