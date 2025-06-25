-- Create custom user
create user "prisma" with password 'change-me' bypassrls createdb;

-- extend prisma's privileges to postgres (necessary to view changes in Dashboard)
grant "prisma" to "postgres";

-- Grant it necessary permissions over the relevant schemas (public)
grant usage on schema public to prisma;
grant create on schema public to prisma;
grant all on all tables in schema public to prisma;
grant all on all routines in schema public to prisma;
grant all on all sequences in schema public to prisma;
alter default privileges for role postgres in schema public grant all on tables to prisma;
alter default privileges for role postgres in schema public grant all on routines to prisma;
alter default privileges for role postgres in schema public grant all on sequences to prisma;

-- function create user profile
CREATE OR REPLACE FUNCTION create_user_profile()
RETURNS trigger
SECURITY DEFINER
LANGUAGE plpgsql
AS $$
BEGIN
    -- Add some debug output
    RAISE NOTICE 'Trigger fired for user ID: %', NEW.id;
    RAISE NOTICE 'Email from meta_data: %', NEW.raw_user_meta_data ->> 'email';

    INSERT INTO public.user_profiles (id, username, avatar_url)
    VALUES (
        NEW.id,
        NEW.email,
        COALESCE(NEW.raw_user_meta_data ->> 'avatar_url', '')
    );

    RAISE NOTICE 'Successfully created profile for user: %', NEW.id;
    RETURN NEW;
EXCEPTION
    WHEN others THEN
        RAISE EXCEPTION 'Error creating user profile for %: %', NEW.id, SQLERRM;
        RETURN NEW;
END;
$$;

-- trigger to call function to create user profile on new auth.users record
create trigger create_profile_on_new_user
    after insert on auth.users
    for each row
    execute function public.create_user_profile();
