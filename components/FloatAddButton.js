import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { toggleAddForm } from '../actions/kanban';

class FloatAddButton extends Component {
  render() {
    return <span className="float-button" onClick={() => this.props.dispatch(toggleAddForm()) }>+</span>
  }
};

export default connect()(FloatAddButton);
