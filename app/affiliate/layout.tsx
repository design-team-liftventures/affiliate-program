// Pass-through layout. The marketing chrome (SiteNav + SiteFooter) lives on the
// landing page only, so the nested /affiliate/apply and /affiliate/login routes
// can render their own dedicated shells.
export default function AffiliateLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
