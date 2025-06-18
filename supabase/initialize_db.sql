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
create or replace function create_user_profile()
returns trigger
security definer
language plpgsql
as $$
begin
    insert into public.user_profiles (id, username, avatar_url)
    values (
    new.id,
    coalesce(new.raw_user_meta_data ->> 'name', ''),
    coalesce(new.raw_user_meta_data ->> 'avatar_url', '')
    );

    return new;
exception
    when others then
        raise log 'Error creating user profile %, %', new.id, sqlerrm;
        return new;
end;
$$;

-- trigger to call function to create user profile on new auth.users record
create trigger create_profile_on_new_user
    after insert on auth.users
    for each row
    execute function create_user_profile();
