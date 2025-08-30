import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [GitHub],
  callbacks:{

    async jwt({token,account,profile}){
      if(account && profile){
        token.id=profile.id;
      }
      return token;
    },
    async session({session,token}){
      Object.assign(session, {id:token.id});
      return session;
    }
  }
    
})