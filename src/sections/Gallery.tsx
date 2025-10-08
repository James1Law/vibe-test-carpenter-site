import { Card, CardContent } from '@/components/ui/card'
import { Container } from '@/components/common/Container'
import { Section } from '@/components/common/Section'
import { SectionHeading } from '@/components/common/SectionHeading'
import { galleryImages } from '@/data/gallery'

export function Gallery() {
  return (
    <section id="gallery" aria-labelledby="gallery-heading" tabIndex={-1}>
      <Section className="bg-muted/50">
        <Container>
          <SectionHeading
            title="Gallery"
            subtitle="Recent projects and craftsmanship"
            centered
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((image) => (
              <Card
                key={image.id}
                className="overflow-hidden transition-shadow hover:shadow-lg"
              >
                <CardContent className="p-0">
                  <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                    <img
                      src={image.src}
                      alt={image.alt}
                      width={image.width}
                      height={image.height}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  {image.caption && (
                    <div className="p-4">
                      <p className="text-sm font-medium text-foreground">
                        {image.caption}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              Placeholder images — to be replaced with project photography
            </p>
          </div>
        </Container>
      </Section>
    </section>
  )
}
