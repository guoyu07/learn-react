import * as ActionTypes from '../constants/ActionTypes';
import uuid from 'uuid';

const debugState = [
  {
    id: uuid.v4(),
    title: "Read the Book",
    description: "I should read the whole book",
    color: 'red',
    status: "in-progress",
    tasks: []
  },
  {
    id: uuid.v4(),
    title: "Write some code",
    description: "Code along with the samples in the [baidu](https://baidu.com)",
    color: 'purple',
    status: "todo",
    tasks: [
      {
        id: uuid.v4(),
        name: "ContactList Example",
        done: true
      },
      {
        id: uuid.v4(),
        name: "Kanban Example",
        done: false
      },
      {
        id: uuid.v4(),
        name: "My own experiments",
        done: false
      }
    ]
  },
  {
    id: uuid.v4(),
    title: "Review",
    description: "I should read the whole book",
    status: "done",
    color: "green",
    tasks: []
  },
  {
    id: uuid.v4(),
    title: "Read the Book2",
    description: "I should read the whole book",
    color: 'red',
    status: "todo",
    tasks: []
  },
];

const card = (state, action) => {
  switch (action.type) {
    case ActionTypes.CARD_ADD:
      return {
        id: action.id,
        title: action.title,
        description: action.description,
        status: action.status || 'todo',
        showDetails: true,
        color: action.color || 'red',
        tasks: [],
      }
    case ActionTypes.CARD_TOGGLE_DETAIL:
      if (state.id !== action.cardId) {
        return state;
      }

      return Object.assign({}, state, { showDetails: !state.showDetails });
    case ActionTypes.CARD_TODO:
      if (state.id !== action.cardId) {
        return state;
      }

      return Object.assign({}, state, { status: 'todo' });
    case ActionTypes.CARD_DOING:
      if (state.id !== action.cardId) {
        return state;
      }

      return Object.assign({}, state, { status: 'in-progress' });
    case ActionTypes.CARD_DONE:
      if (state.id !== action.cardId) {
        return state;
      }

      return Object.assign({}, state, { status: 'done' });
    default:
      return state;
  }
};

const cardTask = (state, action) => {
  if (state.id !== action.cardId) {
    return state;
  }

  switch (action.type) {
    case ActionTypes.TASK_ADD:
      state = Object.assign({}, state);
      state.tasks.push({
          id: action.id,
          name: action.name,
          done: action.done,
      });

      return state;
    case ActionTypes.TASK_TOGGLE:
      return Object.assign({}, state, {
        tasks: state.tasks.map((task) => {
          if (task.id !== action.id) {
            return task;
          }

          return Object.assign({}, task, { done: !task.done });
        })
      });
    case ActionTypes.TASK_DELETE:
      return Object.assign({}, state, {
        tasks: state.tasks.filter((task) => task.id !== state.id)
      });
    default:
      return state;
  }
};

export default (state = debugState, action) => {
  switch (action.type) {
    case ActionTypes.CARD_ADD:
      return [
        ...state,
        card(undefined, action)
      ];
    case ActionTypes.CARD_TOGGLE_DETAIL:
    case ActionTypes.CARD_DOING:
    case ActionTypes.CARD_DONE:
    case ActionTypes.CARD_TODO:
      return state.map(c => card(c, action));
    case ActionTypes.TASK_TOGGLE:
    case ActionTypes.TASK_DELETE:
    case ActionTypes.TASK_ADD:
      return state.map(c => cardTask(c, action));
    default:
      return state;
  }
};
