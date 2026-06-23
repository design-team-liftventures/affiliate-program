import { SectionHeading } from './SectionHeading'
import { Reveal } from '@/components/shared/Reveal'

const features = [
  {
    icon: '🔁',
    title: 'Recurring revenue share',
    body: 'Earn commission for as long as your referred reader keeps their subscription—up to 12 months per customer, not just on the first sale.',
  },
  {
    icon: '📈',
    title: 'Readers who convert',
    body: 'Students, educators, and lifelong readers arrive ready to subscribe. Our pages are built to turn book curiosity into paid signups.',
  },
  {
    icon: '📚',
    title: 'A catalog built for conversation',
    body: 'Thousands of study guides across fiction, classics, and nonfiction give you endless, on-brand reasons to recommend SuperSummary.',
  },
]

export function WhySection() {
  return (
    <section className="bg-bg-default">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <SectionHeading
          overline="Why SuperSummary"
          title="A platform your audience already reaches for."
          description="SuperSummary publishes in-depth Study Guides, Plot Summaries, and Teaching Guides trusted by more than 10,000 readers. When your audience clicks through, they find resources they already know and love."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {features.map((feature, i) => (
            <Reveal
              key={feature.title}
              delay={i * 0.1}
              className="rounded-xl bg-bg-paper p-6 shadow-elevation-1"
            >
              <div className="inline-flex rounded-xl bg-interactive-primary-bg p-3 text-h6">
                <span aria-hidden="true">{feature.icon}</span>
              </div>
              <h3 className="mt-4 text-subtitle font-semibold text-text-primary">
                {feature.title}
              </h3>
              <p className="mt-2 text-body-sm text-text-secondary">
                {feature.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
