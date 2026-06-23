import { auth } from '@/lib/auth'
import {
  mockMetrics,
  mockConversions,
  mockTopContent,
  mockAssets,
  mockAffiliateLink,
  mockPayoutAmount,
  mockPayoutDate,
} from '@/lib/mock-data'
import { MetricCard } from '@/components/dashboard/MetricCard'
import { AffiliateLinkBar } from '@/components/dashboard/AffiliateLinkBar'
import { PayoutCallout } from '@/components/dashboard/PayoutCallout'
import { ConversionsTable } from '@/components/dashboard/ConversionsTable'
import { TopContentTable } from '@/components/dashboard/TopContentTable'
import { AssetsGrid } from '@/components/dashboard/AssetsGrid'

export default async function DashboardPage() {
  const session = await auth()
  const firstName = session?.user?.name?.split(' ')[0] ?? 'there'

  return (
    <div className="space-y-10">
      {/* Welcome row */}
      <div>
        <h1 className="text-h4 font-medium text-text-primary">
          Welcome back, {firstName} 👋
        </h1>
        <p className="mt-1 text-body text-text-secondary">
          Here&apos;s how your affiliate account is performing this month.
        </p>
      </div>

      {/* Metric cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {mockMetrics.map((metric) => (
          <MetricCard key={metric.label} metric={metric} />
        ))}
      </div>

      {/* Affiliate link bar */}
      <AffiliateLinkBar url={mockAffiliateLink} />

      {/* Payout callout */}
      <PayoutCallout amount={mockPayoutAmount} date={mockPayoutDate} />

      {/* Two-column row */}
      <div className="grid gap-8 lg:grid-cols-[3fr_2fr]">
        <ConversionsTable rows={mockConversions} />
        <TopContentTable items={mockTopContent} />
      </div>

      {/* Promotional assets */}
      <AssetsGrid assets={mockAssets} />
    </div>
  )
}
