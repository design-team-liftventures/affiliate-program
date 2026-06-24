import { SectionHeading } from './SectionHeading'
import { Reveal } from '@/components/shared/Reveal'

const steps = [
  {
    number: 1,
    title: 'Apply',
    body: 'Submit a short application about you and your audience. You’ll hear back within 5–7 business days.',
  },
  {
    number: 2,
    title: 'Get your unique link',
    body: 'Once approved, you’ll receive a trackable affiliate link and promotional materials. Use them anywhere you talk about books.',
  },
  {
    number: 3,
    title: 'Earn when readers subscribe',
    body: 'Every time someone subscribes to SuperSummary through your link, you earn a commission on their subscription—recurring, for up to 12 months.',
  },
]

export function HowItWorks() {
  return (
    <section className="bg-bg-default">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeading
          overline="How It Works"
          overlineClassName="text-magenta-1"
          title="Three steps to your first commission."
        />
        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {steps.map((step, i) => (
            <Reveal
              key={step.number}
              delay={i * 0.1}
              className="flex flex-col items-start gap-4"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-magenta-1 text-body-sm font-semibold text-text-contrast">
                {step.number}
              </div>
              <h3 className="text-subtitle font-semibold text-text-primary">
                {step.title}
              </h3>
              <p className="text-body-sm text-text-secondary">{step.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
