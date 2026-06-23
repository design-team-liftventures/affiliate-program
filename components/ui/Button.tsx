import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

type Variant = 'primary' | 'secondary' | 'ghost' | 'danger'
type Size = 'sm' | 'md' | 'lg'

export type ButtonProps = {
  variant?: Variant
  size?: Size
  fullWidth?: boolean
  loading?: boolean
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-interactive-primary text-text-contrast hover:bg-interactive-hover disabled:bg-interactive-disabled disabled:text-text-contrast',
  secondary:
    'bg-bg-default border border-border-main text-text-primary hover:bg-bg-paper disabled:text-text-disabled',
  ghost:
    'bg-transparent text-interactive-primary underline hover:text-interactive-hover disabled:text-text-disabled disabled:no-underline',
  danger:
    'bg-system-error text-text-contrast hover:bg-system-error/90 disabled:bg-interactive-disabled',
}

const sizeClasses: Record<Size, string> = {
  sm: 'h-9 px-5 text-body-sm',
  md: 'h-12 px-8 text-body',
  lg: 'h-14 px-10 text-body-lg',
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    {
      variant = 'primary',
      size = 'md',
      fullWidth = false,
      loading = false,
      disabled,
      className,
      children,
      type = 'button',
      ...props
    },
    ref
  ) {
    const isDisabled = disabled || loading
    return (
      <button
        ref={ref}
        type={type}
        disabled={isDisabled}
        aria-busy={loading || undefined}
        className={cn(
          'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-interactive-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed',
          variantClasses[variant],
          sizeClasses[size],
          fullWidth && 'w-full',
          loading && 'pointer-events-none',
          className
        )}
        {...props}
      >
        {loading && (
          <svg
            className="h-4 w-4 animate-spin"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            />
          </svg>
        )}
        {children}
      </button>
    )
  }
)
