create table if not exists profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text not null,
  role text not null default 'customer' check (role in ('customer','admin')),
  created_at timestamptz not null default now()
);
create table if not exists cars (
  id text primary key,
  brand text not null,
  name text not null,
  model_year int,
  msrp_usd numeric,
  price_vnd numeric,
  active boolean not null default true,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);
create table if not exists orders (
  id uuid primary key,
  user_id uuid references auth.users(id),
  car_id text references cars(id),
  email text not null,
  total numeric,
  currency text not null default 'VND',
  status text not null default 'pending',
  stripe_session_id text,
  created_at timestamptz not null default now()
);
create table if not exists order_items (
  id bigint generated always as identity primary key,
  order_id uuid references orders(id) on delete cascade,
  car_id text references cars(id),
  quantity int not null check(quantity>0),
  unit_price numeric not null
);
