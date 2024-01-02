This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started


```bash
git clone https://github.com/RuslanTsykaliak/next.js-news-blog your-folder
```

```bash
pnpm i
```

```bash
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Icons

Explore and use icons from [Heroicons](https://heroicons.com/).


## Authentication Set up with NextAuth

1. **GitHub:**
   - Register a new application with GitHub on [GitHub Apps](https://github.com/settings/applications/new).
   - Authorization callback URL should end with "api/auth/callback/github".

2. **Google:**
   - Follow the instructions at [NextAuth Google Provider](https://next-auth.js.org/providers/google).
   - Create credentials at [Google Developer Console](https://console.developers.google.com/apis/credentials).

After deployment, update the following URLs in the configuration.

## Environment Variables (.env)

```env
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
```

## Database Setup with Prisma

1. Install Prisma:

   ```bash
   pnpm i -D prisma
   pnpm i @prisma/client
   pnpm i @auth/prisma-adapter
   ```

2. Initialize Prisma:

   ```bash
   npx prisma init
   ```

3. MongoDB Setup:

   - Create a new project on [MongoDB Cloud](https://cloud.mongodb.com/).
   - Obtain Username and Password.
   - Configure IP Address to "0.0.0.0/0" for connection.
   - Install MongoDB Driver:

     ```bash
     pnpm i mongodb
     ```

   - Copy the database connection string, add the password and the name of the database after `mongodb.net/`.
   - Generate Prisma client and push the database:

     ```bash
     npx prisma generate
     npx prisma db push
     ```

   - Access the database collections using:

     ```bash
     npx prisma studio
     ```

   - For M1 chips, add the following to `prisma/schema.prisma` to support binaryTargets:

     ```prisma
     generator client {
       provider        = "prisma-client-js"
       binaryTargets   = ["native", "darwin"]
     }
     ```

## Cloudinary Setup

1. Sign up or log in to [Cloudinary](https://cloudinary.com/).
2. Install Cloudinary dependencies:

   ```bash
   pnpm i next-cloudinary cloudinary
   ```


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
