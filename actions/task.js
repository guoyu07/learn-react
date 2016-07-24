import * as types from '../constants/ActionTypes';

let nextTaskId = 0;

export function addTask(cardId, name) {
  return {
    type: types.TASK_ADD,
    cardId,
    id: nextTaskId++,
    name,
    done: false,
  }
}

export function deleteTask(cardId, id) {
  return {
    type: types.TASK_DELETE,
    cardId,
    id,
  }
}

export function toggleTask(cardId, id) {
  return {
    type: types.TASK_TOGGLE,
    cardId,
    id,
  }
}
