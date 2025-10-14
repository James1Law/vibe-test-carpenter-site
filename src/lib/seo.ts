export interface SEOMeta {
  title: string
  description: string
  canonical: string
  ogTitle: string
  ogDescription: string
  ogType: string
  ogUrl: string
  ogImage: string
  twitterCard: string
  twitterTitle: string
  twitterDescription: string
  twitterImage: string
}

export function buildMeta(options: {
  title: string
  description: string
  canonical?: string
  image?: string
}): SEOMeta {
  const canonical =
    options.canonical || 'https://www.wrightanglecarpentry.co.uk'
  const image = options.image || `${canonical}/og-image.png`

  return {
    title: options.title,
    description: options.description,
    canonical,
    ogTitle: options.title,
    ogDescription: options.description,
    ogType: 'website',
    ogUrl: canonical,
    ogImage: image,
    twitterCard: 'summary_large_image',
    twitterTitle: options.title,
    twitterDescription: options.description,
    twitterImage: image,
  }
}
