# Admint
A demo user creation and management portal built with:
- Next.js
- Supabase
- Prisma ORM
- Shadcn
- TailwindCSS

## Getting Started

1. Clone this repository, navigate to the project folder
2. Run the following to install dependencies:
```bash
pnpm install
```
3. Start the local Supabase client:

_If you do not have the Supabase CLI installed, go [here](https://supabase.com/docs/guides/local-development/cli/getting-started?queryGroups=platform&platform=linux) first and follow the guide to install_
```bash
supabase start
```
4. Create a prisma user in your local database via the SQL console at `localhost:54323`.
A guide can be found [here](https://supabase.com/docs/guides/database/prisma?queryGroups=initiate&initiate=pnpm_initiate&queryGroups=migrate&migrate=pnpm_migrate)

6. Create a `.env` file in the root of the project and add the following:
```env
DATABASE_URL=your-connection-string
DIRECT_URL=your-direct-connection-string
```
The connection string values can be obtained from your local Supabase console by clicking the **Connect** button

6. Then generate the Prisma client:
```bash
pnpx prisma generate
```
7. Then start the dev server:
```bash
pnpm dev
```
8. Navigate to `localhost:3000`
