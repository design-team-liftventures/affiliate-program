'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { signOut } from 'next-auth/react'
import { Logo } from '@/components/shared/Logo'
import { cn } from '@/lib/utils'

const NAV_ITEMS = [
  { label: 'Dashboard', href: '/dashboard' },
  { label: 'Earnings', href: '/dashboard/earnings' },
  { label: 'Links', href: '/dashboard/links' },
  { label: 'Settings', href: '/dashboard/settings' },
]

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
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  const isActive = (href: string) =>
    href === '/dashboard' ? pathname === href : pathname.startsWith(href)

  const handleSignOut = () =>
    signOut({ callbackUrl: '/affiliate/login' })

  return (
    <header className="sticky top-0 z-40 border-b border-border-light bg-bg-default">
      <nav
        aria-label="Dashboard"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6"
      >
        <div className="flex items-center gap-8">
          <Logo href="/dashboard" />
          <ul className="hidden items-center gap-6 md:flex">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                  className={cn(
                    'rounded-sm text-body-sm underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-interactive-primary',
                    isActive(item.href)
                      ? 'font-semibold text-interactive-primary underline'
                      : 'text-text-secondary hover:text-text-primary'
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-2 md:flex">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-interactive-primary-bg text-caption-sm font-semibold text-interactive-primary">
              {initials(name)}
            </span>
            <span className="text-body-sm text-text-primary">{name}</span>
          </div>
          <button
            type="button"
            onClick={handleSignOut}
            className="hidden rounded-full border border-border-main px-4 py-1.5 text-body-sm font-semibold text-text-primary hover:bg-bg-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-interactive-primary md:inline"
          >
            Sign out
          </button>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="dashboard-mobile-menu"
            aria-label="Toggle navigation menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-text-primary hover:bg-bg-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-interactive-primary md:hidden"
          >
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              {menuOpen ? (
                <>
                  <line x1="6" y1="6" x2="18" y2="18" />
                  <line x1="6" y1="18" x2="18" y2="6" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile slide-down menu */}
      {menuOpen && (
        <div
          id="dashboard-mobile-menu"
          className="border-t border-border-light bg-bg-default px-6 py-4 md:hidden"
        >
          <div className="mb-3 flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-interactive-primary-bg text-caption-sm font-semibold text-interactive-primary">
              {initials(name)}
            </span>
            <span className="text-body-sm text-text-primary">{name}</span>
          </div>
          <ul className="space-y-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                  className={cn(
                    'block rounded-lg px-3 py-2 text-body-sm',
                    isActive(item.href)
                      ? 'bg-interactive-primary-bg font-semibold text-interactive-primary'
                      : 'text-text-secondary hover:bg-bg-paper hover:text-text-primary'
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <button
                type="button"
                onClick={handleSignOut}
                className="block w-full rounded-lg px-3 py-2 text-left text-body-sm text-text-secondary hover:bg-bg-paper hover:text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-interactive-primary"
              >
                Sign out
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
