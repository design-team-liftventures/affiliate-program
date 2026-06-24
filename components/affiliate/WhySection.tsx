import { SectionHeading } from './SectionHeading'
import { Reveal } from '@/components/shared/Reveal'

const features = [
  {
    icon: '🔁',
    title: 'Recurring revenue share',
    body: 'Earn commission every month your referral stays subscribed—up to 12 months per reader, not just on the first sale.',
  },
  {
    icon: '🎯',
    title: 'An audience primed to subscribe',
    body: 'Students, educators, and lifelong readers arrive already looking for guidance. Our Study Guide pages are designed to convert book curiosity into paid subscriptions.',
  },
  {
    icon: '📚',
    title: '10,000+ reasons to recommend us',
    body: 'Study Guides across fiction, classics, and contemporary nonfiction give you an evergreen, on-brand reason to share SuperSummary with any reading audience.',
  },
]

export function WhySection() {
  return (
    <section className="bg-bg-default">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeading
          overline="Why SuperSummary"
          title="A product your audience trusts—and a program worth recommending."
          description="SuperSummary’s library of 10,000+ expert Study Guides, Plot Summaries, and Teaching Guides covers fiction, classics, and nonfiction your audience is already reading. When they click through, they find exactly what they were looking for."
        />
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {features.map((feature, i) => (
            <Reveal
              key={feature.title}
              delay={i * 0.1}
              className="rounded-2xl bg-bg-paper p-8"
            >
              <div className="inline-flex rounded-xl bg-aqua-6 p-3 text-h6">
                <span aria-hidden="true">{feature.icon}</span>
              </div>
              <h3 className="mt-8 text-subtitle font-semibold text-text-primary">
                {feature.title}
              </h3>
              <p className="mt-3 text-body-sm text-text-secondary">
                {feature.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
