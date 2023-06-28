import * as actionType from './actionType.js';

export const addTask = (task) => {
  return { type: actionType.ADD_TASK, payload: { task: task } };
};

export const deleteTask = (id) => {
  return { type: actionType.DELETE_TASK, payload: { id: id } };
};
