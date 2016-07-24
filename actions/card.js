import * as types from '../constants/ActionTypes';
import uuid from 'uuid';

export function addCard(title, description) {
  return {
    type: types.CARD_ADD,
    id: uuid.v4(),
    title,
    description,
  }
}

export function doCard(cardId) {
  return {
    type: types.CARD_DOING,
    cardId,
  }
}

export function finishCard(cardId) {
  return {
    type: types.CARD_DONE,
    cardId,
  }
}

export function toggleCardDetail(cardId) {
  return {
    type: types.CARD_TOGGLE_DETAIL,
    cardId,
  }
}

export function toggleCardDragStart(cardId) {
}
