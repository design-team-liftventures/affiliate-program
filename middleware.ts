import { auth } from './lib/auth'

export default auth((req) => {
  const isLoggedIn = !!req.auth
  const isDashboard = req.nextUrl.pathname.startsWith('/dashboard')
  if (isDashboard && !isLoggedIn) {
    const loginUrl = new URL('/affiliate/login', req.nextUrl)
    loginUrl.searchParams.set('callbackUrl', req.nextUrl.pathname)
    return Response.redirect(loginUrl)
  }
})

export const config = {
  matcher: ['/dashboard/:path*'],
}
