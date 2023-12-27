2 | 1:18

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

NEXTAUTH_SECRET=