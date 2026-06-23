import { SectionHeading } from './SectionHeading'
import { Reveal } from '@/components/shared/Reveal'

const steps = [
  {
    number: 1,
    title: 'Apply',
    body: 'Submit a short application about you and your audience. Most applicants get a decision within 5–7 business days.',
  },
  {
    number: 2,
    title: 'Get your unique link',
    body: 'Once approved, grab your personal affiliate link and ready-made banners, copy, and social assets from your dashboard.',
  },
  {
    number: 3,
    title: 'Earn when readers subscribe',
    body: 'Share your link anywhere. When readers subscribe, you earn recurring commission—tracked and paid out monthly.',
  },
]

export function HowItWorks() {
  return (
    <section className="bg-bg-default">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <SectionHeading
          overline="How It Works"
          title="Three steps to your first commission."
        />
        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {steps.map((step, i) => (
            <Reveal
              key={step.number}
              delay={i * 0.1}
              className="flex flex-col items-start gap-4"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-interactive-primary text-h5 font-semibold text-text-contrast">
                {step.number}
              </div>
              <h3 className="text-h6 font-semibold text-text-primary">
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
