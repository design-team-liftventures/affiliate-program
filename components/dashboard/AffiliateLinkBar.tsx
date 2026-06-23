'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'

export function AffiliateLinkBar({ url }: { url: string }) {
  const [copied, setCopied] = useState(false)

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Clipboard not available — fail silently.
    }
  }

  return (
    <div>
      <h2 className="mb-3 text-body font-semibold text-text-primary">
        Your affiliate link
      </h2>
      <div className="flex flex-col gap-3 rounded-xl border border-border-light bg-bg-default p-4 sm:flex-row sm:items-center sm:justify-between">
        <span className="break-all font-mono text-body text-text-primary">
          {url}
        </span>
        <button
          type="button"
          onClick={onCopy}
          aria-live="polite"
          className={cn(
            'shrink-0 rounded-lg px-4 py-2 text-body-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-interactive-primary',
            copied
              ? 'bg-system-success-bg text-system-success'
              : 'bg-interactive-primary-bg text-interactive-primary hover:bg-interactive-hover-bg'
          )}
        >
          {copied ? 'Copied! ✓' : 'Copy link'}
        </button>
      </div>
    </div>
  )
}
