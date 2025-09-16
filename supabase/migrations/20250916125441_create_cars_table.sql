-- Cria tabela de carros
create table if not exists cars (
  id uuid primary key default gen_random_uuid(),
  make text not null,        -- marca do carro, ex: Toyota
  model text not null,       -- modelo, ex: Corolla
  year int,                  -- ano do carro
  created_at timestamp with time zone default current_timestamp
);