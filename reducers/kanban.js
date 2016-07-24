import * as ActionTypes from '../constants/ActionTypes';

const initState = {
  isNewFormOpen: false,
}

export default (state = initState, action) => {
  switch (action.type) {
    case ActionTypes.KANBAN_TOGGLE_ADD_FORM:
      return Object.assign({}, state, {isNewFormOpen: !state.isNewFormOpen})
    default:
      return state;
  }
};
