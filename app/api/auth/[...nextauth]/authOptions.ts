//Origina code

// import { AuthOptions } from "next-auth";
// import GitHubProvider from "next-auth/providers/github";
// import GoogleProvider from "next-auth/providers/google";
// import { PrismaAdapter } from "@auth/prisma-adapter";

// import prisma from "@/lib/prismadb";

// const authOptions: AuthOptions = {
//   adapter: PrismaAdapter(prisma),
//   providers: [
//     GitHubProvider({
//       clientId: process.env.GITHUB_CLIENT_ID as string,
//       clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
//     }),
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID as string,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
//     }),
//   ],
//   pages: {
//     signIn: "/sign-in",
//   },
//   secret: process.env.NEXTAUTH_SECRET,
// };

// export default authOptions;


// Options

// 1 // pnpm i @prisma/client @auth/prisma-adapter

// import NextAuth from "next-auth/next"; // Adjusted import
// import GitHubProvider from "next-auth/providers/github";
// import GoogleProvider from "next-auth/providers/google";
// import { PrismaAdapter } from "next-auth/adapters/prisma"; // Corrected import path

// import prisma from "@/lib/prismadb";

// const authOptions = {
//   adapter: PrismaAdapter(prisma),
//   providers: [
//     GitHubProvider({
//       clientId: process.env.GITHUB_CLIENT_ID as string,
//       clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
//     }),
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID as string,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
//     }),
//   ],
//   pages: {
//     signIn: "/sign-in",
//   },
//   secret: process.env.NEXTAUTH_SECRET,
// };


// 2 AuthOptions replaced with NextAuthOptions

// 3
// replace in PrismaAdapter file
// import type { Adapter, AdapterAccount } from "@auth/core/adapters"
// with
// import type { Adapter, AdapterAccount } from "next-auth/adapters"

// 4 Fixed 
// pnpm i @next-auth/prisma-adapter 
// https://github.com/nextauthjs/next-auth/issues/7727
//  installed @next-auth/prisma-adapter (link) instead of @auth/prisma-adapter.
// remove     // "@auth/prisma-adapter": "^1.0.12",


import { AuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

import prisma from "@/lib/prismadb";

const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  pages: {
    signIn: "/sign-in",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default authOptions;