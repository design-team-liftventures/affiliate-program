import type { z } from 'zod'
import type {
  step1Schema,
  step2Schema,
  step3Schema,
  step4Schema,
  fullApplicationSchema,
} from '@/lib/validations'

export type Step1Data = z.infer<typeof step1Schema>
export type Step2Data = z.infer<typeof step2Schema>
export type Step3Data = z.infer<typeof step3Schema>
export type Step4Data = z.infer<typeof step4Schema>
export type FullApplication = z.infer<typeof fullApplicationSchema>

export type AgeRange = Step2Data['ageRange']
export type Frequency = Step3Data['frequency']
export type YesNo = 'yes' | 'no'

export interface Option {
  value: string
  label: string
}

export type Trend = 'up' | 'down' | 'neutral'

export interface Metric {
  label: string
  value: string
  change: string
  trend: Trend
  accentClass: string
}

export interface Conversion {
  date: string
  plan: string
  status: 'Approved' | 'Pending'
  commission: string
  payout: string
}

export interface TopContentItem {
  rank: number
  title: string
  clicks: number
  conversions: number
}

export interface Asset {
  type: string
  label: string
  spec: string
  icon: string
}
