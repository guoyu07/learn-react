import { connect } from 'react-redux'
import Kanban from '../components/Kanban';
import * as CardActions from '../actions/card';

const mapStateToProps = (state) => {
  return {
    cards: state.cards,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    taskCallbacks: {
      toggleDetails: (cardId) => {
        dispatch(CardActions.toggleCardDetail(cardId))
      },
      addTask: (title, detail) => {console.log(this)},
      deleteTask: (cardId, taskId, taskIndex) => {console.log(this)},
      toggleTask: (cardId, taskId, taskIndex) => {console.log(this)},
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Kanban);
