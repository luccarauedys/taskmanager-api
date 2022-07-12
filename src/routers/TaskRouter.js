import express from 'express';
import { verifyJWT } from '../middlewares/tokenMiddleware.js';
import { createTask, deleteTask, getTasks, updateTask } from '../controllers/TaskController.js';

const TaskRouter = express.Router();

TaskRouter.use(verifyJWT);

TaskRouter.post('/tasks', createTask);
TaskRouter.get('/tasks', getTasks);
TaskRouter.put('/tasks/:taskId', updateTask);
TaskRouter.delete('/tasks/:taskId', deleteTask);

export default TaskRouter;
