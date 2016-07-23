import React from 'react';
import { render } from 'react-dom'
import KanbanBoard from './KanbanBoard';

let cardsList = [
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

let root = document.getElementById('root');

render(<KanbanBoard cards={cardsList} />, root);
