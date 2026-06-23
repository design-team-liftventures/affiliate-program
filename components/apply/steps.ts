export const STEP_LABELS = [
  'Your details',
  'Your audience',
  'Promotion',
  'Review',
] as const

export const STEP_PATHS = [
  '/affiliate/apply',
  '/affiliate/apply/step-2',
  '/affiliate/apply/step-3',
  '/affiliate/apply/step-4',
] as const

export function stepFromPathname(pathname: string): 1 | 2 | 3 | 4 {
  if (pathname.endsWith('/step-2')) return 2
  if (pathname.endsWith('/step-3')) return 3
  if (pathname.endsWith('/step-4')) return 4
  return 1
}
