export function PayoutCallout({
  amount,
  date,
}: {
  amount: string
  date: string
}) {
  return (
    <div className="flex items-start gap-3 rounded-xl border border-system-success/30 bg-system-success-bg p-4">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-system-success/15">
        <svg
          className="h-5 w-5 text-system-success"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="4 12 10 18 20 6" />
        </svg>
      </span>
      <div>
        <p className="text-body font-semibold text-text-primary">
          Your July payout of {amount} is scheduled for {date}
        </p>
        <p className="mt-0.5 text-body-sm text-text-secondary">
          Commissions from June 1–30 are approved. Payment will be sent to your
          registered PayPal account.
        </p>
      </div>
    </div>
  )
}
