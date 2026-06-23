'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { useApplyStore } from '@/lib/apply-store'
import { Button } from '@/components/ui/Button'

export default function ApplySuccessPage() {
  const reset = useApplyStore((s) => s.reset)

  // Clear the multi-step form state once the application is submitted.
  useEffect(() => {
    reset()
  }, [reset])

  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4 py-16">
      <div className="flex max-w-md flex-col items-center text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-system-success-bg">
          <svg
            className="h-8 w-8 text-system-success"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <polyline points="4 12 10 18 20 6" />
          </svg>
        </div>
        <h1 className="mt-6 text-h5 font-medium text-text-primary">
          Application received.
        </h1>
        <p className="mt-3 text-body text-text-secondary">
          We review every application individually and get back to all
          applicants within 5–7 business days. Keep an eye on
          affiliate@supersummary.com.
        </p>
        <div className="mt-8">
          <Link href="/affiliate">
            <Button variant="secondary" size="lg">
              ← Back to Affiliate Program
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
