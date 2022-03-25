BEGIN;

DROP TABLE IF EXISTS users, posts CASCADE;

create table users (
  id serial primary key,
  username varchar(255) not null unique,
  email varchar(255) not null unique,
  password varchar(255) not null,
  created_at timestamp default now()
);


create table posts (
  id serial primary key,
  user_id int not null references users(id),
  title varchar(255) not null,
  body text not null,
  created_at timestamp default now()
);
COMMIT;
