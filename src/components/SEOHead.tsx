import { useEffect } from 'react'
import { buildMeta } from '@/lib/seo'
import { localBusinessJsonLd } from '@/lib/structuredData'
import { siteData } from '@/data/site'

export function SEOHead() {
  const meta = buildMeta({
    title: `${siteData.name} | Bespoke Joinery in Dorset`,
    description: siteData.description,
  })

  useEffect(() => {
    // Set document title
    document.title = meta.title

    // Update or create meta tags
    updateMetaTag('description', meta.description)
    updateMetaTag('og:title', meta.ogTitle, 'property')
    updateMetaTag('og:description', meta.ogDescription, 'property')
    updateMetaTag('og:type', meta.ogType, 'property')
    updateMetaTag('og:url', meta.ogUrl, 'property')
    updateMetaTag('og:image', meta.ogImage, 'property')
    updateMetaTag('twitter:card', meta.twitterCard)
    updateMetaTag('twitter:title', meta.twitterTitle)
    updateMetaTag('twitter:description', meta.twitterDescription)
    updateMetaTag('twitter:image', meta.twitterImage)

    // Add canonical link
    updateCanonical(meta.canonical)
  }, [meta])

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(localBusinessJsonLd(meta.canonical)),
      }}
    />
  )
}

function updateMetaTag(
  name: string,
  content: string,
  attr: 'name' | 'property' = 'name'
) {
  let element = document.querySelector(
    `meta[${attr}="${name}"]`
  ) as HTMLMetaElement | null

  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attr, name)
    document.head.appendChild(element)
  }

  element.content = content
}

function updateCanonical(url: string) {
  let link = document.querySelector(
    'link[rel="canonical"]'
  ) as HTMLLinkElement | null

  if (!link) {
    link = document.createElement('link')
    link.rel = 'canonical'
    document.head.appendChild(link)
  }

  link.href = url
}
