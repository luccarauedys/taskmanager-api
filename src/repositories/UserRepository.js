import db from '../config/database.js';

export const findById = async (userId) => {
  const result = await db.query(
    'SELECT * FROM users WHERE id = $1 AND users."deletedAt" IS NULL;',
    [userId]
  );
  return result.rows[0];
};

export const findByEmail = async (email) => {
  const result = await db.query(
    'SELECT * FROM users WHERE email = $1 AND users."deletedAt" IS NULL;',
    [email]
  );
  return result.rows[0];
};

export const insertOne = async (username, email, password) => {
  return await db.query(
    'INSERT INTO users ("username", "email", "password") VALUES ($1, $2, $3) RETURNING id;',
    [username, email, password]
  );
};
