'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Logo } from './Logo'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'sticky top-0 z-40 border-b transition-colors',
        scrolled
          ? 'border-border-light bg-bg-default/95 shadow-elevation-1 backdrop-blur-sm'
          : 'border-transparent bg-bg-default'
      )}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-[74px] max-w-7xl items-center gap-6 px-6"
      >
        <Logo />

        <div className="ml-auto flex flex-1 items-center justify-end gap-4">
          <form
            role="search"
            action="https://www.supersummary.com/search"
            className="relative hidden w-full max-w-[520px] lg:block"
          >
            <label htmlFor="site-search" className="sr-only">
              Search for a book, play, poem, or author
            </label>
            <svg
              className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-text-secondary"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            <input
              id="site-search"
              type="search"
              name="q"
              placeholder="Search for a book, play, poem, or author"
              className="h-12 w-full rounded-full border border-border-light bg-bg-default pl-11 pr-4 text-body text-text-primary placeholder:text-text-secondary focus:border-transparent focus:outline-none focus:ring-2 focus:ring-interactive-primary"
            />
          </form>

          <Link href="/affiliate/login" className="shrink-0">
            <button
              type="button"
              className="inline-flex h-12 items-center justify-center rounded-full border border-interactive-primary bg-bg-default px-5 text-body font-semibold text-aqua-2 transition-colors hover:bg-interactive-primary-bg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-interactive-primary focus-visible:ring-offset-2"
            >
              Log In
            </button>
          </Link>
          <Link href="/affiliate/apply" className="shrink-0">
            <Button
              variant="primary"
              size="md"
              className="rounded-full px-5 text-body font-semibold"
            >
              Sign Up
            </Button>
          </Link>
        </div>
      </nav>
    </header>
  )
}
