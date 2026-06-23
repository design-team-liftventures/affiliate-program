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
        'sticky top-0 z-40 transition-colors',
        scrolled
          ? 'bg-bg-default/95 shadow-elevation-1 backdrop-blur-sm'
          : 'bg-bg-default'
      )}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6"
      >
        <Logo />
        <div className="flex items-center gap-4">
          <Link
            href="/affiliate/login"
            className="hidden rounded-sm text-body-sm font-semibold text-text-secondary underline-offset-4 hover:text-interactive-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-interactive-primary sm:inline"
          >
            Already a partner? Log in →
          </Link>
          <Link href="/affiliate/apply">
            <Button
              variant="primary"
              className="rounded-xl px-4 py-1.5 text-body font-semibold"
            >
              Apply now
            </Button>
          </Link>
        </div>
      </nav>
    </header>
  )
}
