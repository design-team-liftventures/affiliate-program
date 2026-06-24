import type { Metadata } from 'next'
import { SiteNav } from '@/components/shared/SiteNav'
import { SiteFooter } from '@/components/shared/SiteFooter'
import { HeroSection } from '@/components/affiliate/HeroSection'
import { TrustBar } from '@/components/affiliate/TrustBar'
import { WhySection } from '@/components/affiliate/WhySection'
import { WhoSection } from '@/components/affiliate/WhoSection'
import { HowItWorks } from '@/components/affiliate/HowItWorks'
import { CommissionTable } from '@/components/affiliate/CommissionTable'
import { ProgramTerms } from '@/components/affiliate/ProgramTerms'
import { FaqAccordion } from '@/components/affiliate/FaqAccordion'
import { ApplyCtaSection } from '@/components/affiliate/ApplyCtaSection'

export const metadata: Metadata = {
  title: 'SuperSummary Affiliate Program — Earn by sharing books',
  description:
    'Join the SuperSummary affiliate program. Earn recurring commissions when you refer new subscribers to our Study Guides, Plot Summaries, and Teaching Guides. Apply today.',
}

export default function AffiliateLandingPage() {
  return (
    <>
      <SiteNav />
      <main id="main-content">
        <HeroSection />
        <TrustBar />
        <WhySection />
        <WhoSection />
        <HowItWorks />
        <CommissionTable />
        <ProgramTerms />
        <FaqAccordion />
        <ApplyCtaSection />
      </main>
      <SiteFooter />
    </>
  )
}
