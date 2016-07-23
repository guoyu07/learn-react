import React, { Component } from 'react';
import KanbanBoard from './KanbanBoard';

const API_URL = 'http://127.0.0.1:3000';
const API_HEADERS = {
  'Content-Type': 'application/json',
  Authorization: 'Authorization',
}

class KanbanBoardContainer extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      cards: []
    };
  }

  addTask() {
    console.log('add', arguments);
  }

  deleteTask(cardId, taskId, taskIndex) {
    console.log('delete', arguments);
  }

  toggleTask(cardId, taskId, taskIndex) {
    console.log('toggle', arguments);
  }

  render() {
    return <KanbanBoard cards={this.state.cards} taskCallbacks={{
      toggle: this.toggleTask.bind(this),
      delete: this.deleteTask.bind(this),
      add: this.addTask.bind(this),
    }}/>
  }

  componentDidMount() {
    fetch(API_URL+'/cards', {headers: API_HEADERS})
    .then((response) => response.json())
    .then((cards) => this.setState({cards: cards}))
    .catch((error) => console.log('Error fetching and parsing data', error));
  }
}

export default KanbanBoardContainer;
