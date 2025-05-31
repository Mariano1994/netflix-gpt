import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { findUserbyEmail } from "./lib/services";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },

      authorize: async (credentials) => {
        const user = await findUserbyEmail();

        return user;
      },
    }),
  ],
});
