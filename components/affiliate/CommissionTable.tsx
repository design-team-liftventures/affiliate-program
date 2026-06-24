import { SectionHeading } from './SectionHeading'
import { Reveal } from '@/components/shared/Reveal'
import { Badge } from '@/components/ui/Badge'

const plans = [
  {
    name: 'Essentials',
    rate: '20%',
    note: 'Recurring · up to 12 months',
    highlight: false,
  },
  {
    name: 'Plus',
    rate: '25%',
    note: 'Recurring · up to 12 months',
    highlight: true,
  },
]

const stats = [
  { value: '30 days', label: 'Cookie window' },
  { value: '30 days', label: 'Pending period' },
  { value: 'Monthly', label: 'Payout schedule' },
]

export function CommissionTable() {
  return (
    <section id="commission" className="scroll-mt-20 bg-indigo-2">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeading
          tone="light"
          overline="Commission Structure"
          title="Recurring commissions—because a reader who stays earns you more."
        />

        <div className="mx-auto mt-16 grid max-w-2xl gap-6 sm:grid-cols-2">
          {plans.map((plan, i) => (
            <Reveal
              key={plan.name}
              delay={i * 0.1}
              className="flex flex-col gap-2 rounded-2xl bg-bg-default p-8"
            >
              <div className="flex items-center gap-3">
                <span className="text-subtitle font-semibold text-text-primary">
                  {plan.name}
                </span>
                {plan.highlight && (
                  <Badge variant="primary" className="bg-indigo-6 text-indigo-1">
                    Higher commission
                  </Badge>
                )}
              </div>
              <span className="text-h2 font-medium text-indigo-1">
                {plan.rate}
              </span>
              <span className="text-body-sm text-text-secondary">
                {plan.note}
              </span>
            </Reveal>
          ))}
        </div>

        <Reveal className="mx-auto mt-12 flex flex-wrap items-start justify-center gap-x-16 gap-y-6">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-h5 font-medium text-text-contrast">
                {stat.value}
              </p>
              <p className="mt-1 text-caption text-text-contrast-secondary">
                {stat.label}
              </p>
            </div>
          ))}
        </Reveal>

        <p className="mx-auto mt-12 max-w-2xl text-center text-caption text-text-contrast-secondary">
          Commissions apply to new subscribers only—readers who have never
          previously held a SuperSummary subscription.
        </p>
      </div>
    </section>
  )
}
