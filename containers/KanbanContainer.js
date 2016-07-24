import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import FloatAddButton from '../components/FloatAddButton';
import Kanban from '../components/Kanban';
import CardForm from '../components/CardForm';

const mapStateToProps = (state) => {
  return {
    cards: state.cards,
    kanban: state.kanban,
  }
};

class App extends Component {
  render() {
    let newForm;

    if (this.props.kanban.isNewFormOpen) {
      newForm = <CardForm />
    }

    return (
      <div>
        <Kanban cards={this.props.cards} />
        { newForm }
        <FloatAddButton />
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);
