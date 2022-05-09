comment on column "public"."test"."tableID" is E'to test migrations in staging';
alter table "public"."test" alter column "tableID" drop not null;
alter table "public"."test" add column "tableID" uuid;
