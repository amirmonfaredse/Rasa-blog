import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
const authConfig = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    authorized({ auth }) {
      return !!auth?.user;
    },
    async signIn({ user }) {
      if (!process.env.ALLOWED_EMAILS) {
        console.log("لیست ایمیل های مجاز تعریف نشده است");
        return false;
      }
      const allowedEmails = process.env.ALLOWED_EMAILS.split(",");
      const isUserValid = allowedEmails.some((email) => user.email === email);
      return isUserValid;
    },
  },
  pages: {
    signIn: "/login",
  },
};

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth(authConfig);
