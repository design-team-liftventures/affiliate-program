import Link from 'next/link'
import { Logo } from './Logo'

const footerColumns = [
  {
    heading: 'Company',
    links: ['About Us', 'Our Literary Experts', 'Wall of Love', 'Work With Us'],
  },
  {
    heading: 'Library',
    links: [
      'Study Guides',
      'Teaching Guides',
      'Plot Summaries',
      'Study Guide Collections',
      'New This Week',
      'Book Briefs',
    ],
  },
  {
    heading: 'Resources',
    links: ['Literary Devices', 'Resource Guides', 'Discussion Questions Tool'],
  },
  {
    heading: 'Readers',
    links: ['Student', 'Teacher', 'Book Club Member', 'Parent'],
  },
  {
    heading: 'Contact',
    links: ['Help', 'Feedback', 'Suggest a Title'],
  },
]

const legalLinks = ['Privacy Policy', 'Terms of Service', 'Do Not Share My Personal Information']

function AppStoreBadge() {
  return (
    <Link
      href="#"
      aria-label="Download on the App Store"
      className="inline-flex h-12 items-center gap-2 rounded-lg bg-text-primary px-4 text-text-contrast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-interactive-primary focus-visible:ring-offset-2"
    >
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M16.36 12.78c-.02-2.1 1.72-3.11 1.8-3.16-.98-1.44-2.51-1.63-3.05-1.65-1.3-.13-2.54.76-3.2.76-.66 0-1.68-.74-2.76-.72-1.42.02-2.73.83-3.46 2.1-1.48 2.56-.38 6.35 1.06 8.43.7 1.02 1.54 2.16 2.64 2.12 1.06-.04 1.46-.68 2.74-.68s1.64.68 2.76.66c1.14-.02 1.86-1.04 2.56-2.06.8-1.18 1.13-2.32 1.15-2.38-.03-.01-2.2-.84-2.22-3.34zM14.3 6.6c.58-.71.97-1.69.86-2.66-.84.03-1.85.56-2.45 1.26-.54.62-1.01 1.62-.88 2.57.93.07 1.89-.47 2.47-1.17z" />
      </svg>
      <span className="flex flex-col leading-none">
        <span className="text-[9px]">Download on the</span>
        <span className="text-body-sm font-semibold">App Store</span>
      </span>
    </Link>
  )
}

function GooglePlayBadge() {
  return (
    <Link
      href="#"
      aria-label="Get it on Google Play"
      className="inline-flex h-12 items-center gap-2 rounded-lg bg-text-primary px-4 text-text-contrast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-interactive-primary focus-visible:ring-offset-2"
    >
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M3.5 2.6v18.8c0 .5.5.8.9.6l11-9.4c.3-.3.3-.7 0-1L4.4 2c-.4-.2-.9.1-.9.6z" fill="#00D2FF" />
        <path d="M3.5 2.6c0-.5.5-.8.9-.6l11 6.5-2.9 2.9-9-8.8z" fill="#00F076" />
        <path d="M15.4 8.5l3.9 2.3c.5.3.5 1 0 1.3l-3.9 2.3-3-2.9 3-3z" fill="#FFCE00" />
        <path d="M12.4 11.5l2.9 2.9-11 6.5c-.4.2-.9-.1-.9-.6l9-8.8z" fill="#FF3A44" />
      </svg>
      <span className="flex flex-col leading-none">
        <span className="text-[9px] uppercase">Get it on</span>
        <span className="text-body-sm font-semibold">Google Play</span>
      </span>
    </Link>
  )
}

const socials = [
  {
    label: 'Twitter',
    href: '#',
    path: 'M22 5.9c-.7.3-1.5.5-2.3.6.8-.5 1.5-1.3 1.8-2.3-.8.5-1.7.8-2.6 1a4.1 4.1 0 00-7 3.7A11.6 11.6 0 013.4 4.6a4.1 4.1 0 001.3 5.5c-.7 0-1.3-.2-1.8-.5v.1a4.1 4.1 0 003.3 4 4.1 4.1 0 01-1.9.1 4.1 4.1 0 003.8 2.9A8.2 8.2 0 012 18.4 11.6 11.6 0 008.3 20c7.5 0 11.6-6.2 11.6-11.6v-.5c.8-.6 1.5-1.3 2.1-2z',
  },
  {
    label: 'Facebook',
    href: '#',
    path: 'M22 12a10 10 0 10-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0022 12z',
  },
  {
    label: 'Instagram',
    href: '#',
    path: 'M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.3 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.1.4.3 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.1-1 .3-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.3-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.1-.4-.3-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.1 1-.3 2.2-.4C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.1 0-3.5 0-4.7.1-1.1.1-1.7.2-2.1.4-.5.2-.9.4-1.3.8-.4.4-.6.8-.8 1.3-.2.4-.3 1-.4 2.1C2.6 8.5 2.6 8.9 2.6 12s0 3.5.1 4.7c.1 1.1.2 1.7.4 2.1.2.5.4.9.8 1.3.4.4.8.6 1.3.8.4.2 1 .3 2.1.4 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c1.1-.1 1.7-.2 2.1-.4.5-.2.9-.4 1.3-.8.4-.4.6-.8.8-1.3.2-.4.3-1 .4-2.1.1-1.2.1-1.6.1-4.7s0-3.5-.1-4.7c-.1-1.1-.2-1.7-.4-2.1-.2-.5-.4-.9-.8-1.3-.4-.4-.8-.6-1.3-.8-.4-.2-1-.3-2.1-.4-1.2-.1-1.6-.1-4.7-.1zm0 3.1a4.9 4.9 0 110 9.8 4.9 4.9 0 010-9.8zm0 8a3.1 3.1 0 100-6.2 3.1 3.1 0 000 6.2zm6.2-8.2a1.1 1.1 0 11-2.3 0 1.1 1.1 0 012.3 0z',
  },
]

export function SiteFooter() {
  return (
    <footer className="bg-bg-default" aria-label="Footer">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <Logo />
          <div className="flex flex-wrap items-center gap-3">
            <AppStoreBadge />
            <GooglePlayBadge />
          </div>
        </div>

        <div className="my-10 h-px w-full bg-border-light" />

        <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
          {footerColumns.map((col) => (
            <div key={col.heading}>
              <h3 className="text-caption-sm font-semibold uppercase tracking-widest text-text-primary">
                {col.heading}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="rounded-sm text-body-sm text-text-secondary underline-offset-4 hover:text-interactive-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-interactive-primary"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="my-10 h-px w-full bg-border-light" />

        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-caption text-text-secondary">
            <span>
              Copyright © 2026 SuperSummary{' '}
              <span className="text-border-main">/</span> All Rights Reserved
            </span>
            <span className="hidden text-border-main lg:inline">|</span>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
              {legalLinks.map((link, i) => (
                <span key={link} className="flex items-center gap-3">
                  {i > 0 && <span className="text-border-main">|</span>}
                  <Link
                    href="#"
                    className="rounded-sm underline-offset-4 hover:text-interactive-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-interactive-primary"
                  >
                    {link}
                  </Link>
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4">
            {socials.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="rounded-sm text-brand-main transition-colors hover:text-interactive-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-interactive-primary focus-visible:ring-offset-2"
              >
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d={social.path} />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
