
# Errors

1:
Type error: Route "app/api/auth/[...nextauth]/route.ts" does not match the required types of a Next.js Route. 
 "authOptions" is not a valid Route export field.


Fixed: split the code from route.ts into two files: authOptions.ts and route.ts.


2:
Type error: Type 'import("/Users/mac/Documents/CODING/1/next.js-news-blog/node_modules/.pnpm/@auth+core@0.19.0/node_modules/@auth/core/adapters").Adapter' is not assignable to type 'import("/Users/mac/Documents/CODING/1/next.js-news-blog/node_modules/.pnpm/next-auth@4.24.5_next@14.0.4_react-dom@18.2.0_react@18.2.0/node_modules/next-auth/adapters").Adapter'.
  Types of property 'createUser' are incompatible.
    Type '((user: AdapterUser) => Awaitable<AdapterUser>) | undefined' is not assignable to type '((user: Omit<AdapterUser, "id">) => Awaitable<AdapterUser>) | undefined'.
      Type '(user: AdapterUser) => Awaitable<AdapterUser>' is not assignable to type '(user: Omit<AdapterUser, "id">) => Awaitable<AdapterUser>'.
        Types of parameters 'user' and 'user' are incompatible.
          Property 'id' is missing in type 'Omit<AdapterUser, "id">' but required in type 'AdapterUser'.

  69 |
  70 | const authOptions: AuthOptions = {
> 71 |   adapter: PrismaAdapter(prisma),
     |   ^
  72 |   providers:  [
  73 |     GitHubProvider({
  74 |       clientId: process.env.GITHUB_CLIENT_ID as string,
 ELIFECYCLE  Command failed with exit code 1.

Issue: with adapter: PrismaAdapter(prisma), line only on run build.



Fixed: @auth/prisma-adapter replace with @next-auth/prisma-adapter

