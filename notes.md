6 | 3:57

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