import { describe, it, expect } from 'vitest'
import {
  step1Schema,
  step2Schema,
  step3Schema,
  step4Schema,
} from '@/lib/validations'

describe('step1Schema', () => {
  it('accepts valid details', () => {
    const result = step1Schema.safeParse({
      firstName: 'Amanda',
      lastName: 'Costa',
      email: 'amanda@example.com',
      websiteUrl: 'https://myblog.com',
    })
    expect(result.success).toBe(true)
  })

  it('rejects an invalid email', () => {
    const result = step1Schema.safeParse({
      firstName: 'Amanda',
      lastName: 'Costa',
      email: 'not-an-email',
      websiteUrl: 'https://myblog.com',
    })
    expect(result.success).toBe(false)
  })

  it('rejects a non-URL website', () => {
    const result = step1Schema.safeParse({
      firstName: 'Amanda',
      lastName: 'Costa',
      email: 'amanda@example.com',
      websiteUrl: 'myblog',
    })
    expect(result.success).toBe(false)
  })
})

describe('step2Schema', () => {
  const base = {
    topics: ['fiction'],
    sampleUrl: 'https://myblog.com/post',
    language: 'english',
    ageRange: '18-24' as const,
    audienceDesc:
      'My readers are college students who love classic and contemporary fiction and book club picks.',
  }

  it('accepts a complete audience step', () => {
    expect(step2Schema.safeParse(base).success).toBe(true)
  })

  it('requires at least one topic', () => {
    expect(step2Schema.safeParse({ ...base, topics: [] }).success).toBe(false)
  })

  it('requires a sufficiently long description', () => {
    expect(
      step2Schema.safeParse({ ...base, audienceDesc: 'Too short.' }).success
    ).toBe(false)
  })
})

describe('step3Schema', () => {
  const base = {
    channels: ['blog'],
    frequency: 'weekly' as const,
    promotionPlan:
      'I will publish a dedicated review post, include SuperSummary in my monthly newsletter, and add a banner to my resources page.',
    priorAffiliate: 'yes' as const,
    priorPrograms: 'Amazon Associates',
    couponSite: 'no' as const,
  }

  it('accepts a valid promotion step', () => {
    expect(step3Schema.safeParse(base).success).toBe(true)
  })

  it('blocks coupon/cashback sites', () => {
    const result = step3Schema.safeParse({ ...base, couponSite: 'yes' })
    expect(result.success).toBe(false)
    if (!result.success) {
      expect(result.error.issues[0].path).toContain('couponSite')
    }
  })

  it('requires at least one channel', () => {
    expect(step3Schema.safeParse({ ...base, channels: [] }).success).toBe(false)
  })
})

describe('step4Schema', () => {
  it('requires both consents to be true', () => {
    expect(
      step4Schema.safeParse({ consentFTC: true, consentAcademic: true }).success
    ).toBe(true)
    expect(
      step4Schema.safeParse({ consentFTC: true, consentAcademic: false })
        .success
    ).toBe(false)
    expect(
      step4Schema.safeParse({ consentFTC: false, consentAcademic: false })
        .success
    ).toBe(false)
  })
})
