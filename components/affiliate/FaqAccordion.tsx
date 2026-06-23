'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { SectionHeading } from './SectionHeading'

const faqs = [
  {
    q: 'Who can apply?',
    a: 'Anyone with an audience that talks about books—bloggers, BookTok/Bookstagram/BookTube creators, newsletter writers, and educators. We review each application individually for audience fit.',
  },
  {
    q: 'How much does it cost to join?',
    a: 'Nothing. Joining the SuperSummary affiliate program is completely free. You only ever earn—there are no fees or minimums to participate.',
  },
  {
    q: 'What if someone subscribes on mobile?',
    a: 'Our affiliate tracking works across devices within the cookie window, so qualifying subscriptions are attributed to you whether the reader signs up on mobile or desktop.',
  },
  {
    q: 'How long does the cookie last?',
    a: 'Referrals are tracked with a 30-day cookie window. If your reader subscribes within 30 days of clicking your link, the conversion is credited to you.',
  },
  {
    q: 'When do I get paid?',
    a: 'After a 30-day pending period to account for refunds, approved commissions are paid out monthly to your registered PayPal account.',
  },
  {
    q: 'Can I promote in multiple languages?',
    a: 'Yes. Blog, newsletter, video, and social content in any language is welcome, as long as it follows our program terms and FTC disclosure rules.',
  },
  {
    q: 'Do I earn on annual plans?',
    a: 'Yes. Commission is calculated on the subscription a reader purchases, including annual plans, and continues on recurring renewals for up to 12 months.',
  },
  {
    q: 'What if a referral asks for a refund?',
    a: 'Commissions are only paid on subscriptions that clear the 30-day pending period. Refunded or cancelled orders are reversed before payout.',
  },
]

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-border-light">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-interactive-primary"
      >
        <span className="text-body font-semibold text-text-primary">{q}</span>
        <svg
          className={`h-5 w-5 shrink-0 text-interactive-primary transition-transform ${
            open ? 'rotate-180' : ''
          }`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-body-sm text-text-secondary">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function FaqAccordion() {
  return (
    <section className="bg-bg-default">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <SectionHeading
          overline="Frequently Asked Questions"
          title="Everything you need to know."
        />
        <div className="mt-12 grid gap-x-12 md:grid-cols-2">
          {faqs.map((faq) => (
            <FaqItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>
      </div>
    </section>
  )
}
