import React, { Component, PropTypes } from 'react';
import Card from './Card';
import { connect } from 'react-redux';
import { doCard, finishCard } from '../actions/card';

class List extends Component {
  render() {
    var cards = this.props.cards.map((card) => {
      return <Card id={card.id}
        key={card.id}
        title={card.title}
        description={card.description}
        showDetails={card.showDetails}
        color={card.color}
        tasks={card.tasks} />
    });

    return (
      <div className="list" onDragOver ={(e) => {
        e.preventDefault();
      }} onDrop={(e) => {
        let cardId = e.dataTransfer.getData('text');
        let action;
        switch (this.props.id) {
          case 'in-progress':
            action = doCard(cardId);
            break;
          case 'done':
            action = finishCard(cardId);
            break;
        }
        this.props.dispatch(action);
      }}>
        <h1>{this.props.title}</h1>
        {cards}
      </div>
    );
  }
}

List.propTypes = {
  title: PropTypes.string.isRequired,
  cards: PropTypes.arrayOf(PropTypes.object),
};

export default connect()(List);
