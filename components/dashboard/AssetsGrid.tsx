import Link from 'next/link'
import type { Asset } from '@/types/affiliate'

export function AssetsGrid({ assets }: { assets: Asset[] }) {
  return (
    <section>
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-body font-semibold text-text-primary">
          Promotional assets
        </h2>
        <Link
          href="/dashboard/links"
          className="rounded-sm text-body-sm font-semibold text-interactive-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-interactive-primary"
        >
          View all assets →
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
        {assets.map((asset) => (
          <div
            key={asset.label}
            className="flex items-start gap-3 rounded-xl border border-border-light bg-bg-default p-4"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-interactive-primary-bg text-xl">
              <span aria-hidden="true">{asset.icon}</span>
            </span>
            <div className="min-w-0">
              <p className="text-body-sm font-semibold text-text-primary">
                {asset.label}
              </p>
              <p className="text-caption text-text-secondary">{asset.spec}</p>
              <Link
                href="#"
                className="mt-1 inline-block rounded-sm text-caption-sm font-semibold text-interactive-primary underline underline-offset-4 hover:text-interactive-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-interactive-primary"
              >
                Download →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
