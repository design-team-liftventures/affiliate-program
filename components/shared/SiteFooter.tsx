import Link from 'next/link'
import { Logo } from './Logo'

const footerColumns = [
  {
    heading: 'Company',
    links: ['About us', 'Our Library Experts', 'Wall of Love', 'Work With Us'],
  },
  {
    heading: 'Library',
    links: ['Study Guides', 'Teaching Guides', 'Book Guide Collections', 'Non-Plot Posts', 'Book Reviews'],
  },
  {
    heading: 'Resources',
    links: ['Literary Devices', 'Resource Articles', 'Education Q&A'],
  },
  {
    heading: 'For Partners',
    links: ['Affiliate Program', 'Partner FAQ', 'Brand Guidelines'],
  },
]

export function SiteFooter() {
  return (
    <footer className="bg-bg-paper" aria-label="Footer">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-[1.5fr_repeat(4,1fr)]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-body-sm text-text-secondary">
              Study guides and book summaries readers actually love.
            </p>
          </div>
          {footerColumns.map((col) => (
            <div key={col.heading}>
              <h3 className="text-caption-sm font-semibold uppercase tracking-widest text-text-secondary">
                {col.heading}
              </h3>
              <ul className="mt-4 space-y-2">
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
        <div className="mt-10 flex flex-col gap-2 border-t border-border-light pt-6 text-caption text-text-secondary sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 SuperSummary. All rights reserved.</p>
          <div className="flex gap-4">
            <Link
              href="#"
              className="rounded-sm underline-offset-4 hover:text-interactive-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-interactive-primary"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="rounded-sm underline-offset-4 hover:text-interactive-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-interactive-primary"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
