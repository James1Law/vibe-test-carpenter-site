import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Container } from '@/components/common/Container'
import { Section } from '@/components/common/Section'
import { SectionHeading } from '@/components/common/SectionHeading'
import { siteData } from '@/data/site'
import {
  contactSchema,
  type ContactFormData,
} from '@/lib/validation/contactSchema'
import { Phone, Mail, MessageCircle, Send } from 'lucide-react'

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const phoneHref = `tel:${siteData.contact.phoneE164}`
  const emailHref = `mailto:${siteData.contact.email}?subject=${encodeURIComponent('Quote request')}`
  const whatsappHref = `https://wa.me/${siteData.contact.whatsapp.replace(/\+/g, '')}?text=${encodeURIComponent("Hi James, I'd like a quote for joinery work.")}`

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send message')
      }

      toast.success("Thanks — we'll get back to you shortly.", {
        description: 'Your message has been sent successfully.',
        duration: 5000,
      })

      form.reset()
    } catch (error) {
      console.error('Form submission error:', error)
      toast.error('There was a problem sending your message.', {
        description: 'Please try again later or contact us directly.',
        duration: 5000,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" aria-labelledby="contact-heading" tabIndex={-1}>
      <Section className="bg-muted/50">
        <Container>
          <SectionHeading
            title="Contact"
            subtitle="Request a free quote"
            centered
          />

          <div className="mx-auto grid max-w-4xl gap-8 lg:grid-cols-2">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>Send us a message</CardTitle>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Your name"
                              {...field}
                              disabled={isSubmitting}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="your.email@example.com"
                              {...field}
                              disabled={isSubmitting}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            Phone{' '}
                            <span className="text-muted-foreground">
                              (optional)
                            </span>
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="tel"
                              placeholder="01234 567890"
                              {...field}
                              disabled={isSubmitting}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell us about your project..."
                              className="min-h-[120px]"
                              {...field}
                              disabled={isSubmitting}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        'Sending...'
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>

            {/* Direct Contact Options */}
            <div className="flex flex-col gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Get in touch directly</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full justify-start"
                    asChild
                  >
                    <a
                      href={phoneHref}
                      aria-label={`Call us at ${siteData.contact.phoneDisplay}`}
                    >
                      <Phone className="mr-3 h-5 w-5" />
                      <div className="text-left">
                        <div className="text-sm font-medium">Call us</div>
                        <div className="text-sm text-muted-foreground">
                          {siteData.contact.phoneDisplay}
                        </div>
                      </div>
                    </a>
                  </Button>

                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full justify-start"
                    asChild
                  >
                    <a
                      href={emailHref}
                      aria-label={`Email us at ${siteData.contact.email}`}
                    >
                      <Mail className="mr-3 h-5 w-5" />
                      <div className="text-left">
                        <div className="text-sm font-medium">Email us</div>
                        <div className="text-sm text-muted-foreground">
                          {siteData.contact.email}
                        </div>
                      </div>
                    </a>
                  </Button>

                  <Button
                    variant="default"
                    size="lg"
                    className="w-full justify-start"
                    asChild
                  >
                    <a
                      href={whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Message us on WhatsApp for a quote"
                    >
                      <MessageCircle className="mr-3 h-5 w-5" />
                      <div className="text-left">
                        <div className="text-sm font-medium">WhatsApp</div>
                        <div className="text-sm opacity-90">Quick response</div>
                      </div>
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Service areas</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground">
                    {siteData.areaServed.join(' • ')}
                  </p>
                  <p className="mt-4 text-sm text-foreground">
                    {siteData.address.city}, {siteData.address.county}{' '}
                    {siteData.address.postcode}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </Section>
    </section>
  )
}
