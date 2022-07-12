import * as TaskRepository from '../repositories/TaskRepository.js';
import * as UsersTasksRepository from '../repositories/UsersTasksRepository.js';
import { buildUpdateTaskQuery } from '../utils/buildUpdateTaskQuery.js';

export const createTask = async (userId, title, startDate, endDate) => {
  const { id: taskId } = await TaskRepository.insertTask(title, startDate, endDate, userId);
  return await UsersTasksRepository.insertRelation(userId, taskId);
};

export const updateTask = async (userId, taskId, infosToUpdate) => {
  const task = await checkIfTaskExists(taskId);

  if (task.createdBy !== Number(userId)) {
    throw {
      response: {
        status: 401,
        message: "You cannot edit a task you didn't create.",
      },
    };
  }

  const builtQuery = buildUpdateTaskQuery(infosToUpdate);
  return await TaskRepository.updateOne(taskId, builtQuery, infosToUpdate);
};

export const deleteTask = async (userId, taskId) => {
  await checkIfRelationExists(userId, taskId);
  await UsersTasksRepository.deleteRelation(userId, taskId);

  const taskRelations = await UsersTasksRepository.findAllRelations(taskId);
  if (taskRelations.length === 0) {
    await TaskRepository.deleteOne(taskId);
  }
};

export const checkIfRelationExists = async (userId, taskId) => {
  const relation = await UsersTasksRepository.findRelation(userId, taskId);
  if (!relation) {
    throw { response: { status: 404, message: 'Task not found.' } };
  }
  return relation;
};

export const checkIfTaskExists = async (taskId) => {
  const task = await TaskRepository.findById(taskId);
  if (!task) {
    throw { response: { status: 404, message: 'Task not found.' } };
  }
  return task;
};
