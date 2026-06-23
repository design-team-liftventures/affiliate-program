import { forwardRef, useId } from 'react'
import { cn } from '@/lib/utils'

export type TextFieldProps = {
  label: string
  required?: boolean
  helperText?: string
  error?: string
} & React.InputHTMLAttributes<HTMLInputElement>

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  function TextField(
    { label, required, helperText, error, id, className, ...props },
    ref
  ) {
    const generatedId = useId()
    const inputId = id ?? generatedId
    const helperId = `${inputId}-helper`
    const errorId = `${inputId}-error`
    const describedBy = error ? errorId : helperText ? helperId : undefined

    return (
      <div className="w-full">
        <label
          htmlFor={inputId}
          className="mb-1.5 block text-caption-sm font-semibold text-text-primary"
        >
          {label}
          {required && (
            <span className="ml-0.5 text-system-error" aria-hidden="true">
              *
            </span>
          )}
        </label>
        <input
          ref={ref}
          id={inputId}
          required={required}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy}
          className={cn(
            'h-12 w-full rounded-md border bg-bg-default px-4 text-body text-text-primary placeholder:text-text-disabled focus:border-transparent focus:outline-none focus:ring-2',
            error
              ? 'border-system-error focus:ring-system-error'
              : 'border-border-main focus:ring-interactive-primary',
            className
          )}
          {...props}
        />
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
