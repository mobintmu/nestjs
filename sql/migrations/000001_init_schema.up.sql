--liquibase formatted sql
-- changeset mobin:1

CREATE TABLE IF NOT EXISTS "tasks" (
  "id" bigserial PRIMARY KEY,
  "title" TEXT NOT NULL,
  "description" TEXT NOT NULL,
  "created_at" timestamptz NOT NULL DEFAULT (now())
);

CREATE INDEX ON "tasks" ("id");
--rollback DROP TABLE "tasks";
