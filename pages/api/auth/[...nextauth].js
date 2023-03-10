import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorizationUrl:
        "https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code",
    }),
  ],
  jwt: {
    encryption: true,
  },
  secret: process.env.SECRET,
  callbacks: {
    async session(d) {
      console.log("session = ", d);
    },
    async jwt(j) {
      console.log("jwt = ", j);
    },
    // callbacks: {
    //   async jwt(token, account) {
    //     console.log("token = ", token);
    //     console.log("account = ", account);
    //     if (account?.accessToken) {
    //       // token.accessToken = account.accessToken;
    //     }
    //     return token;
    //   },
    redirect: async (url, _baseUrl) => {
      if (url === "/profile") {
        return Promise.resolve("/");
      }
      return Promise.resolve("/");
    },
  },
});
