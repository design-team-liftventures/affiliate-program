'use client'

import { useRouter } from 'next/navigation'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { step3Schema } from '@/lib/validations'
import type { Step3Data } from '@/types/affiliate'
import { useApplyStore } from '@/lib/apply-store'
import { CHANNEL_OPTIONS, FREQUENCY_OPTIONS } from '@/lib/options'
import { FormShell, FormSection } from './FormShell'
import { Textarea } from '@/components/ui/Textarea'
import { TextField } from '@/components/ui/TextField'
import { Checkbox } from '@/components/ui/Checkbox'
import { RadioGroup } from '@/components/ui/RadioGroup'
import { Button } from '@/components/ui/Button'

const PRIOR_OPTIONS = [
  { value: 'yes', label: "Yes, I've worked with other affiliate programs" },
  { value: 'no', label: 'No, this would be my first' },
]

const COUPON_OPTIONS = [
  { value: 'no', label: "No — I don't operate a coupon or cashback site" },
  { value: 'yes', label: 'Yes' },
]

export function Step3Form() {
  const router = useRouter()
  const step3 = useApplyStore((s) => s.step3)
  const setStep3 = useApplyStore((s) => s.setStep3)

  const {
    register,
    control,
    watch,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<Step3Data>({
    resolver: zodResolver(step3Schema),
    mode: 'onChange',
    defaultValues: step3 ?? {
      channels: ['blog', 'newsletter'],
      frequency: 'weekly',
      promotionPlan: '',
      priorAffiliate: 'yes',
      priorPrograms: '',
      couponSite: 'no',
    },
  })

  const priorAffiliate = watch('priorAffiliate')
  const couponSite = watch('couponSite')
  const couponBlocked = couponSite === 'yes'

  const onSubmit = (data: Step3Data) => {
    setStep3(data)
    router.push('/affiliate/apply/step-4')
  }

  return (
    <FormShell
      step={3}
      title="Where you'll promote SuperSummary."
      subtitle="Tell us how you plan to share your link so we can confirm it's a good fit for the program."
    >
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <FormSection label="Promotion Channels">
          <fieldset>
            <legend className="text-caption-sm font-semibold text-text-primary">
              Where will you publish content with your affiliate link?
              <span className="ml-0.5 text-system-error" aria-hidden="true">
                *
              </span>
            </legend>
            <p className="mt-1 text-caption text-text-secondary">
              Select all that apply.
            </p>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {CHANNEL_OPTIONS.map((opt) => (
                <Checkbox
                  key={opt.value}
                  label={opt.label}
                  value={opt.value}
                  {...register('channels')}
                />
              ))}
            </div>
            {errors.channels && (
              <p className="mt-1 text-caption text-system-error">
                {errors.channels.message}
              </p>
            )}
          </fieldset>

          <Controller
            control={control}
            name="frequency"
            render={({ field }) => (
              <RadioGroup
                label="How often do you publish content?"
                required
                name="frequency"
                options={FREQUENCY_OPTIONS}
                value={field.value}
                onChange={field.onChange}
                helperText="Approximate frequency across all your channels."
                error={errors.frequency?.message}
              />
            )}
          />

          <Textarea
            label="How do you plan to promote SuperSummary?"
            required
            rows={4}
            placeholder="Describe the content and channels you'll use to share your affiliate link."
            helperText="2–4 sentences. Vague answers like 'social media posts' slow down review."
            error={errors.promotionPlan?.message}
            {...register('promotionPlan')}
          />
        </FormSection>

        <div className="mt-6">
          <FormSection label="Affiliate Experience">
            <Controller
              control={control}
              name="priorAffiliate"
              render={({ field }) => (
                <RadioGroup
                  label="Have you promoted affiliate programs before?"
                  name="priorAffiliate"
                  options={PRIOR_OPTIONS}
                  value={field.value}
                  onChange={field.onChange}
                  error={errors.priorAffiliate?.message}
                />
              )}
            />

            {priorAffiliate === 'yes' && (
              <TextField
                label="Which programs? (optional)"
                placeholder="e.g. Amazon Associates, Book Depository…"
                {...register('priorPrograms')}
              />
            )}

            <Controller
              control={control}
              name="couponSite"
              render={({ field }) => (
                <RadioGroup
                  label="Do you operate a coupon, cashback, or loyalty site?"
                  required
                  name="couponSite"
                  options={COUPON_OPTIONS}
                  value={field.value}
                  onChange={field.onChange}
                  helperText="Coupon and cashback sites are not eligible for this program."
                />
              )}
            />

            {couponBlocked && (
              <div
                role="alert"
                className="flex items-start gap-2 rounded-md border border-system-error/30 bg-system-error-bg p-4 text-body-sm text-system-error"
              >
                <span aria-hidden="true">⚠</span>
                <span>
                  Coupon and cashback sites are not eligible. You won&apos;t be
                  able to continue with this answer.
                </span>
              </div>
            )}
          </FormSection>
        </div>

        <div className="mt-8 flex items-center justify-between">
          <Button
            type="button"
            variant="secondary"
            size="lg"
            onClick={() => router.push('/affiliate/apply/step-2')}
          >
            ← Back
          </Button>
          <Button type="submit" size="lg" disabled={!isValid || couponBlocked}>
            Continue to Review →
          </Button>
        </div>
      </form>
    </FormShell>
  )
}
