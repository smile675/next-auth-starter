import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Github from "next-auth/providers/github";
import Linkedin from "next-auth/providers/linkedin";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google, Github, Linkedin],
});
