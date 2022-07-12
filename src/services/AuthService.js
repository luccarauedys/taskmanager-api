import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import * as UserRepository from '../repositories/UserRepository.js';

export const createAccount = async (username, email, password) => {
  const encryptedPassword = bcrypt.hashSync(password, 10);

  const user = await UserRepository.findByEmail(email);
  if (user) {
    throw { response: { status: 409, message: 'User already exists.' } };
  }

  return await UserRepository.insertOne(username, email, encryptedPassword);
};

export const loginIntoAccount = async (email, password) => {
  const user = await UserRepository.findByEmail(email);

  if (!user) {
    throw {
      response: {
        status: 404,
        message: 'User does not exist. Create an account to login!',
      },
    };
  }

  if (!bcrypt.compareSync(password, user.password)) {
    throw {
      response: {
        status: 404,
        message: 'Invalid email or password. Try again!',
      },
    };
  }

  const userId = user.id;
  const token = jwt.sign({ userId }, process.env.JWT_SECRET_KEY, {
    expiresIn: 3600,
  });

  return token;
};
