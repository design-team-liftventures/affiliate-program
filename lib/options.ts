import type { Option } from '@/types/affiliate'

export const TOPIC_OPTIONS: Option[] = [
  { value: 'fiction', label: 'Fiction & Novels' },
  { value: 'non-fiction', label: 'Non-Fiction' },
  { value: 'ya', label: 'YA & Middle Grade' },
  { value: 'classics', label: 'Classics & Literature' },
  { value: 'academic', label: 'Academic / AP Courses' },
  { value: 'science-history', label: 'Science & History' },
  { value: 'biographies', label: 'Biographies & Memoir' },
  { value: 'other', label: 'Other' },
]

export const LANGUAGE_OPTIONS: Option[] = [
  { value: 'english', label: 'English' },
  { value: 'spanish', label: 'Spanish' },
  { value: 'french', label: 'French' },
  { value: 'german', label: 'German' },
  { value: 'portuguese', label: 'Portuguese' },
  { value: 'italian', label: 'Italian' },
  { value: 'other', label: 'Other' },
]

export const AGE_RANGE_OPTIONS: Option[] = [
  { value: 'under-18', label: 'Under 18 (secondary students)' },
  { value: '18-24', label: '18–24 (college / early career)' },
  { value: '25-44', label: '25–44 (adult readers & educators)' },
  { value: '45-plus', label: '45+ (lifelong learners)' },
]

export const CHANNEL_OPTIONS: Option[] = [
  { value: 'blog', label: 'Blog / website' },
  { value: 'newsletter', label: 'Email newsletter' },
  { value: 'youtube', label: 'YouTube' },
  { value: 'tiktok-instagram', label: 'TikTok / Instagram' },
  { value: 'podcast', label: 'Podcast' },
  { value: 'twitter', label: 'Twitter / X' },
  { value: 'substack', label: 'Substack' },
  { value: 'other', label: 'Other' },
]

export const FREQUENCY_OPTIONS: Option[] = [
  { value: 'few-per-month', label: 'A few times a month' },
  { value: 'weekly', label: 'Weekly' },
  { value: 'several-per-week', label: 'Several times per week' },
  { value: 'daily', label: 'Daily' },
]

export function labelsFor(values: string[], options: Option[]): string[] {
  return values.map(
    (v) => options.find((o) => o.value === v)?.label ?? v
  )
}

export function labelFor(value: string, options: Option[]): string {
  return options.find((o) => o.value === value)?.label ?? value
}
