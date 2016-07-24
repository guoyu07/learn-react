import * as types from '../constants/ActionTypes';
import uuid from 'uuid';

export function addTask(cardId, name) {
  return {
    type: types.TASK_ADD,
    cardId,
    id: uuid.v4(),
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
