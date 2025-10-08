import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Container } from '@/components/common/Container'
import { siteData } from '@/data/site'
import { Menu, Phone, Mail, MessageCircle } from 'lucide-react'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact', label: 'Contact' },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const phoneHref = `tel:${siteData.contact.phoneE164}`
  const emailHref = `mailto:${siteData.contact.email}?subject=${encodeURIComponent('Quote Request')}`
  const whatsappHref = `https://wa.me/${siteData.contact.whatsapp.replace(/\+/g, '')}?text=${encodeURIComponent("Hi James, I'd like a quote for joinery work.")}`

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container>
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <a
              href="#"
              className="text-lg font-bold tracking-tight hover:text-primary"
            >
              {siteData.name}
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:gap-6" aria-label="Main">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTAs - Desktop */}
          <div className="hidden items-center gap-2 lg:flex">
            <Button variant="ghost" size="sm" asChild>
              <a
                href={phoneHref}
                aria-label={`Call us at ${siteData.contact.phoneDisplay}`}
              >
                <Phone className="mr-2 h-4 w-4" />
                Call
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a
                href={emailHref}
                aria-label={`Email us at ${siteData.contact.email}`}
              >
                <Mail className="mr-2 h-4 w-4" />
                Email
              </a>
            </Button>
            <Button variant="default" size="sm" asChild>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Message us on WhatsApp"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                WhatsApp
              </a>
            </Button>
          </div>

          {/* Mobile CTA + Menu */}
          <div className="flex items-center gap-2 lg:hidden">
            <Button variant="default" size="sm" asChild>
              <a
                href={phoneHref}
                aria-label={`Call us at ${siteData.contact.phoneDisplay}`}
              >
                <Phone className="h-4 w-4" />
              </a>
            </Button>

            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  aria-label="Open navigation menu"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle>{siteData.name}</SheetTitle>
                  <SheetDescription>Navigation & Contact</SheetDescription>
                </SheetHeader>
                <div className="mt-8 flex flex-col gap-6">
                  {/* Mobile Navigation */}
                  <nav className="flex flex-col gap-4" aria-label="Mobile">
                    {navLinks.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-lg font-medium transition-colors hover:text-primary"
                      >
                        {link.label}
                      </a>
                    ))}
                  </nav>

                  {/* Mobile CTAs */}
                  <div className="flex flex-col gap-3 border-t pt-6">
                    <Button variant="outline" size="lg" asChild>
                      <a
                        href={phoneHref}
                        aria-label={`Call us at ${siteData.contact.phoneDisplay}`}
                      >
                        <Phone className="mr-2 h-5 w-5" />
                        Call {siteData.contact.phoneDisplay}
                      </a>
                    </Button>
                    <Button variant="outline" size="lg" asChild>
                      <a
                        href={emailHref}
                        aria-label={`Email us at ${siteData.contact.email}`}
                      >
                        <Mail className="mr-2 h-5 w-5" />
                        Email Us
                      </a>
                    </Button>
                    <Button variant="default" size="lg" asChild>
                      <a
                        href={whatsappHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Message us on WhatsApp"
                      >
                        <MessageCircle className="mr-2 h-5 w-5" />
                        WhatsApp
                      </a>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </Container>
    </header>
  )
}
