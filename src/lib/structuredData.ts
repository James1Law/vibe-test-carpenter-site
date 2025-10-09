import { siteData } from '@/data/site'

interface OpeningHoursSpec {
  '@type': 'OpeningHoursSpecification'
  dayOfWeek: string | string[]
  opens?: string
  closes?: string
}

interface PostalAddress {
  '@type': 'PostalAddress'
  streetAddress?: string
  addressLocality: string
  addressRegion: string
  postalCode: string
  addressCountry: string
}

interface LocalBusiness {
  '@context': string
  '@type': string
  name: string
  description: string
  url: string
  image: string
  telephone: string
  email: string
  address: PostalAddress
  areaServed: string[]
  sameAs: string[]
  openingHoursSpecification: OpeningHoursSpec[]
}

export function localBusinessJsonLd(
  canonicalUrl: string = 'https://www.wrightanglecarpentry.co.uk'
): LocalBusiness {
  // Build opening hours specification
  const openingHours: OpeningHoursSpec[] = []

  // Group Mon-Fri if they're the same
  if (
    siteData.hours.monday === siteData.hours.friday &&
    siteData.hours.monday !== 'Closed'
  ) {
    const [opens, closes] = parseHours(siteData.hours.monday)
    openingHours.push({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens,
      closes,
    })
  }

  // Saturday
  if (siteData.hours.saturday !== 'Closed') {
    const [opens, closes] = parseHours(siteData.hours.saturday)
    openingHours.push({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens,
      closes,
    })
  }

  // Sunday (typically closed)
  if (siteData.hours.sunday !== 'Closed') {
    const [opens, closes] = parseHours(siteData.hours.sunday)
    openingHours.push({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Sunday',
      opens,
      closes,
    })
  }

  // Filter active social links
  const sameAs = Object.values(siteData.socials).filter(
    (url): url is string => url !== null && url !== ''
  )

  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: siteData.name,
    description: siteData.description,
    url: canonicalUrl,
    image: `${canonicalUrl}/og-image.jpg`,
    telephone: siteData.contact.phoneE164,
    email: siteData.contact.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteData.address.street,
      addressLocality: siteData.address.city,
      addressRegion: siteData.address.county,
      postalCode: siteData.address.postcode,
      addressCountry: siteData.address.country,
    },
    areaServed: siteData.areaServed,
    sameAs,
    openingHoursSpecification: openingHours,
  }
}

// Parse "8:00 AM – 6:00 PM" to ["08:00", "18:00"]
function parseHours(hoursString: string): [string, string] {
  const match = hoursString.match(
    /(\d+):(\d+)\s*(AM|PM)\s*–\s*(\d+):(\d+)\s*(AM|PM)/
  )
  if (!match) return ['00:00', '23:59']

  const [, openHour, openMin, openPeriod, closeHour, closeMin, closePeriod] =
    match

  const opens = formatTime(
    parseInt(openHour),
    parseInt(openMin),
    openPeriod as 'AM' | 'PM'
  )
  const closes = formatTime(
    parseInt(closeHour),
    parseInt(closeMin),
    closePeriod as 'AM' | 'PM'
  )

  return [opens, closes]
}

function formatTime(hour: number, minute: number, period: 'AM' | 'PM'): string {
  let h = hour
  if (period === 'PM' && h !== 12) h += 12
  if (period === 'AM' && h === 12) h = 0
  return `${h.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`
}
