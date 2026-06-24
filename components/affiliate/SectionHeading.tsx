import { cn } from '@/lib/utils'
import { Reveal } from '@/components/shared/Reveal'

export function SectionHeading({
  overline,
  title,
  description,
  align = 'center',
  tone = 'dark',
  overlineClassName,
  className,
}: {
  overline: string
  title: string
  description?: string
  align?: 'center' | 'left'
  tone?: 'dark' | 'light'
  overlineClassName?: string
  className?: string
}) {
  const isLight = tone === 'light'
  return (
    <Reveal
      className={cn(
        'flex flex-col gap-4',
        align === 'center' ? 'items-center text-center' : 'items-start text-left',
        className
      )}
    >
      <span
        className={cn(
          'text-caption-sm font-semibold uppercase tracking-widest',
          isLight ? 'text-text-contrast/70' : 'text-brand-main',
          overlineClassName
        )}
      >
        {overline}
      </span>
      <h2
        className={cn(
          'text-h3 font-medium md:text-display-h2',
          isLight ? 'text-text-contrast' : 'text-text-primary'
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'max-w-3xl text-body-lg',
            isLight ? 'text-text-contrast-secondary' : 'text-text-secondary'
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  )
}
