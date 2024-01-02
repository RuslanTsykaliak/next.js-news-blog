// 5 ssplit the code into two files: authOptions.ts and route.ts.
// Fixed: Type error: Route "app/api/auth/[...nextauth]/route.ts" does not match the required types of a Next.js Route.
  // "authOptions" is not a valid Route export field.

import NextAuth from "next-auth";
import authOptions from "./authOptions";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };


// Original code
// Type error: Route "app/api/auth/[...nextauth]/route.ts" does not match the required types of a Next.js Route. 
// "authOptions" is not a valid Route export field.

// import NextAuth, { AuthOptions } from "next-auth";
// import GitHubProvider from "next-auth/providers/github";
// import GoogleProvider from "next-auth/providers/google";
// import { PrismaAdapter } from "@auth/prisma-adapter";

// import prisma from "@/lib/prismadb";

// export const authOptions: AuthOptions = {
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

// const handler = NextAuth(authOptions);

// export { handler as GET, handler as POST };

// Options:

// 1

// import NextAuth from "next-auth";
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

// export default NextAuth(authOptions);

// Type error: Route "app/api/auth/[...nextauth]/route.ts" does not match the required types of a Next.js Route.
  // "default" is not a valid Route export field.



// 2
// import NextAuth from "next-auth/next"; // Adjusted import
// import GitHubProvider from "next-auth/providers/github";
// import GoogleProvider from "next-auth/providers/google";
// import { PrismaAdapter } from "@auth/prisma-adapter";
// import prisma from "@/lib/prismadb";

// // Configuration for NextAuth
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

// // Create the NextAuth handler
// const handler = NextAuth(authOptions);

// // Export the handler as GET and POST handlers for the route
// export { handler as GET, handler as POST };

// Type error: Argument of type '{ adapter: Adapter;




// 3
// remove:
// export
// adapter: PrismaAdapter(prisma),



// 4
// remove .ts from route.ts file.
// pnpm i --save-dev typescript ts-loader


// 5 @auth/prisma-adapter replace with @next-auth/prisma-adapter


// import NextAuth, { AuthOptions } from "next-auth";
// import GitHubProvider from "next-auth/providers/github";
// import GoogleProvider from "next-auth/providers/google";
// import { PrismaAdapter } from "@next-auth/prisma-adapter";

// import prisma from "@/lib/prismadb";

// export const authOptions: AuthOptions = {
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

// const handler = NextAuth(authOptions);

// export { handler as GET, handler as POST };

