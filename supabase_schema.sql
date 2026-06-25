-- SahiRaah Supabase Schema
-- Supabase Dashboard → SQL Editor → naya query → ye poora paste karo → Run

-- 1. Outcomes table (Student Data Loop)
create table if not exists outcomes (
  id uuid primary key default gen_random_uuid(),
  domain text not null,
  text text not null,
  created_at timestamptz default now()
);

-- 2. Skills table (Skill Exchange board)
create table if not exists skills (
  id uuid primary key default gen_random_uuid(),
  skill text not null,
  contact text not null,
  created_at timestamptz default now()
);

-- 3. Row Level Security enable karo (zaroori hai)
alter table outcomes enable row level security;
alter table skills enable row level security;

-- 4. Public read policy — sab koi outcomes/skills dekh sakta hai
create policy "Public read outcomes" on outcomes
  for select using (true);

create policy "Public read skills" on skills
  for select using (true);

-- 5. Public insert policy — sab koi naya outcome/skill submit kar sakta hai
-- (anonymous students ke liye, login system nahi hai abhi)
create policy "Public insert outcomes" on outcomes
  for insert with check (
    char_length(domain) between 1 and 60
    and char_length(text) between 10 and 800
  );

create policy "Public insert skills" on skills
  for insert with check (
    char_length(skill) between 1 and 80
    and char_length(contact) between 1 and 120
  );

-- NOTE: Update/Delete policies banaaye nahi gaye — matlab koi bhi
-- existing entries edit/delete nahi kar sakta (sirf naya add aur sab read kar sakta hai).
-- Yeh abuse se basic protection hai jab tak proper moderation system nahi banta.
