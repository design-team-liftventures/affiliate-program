import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'

const MOCK_USER = {
  id: 'mock-001',
  name: 'Maria Costa',
  email: 'partner@example.com',
  password: 'affiliate2024', // Mock only — never store plain passwords in production
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  // A fallback secret keeps the mock build deployable with zero manual env
  // setup. Set AUTH_SECRET in the environment for any real deployment.
  secret: process.env.AUTH_SECRET ?? 'supersummary-affiliate-mock-secret',
  trustHost: true,
  session: { strategy: 'jwt' },
  providers: [
    Credentials({
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (
          credentials?.email === MOCK_USER.email &&
          credentials?.password === MOCK_USER.password
        ) {
          return {
            id: MOCK_USER.id,
            name: MOCK_USER.name,
            email: MOCK_USER.email,
          }
        }
        return null
      },
    }),
  ],
  pages: { signIn: '/affiliate/login' },
  callbacks: {
    authorized: ({ auth }) => !!auth,
  },
})
