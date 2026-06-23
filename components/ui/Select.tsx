import { forwardRef, useId } from 'react'
import { cn } from '@/lib/utils'
import type { Option } from '@/types/affiliate'

export type SelectProps = {
  label: string
  required?: boolean
  helperText?: string
  error?: string
  placeholder?: string
  options: Option[]
} & React.SelectHTMLAttributes<HTMLSelectElement>

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  function Select(
    {
      label,
      required,
      helperText,
      error,
      placeholder,
      options,
      id,
      className,
      defaultValue,
      value,
      ...props
    },
    ref
  ) {
    const generatedId = useId()
    const selectId = id ?? generatedId
    const helperId = `${selectId}-helper`
    const errorId = `${selectId}-error`
    const describedBy = error ? errorId : helperText ? helperId : undefined
    const isControlled = value !== undefined

    return (
      <div className="w-full">
        <label
          htmlFor={selectId}
          className="mb-1.5 block text-caption-sm font-semibold text-text-primary"
        >
          {label}
          {required && (
            <span className="ml-0.5 text-system-error" aria-hidden="true">
              *
            </span>
          )}
        </label>
        <div className="relative">
          <select
            ref={ref}
            id={selectId}
            required={required}
            aria-invalid={error ? true : undefined}
            aria-describedby={describedBy}
            value={value}
            defaultValue={
              isControlled
                ? undefined
                : (defaultValue ?? (placeholder ? '' : undefined))
            }
            className={cn(
              'h-12 w-full appearance-none rounded-md border bg-bg-default px-4 pr-10 text-body text-text-primary focus:border-transparent focus:outline-none focus:ring-2',
              error
                ? 'border-system-error focus:ring-system-error'
                : 'border-border-main focus:ring-interactive-primary',
              className
            )}
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <svg
            className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-text-secondary"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
        {error ? (
          <p id={errorId} className="mt-1 text-caption text-system-error">
            {error}
          </p>
        ) : helperText ? (
          <p id={helperId} className="mt-1 text-caption text-text-secondary">
            {helperText}
          </p>
        ) : null}
      </div>
    )
  }
)
