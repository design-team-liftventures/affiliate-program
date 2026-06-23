import { describe, it, expect } from 'vitest'
import { cn } from '@/lib/utils'
import {
  labelFor,
  labelsFor,
  TOPIC_OPTIONS,
  AGE_RANGE_OPTIONS,
} from '@/lib/options'

describe('cn', () => {
  it('joins truthy class names', () => {
    expect(cn('a', 'b')).toBe('a b')
  })

  it('filters out falsy values', () => {
    expect(cn('a', false, null, undefined, 'b')).toBe('a b')
  })
})

describe('option label helpers', () => {
  it('maps a single value to its label', () => {
    expect(labelFor('18-24', AGE_RANGE_OPTIONS)).toBe(
      '18–24 (college / early career)'
    )
  })

  it('falls back to the raw value when unknown', () => {
    expect(labelFor('mystery', AGE_RANGE_OPTIONS)).toBe('mystery')
  })

  it('maps multiple values to labels', () => {
    expect(labelsFor(['fiction', 'classics'], TOPIC_OPTIONS)).toEqual([
      'Fiction & Novels',
      'Classics & Literature',
    ])
  })
})
