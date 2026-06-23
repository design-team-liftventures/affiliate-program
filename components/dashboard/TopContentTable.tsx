import Link from 'next/link'
import type { TopContentItem } from '@/types/affiliate'

export function TopContentTable({ items }: { items: TopContentItem[] }) {
  return (
    <section>
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-body font-semibold text-text-primary">
          Top performing content
        </h2>
        <Link
          href="/dashboard/links"
          className="rounded-sm text-body-sm font-semibold text-interactive-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-interactive-primary"
        >
          View report →
        </Link>
      </div>
      <div className="rounded-xl border border-border-light bg-bg-default">
        {items.map((item) => (
          <div
            key={item.rank}
            className="flex items-center gap-3 border-b border-border-light px-4 py-3 last:border-0"
          >
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-bg-offpaper text-caption-sm font-semibold text-text-secondary">
              {item.rank}
            </span>
            <span className="flex-1 text-body-sm text-text-primary">
              {item.title}
            </span>
            <span className="whitespace-nowrap text-caption text-text-secondary">
              {item.clicks} clicks · {item.conversions} conv.
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
