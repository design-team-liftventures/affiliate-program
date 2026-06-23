import Link from 'next/link'
import { cn } from '@/lib/utils'

export function Logo({
  href = '/affiliate',
  className,
}: {
  href?: string
  className?: string
}) {
  return (
    <Link
      href={href}
      className={cn(
        'inline-flex items-center gap-2 rounded-sm font-display text-body-lg font-medium text-interactive-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-interactive-primary focus-visible:ring-offset-2',
        className
      )}
      aria-label="SuperSummary home"
    >
      <svg
        className="h-6 w-6"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M3 5.5 12 3l9 2.5v3L12 6 3 8.5v-3Z"
          fill="currentColor"
        />
        <path
          d="M3 11 12 8.5 21 11v3L12 11.5 3 14v-3Z"
          fill="currentColor"
          opacity="0.7"
        />
        <path
          d="M3 16.5 12 14l9 2.5v3L12 17l-9 2.5v-3Z"
          fill="currentColor"
          opacity="0.45"
        />
      </svg>
      <span>SuperSummary</span>
    </Link>
  )
}
