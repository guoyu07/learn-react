import { combineReducers } from 'redux';
import cards from './cards';
import { reducer as formReducer } from 'redux-form'

const KanbanApp = combineReducers({
  cards,
  form: formReducer,
});

export default KanbanApp;
