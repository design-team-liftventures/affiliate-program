import { cn } from '@/lib/utils'

type BadgeVariant = 'primary' | 'success' | 'neutral' | 'warning' | 'error'

const variantClasses: Record<BadgeVariant, string> = {
  primary: 'bg-interactive-primary-bg text-interactive-primary',
  success: 'bg-system-success-bg text-system-success',
  neutral: 'bg-bg-offpaper text-text-secondary',
  warning: 'bg-system-warning-bg text-system-warning',
  error: 'bg-system-error-bg text-system-error',
}

export function Badge({
  variant = 'neutral',
  className,
  children,
}: {
  variant?: BadgeVariant
  className?: string
  children: React.ReactNode
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 text-caption-sm font-semibold',
        variantClasses[variant],
        className
      )}
    >
      {children}
    </span>
  )
}
