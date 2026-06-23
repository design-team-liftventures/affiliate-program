'use client'

import { Fragment } from 'react'
import { cn } from '@/lib/utils'
import { STEP_LABELS } from './steps'

export function ProgressStepper({ currentStep }: { currentStep: 1 | 2 | 3 | 4 }) {
  return (
    <div className="border-b border-border-light bg-bg-default">
      <div className="mx-auto max-w-3xl px-6 py-4">
        {/* Mobile: condensed text */}
        <p className="text-center text-body-sm font-semibold text-interactive-primary sm:hidden">
          Step {currentStep} of 4 — {STEP_LABELS[currentStep - 1]}
        </p>

        {/* Desktop: full stepper */}
        <ol className="hidden items-center justify-center sm:flex">
          {STEP_LABELS.map((label, i) => {
            const stepNumber = i + 1
            const isComplete = stepNumber < currentStep
            const isActive = stepNumber === currentStep
            return (
              <Fragment key={label}>
                <li className="flex items-center gap-2">
                  <span
                    className={cn(
                      'flex h-6 w-6 items-center justify-center rounded-full text-caption-sm font-semibold',
                      isComplete || isActive
                        ? 'bg-interactive-primary text-text-contrast'
                        : 'bg-bg-offpaper text-text-disabled'
                    )}
                    aria-hidden="true"
                  >
                    {isComplete ? (
                      <svg
                        className="h-3.5 w-3.5"
                        viewBox="0 0 16 16"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="3 8.5 6.5 12 13 4.5" />
                      </svg>
                    ) : (
                      stepNumber
                    )}
                  </span>
                  <span
                    className={cn(
                      'text-body-sm',
                      isActive
                        ? 'font-semibold text-interactive-primary'
                        : isComplete
                          ? 'text-interactive-primary'
                          : 'text-text-disabled'
                    )}
                    aria-current={isActive ? 'step' : undefined}
                  >
                    {label}
                  </span>
                </li>
                {i < STEP_LABELS.length - 1 && (
                  <span
                    className={cn(
                      'mx-3 h-px w-10',
                      stepNumber < currentStep
                        ? 'bg-interactive-primary'
                        : 'bg-border-light'
                    )}
                    aria-hidden="true"
                  />
                )}
              </Fragment>
            )
          })}
        </ol>
      </div>
    </div>
  )
}
