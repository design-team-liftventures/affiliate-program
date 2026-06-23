import type {
  Asset,
  Conversion,
  Metric,
  TopContentItem,
} from '@/types/affiliate'

export const mockConversions: Conversion[] = [
  { date: 'Jun 28', plan: 'Plus', status: 'Approved', commission: '$7.50', payout: 'Jul 15' },
  { date: 'Jun 25', plan: 'Essentials', status: 'Approved', commission: '$4.00', payout: 'Jul 15' },
  { date: 'Jun 22', plan: 'Plus', status: 'Approved', commission: '$7.50', payout: 'Jul 15' },
  { date: 'Jun 18', plan: 'Plus', status: 'Pending', commission: '$7.50', payout: '—' },
  { date: 'Jun 11', plan: 'Essentials', status: 'Pending', commission: '$4.00', payout: '—' },
]

export const mockTopContent: TopContentItem[] = [
  { rank: 1, title: 'Best study guide sites 2024', clicks: 412, conversions: 14 },
  { rank: 2, title: 'SparkNotes vs SuperSummary', clicks: 311, conversions: 11 },
  { rank: 3, title: 'Jun newsletter: reading tools', clicks: 244, conversions: 8 },
  { rank: 4, title: 'SuperSummary full review post', clicks: 149, conversions: 5 },
]

export const mockAssets: Asset[] = [
  { type: 'Banner', label: 'Web banner', spec: '728×90 px', icon: '🖼' },
  { type: 'Banner', label: 'Square banner', spec: '300×250 px', icon: '🖼' },
  { type: 'Copy', label: 'Email copy block', spec: 'Ready to paste', icon: '✉️' },
  { type: 'Social', label: 'Social card', spec: '1080×1080 px', icon: '📱' },
  { type: 'Copy', label: 'Suggested copy', spec: '3 templates', icon: '📝' },
]

export const mockMetrics: Metric[] = [
  {
    label: 'Monthly Clicks',
    value: '1,247',
    change: '↑ 12% vs last month',
    trend: 'up',
    accentClass: 'bg-interactive-primary',
  },
  {
    label: 'Monthly Conversions',
    value: '38',
    change: '↑ 8% vs last month',
    trend: 'up',
    accentClass: 'bg-system-success',
  },
  {
    label: 'Earnings this month',
    value: '$114.00',
    change: '30% commission rate',
    trend: 'neutral',
    accentClass: 'bg-amber-400',
  },
  {
    label: 'Total paid out',
    value: '$320.00',
    change: 'Across 3 payments',
    trend: 'neutral',
    accentClass: 'bg-indigo-3',
  },
]

export const mockAffiliateLink = 'https://supersummary.com?ref=literaryamanda'
export const mockPayoutDate = 'July 15'
export const mockPayoutAmount = '$160.00'
