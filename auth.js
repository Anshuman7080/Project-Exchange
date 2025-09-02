import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      profile(profile) {
        return {
          id: profile.id,
          name: profile.name || profile.login,
          email: profile.email,
          image: profile.avatar_url,
          bio: profile.bio,
        }
      }
    })
  ],
  callbacks: {
    async jwt({ token, account, profile }) {
      if (account && profile) {
        token.id = profile.id
        token.bio = profile.bio
        token.name = profile.name || profile.login
        token.email = profile.email
        token.image = profile.avatar_url
      }
      return token
    },

    async session({ session, token }) {
      session.id = token.id
      session.bio = token.bio
      session.user.name = token.name
      session.user.email = token.email
      session.user.image = token.image
 
      
      try {
        await fetch(`${process.env.BASE_URL}/api/sync-author`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            id: token.id,
            name: token.name,
            email: token.email,
            image: token.image,
            bio: token.bio,
          }),
        })
      } catch (error) {
        console.error("Author sync failed:", error)
      }

      return session
    }
  }
})
