--liquibase formatted sql
-- changeset mobin:2

CREATE TABLE IF NOT EXISTS "users" (
  "id" uuid NOT NULL DEFAULT gen_random_uuid(),
  "username" TEXT NOT NULL,
  "password" TEXT NOT NULL,
  "created_at" timestamptz NOT NULL DEFAULT (now()),

  PRIMARY KEY (id)
);

CREATE INDEX ON "users" ("id");
--rollback DROP TABLE "tasks";
