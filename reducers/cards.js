import * as ActionTypes from '../constants/ActionTypes';

const debugState = [
  {
    id: 1,
    title: "Read the Book",
    description: "I should read the whole book",
    color: 'red',
    status: "in-progress",
    tasks: []
  },
  {
    id: 2,
    title: "Write some code",
    description: "Code along with the samples in the [baidu](https://baidu.com)",
    color: 'purple',
    status: "todo",
    tasks: [
      {
        id: 1,
        name: "ContactList Example",
        done: true
      },
      {
        id: 2,
        name: "Kanban Example",
        done: false
      },
      {
        id: 3,
        name: "My own experiments",
        done: false
      }
    ]
  },
  {
    id: 3,
    title: "Review",
    description: "I should read the whole book",
    status: "done",
    color: "green",
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
        status: 'todo',
        showDetails: true,
        color: 'red',
        tasks: [],
      }
    case ActionTypes.CARD_TOGGLE_DETAIL:
      if (state.id !== action.cardId) {
        return state;
      }

      return Object.assign({}, state, { showDetails: !state.showDetails });
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
      return state.map(c => card(c, action));
    default:
      return state;
  }
};
