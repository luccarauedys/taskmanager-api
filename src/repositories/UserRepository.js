import db from '../config/database.js';

export const findById = async (userId) => {
  const result = await db.query(
    'SELECT users.id, users.username, user.email FROM users WHERE id = $1',
    [userId]
  );
  return result.rows[0];
};

export const findByEmail = async (userEmail) => {
  const result = await db.query(
    'SELECT users.id, users.username, user.email FROM users WHERE email = $1',
    [userEmail]
  );
  return result.rows[0];
};

export const insertOne = async (username, email, password) => {
  return await db.query(
    'INSERT INTO users ("username", "email", "password") VALUES ($1, $2, $3)',
    [username, email, password]
  );
};
