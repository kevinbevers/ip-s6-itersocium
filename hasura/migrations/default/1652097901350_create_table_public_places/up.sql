CREATE TABLE "public"."places" ("id" serial NOT NULL, "name" text NOT NULL, "location" text NOT NULL, "image" text NOT NULL, "details" text, PRIMARY KEY ("id") , UNIQUE ("id"));COMMENT ON TABLE "public"."places" IS E'table with places.';
