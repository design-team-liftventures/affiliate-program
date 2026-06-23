'use client'

import { signOut } from 'next-auth/react'
import { Logo } from '@/components/shared/Logo'

function initials(name: string): string {
  return name
    .split(' ')
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join('')
    .toUpperCase()
}

export function TopNav({ name }: { name: string }) {
  const handleSignOut = () =>
    signOut({ callbackUrl: '/affiliate/login' })

  return (
    <header className="sticky top-0 z-40 border-b border-border-light bg-bg-default">
      <nav
        aria-label="Dashboard"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6"
      >
        <Logo href="/dashboard" />

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-interactive-primary-bg text-caption-sm font-semibold text-interactive-primary">
              {initials(name)}
            </span>
            <span className="text-body-sm text-text-primary">{name}</span>
          </div>
          <button
            type="button"
            onClick={handleSignOut}
            className="rounded-full border border-border-main px-4 py-1.5 text-body-sm font-semibold text-text-primary hover:bg-bg-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-interactive-primary"
          >
            Sign out
          </button>
        </div>
      </nav>
    </header>
  )
}
