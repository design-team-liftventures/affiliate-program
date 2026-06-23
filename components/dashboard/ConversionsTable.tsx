import Link from 'next/link'
import { cn } from '@/lib/utils'
import type { Conversion } from '@/types/affiliate'

function StatusPill({ status }: { status: Conversion['status'] }) {
  return (
    <span
      className={cn(
        'inline-flex rounded-full px-2 py-0.5 text-caption-sm font-semibold',
        status === 'Approved'
          ? 'bg-system-success-bg text-system-success'
          : 'bg-bg-offpaper text-text-secondary'
      )}
    >
      {status}
    </span>
  )
}

export function ConversionsTable({ rows }: { rows: Conversion[] }) {
  return (
    <section>
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-body font-semibold text-text-primary">
          Recent conversions
        </h2>
        <Link
          href="/dashboard/earnings"
          className="rounded-sm text-body-sm font-semibold text-interactive-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-interactive-primary"
        >
          View all →
        </Link>
      </div>
      <div className="overflow-hidden rounded-xl border border-border-light bg-bg-default">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-bg-offpaper text-caption-sm text-text-secondary">
              <th scope="col" className="px-5 py-3 font-semibold">
                Date
              </th>
              <th scope="col" className="px-5 py-3 font-semibold">
                Plan
              </th>
              <th scope="col" className="px-5 py-3 font-semibold">
                Status
              </th>
              <th scope="col" className="px-5 py-3 font-semibold">
                Commission
              </th>
              <th scope="col" className="px-5 py-3 font-semibold">
                Payout
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr
                key={`${row.date}-${i}`}
                className="border-t border-border-light text-body-sm"
              >
                <td className="px-5 py-3 text-text-secondary">{row.date}</td>
                <td className="px-5 py-3 text-text-primary">{row.plan}</td>
                <td className="px-5 py-3">
                  <StatusPill status={row.status} />
                </td>
                <td className="px-5 py-3 text-text-primary">
                  {row.commission}
                </td>
                <td className="px-5 py-3 text-text-secondary">{row.payout}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
