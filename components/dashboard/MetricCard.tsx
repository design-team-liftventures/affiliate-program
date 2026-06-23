import { cn } from '@/lib/utils'
import type { Metric } from '@/types/affiliate'

export function MetricCard({ metric }: { metric: Metric }) {
  const changeColor =
    metric.trend === 'up'
      ? 'text-system-success'
      : metric.trend === 'down'
        ? 'text-system-error'
        : 'text-text-secondary'

  return (
    <div className="rounded-xl border border-border-light bg-bg-default p-5 shadow-elevation-1">
      <div
        className={cn('mb-4 h-[3px] w-full rounded-sm', metric.accentClass)}
        aria-hidden="true"
      />
      <p className="mb-1 text-caption text-text-secondary">{metric.label}</p>
      <p className="text-h3 font-medium text-text-primary">{metric.value}</p>
      <p className={cn('mt-1 text-caption-sm font-semibold', changeColor)}>
        {metric.change}
      </p>
    </div>
  )
}
