import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux'
import { addCard } from '../actions/card';
import { toggleAddForm } from '../actions/kanban';

class CardForm extends Component {
  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props
    return (
      <div>
        <div className="card big">
        <form onSubmit={handleSubmit((v) => {
          this.props.dispatch(addCard(v.title, v.description, v.status, v.color));
          this.props.dispatch(toggleAddForm());
        })}>
            <Field name="title" placeholder="Title" component="input" type="text" required={true} autoFocus={true} />
            <Field name="description" placeholder="Description" component="textarea" required={true} />
            <label htmlFor="status">Status</label>
            <Field name="status" id="status" component="select">
              <option value="todo">To Do</option>
              <option value="in-progress">In Progress</option>
              <option value="done">Done</option>
            </Field>
            <label htmlFor="color">Color</label>
            <Field name="color" component="input" type="color" id="color" defaultValue="#ff0000" />
            <div className="actions">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
        <div className="overlay" onClick={() => {this.props.dispatch(toggleAddForm())}}></div>
      </div>
    );
  }
}

CardForm = reduxForm({
  form: 'new-card',
})(CardForm);

export default connect()(CardForm);
