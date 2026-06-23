'use client'

import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { step1Schema } from '@/lib/validations'
import type { Step1Data } from '@/types/affiliate'
import { useApplyStore } from '@/lib/apply-store'
import { FormShell, FormSection } from './FormShell'
import { TextField } from '@/components/ui/TextField'
import { Button } from '@/components/ui/Button'

export function Step1Form() {
  const router = useRouter()
  const step1 = useApplyStore((s) => s.step1)
  const setStep1 = useApplyStore((s) => s.setStep1)

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<Step1Data>({
    resolver: zodResolver(step1Schema),
    mode: 'onChange',
    defaultValues: step1 ?? {
      firstName: '',
      lastName: '',
      email: '',
      websiteUrl: '',
    },
  })

  const onSubmit = (data: Step1Data) => {
    setStep1(data)
    router.push('/affiliate/apply/step-2')
  }

  return (
    <FormShell
      step={1}
      title="Affiliate Program Application"
      subtitle="Tell us about yourself and your audience. We review every application individually—most get a decision within 5–7 business days."
    >
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <FormSection label="About You">
          <div className="grid gap-6 sm:grid-cols-2">
            <TextField
              label="First name"
              required
              placeholder="First name"
              autoComplete="given-name"
              error={errors.firstName?.message}
              {...register('firstName')}
            />
            <TextField
              label="Last name"
              required
              placeholder="Last name"
              autoComplete="family-name"
              error={errors.lastName?.message}
              {...register('lastName')}
            />
          </div>
          <TextField
            label="Email address"
            required
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
            helperText="Your affiliate account login."
            error={errors.email?.message}
            {...register('email')}
          />
          <TextField
            label="Website or primary channel URL"
            required
            type="url"
            placeholder="https://"
            helperText="Where most of your content lives—blog, YouTube channel, newsletter, etc."
            error={errors.websiteUrl?.message}
            {...register('websiteUrl')}
          />
        </FormSection>

        <div className="mt-8 flex justify-end">
          <Button type="submit" size="lg" disabled={!isValid}>
            Continue →
          </Button>
        </div>
      </form>
    </FormShell>
  )
}
