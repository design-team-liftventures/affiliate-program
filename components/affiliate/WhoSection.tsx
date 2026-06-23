import { SectionHeading } from './SectionHeading'
import { Reveal } from '@/components/shared/Reveal'

const partners = [
  {
    icon: '✍️',
    title: 'Book bloggers and literary sites',
    body: 'Add a natural revenue stream to reviews, reading lists, and analysis posts without cluttering your site with ads.',
  },
  {
    icon: '🎥',
    title: 'BookTok, Bookstagram, and BookTube creators',
    body: 'Drop your link in captions, bios, and descriptions—your community already trusts your recommendations.',
  },
  {
    icon: '✉️',
    title: 'Email and newsletter writers',
    body: 'Recommend study guides and summaries to engaged subscribers with a link that pays out month after month.',
  },
  {
    icon: '🍎',
    title: 'Educators and teacher bloggers',
    body: 'Share Teaching Guides and study resources your colleagues and students will genuinely use in the classroom.',
  },
]

export function WhoSection() {
  return (
    <section className="bg-bg-paper">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <SectionHeading
          overline="Who It's For"
          title="Built for creators, writers, and educators who talk about books."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {partners.map((partner, i) => (
            <Reveal
              key={partner.title}
              delay={i * 0.08}
              className="rounded-xl border border-border-light bg-bg-default p-6"
            >
              <div className="flex items-start gap-4">
                <div className="inline-flex shrink-0 rounded-xl bg-interactive-primary-bg p-3 text-h6">
                  <span aria-hidden="true">{partner.icon}</span>
                </div>
                <div>
                  <h3 className="text-subtitle font-semibold text-text-primary">
                    {partner.title}
                  </h3>
                  <p className="mt-2 text-body-sm text-text-secondary">
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
