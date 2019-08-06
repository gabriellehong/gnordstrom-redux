import { FETCH_EARRING, FETCH_BRACELET, FETCH_DRESS, FETCH_PURSE, FETCH_SHOE, SHOW_MODAL } from '../actions/types.jsx';

const defaultState = {
  earring: null,
  dress: null,
  purse: null,
  shoe: null, 
  bracelet: null,
  modal: null,
}

export const modal = (state = defaultState, action ) => {
  switch(action.type) {
    case SHOW_MODAL:
      return action.payload;

    default:
      return state;
  }
}

export const earring = (state = defaultState, action ) => {
  switch(action.type) {
    case FETCH_EARRING:
      return action.payload;

    default:
      return state;
  }
}

export const bracelet = (state = defaultState, action) => {
  switch(action.type) {
    case FETCH_BRACELET:
      return action.payload;

    default: 
      return state;
  }
}

export const purse = (state = defaultState, action) => {
  switch(action.type) {
    case FETCH_PURSE:
      return action.payload;

    default: 
      return state;
  }
}

export const shoe = (state = defaultState, action ) => {
  switch(action.type) {
    case FETCH_SHOE:
      return action.payload;

    default:
      return state;
  }
}

export const dress = (state = defaultState, action ) => {
  switch(action.type) {
    case FETCH_DRESS:
      return action.payload;

    default: 
      return state;
  }
}