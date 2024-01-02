9 hours.

pnpm i

pnpm run dev


Icons:
https://heroicons.com/


# Libraries:

pnpm i next-auth
pnpm i next-cloudinary@latest  // next-cloudinary 5.16.0


# Set ups Authentication with NextAuth https://next-auth.js.org/

GitHub:
Register a new application with github on https://github.com/settings/applications/new
Authorization callback URL ends with "api/auth/callback/github"

Google:
https://next-auth.js.org/providers/google
https://console.developers.google.com/apis/credentials

# .env

GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=

DATABASE_URL=

NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=


# Database Prisma
https://www.prisma.io/docs/orm/more/help-and-troubleshooting/help-articles/nextjs-prisma-client-dev-practices

pnpm i -D prisma
pnpm i @prisma/client
pnpm i @auth/prisma-adapter

npx prisma init

https://cloud.mongodb.com/

+ New Project
+ Create

get Username and Password


IP Address
0.0.0.0/0

Connection with MongoDB Driver
pnpm i mongodb

copy database string, add password and name of the database after mongodb.net/

npx prisma generate
npx prisma db push

Database > Collections

npx prisma studio

--- For M1 chips add to prisma/schema.prisma add binaryTargets to generator clinet:

generator client {
  provider        = "prisma-client-js"
  binaryTargets   = ["native", "darwin"]
}

# Cloudinary

https://cloudinary.com/

pnpm i next-cloudinary cloudinary


# Errors

1:
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

Ways to resolve?
- Check out other successful implementations of adapter: PrismaAdapter(prisma)
- Use another way for authentication
- 


# Improve

- Allow multiple spaces and paragraphs in the text content to preserve line breaks and spaces entered by a user.

Tried options:

CreatePostForm.tsx
1.
<!-- className="border border-gray-300 p-2 min-h-20 break-words whitespace-pre-line" -->
      

2.
<!-- <div dangerouslySetInnerHTML={{ __html: content }}></div> -->

Post.tsx
3. 
<!-- <div dangerouslySetInnerHTML={{ __html: content }} className="content"></div> -->

4. Work with small view space:
<!-- <textarea className="content" readOnly value={content}></textarea>  -->

5. Work perfectly:
<!-- <div className="content whitespace-pre-line">{content}</div>
or
<p></p> -->