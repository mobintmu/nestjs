--liquibase formatted sql
-- changeset mobin:1

CREATE TABLE IF NOT EXISTS "tasks" (
  "id" uuid NOT NULL DEFAULT gen_random_uuid(),
  "title" TEXT NOT NULL,
  "description" TEXT NOT NULL,
  "status" TEXT NOT NULL,
  "created_at" timestamptz NOT NULL DEFAULT (now()),

  PRIMARY KEY (id)
);

CREATE INDEX ON "tasks" ("id");
--rollback DROP TABLE "tasks";
