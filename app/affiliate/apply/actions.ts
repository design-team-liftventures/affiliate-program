'use server'

import { redirect } from 'next/navigation'
import { fullApplicationSchema } from '@/lib/validations'

export async function submitApplication(formData: unknown) {
  const result = fullApplicationSchema.safeParse(formData)
  if (!result.success) {
    return { error: 'Validation failed', issues: result.error.issues }
  }
  // TODO: Replace with real database/API call
  console.log('[Affiliate Application]', JSON.stringify(result.data, null, 2))
  redirect('/affiliate/apply/success')
}
