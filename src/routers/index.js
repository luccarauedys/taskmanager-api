import express from 'express';
import AuthRouter from './AuthRouter.js';
import TaskRouter from './TaskRouter.js';

const Router = express.Router();

Router.use(AuthRouter);
Router.use(TaskRouter);

export default Router;
