create table agendamentos (
  id serial primary key,
  data date not null,
  hora time not null,
  status varchar(20) default 'pendente',
  created_at timestamp with time zone default current_timestamp
);
