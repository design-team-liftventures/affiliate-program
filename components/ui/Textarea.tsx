import { forwardRef, useId } from 'react'
import { cn } from '@/lib/utils'

export type TextareaProps = {
  label: string
  required?: boolean
  helperText?: string
  error?: string
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  function Textarea(
    { label, required, helperText, error, id, className, ...props },
    ref
  ) {
    const generatedId = useId()
    const textareaId = id ?? generatedId
    const helperId = `${textareaId}-helper`
    const errorId = `${textareaId}-error`
    const describedBy = error ? errorId : helperText ? helperId : undefined

    return (
      <div className="w-full">
        <label
          htmlFor={textareaId}
          className="mb-1.5 block text-caption-sm font-semibold text-text-primary"
        >
          {label}
          {required && (
            <span className="ml-0.5 text-system-error" aria-hidden="true">
              *
            </span>
          )}
        </label>
        <textarea
          ref={ref}
          id={textareaId}
          required={required}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy}
          className={cn(
            'min-h-[120px] w-full resize-y rounded-md border bg-bg-default px-4 py-3 text-body text-text-primary placeholder:text-text-disabled focus:border-transparent focus:outline-none focus:ring-2',
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
