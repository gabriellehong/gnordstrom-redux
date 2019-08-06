import { SHOW_DRESS_ARROWS, SHOW_PURSE_ARROWS, SHOW_SHOE_ARROWS } from './types';

export const showDressArrows = show => {
  return {
    type: SHOW_DRESS_ARROWS,
    payload: show,
  }
}

export const showPurseArrows = show => {
  return {
    type: SHOW_PURSE_ARROWS,
    payload: show,
  }
}

export const showShoeArrows = show => {
  return {
    type: SHOW_SHOE_ARROWS,
    payload: show,
  }
}