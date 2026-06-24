'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
}

export function HeroSection() {
  return (
    <section className="bg-aqua-2">
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 py-24 text-center"
      >
        <motion.span
          variants={item}
          className="rounded-full bg-white/15 px-4 py-1.5 text-caption-sm font-semibold uppercase tracking-widest text-text-contrast"
        >
          Affiliate Program
        </motion.span>
        <motion.h1
          variants={item}
          className="max-w-[820px] text-h2 font-medium text-text-contrast md:text-display-h1"
        >
          Earn by sharing books.
        </motion.h1>
        <motion.p
          variants={item}
          className="max-w-[720px] text-body-lg text-text-contrast-secondary"
        >
          Recommend SuperSummary and earn recurring commission for every
          subscriber you refer—paid out monthly, for up to 12 months per reader.
          No flat bounties. No one-time payouts.
        </motion.p>
        <motion.div variants={item} className="mt-2">
          <Link href="/affiliate/apply">
            <Button
              variant="secondary"
              size="md"
              className="rounded-full border-transparent px-9 py-3.5 text-body font-semibold text-aqua-2 hover:bg-interactive-hover-bg"
            >
              Apply now
            </Button>
          </Link>
        </motion.div>
        <motion.div variants={item}>
          <Link
            href="/affiliate/login"
            className="rounded-sm text-caption text-text-contrast/80 underline underline-offset-4 hover:text-text-contrast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text-contrast"
          >
            Already a partner? Log in to your dashboard →
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}
