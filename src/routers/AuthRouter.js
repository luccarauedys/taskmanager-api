import express from 'express';

import { signUp, signIn } from '../controllers/AuthController.js';

const AuthRouter = express.Router();

AuthRouter.post('/signup', signUp);
AuthRouter.post('/signin', signIn);

export default AuthRouter;
