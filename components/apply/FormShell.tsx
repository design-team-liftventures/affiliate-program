export function FormShell({
  step,
  title,
  subtitle,
  children,
}: {
  step: 1 | 2 | 3 | 4
  title: string
  subtitle: string
  children: React.ReactNode
}) {
  const labels = ['Your Details', 'Your Audience', 'Promotion', 'Review']
  return (
    <div className="mx-auto my-12 max-w-[800px] rounded-2xl bg-bg-default p-8 shadow-elevation-1 md:p-12">
      <p className="text-caption-sm font-semibold uppercase tracking-widest text-text-secondary">
        Step {step} of 4 — {labels[step - 1]}
      </p>
      <h1 className="mt-2 text-h5 font-medium text-text-primary md:text-h4">
        {title}
      </h1>
      <p className="mt-3 text-body text-text-secondary">{subtitle}</p>
      <div className="mt-8">{children}</div>
    </div>
  )
}

export function FormSection({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <div className="border-t border-border-light pt-6">
      <p className="mb-5 text-caption-sm font-semibold uppercase tracking-widest text-interactive-primary">
        {label}
      </p>
      <div className="space-y-6">{children}</div>
    </div>
  )
}
