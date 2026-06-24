import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/shared/Reveal'

export function ApplyCtaSection() {
  return (
    <section className="bg-aqua-1">
      <Reveal className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 py-24 text-center">
        <h2 className="max-w-[680px] text-h3 font-medium text-text-contrast md:text-display-h2">
          Ready to start earning?
        </h2>
        <p className="max-w-[600px] text-body-lg text-text-contrast-secondary">
          Applications are reviewed within 5-7 business days. We&apos;ll reach
          out either way.
        </p>
        <Link href="/affiliate/apply">
          <Button
            variant="secondary"
            size="md"
            className="rounded-full border-transparent px-9 py-3.5 text-body font-semibold text-aqua-1 hover:bg-interactive-hover-bg"
          >
            Become a SuperSummary affiliate
          </Button>
        </Link>
        <p className="text-caption text-text-contrast-secondary">
          Questions? Reach us at{' '}
          <Link
            href="mailto:affiliate@supersummary.com"
            className="rounded-sm font-semibold text-text-contrast underline underline-offset-4 hover:text-interactive-hover-bg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text-contrast"
          >
            affiliate@supersummary.com
          </Link>
        </p>
      </Reveal>
    </section>
  )
}
