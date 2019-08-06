import { DRESS_STAR_COUNT, SHOE_STAR_COUNT } from '../actions/types';

export const dressStarCount = (state = [], action) => {
  switch(action.type) {
    case DRESS_STAR_COUNT:
      return [...state, action.payload];

    default:
      return state;
  }
}

export const shoeStarCount = (state = [], action ) => {
  switch(action.type) {
    case SHOE_STAR_COUNT:
      return [...state, action.payload];

    default:
      return state;
  }
}