import db from '../config/database.js';

export const insertTask = async (title, startDate, endDate) => {
  return await db.query(
    'INSERT INTO tasks ("title", "startDate", "endDate") VALUES ($1, $2, $3)',
    [title, startDate, endDate]
  );
};

export const insertRelation = async (userId, taskId) => {
  return await db.query(
    'INSERT INTO "users_tasks" ("userId", "taskId") VALUES ($1, $2)',
    [userId, taskId]
  );
};

export const findAll = async (userId) => {
  const result = await db.query(
    'SELECT T.* FROM "users_tasks" UT JOIN tasks T ON UT."taskId" = T.id WHERE UT."userId" = $1',
    [userId]
  );
  return result.rows;
};

export const updateOne = async (title, startDate, endDate, taskId) => {
  return await db.query(
    'UPDATE tasks SET "title" = $1, "startDate" = $2, "endDate" = $3 WHERE id = $4',
    [title, startDate, endDate, taskId]
  );
};

export const deleteOne = async (taskId) => {
  return await db.query('DELETE FROM tasks WHERE id = $1', [taskId]);
};
