--liquibase formatted sql
-- changeset mobin:2

CREATE TABLE IF NOT EXISTS "tasks" (
  "id" uuid NOT NULL DEFAULT gen_random_uuid(),
  "title" TEXT NOT NULL,
  "description" TEXT NOT NULL,
  "status" TEXT NOT NULL,
  "created_at" timestamptz NOT NULL DEFAULT (now()),
  "user_id" uuid NULL,

  PRIMARY KEY (id)
);

ALTER TABLE tasks
ADD CONSTRAINT fk_tasks_users 
FOREIGN KEY ("user_id") REFERENCES users ("id");

CREATE INDEX ON "tasks" ("id");
--rollback DROP TABLE "tasks";
