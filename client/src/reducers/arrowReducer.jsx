import { SHOW_DRESS_ARROWS, SHOW_PURSE_ARROWS, SHOW_SHOE_ARROWS } from '../actions/types';

export const dressArrows = (state = null, action ) => {
  switch(action.type) {
    case SHOW_DRESS_ARROWS:
      return action.payload;
    default:
      return state;
  }
}

export const shoeArrows = (state = null, action ) => {
  switch(action.type) {
    case SHOW_SHOE_ARROWS:
      return action.payload;
    default:
      return state;
  }
}

export const purseArrows = (state = null, action ) => {
  switch(action.type) {
    case SHOW_PURSE_ARROWS:
      return action.payload;
    default:
      return state;
  }
}

