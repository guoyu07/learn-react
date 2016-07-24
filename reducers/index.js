import { combineReducers } from 'redux';
import cards from './cards';
import kanban from './kanban';
import { reducer as formReducer } from 'redux-form'

const KanbanApp = combineReducers({
  kanban,
  cards,
  form: formReducer,
});

export default KanbanApp;
