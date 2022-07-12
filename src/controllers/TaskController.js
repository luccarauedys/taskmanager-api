import * as TaskService from '../services/TaskService.js';
import * as TaskRepository from '../repositories/TaskRepository.js';

export const createTask = async (req, res) => {
  const { userId } = res.locals;
  const { title, startDate, endDate } = req.body;
  await TaskService.createTask(Number(userId), title, startDate, endDate);
  res.sendStatus(200);
};

export const getTasks = async (req, res) => {
  const { userId } = res.locals;
  const tasks = await TaskRepository.findAll(Number(userId));
  res.status(200).send(tasks);
};

export const updateTask = async (req, res) => {
  const { userId } = res.locals;
  const { taskId } = req.params;
  const infosToUpdate = req.body;
  await TaskService.updateTask(Number(userId), Number(taskId), infosToUpdate);
  res.sendStatus(200);
};

export const deleteTask = async (req, res) => {
  const { userId } = res.locals;
  const { taskId } = req.params;
  await TaskService.deleteTask(Number(userId), Number(taskId));
  res.sendStatus(200);
};
