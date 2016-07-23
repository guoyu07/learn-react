import React, { Component, PropTypes } from 'react';

class CheckList extends Component {
  checkInputKeyPress(e){
    if(e.key === 'Enter'){
      this.props.taskCallbacks.add(this.props.cardId, e.target.value);
      e.target.value = '';
    }
  }

  render() {
    let tasks = this.props.tasks.map((task, taskIndex) => (
      <li key={task.id} className="checklist__task">
        <input type="checkbox" defaultChecked={task.done}
          onChange={this.props.taskCallbacks.toggle.bind(this, this.props.cardId, task.id, taskIndex)} />
        {task.name}
        <a href="#" className="checklist__task--remove"
          onClick={this.props.taskCallbacks.delete.bind(this, this.props.cardId, task.id, taskIndex)} />
      </li>
    ));

    return (
      <div className="checklist">
        <ul>{tasks}</ul>
        <input type="text" className="checklist__task--add-task"
          onKeyPress={this.checkInputKeyPress.bind(this)}
          placeholder="Type then hit Enter to add a task" />
      </div>
    );
  }
}

CheckList.propTypes = {
  cardId: PropTypes.number,
  tasks: PropTypes.arrayOf(PropTypes.object),
  taskCallbacks: PropTypes.object,
};

export default CheckList;
