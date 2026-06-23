import type { Metadata } from 'next'
import { Open_Sans, Inter } from 'next/font/google'
import './globals.css'

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
  display: 'swap',
})

// Inter substitutes for General Sans (display) — not on Google Fonts.
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'SuperSummary Affiliate Program',
  description:
    'Join the SuperSummary affiliate program. Earn recurring commissions when you refer new subscribers.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${openSans.variable} ${inter.variable}`}>
      <body>
        <a
          href="#main-content"
          className="sr-only rounded-md bg-interactive-primary px-4 py-2 text-text-contrast focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  )
}
