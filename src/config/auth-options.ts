import type { AuthOptions } from 'next-auth'
import React from 'react';
import GoogleProvider from "next-auth/providers/google";


export const Authoptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {},
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/",
  },
};


