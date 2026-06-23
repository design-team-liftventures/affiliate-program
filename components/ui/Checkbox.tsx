import { forwardRef, useId } from 'react'
import { cn } from '@/lib/utils'

export type CheckboxProps = {
  label: string
} & React.InputHTMLAttributes<HTMLInputElement>

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  function Checkbox({ label, id, className, ...props }, ref) {
    const generatedId = useId()
    const checkboxId = id ?? generatedId

    return (
      <label
        htmlFor={checkboxId}
        className={cn(
          'group flex cursor-pointer items-start gap-2.5',
          className
        )}
      >
        <span className="relative mt-0.5 inline-flex shrink-0">
          <input
            ref={ref}
            id={checkboxId}
            type="checkbox"
            className="peer h-[18px] w-[18px] cursor-pointer appearance-none rounded-[3px] border-2 border-border-main bg-bg-default transition-colors checked:border-interactive-primary checked:bg-interactive-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-interactive-primary focus-visible:ring-offset-2"
            {...props}
          />
          <svg
            className="pointer-events-none absolute left-0 top-0 h-[18px] w-[18px] scale-0 text-text-contrast transition-transform peer-checked:scale-100"
            viewBox="0 0 18 18"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <polyline points="4 9.5 7.5 13 14 5.5" />
          </svg>
        </span>
        <span className="text-body text-text-primary">{label}</span>
      </label>
    )
  }
)
