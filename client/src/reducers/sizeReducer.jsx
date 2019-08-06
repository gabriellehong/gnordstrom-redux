import { SHOW_SHOE_SIZE, SHOW_DRESS_SIZE, SELECT_SHOE_SIZE, SELECT_DRESS_SIZE } from '../actions/types';


export const showShoeSize = (state = null, action) => {
  switch(action.type) {
    case SHOW_SHOE_SIZE:
      return action.payload;

    default: 
      return state;
  }
}

export const showDressSize = (state = null, action) => {
  switch(action.type) {
    case SHOW_DRESS_SIZE:
      return action.payload;

    default: 
      return state;
  }
}

export const selectShoeSize = (state = 'Size.', action ) => {
  switch (action.type) {
    case SELECT_SHOE_SIZE:
      return action.payload;

    default:
      return state;
  }
}

export const selectDressSize = (state = 'Size.', action ) => {
  switch (action.type) {
    case SELECT_DRESS_SIZE:
      return action.payload;

    default:
      return state;
  }
}