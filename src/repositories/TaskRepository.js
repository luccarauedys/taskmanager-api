import db from '../config/database.js';

export const insertTask = async (title, startDate, endDate, createdBy) => {
  const result = await db.query(
    'INSERT INTO tasks ("title", "startDate", "endDate", "createdBy") VALUES ($1, $2, $3, $4) RETURNING id;',
    [title, startDate, endDate, Number(createdBy)]
  );
  return result.rows[0];
};

export const findById = async (taskId) => {
  const result = await db.query(
    'SELECT * FROM tasks WHERE tasks.id = $1 AND tasks."deletedAt" IS NULL;',
    [Number(taskId)]
  );
  return result.rows[0];
};

export const findAll = async (userId) => {
  const result = await db.query(
    `
  SELECT tasks.* FROM "users_tasks" 
  JOIN "tasks" ON "users_tasks"."taskId" = "tasks"."id" 
  WHERE "users_tasks"."userId" = $1
  AND "users_tasks"."deletedAt" IS NULL;
  `,
    [Number(userId)]
  );
  return result.rows;
};

export const updateOne = async (taskId, builtQuery, infosToUpdate) => {
  const values = Object.values(infosToUpdate);

  return await db.query(
    `
    UPDATE tasks SET ${builtQuery} 
    WHERE id = $1;
    `,
    [Number(taskId), ...values]
  );
};

export const deleteOne = async (taskId) => {
  return await db.query('UPDATE tasks SET "deletedAt" = NOW() WHERE id = $1;', [Number(taskId)]);
};
