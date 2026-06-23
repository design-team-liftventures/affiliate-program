import Link from 'next/link'
import { SectionHeading } from './SectionHeading'
import { Reveal } from '@/components/shared/Reveal'

const terms = [
  {
    title: 'No brand-term bidding',
    body: 'Don’t run paid search ads on "SuperSummary" or close variations. Organic content and your own channels are always welcome.',
  },
  {
    title: 'No direct linking',
    body: 'Send traffic through your own content first. Affiliate links should live inside your posts, videos, or emails—not as raw redirects.',
  },
  {
    title: 'FTC disclosure required',
    body: 'Clearly disclose your affiliate relationship wherever you share your link, in line with FTC guidelines.',
  },
  {
    title: 'No academic-dishonesty framing',
    body: 'Promote SuperSummary as a study supplement. Never position it as a way to cheat, plagiarize, or skip the reading.',
  },
  {
    title: 'Coupon sites not accepted',
    body: 'Coupon, cashback, and loyalty sites aren’t eligible. We focus on partners who create genuine reader recommendations.',
  },
]

export function ProgramTerms() {
  return (
    <section className="bg-bg-paper">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <SectionHeading
          overline="Program Terms"
          title="Clear rules, no surprises."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {terms.map((term, i) => (
            <Reveal
              key={term.title}
              delay={i * 0.06}
              className="flex gap-4 rounded-xl border border-border-light bg-bg-default p-6"
            >
              <div
                className="w-1 shrink-0 self-stretch rounded-sm bg-interactive-primary"
                aria-hidden="true"
              />
              <div>
                <h3 className="text-body font-semibold text-text-primary">
                  {term.title}
                </h3>
                <p className="mt-1 text-body-sm text-text-secondary">
                  {term.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-8">
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
