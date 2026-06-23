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
  { label: 'Cookie window', value: '30 days' },
  { label: 'Pending period', value: '30 days' },
  { label: 'Payouts', value: 'Monthly' },
]

export function CommissionTable() {
  return (
    <section id="commission" className="scroll-mt-20 bg-indigo-2">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <SectionHeading
          tone="light"
          overline="Commission Structure"
          title="Commissions that grow with your readers."
          description="We pay on a recurring revenue share—because a subscriber who stays earns you commission every month they keep their plan."
        />

        <div className="mx-auto mt-12 grid max-w-3xl gap-6 sm:grid-cols-2">
          {plans.map((plan, i) => (
            <Reveal
              key={plan.name}
              delay={i * 0.1}
              className="flex flex-col gap-2 rounded-2xl bg-bg-default p-8"
            >
              <div className="flex items-center justify-between">
                <span className="text-subtitle font-semibold text-text-primary">
                  {plan.name}
                </span>
                {plan.highlight && (
                  <Badge variant="primary" className="bg-indigo-6 text-indigo-1">Higher commission</Badge>
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

        <Reveal className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl bg-white/10 p-5 text-center backdrop-blur-sm"
            >
              <p className="text-h6 font-semibold text-text-contrast">
                {stat.value}
              </p>
              <p className="mt-1 text-caption text-text-contrast-secondary">
                {stat.label}
              </p>
            </div>
          ))}
        </Reveal>

        <p className="mx-auto mt-8 max-w-2xl text-center text-caption text-text-contrast-secondary">
          Commission rates and plan names are illustrative for this preview.
          Final terms are confirmed in your SuperSummary affiliate agreement.
        </p>
      </div>
    </section>
  )
}
