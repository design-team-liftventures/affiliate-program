'use client'

import { useRouter } from 'next/navigation'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { step2Schema } from '@/lib/validations'
import type { Step2Data } from '@/types/affiliate'
import { useApplyStore } from '@/lib/apply-store'
import {
  TOPIC_OPTIONS,
  LANGUAGE_OPTIONS,
  AGE_RANGE_OPTIONS,
} from '@/lib/options'
import { FormShell, FormSection } from './FormShell'
import { TextField } from '@/components/ui/TextField'
import { Textarea } from '@/components/ui/Textarea'
import { Select } from '@/components/ui/Select'
import { Checkbox } from '@/components/ui/Checkbox'
import { RadioGroup } from '@/components/ui/RadioGroup'
import { Button } from '@/components/ui/Button'

export function Step2Form() {
  const router = useRouter()
  const step2 = useApplyStore((s) => s.step2)
  const setStep2 = useApplyStore((s) => s.setStep2)

  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<Step2Data>({
    resolver: zodResolver(step2Schema),
    mode: 'onChange',
    defaultValues: step2 ?? {
      topics: ['fiction', 'classics'],
      sampleUrl: '',
      language: '',
      ageRange: '18-24',
      audienceDesc: '',
    },
  })

  const onSubmit = (data: Step2Data) => {
    setStep2(data)
    router.push('/affiliate/apply/step-3')
  }

  return (
    <FormShell
      step={2}
      title="Tell us about your content and your audience."
      subtitle="This helps us match you with the right promotional materials and confirm it's a good fit."
    >
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <FormSection label="Your Content">
          <fieldset>
            <legend className="text-caption-sm font-semibold text-text-primary">
              Topics you cover
              <span className="ml-0.5 text-system-error" aria-hidden="true">
                *
              </span>
            </legend>
            <p className="mt-1 text-caption text-text-secondary">
              Select all that apply.
            </p>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {TOPIC_OPTIONS.map((opt) => (
                <Checkbox
                  key={opt.value}
                  label={opt.label}
                  value={opt.value}
                  {...register('topics')}
                />
              ))}
            </div>
            {errors.topics && (
              <p className="mt-1 text-caption text-system-error">
                {errors.topics.message}
              </p>
            )}
          </fieldset>

          <TextField
            label="Link to a sample piece of content"
            required
            type="url"
            placeholder="https://"
            helperText="A post, video, or newsletter issue — your best recent work."
            error={errors.sampleUrl?.message}
            {...register('sampleUrl')}
          />
        </FormSection>

        <div className="mt-6">
          <FormSection label="Audience Profile">
            <Select
              label="Primary language"
              required
              placeholder="Select a language"
              options={LANGUAGE_OPTIONS}
              helperText="The language most of your content is published in."
              error={errors.language?.message}
              {...register('language')}
            />

            <Controller
              control={control}
              name="ageRange"
              render={({ field }) => (
                <RadioGroup
                  label="Primary age range of your audience"
                  required
                  name="ageRange"
                  options={AGE_RANGE_OPTIONS}
                  value={field.value}
                  onChange={field.onChange}
                  helperText="Choose the group that best describes your core readers."
                  error={errors.ageRange?.message}
                />
              )}
            />

            <Textarea
              label="Describe your audience in your own words"
              required
              rows={4}
              placeholder="Who are they, what do they read, and what brings them to your content? What do they have in common with SuperSummary's users?"
              helperText="2–4 sentences. Focus on who they are, not how many there are."
              error={errors.audienceDesc?.message}
              {...register('audienceDesc')}
            />
          </FormSection>
        </div>

        <div className="mt-8 flex items-center justify-between">
          <Button
            type="button"
            variant="secondary"
            size="lg"
            onClick={() => router.push('/affiliate/apply')}
          >
            ← Back
          </Button>
          <Button type="submit" size="lg" disabled={!isValid}>
            Continue to Promotion →
          </Button>
        </div>
      </form>
    </FormShell>
  )
}
