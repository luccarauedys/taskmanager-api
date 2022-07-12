import db from '../config/database.js';

export const insertRelation = async (userId, taskId) => {
  await db.query('INSERT INTO "users_tasks" ("userId", "taskId") VALUES ($1, $2);', [
    userId,
    taskId,
  ]);
};

export const findAllRelations = async (taskId) => {
  const result = await db.query(
    `
  SELECT "users_tasks".* FROM "users_tasks"
  JOIN "tasks" ON "users_tasks"."taskId" = "tasks"."id"
  WHERE "users_tasks"."id" = $1 
  AND "users_tasks"."deletedAt" IS NULL;
  `,
    [taskId]
  );

  return result.rows;
};

export const findRelation = async (userId, taskId) => {
  const result = await db.query(
    `
  SELECT "users_tasks".* FROM "users_tasks"
  JOIN "tasks" ON "users_tasks"."taskId" = "tasks"."id"
  WHERE "users_tasks"."userId" = $1 AND "users_tasks"."taskId" = $2
  AND "users_tasks"."deletedAt" IS NULL;
  `,
    [userId, taskId]
  );

  return result.rows[0];
};

export const deleteRelation = async (userId, taskId) => {
  return await db.query(
    `
  UPDATE "users_tasks" SET "deletedAt" = NOW() 
  WHERE "users_tasks"."userId" = $1 AND "users_tasks"."taskId" = $2;
  `,
    [userId, taskId]
  );
};
