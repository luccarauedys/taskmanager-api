import express from 'express';
import { verifyJWT } from '../middlewares/tokenMiddleware.js';

const TaskRouter = express.Router();
TaskRouter.use(verifyJWT);

export default TaskRouter;
