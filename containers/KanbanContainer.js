import React from 'react'
import { connect } from 'react-redux'
import Kanban from '../components/Kanban';
import CardForm from '../components/CardForm';
import * as CardActions from '../actions/card';

const mapStateToProps = (state) => {
  return {
    cards: state.cards,
  }
};

const App = ({cards}) => (
  <div>
    <Kanban cards={cards}/>
    <CardForm />
  </div>
);

export default connect(mapStateToProps)(App);
