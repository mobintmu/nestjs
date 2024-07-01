--liquibase formatted sql
-- changeset mobin:2

CREATE TABLE IF NOT EXISTS "tasks" (
  "id" uuid NOT NULL DEFAULT gen_random_uuid(),
  "title" TEXT NOT NULL,
  "description" TEXT NOT NULL,
  "status" TEXT NOT NULL,
  "created_at" timestamptz NOT NULL DEFAULT (now()),
  "userId" uuid NULL,

  PRIMARY KEY (id)
);

ALTER TABLE tasks
ADD CONSTRAINT fk_tasks_users 
FOREIGN KEY ("userId") REFERENCES users ("id");

CREATE INDEX ON "tasks" ("id");
--rollback DROP TABLE "tasks";
