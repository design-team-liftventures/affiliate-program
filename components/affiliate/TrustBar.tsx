import { Reveal } from '@/components/shared/Reveal'

function Stars({ className = 'text-[#FFB400]' }: { className?: string }) {
  return (
    <span className={`flex items-center gap-0.5 ${className}`} aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l2.95 5.98 6.6.96-4.78 4.66 1.13 6.57L12 17.98l-5.9 3.1 1.13-6.57L2.45 8.94l6.6-.96L12 2z" />
        </svg>
      ))}
    </span>
  )
}

function Divider() {
  return (
    <span
      className="hidden h-9 w-px shrink-0 bg-border-light lg:block"
      aria-hidden="true"
    />
  )
}

export function TrustBar() {
  return (
    <section className="border-b border-border-light bg-bg-default">
      <Reveal className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-6 px-6 py-6">
        <div className="flex items-center gap-3">
          <svg
            className="h-10 w-10 shrink-0 text-indigo-4"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12 21s-6.7-4.35-9.33-8.05C1.1 10.64 1.5 7.6 3.7 6.13 5.6 4.86 8.1 5.3 9.5 7l.5.63.5-.63c1.4-1.7 3.9-2.14 5.8-.87 2.2 1.47 2.6 4.51.93 6.82C18.7 16.65 12 21 12 21z" />
          </svg>
          <p className="max-w-[260px] text-body-sm font-medium text-text-secondary">
            Bringing readers clarity, confidence, and enjoyment for over 10
            years.
          </p>
        </div>

        <Divider />

        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <span className="text-body-sm font-bold text-text-primary">
              Excellent
            </span>
            <Stars className="text-[#00B67A]" />
          </div>
          <p className="text-caption text-text-secondary">
            <span className="font-semibold text-text-primary">1,018</span>{' '}
            reviews on{' '}
            <span className="font-semibold text-[#00B67A]">★ Trustpilot</span>
          </p>
        </div>

        <Divider />

        <div className="flex items-center gap-3">
          <svg
            className="h-7 w-7 shrink-0 text-[#0D96F6]"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M5 2.5h14A2.5 2.5 0 0121.5 5v14a2.5 2.5 0 01-2.5 2.5H5A2.5 2.5 0 012.5 19V5A2.5 2.5 0 015 2.5zm7 4.2l-3.2 5.5h6.4L12 6.7zm-4.9 8.4l-.7 1.2a.9.9 0 101.56.9l.7-1.2a.9.9 0 00-1.56-.9zm9.8 0a.9.9 0 00-1.56.9l.7 1.2a.9.9 0 101.56-.9l-.7-1.2z" />
          </svg>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="text-body-sm font-bold text-text-primary">4.8</span>
              <Stars />
            </div>
            <span className="text-caption text-text-secondary">In App Store</span>
          </div>
        </div>

        <Divider />

        <div className="flex items-center gap-3">
          <svg
            className="h-7 w-7 shrink-0"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path d="M3.5 2.7v18.6c0 .5.5.8.9.6l10.3-6-3-3L3.5 2.7z" fill="#00D2FF" />
            <path d="M3.5 2.7l8.2 9.2 3-3L4.4 2.1c-.4-.2-.9.1-.9.6z" fill="#00F076" />
            <path d="M14.7 8.9l-3 3 3 3 5.2-3c.5-.3.5-1 0-1.3l-5.2-2.7z" fill="#FFCE00" />
            <path d="M11.7 11.9l-8.2 9.2c.3.2.6.2.9 0l10.3-6-3-3.2z" fill="#FF3A44" />
          </svg>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="text-body-sm font-bold text-text-primary">4.5</span>
              <Stars />
            </div>
            <span className="text-caption text-text-secondary">
              In Google PlayStore
            </span>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
