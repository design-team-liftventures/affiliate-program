'use client'

import { useId } from 'react'
import { cn } from '@/lib/utils'
import type { Option } from '@/types/affiliate'

export type RadioGroupProps = {
  label: string
  name: string
  options: Option[]
  value: string
  onChange: (value: string) => void
  required?: boolean
  helperText?: string
  error?: string
}

export function RadioGroup({
  label,
  name,
  options,
  value,
  onChange,
  required,
  helperText,
  error,
}: RadioGroupProps) {
  const groupId = useId()
  const helperId = `${groupId}-helper`
  const errorId = `${groupId}-error`
  const describedBy = error ? errorId : helperText ? helperId : undefined

  return (
    <fieldset aria-describedby={describedBy}>
      <legend className="mb-1 text-caption-sm font-semibold text-text-primary">
        {label}
        {required && (
          <span className="ml-0.5 text-system-error" aria-hidden="true">
            *
          </span>
        )}
      </legend>
      {helperText && !error && (
        <p id={helperId} className="mb-2 text-caption text-text-secondary">
          {helperText}
        </p>
      )}
      <div className="mt-2 space-y-2">
        {options.map((opt) => {
          const optionId = `${groupId}-${opt.value}`
          const selected = value === opt.value
          return (
            <label
              key={opt.value}
              htmlFor={optionId}
              className="flex cursor-pointer items-center gap-2.5"
            >
              <span className="relative inline-flex shrink-0">
                <input
                  id={optionId}
                  type="radio"
                  name={name}
                  value={opt.value}
                  checked={selected}
                  onChange={() => onChange(opt.value)}
                  className={cn(
                    'h-[18px] w-[18px] cursor-pointer appearance-none rounded-full border-2 bg-bg-default transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-interactive-primary focus-visible:ring-offset-2',
                    selected ? 'border-interactive-primary' : 'border-border-main'
                  )}
                />
                {selected && (
                  <span className="pointer-events-none absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-interactive-primary" />
                )}
              </span>
              <span className="text-body text-text-primary">{opt.label}</span>
            </label>
          )
        })}
      </div>
      {error && (
        <p id={errorId} className="mt-1 text-caption text-system-error">
          {error}
        </p>
      )}
    </fieldset>
  )
}
