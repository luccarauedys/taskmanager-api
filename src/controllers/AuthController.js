import * as AuthService from '../services/AuthService.js';

export const signUp = async (req, res) => {
  const { username, email, password } = req.body;
  await AuthService.createAccount(username, email, password);
  res.sendStatus(201);
};

export const signIn = async (req, res) => {
  const { email, password } = req.body;
  const token = await AuthService.loginIntoAccount(email, password);
  res.status(200).send({ token });
};
