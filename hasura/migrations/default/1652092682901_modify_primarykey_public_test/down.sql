alter table "public"."test" drop constraint "test_pkey";
alter table "public"."test"
    add constraint "test_pkey"
    primary key ("tableID");
