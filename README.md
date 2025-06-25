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
4. Copy the contents of `/supabase/initialize_db.sql` into the SQL console at `localhost:54323`, this will create a Prisma user and setup a database function and trigger to generate a user profile when a new record is inserted in `auth.users`. The Prisma user does not have permission to create triggers in the `auth` schema, so this step is important.

**Be sure to change the password in the script ('change-me') to a good password**

6. Create a `.env` file in the root of the project and add the following:
```env
DATABASE_URL=your-connection-string
DIRECT_URL=your-direct-connection-string
NEXT_PUBLIC_SUPABASE_URL=your-local-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-local-supabase-anon-key
```
The connection string values can be obtained from your local Supabase console by clicking the **Connect** button. You will need to add the password you created in step 4 to the connection string. Furthermore, the connection string provided by Supabase may not have the fully correct port number, it should be 54322, not 5432

6. Then apply Prisma migrations and generate the Prisma client:
```bash
pnpx prisma migrate dev
```
7. Then start the dev server:
```bash
pnpm dev
```
8. Navigate to `localhost:3000`
