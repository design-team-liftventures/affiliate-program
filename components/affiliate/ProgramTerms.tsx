import Link from 'next/link'
import { SectionHeading } from './SectionHeading'
import { Reveal } from '@/components/shared/Reveal'

const terms = [
  {
    title: 'Organic content only, no paid ads on our brand name',
    body: 'Don’t run paid search ads on “SuperSummary” or close variations. Your own organic content and channels are always welcome.',
  },
  {
    title: 'Links live inside your content',
    body: 'Send traffic through your posts, videos, or emails first. Affiliate links aren’t meant to be raw redirects.',
  },
  {
    title: 'FTC disclosure is required—and we make it easy',
    body: 'Clearly disclose your affiliate relationship wherever you share your link. We’ll provide ready-to-use disclosure language that meets FTC guidelines.',
  },
  {
    title: 'Promote SuperSummary as a reading supplement',
    body: 'Frame SuperSummary as a tool that enriches reading, not a shortcut around it. This protects your credibility and ours.',
  },
  {
    title: 'Quality partners only, no coupon sites',
    body: 'Coupon, cashback, and loyalty sites aren’t eligible. We focus on partners who create genuine reader recommendations.',
  },
]

export function ProgramTerms() {
  return (
    <section className="bg-bg-paper">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeading
          overline="Program Terms"
          title="Clear rules, no surprises."
        />
        <div className="mt-16 grid items-start gap-6 md:grid-cols-2">
          {terms.map((term, i) => (
            <Reveal
              key={term.title}
              delay={i * 0.06}
              className="rounded-2xl border border-border-light bg-bg-default p-6"
            >
              <h3 className="text-body font-semibold text-text-primary">
                {term.title}
              </h3>
              <p className="mt-2 text-body-sm text-text-secondary">
                {term.body}
              </p>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10 flex justify-center">
          <Link
            href="#"
            className="inline-flex items-center gap-1 rounded-sm text-body-sm font-semibold text-interactive-primary underline underline-offset-4 hover:text-interactive-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-interactive-primary"
          >
            Full program terms ↗
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
