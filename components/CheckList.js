import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { addTask, deleteTask, toggleTask } from '../actions/task';

class CheckList extends Component {
  render() {
    let cardId = this.props.cardId;
    let tasks = this.props.tasks.map((task, taskIndex) => (
      <li key={task.id} className="checklist__task">
        <input type="checkbox" defaultChecked={task.done}
          onChange={() => this.props.dispatch(toggleTask(cardId, task.id, taskIndex))}
        />
        {task.name}
        <a href="#" className="checklist__task--remove"
          onClick={(e) => {
            e.stopPropagation();
            this.props.dispatch(deleteTask(cardId, task.id, taskIndex))
          }} />
      </li>
    ));

    return (
      <div className="checklist">
        <ul>{tasks}</ul>
        <input type="text" className="checklist__task--add-task"
          placeholder="Type then hit Enter to add a task"
          onKeyPress={ e => {
            if (e.key === 'Enter') {
              this.props.dispatch(addTask(cardId, e.target.value));
              e.target.value = '';
            }
          }}
        />
      </div>
    );
  }
}

CheckList.propTypes = {
  cardId: PropTypes.string,
  tasks: PropTypes.arrayOf(PropTypes.object),
};

export default connect()(CheckList);
