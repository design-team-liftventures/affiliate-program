'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Logo } from '@/components/shared/Logo'
import { ProgressStepper } from '@/components/apply/ProgressStepper'
import { stepFromPathname } from '@/components/apply/steps'

export default function ApplyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const isSuccess = pathname.endsWith('/success')

  return (
    <div className="min-h-screen bg-bg-paper">
      <header className="bg-bg-default">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Logo />
          <Link
            href="/affiliate"
            className="rounded-sm text-body-sm font-semibold text-interactive-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-interactive-primary"
          >
            ← Back to Affiliate Program
          </Link>
        </div>
      </header>

      {!isSuccess && <ProgressStepper currentStep={stepFromPathname(pathname)} />}

      <main id="main-content" className="px-4">
        {children}
      </main>
    </div>
  )
}
