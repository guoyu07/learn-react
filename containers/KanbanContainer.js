import { connect } from 'react-redux'
import Kanban from '../components/Kanban';
import * as CardActions from '../actions/card';

const mapStateToProps = (state) => {
  return {
    cards: state.cards,
  }
};

export default connect(mapStateToProps)(Kanban);
