import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Github from "next-auth/providers/github";
// import Linkedin from "next-auth/providers/linkedin";
// import Facebook from "next-auth/providers/facebook";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google,
    Github,
    // Linkedin({
    //   clientId: process.env.AUTH_LINKEDIN_ID,
    //   clientSecret: process.env.AUTH_LINKEDIN_SECRET,
    //   authorization: { params: { scope: "profile email openid" } },
    //   issuer: "https://www.linkedin.com",
    //   jwks_endpoint: "https://www.linkedin.com/oauth/openid/jwks",
    //   async profile(profile) {
    //     return {
    //       id: profile.sub,
    //       name: profile.name,
    //       firstname: profile.given_name,
    //       lastname: profile.family_name,
    //       email: profile.email,
    //     };
    //   },
    // }),
    // Facebook,
  ],
});
