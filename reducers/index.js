import { combineReducers } from 'redux';
import cards from './cards';

const KanbanApp = combineReducers({
  cards,
});

export default KanbanApp;
