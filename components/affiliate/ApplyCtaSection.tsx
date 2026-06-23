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
        <p className="max-w-[560px] text-body-lg text-text-contrast-secondary">
          Applications are reviewed within 5–7 business days. We&apos;ll reach
          out either way.
        </p>
        <Link href="/affiliate/apply">
          <Button
            variant="secondary"
            size="md"
            className="rounded-full border-transparent px-9 py-3.5 text-body font-semibold text-brand-main hover:bg-interactive-hover-bg"
          >
            Apply to the affiliate program
          </Button>
        </Link>
        <p className="text-caption text-text-contrast/70">
          Questions? Reach us at affiliate@supersummary.com
        </p>
      </Reveal>
    </section>
  )
}
