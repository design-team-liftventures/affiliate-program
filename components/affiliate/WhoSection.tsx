import { SectionHeading } from './SectionHeading'
import { Reveal } from '@/components/shared/Reveal'

const partners = [
  {
    icon: '✍️',
    title: 'Book bloggers and literary sites',
    body: 'Turn reviews, reading lists, and analysis posts into a recurring revenue stream—without display ads.',
  },
  {
    icon: '🎬',
    title: 'BookTok, Bookstagram, and BookTube creators',
    body: 'Drop your link in captions, bios, and video descriptions. Your community trusts your recommendations—we handle the rest.',
  },
  {
    icon: '📧',
    title: 'Email and newsletter writers',
    body: 'Recommend Study Guides to engaged subscribers and earn commission month after month, as long as they stay subscribed.',
  },
  {
    icon: '📖',
    title: 'Book clubs and reading communities',
    body: 'If your members are reading together, they’re already SuperSummary’s audience. Recommend the guides that go deeper than the book jacket.',
  },
]

export function WhoSection() {
  return (
    <section className="bg-bg-paper">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeading
          overline="Who It's For"
          overlineClassName="text-orange-1"
          title="Built for creators, writers, and educators who talk about books."
        />
        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {partners.map((partner, i) => (
            <Reveal
              key={partner.title}
              delay={i * 0.08}
              className="rounded-2xl border border-border-light bg-bg-default p-8"
            >
              <div className="flex items-start gap-4">
                <div className="inline-flex shrink-0 rounded-xl bg-orange-6 p-3 text-h6">
                  <span aria-hidden="true">{partner.icon}</span>
                </div>
                <div>
                  <h3 className="text-subtitle font-semibold text-text-primary">
                    {partner.title}
                  </h3>
                  <p className="mt-3 text-body-sm text-text-secondary">
                    {partner.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
