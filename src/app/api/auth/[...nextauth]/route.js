import axios from "axios";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "credentials",
      async authorize(credentials) {
        try {
          const { data } = await axios.post(
            "https://flower.elevateegy.com/api/v1/auth/signin",
            {
              email: credentials.email,
              password: credentials.password,
            }
          );
          if (data.message === "success") {
            return {
              id: data.user._id,
              email: data.user.email,
              token: data.token,
            };
          } else {
            return null;
          }
        } catch (error) {
          console.error("Error during login:", error);
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  secret: process.env.AUTH_SECRET,
  session: {
    strategy: "jwt",  
  },

  jwt: {
    secret: process.env.AUTH_SECRET,

    encryption: false,
  },

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.token;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.accessToken = token.accessToken;
      return session.user.accessToken;
    },
  },
});
export { handler as GET, handler as POST }