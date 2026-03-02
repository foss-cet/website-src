import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'FOSS CET',
  description:
    'Don\'t just join a club; build one. We need architects, not just members',
  href: 'https://astro-erudite.vercel.app',
  author: 'fosscet',
  locale: 'en-US',
  featuredPostCount: 2,
  postsPerPage: 3,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/blog',
    label: 'blog',
  },
  {
    href: '/authors',
    label: 'authors',
  },
  {
    href: '/about',
    label: 'about',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://codeberg.org/foss-cet',
    label: 'CodeBerg',
  },
  {
    href: '/rss.xml',
    label: 'RSS',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  CodeBerg: 'lucide:mountain-snow',
  LinkedIn: 'lucide:linkedin',
  Twitter: 'lucide:twitter',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}
