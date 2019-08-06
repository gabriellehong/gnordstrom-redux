import { CURRENT_DRESS_IMAGE, CURRENT_SHOE_IMAGE, CURRENT_PURSE_IMAGE } from '../actions/types.jsx';

export const currentDressImg = (state = "dress1.jpeg", action) => {
  switch(action.type) {
    case CURRENT_DRESS_IMAGE:
      return action.payload;
    default:
      return state;
  }
}

export const currentPurseImg = (state = "purse1.jpeg", action) => {
  switch(action.type) {
    case CURRENT_PURSE_IMAGE:
      return action.payload;
    default:
      return state;
  }
}

export const currentShoeImg = (state = "shoe1.jpeg", action) => {
  switch(action.type) {
    case CURRENT_SHOE_IMAGE:
      return action.payload;
    default:
      return state;
  }
}