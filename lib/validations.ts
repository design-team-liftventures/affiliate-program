import { z } from 'zod'

export const step1Schema = z.object({
  firstName: z.string().min(1, 'Required'),
  lastName: z.string().min(1, 'Required'),
  email: z.string().email('Enter a valid email address'),
  websiteUrl: z.string().url('Enter a valid URL starting with https://'),
})

export const step2Schema = z.object({
  topics: z.array(z.string()).min(1, 'Select at least one topic'),
  sampleUrl: z.string().url('Enter a valid URL'),
  language: z.string().min(1, 'Required'),
  ageRange: z.enum(['under-18', '18-24', '25-44', '45-plus']),
  audienceDesc: z
    .string()
    .min(50, 'Please write at least 2 sentences (50+ characters)')
    .max(1000),
})

export const step3Schema = z
  .object({
    channels: z.array(z.string()).min(1, 'Select at least one channel'),
    frequency: z.enum(['few-per-month', 'weekly', 'several-per-week', 'daily']),
    promotionPlan: z
      .string()
      .min(80, 'Please write at least 2 sentences (80+ characters)')
      .max(1000),
    priorAffiliate: z.enum(['yes', 'no']),
    priorPrograms: z.string().optional(),
    couponSite: z.enum(['no', 'yes']),
  })
  .refine((d) => d.couponSite !== 'yes', {
    message: 'Coupon and cashback sites are not eligible for this program.',
    path: ['couponSite'],
  })

export const step4Schema = z.object({
  consentFTC: z.literal(true, {
    errorMap: () => ({ message: 'Required to proceed' }),
  }),
  consentAcademic: z.literal(true, {
    errorMap: () => ({ message: 'Required to proceed' }),
  }),
})

// step3Schema is a ZodEffects (because of .refine); use its inner object for
// merging into the full application schema.
export const fullApplicationSchema = step1Schema
  .merge(step2Schema)
  .merge(step3Schema.innerType())
  .merge(step4Schema)
