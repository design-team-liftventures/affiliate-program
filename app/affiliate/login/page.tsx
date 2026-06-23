import { Suspense } from 'react'
import Link from 'next/link'
import { Logo } from '@/components/shared/Logo'
import { LoginForm } from '@/components/auth/LoginForm'

export const metadata = {
  title: 'Sign in — SuperSummary Affiliate Program',
}

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-bg-paper">
      <header className="bg-bg-default">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Logo />
          <Link
            href="/affiliate/apply"
            className="rounded-sm text-body-sm font-semibold text-interactive-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-interactive-primary"
          >
            Apply to become a partner →
          </Link>
        </div>
      </header>

      <div className="bg-interactive-primary py-8">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="text-caption-sm font-semibold uppercase tracking-widest text-text-contrast/70">
            Affiliate Partner Portal
          </p>
          <p className="mt-1 text-body text-text-contrast-secondary">
            Access your dashboard, track earnings, and get your affiliate link.
          </p>
        </div>
      </div>

      <main id="main-content">
        <div className="mx-auto mb-16 mt-12 max-w-[440px] rounded-2xl bg-bg-default p-10 shadow-elevation-3">
          <h1 className="text-h5 font-medium text-text-primary">
            Sign in to your affiliate account
          </h1>
          <div className="mt-6">
            <Suspense fallback={null}>
              <LoginForm />
            </Suspense>
          </div>
          <p className="mt-6 text-center text-body-sm text-text-secondary">
            Not a partner yet?{' '}
            <Link
              href="/affiliate/apply"
              className="rounded-sm font-semibold text-interactive-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-interactive-primary"
            >
              Apply to join the affiliate program.
            </Link>
          </p>
        </div>
      </main>
    </div>
  )
}
