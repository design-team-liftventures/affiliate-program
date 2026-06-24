import { SectionHeading } from './SectionHeading'
import { Reveal } from '@/components/shared/Reveal'

const leftColumn = [
  {
    q: 'Who can apply?',
    a: 'Anyone who creates content about books, reading, or education with an established audience. No minimum follower count—we look at content quality and fit.',
  },
  {
    q: 'What if someone subscribes on mobile?',
    a: 'Attribution follows your link regardless of device. A click on one device and subscribe on another within 30 days still earns you credit.',
  },
  {
    q: 'What counts as a new subscriber?',
    a: 'Anyone who has never previously held a SuperSummary subscription. No commissions on returning subscribers or free-account upgrades.',
  },
  {
    q: 'When do commissions become approved?',
    a: 'After a 30-day pending period from the sale date. Once approved, commissions are released in the next monthly payout cycle.',
  },
  {
    q: 'How do I know if SuperSummary covers the books I recommend?',
    a: 'We have Study Guides for 10,000+ titles across fiction, classics, and nonfiction. Use our search to find any book your audience is reading—if we cover it, you can link directly to that guide.',
  },
]

const rightColumn = [
  {
    q: 'How do I get paid?',
    a: 'Monthly, once your balance reaches the minimum payout threshold. Bank transfer and PayPal are both supported.',
  },
  {
    q: 'Can I promote on multiple channels?',
    a: 'Yes. Blog, newsletter, social, video—wherever you talk about books. Each placement needs proper FTC disclosure.',
  },
  {
    q: 'Do I earn on annual plans?',
    a: 'Yes. Revenue share is calculated on the amount paid. Annual subscribers tend to generate higher total commissions per referred user.',
  },
  {
    q: 'What if a subscriber cancels?',
    a: 'Commissions are only paid on active subscription periods. Recurring commissions stop when the subscription ends.',
  },
  {
    q: 'What makes a strong application?',
    a: 'We look for creators who make genuine reader recommendations—book bloggers, educators, newsletter writers, BookTok and Bookstagram creators, and reading communities. Audience size matters less than fit: if your audience reads, we want to talk.',
  },
]

function FaqCard({ q, a, delay }: { q: string; a: string; delay: number }) {
  return (
    <Reveal delay={delay} className="rounded-2xl bg-bg-paper p-6">
      <h3 className="text-body font-semibold text-text-primary">{q}</h3>
      <p className="mt-2 text-body-sm text-text-secondary">{a}</p>
    </Reveal>
  )
}

export function FaqAccordion() {
  return (
    <section className="bg-bg-default">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeading
          overline="Frequently Asked Questions"
          title="Everything you need to know."
        />
        <div className="mt-16 grid items-start gap-6 md:grid-cols-2">
          <div className="flex flex-col gap-6">
            {leftColumn.map((faq, i) => (
              <FaqCard key={faq.q} q={faq.q} a={faq.a} delay={i * 0.05} />
            ))}
          </div>
          <div className="flex flex-col gap-6">
            {rightColumn.map((faq, i) => (
              <FaqCard key={faq.q} q={faq.q} a={faq.a} delay={i * 0.05} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
