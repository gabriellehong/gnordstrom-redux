import {SHOE_REVIEW_COUNT, DRESS_REVIEW_COUNT} from '../actions/types';

export const shoeReviewCount = (state = null, action ) => {
  switch(action.type) {
    case SHOE_REVIEW_COUNT:
      return action.payload;

    default:
      return state;
  }
}

export const dressReviewCount = (state = null, action ) => {
  switch(action.type) {
    case DRESS_REVIEW_COUNT:
      return action.payload;

    default:
      return state;
  }
}