import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'FOSSCET',
  description:
    'We are a community of hackers, builders, and privacy advocates dedicated to Free and Open Source Software.',
  href: 'https://fosscet.codeberg.page/',
  author: 'fosscet',
  locale: 'en-US',
  featuredPostCount: 2,
  featuredEventsCount: 2,
  postsPerPage: 3,
  eventsPerPage: 3,
}

export const FORM_POST_URL = 'https://fosscet-forms.val.run/'

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/blog',
    label: 'blog',
  },
  {
    href: '/members',
    label: 'members',
  },
  {
    href: '/about',
    label: 'about',
  },
  {
    href: '/events',
    label: 'events',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://codeberg.org/fosscet',
    label: 'Codeberg',
  },
  {
    href: '/rss.xml',
    label: 'RSS',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  Codeberg: 'lucide:mountain-snow',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Instagram: 'lucide:instagram',
  Twitter: 'lucide:twitter',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}
