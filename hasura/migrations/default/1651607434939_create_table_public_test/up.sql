CREATE TABLE "public"."test" ("tableID" uuid NOT NULL, "description" text NOT NULL, PRIMARY KEY ("tableID") , UNIQUE ("tableID"));COMMENT ON TABLE "public"."test" IS E'to test migrations in staging';
