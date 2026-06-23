'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { step4Schema } from '@/lib/validations'
import type { Step4Data } from '@/types/affiliate'
import { useApplyStore } from '@/lib/apply-store'
import {
  TOPIC_OPTIONS,
  CHANNEL_OPTIONS,
  LANGUAGE_OPTIONS,
  AGE_RANGE_OPTIONS,
  FREQUENCY_OPTIONS,
  labelFor,
  labelsFor,
} from '@/lib/options'
import { submitApplication } from '@/app/affiliate/apply/actions'
import { FormShell } from './FormShell'
import { Checkbox } from '@/components/ui/Checkbox'
import { Button } from '@/components/ui/Button'

function SummaryCard({
  title,
  editLabel,
  editHref,
  rows,
}: {
  title: string
  editLabel: string
  editHref: string
  rows: Array<{ label: string; value: string }>
}) {
  return (
    <div className="rounded-xl border border-border-light bg-bg-paper p-6">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-caption-sm font-semibold uppercase tracking-widest text-interactive-primary">
          {title}
        </h2>
        <Link
          href={editHref}
          className="rounded-sm text-caption font-semibold text-interactive-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-interactive-primary"
        >
          ← {editLabel}
        </Link>
      </div>
      <dl className="mt-4 space-y-3">
        {rows.map((row) => (
          <div key={row.label} className="grid gap-1 sm:grid-cols-[160px_1fr]">
            <dt className="text-body-sm font-semibold text-text-secondary">
              {row.label}
            </dt>
            <dd className="text-body-sm text-text-primary">
              {row.value || '—'}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  )
}

export function Step4Review() {
  const { step1, step2, step3, reset } = useApplyStore()
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [submitting, setSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<Step4Data>({
    resolver: zodResolver(step4Schema),
    mode: 'onChange',
    defaultValues: { consentFTC: undefined, consentAcademic: undefined },
  })

  if (!step1 || !step2 || !step3) {
    return (
      <FormShell
        step={4}
        title="One last look before you submit."
        subtitle="It looks like some steps are incomplete. Start from the beginning to finish your application."
      >
        <Link href="/affiliate/apply">
          <Button size="lg">Start application →</Button>
        </Link>
      </FormShell>
    )
  }

  const onSubmit = async () => {
    setSubmitError(null)
    setSubmitting(true)
    const payload = {
      ...step1,
      ...step2,
      ...step3,
      consentFTC: true as const,
      consentAcademic: true as const,
    }
    try {
      const result = await submitApplication(payload)
      // A successful submission redirects server-side; reaching here with an
      // error result means validation failed.
      if (result?.error) {
        setSubmitError(
          'Something went wrong submitting your application. Please review your answers and try again.'
        )
        setSubmitting(false)
        return
      }
      reset()
    } catch {
      // redirect() throws a control-flow signal that Next handles; only real
      // failures land here.
      setSubmitError('Network error. Please try again.')
      setSubmitting(false)
    }
  }

  return (
    <FormShell
      step={4}
      title="One last look before you submit."
      subtitle="Review your answers below. If anything looks wrong, go back and edit. Once you submit, we'll review your application and get back to you within 5–7 business days."
    >
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="space-y-5">
          <SummaryCard
            title="Your Details"
            editLabel="Edit your details"
            editHref="/affiliate/apply"
            rows={[
              { label: 'Name', value: `${step1.firstName} ${step1.lastName}` },
              { label: 'Email', value: step1.email },
              { label: 'Website', value: step1.websiteUrl },
            ]}
          />
          <SummaryCard
            title="Your Audience"
            editLabel="Edit your audience"
            editHref="/affiliate/apply/step-2"
            rows={[
              {
                label: 'Topics',
                value: labelsFor(step2.topics, TOPIC_OPTIONS).join(', '),
              },
              { label: 'Sample URL', value: step2.sampleUrl },
              {
                label: 'Language',
                value: labelFor(step2.language, LANGUAGE_OPTIONS),
              },
              {
                label: 'Age range',
                value: labelFor(step2.ageRange, AGE_RANGE_OPTIONS),
              },
              { label: 'About', value: step2.audienceDesc },
            ]}
          />
          <SummaryCard
            title="Promotion Plan"
            editLabel="Edit your promotion"
            editHref="/affiliate/apply/step-3"
            rows={[
              {
                label: 'Channels',
                value: labelsFor(step3.channels, CHANNEL_OPTIONS).join(', '),
              },
              {
                label: 'Frequency',
                value: labelFor(step3.frequency, FREQUENCY_OPTIONS),
              },
              { label: 'Plan', value: step3.promotionPlan },
              {
                label: 'Prior',
                value:
                  step3.priorAffiliate === 'yes'
                    ? step3.priorPrograms || 'Yes'
                    : 'No',
              },
              { label: 'Coupon site', value: step3.couponSite === 'yes' ? 'Yes' : 'No' },
            ]}
          />
        </div>

        <div className="mt-8 space-y-4 border-t border-border-light pt-6">
          <Checkbox
            label="I confirm my content will comply with SuperSummary's affiliate guidelines, including FTC disclosure requirements."
            {...register('consentFTC')}
          />
          <Checkbox
            label="I understand SuperSummary is a supplement to reading—not a replacement—and I won't position it as a way to skip books."
            {...register('consentAcademic')}
          />
        </div>

        {submitError && (
          <div
            role="alert"
            className="mt-6 rounded-md border border-system-error/30 bg-system-error-bg p-4 text-body-sm text-system-error"
          >
            {submitError}
          </div>
        )}

        <div className="mt-8">
          <Button
            type="submit"
            size="lg"
            disabled={!isValid}
            loading={submitting}
          >
            Submit application
          </Button>
          <p className="mt-4 text-caption text-text-secondary">
            By submitting, you agree to our Affiliate Partner Terms and Privacy
            Policy. We&apos;ll be in touch within 5–7 business days.
          </p>
        </div>
      </form>
    </FormShell>
  )
}
