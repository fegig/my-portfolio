import { matchRoutes } from 'react-router'
import routes from './app-routes'

export const SITE_URL = 'https://codewithfegig.com'
const SITE_NAME = 'FegigTech'

const defaultSeo = {
  title: 'FegigTech | Fegig Technologies Limited',
  description:
    'Fegig Technologies Limited builds scalable web, mobile, AI, cloud, and enterprise software solutions from Abraka, Nigeria.',
  keywords: [
    'FegigTech',
    'Fegig Technologies Limited',
    'codewithfegig',
    'web development',
    'mobile development',
    'AI solutions',
    'cloud infrastructure',
    'enterprise software',
    'Abraka Nigeria',
  ],
  path: '/',
  image: '/assets/fegigtech-logo-512.jpg',
  imageAlt: 'FegigTech logo',
  imageWidth: '512',
  imageHeight: '512',
  locale: 'en_US',
  type: 'website',
  robots: 'index, follow',
}

function absoluteUrl(value) {
  return new URL(value, SITE_URL).toString()
}

function cleanPath(inputUrl) {
  const url = new URL(inputUrl || '/', SITE_URL)
  return url.pathname || '/'
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function escapeJsonForHtml(value) {
  return JSON.stringify(value).replace(/</g, '\\u003c')
}

export function getSeoForUrl(inputUrl = '/', overrides = {}) {
  const pathname = cleanPath(inputUrl)
  const matches = matchRoutes(routes, pathname) || []
  const routeSeo = matches
    .map((match) => match.route.handle?.seo)
    .filter(Boolean)
    .at(-1)

  const seo = {
    ...defaultSeo,
    path: routeSeo?.path || pathname,
    ...routeSeo,
    ...overrides,
  }

  return {
    ...seo,
    canonical: absoluteUrl(seo.path || pathname),
    imageUrl: absoluteUrl(seo.image),
    keywords: Array.isArray(seo.keywords) ? seo.keywords.join(', ') : seo.keywords,
  }
}

function getJsonLd(seo) {
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Fegig Technologies Limited',
      alternateName: SITE_NAME,
      url: SITE_URL,
      logo: absoluteUrl('/assets/fegigtech-logo-512.jpg'),
      sameAs: [
        'https://github.com/fegig',
        'https://www.linkedin.com/in/oghenefegor-idoro-a85395216/',
      ],
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Abraka',
        addressCountry: 'NG',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: SITE_NAME,
      url: SITE_URL,
      publisher: {
        '@type': 'Organization',
        name: 'Fegig Technologies Limited',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: seo.title,
      description: seo.description,
      url: seo.canonical,
      isPartOf: {
        '@type': 'WebSite',
        name: SITE_NAME,
        url: SITE_URL,
      },
    },
  ]
}

function meta(attrs) {
  return { tag: 'meta', attrs: { ...attrs, 'data-managed-seo': 'true' } }
}

function link(attrs) {
  return { tag: 'link', attrs: { ...attrs, 'data-managed-seo': 'true' } }
}

function script(attrs, content) {
  return { tag: 'script', attrs: { ...attrs, 'data-managed-seo': 'true' }, content }
}

function getManagedTags(seo) {
  return [
    meta({ name: 'description', content: seo.description }),
    meta({ name: 'keywords', content: seo.keywords }),
    meta({ name: 'author', content: 'Fegig Technologies Limited' }),
    meta({ name: 'robots', content: seo.robots }),
    meta({ name: 'googlebot', content: seo.robots }),
    meta({ name: 'google', content: 'notranslate' }),
    link({ rel: 'canonical', href: seo.canonical }),
    link({
      rel: 'alternate',
      type: 'text/plain',
      href: '/app-ads.txt',
      title: 'app-ads.txt (seller declaration for ads)',
    }),
    meta({ property: 'og:title', content: seo.title }),
    meta({ property: 'og:description', content: seo.description }),
    meta({ property: 'og:image', content: seo.imageUrl }),
    meta({ property: 'og:image:secure_url', content: seo.imageUrl }),
    meta({ property: 'og:image:alt', content: seo.imageAlt }),
    meta({ property: 'og:url', content: seo.canonical }),
    meta({ property: 'og:type', content: seo.type }),
    meta({ property: 'og:locale', content: seo.locale }),
    meta({ property: 'og:site_name', content: SITE_NAME }),
    meta({ property: 'og:image:width', content: seo.imageWidth }),
    meta({ property: 'og:image:height', content: seo.imageHeight }),
    meta({ name: 'twitter:card', content: 'summary_large_image' }),
    meta({ name: 'twitter:title', content: seo.title }),
    meta({ name: 'twitter:description', content: seo.description }),
    meta({ name: 'twitter:image', content: seo.imageUrl }),
    meta({ name: 'twitter:image:alt', content: seo.imageAlt }),
    script({ type: 'application/ld+json' }, escapeJsonForHtml(getJsonLd(seo))),
  ]
}

function renderAttrs(attrs) {
  return Object.entries(attrs)
    .filter(([, value]) => value !== undefined && value !== null)
    .map(([key, value]) => `${key}="${escapeHtml(value)}"`)
    .join(' ')
}

function renderTag(tag) {
  const attrs = renderAttrs(tag.attrs)

  if (tag.tag === 'script') {
    return `<script ${attrs}>${tag.content}</script>`
  }

  return `<${tag.tag} ${attrs}>`
}

export function renderHead(inputUrl = '/', overrides = {}) {
  const seo = getSeoForUrl(inputUrl, overrides)

  return [`<title>${escapeHtml(seo.title)}</title>`, ...getManagedTags(seo).map(renderTag)].join('\n    ')
}

export function applySeoToDocument(inputUrl = window.location.href) {
  if (typeof document === 'undefined') {
    return
  }

  const seo = getSeoForUrl(inputUrl)
  document.title = seo.title

  document
    .querySelectorAll('meta[data-managed-seo], link[data-managed-seo], script[data-managed-seo]')
    .forEach((element) => element.remove())

  getManagedTags(seo).forEach((tag) => {
    const element = document.createElement(tag.tag)

    Object.entries(tag.attrs).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        element.setAttribute(key, value)
      }
    })

    if (tag.content) {
      element.textContent = tag.content
    }

    document.head.appendChild(element)
  })
}
