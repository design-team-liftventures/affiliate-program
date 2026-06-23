import { Suspense } from 'react'
import Link from 'next/link'
import { Logo } from '@/components/shared/Logo'
import { LoginForm } from '@/components/auth/LoginForm'

export const metadata = {
  title: 'Sign in — SuperSummary Affiliate Program',
}

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col bg-bg-paper">
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

      <main id="main-content" className="flex flex-1 items-center justify-center py-12">
        <div className="w-full max-w-[440px] rounded-2xl bg-bg-default p-10 shadow-elevation-3">
          <h1 className="text-h5 font-medium text-text-primary">
            Sign in to your affiliate account
          </h1>
          <p className="mt-2 text-body-sm text-text-secondary">
            Access your dashboard, track earnings, and get your affiliate link.
          </p>
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
