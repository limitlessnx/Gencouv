create extension if not exists "uuid-ossp";
create table if not exists leads (
  id uuid primary key default uuid_generate_v4(),
  full_name text not null,
  email text,
  phone text,
  source text not null default 'website',
  interest text,
  stage text not null default 'new',
  potential_value numeric default 0,
  telegram_user_id text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create table if not exists interactions (
  id uuid primary key default uuid_generate_v4(),
  lead_id uuid references leads(id) on delete cascade,
  channel text not null,
  direction text,
  summary text,
  metadata jsonb default '{}'::jsonb,
  created_at timestamptz not null default now()
);
create table if not exists campaigns (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  channel text not null,
  status text not null default 'draft',
  created_at timestamptz not null default now()
);
