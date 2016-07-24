import * as types from '../constants/ActionTypes';

let nextCardId = 0;

export function addCard(title, description) {
  return {
    type: types.CARD_ADD,
    id: nextCardId++,
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
