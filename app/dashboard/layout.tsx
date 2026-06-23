import { auth } from '@/lib/auth'
import { TopNav } from '@/components/dashboard/TopNav'

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await auth()
  const name = session?.user?.name ?? 'Affiliate Partner'

  return (
    <div className="min-h-screen bg-bg-paper">
      <TopNav name={name} />
      <main id="main-content" className="mx-auto max-w-7xl px-6 py-10">
        {children}
      </main>
    </div>
  )
}
