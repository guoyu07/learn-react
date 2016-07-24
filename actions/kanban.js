import * as types from '../constants/ActionTypes';

export function toggleAddForm() {
  return {
    type: types.KANBAN_TOGGLE_ADD_FORM,
  };
};
