import { SHOW_DRESS_SIZE, SHOW_SHOE_SIZE, SELECT_SHOE_SIZE, SELECT_DRESS_SIZE } from './types';
import '@babel/polyfill';

export let showShoeSize = size => {
  return {
    type: SHOW_SHOE_SIZE,
    payload: size
  }
}

export let showDressSize = size => {
  return {
    type: SHOW_DRESS_SIZE,
    payload: size
  }
}

export const selectShoeSize = (size, visible) => async dispatch => {
  await dispatch({
    type: SELECT_SHOE_SIZE,
    payload: size
  })
  await dispatch(showShoeSize(visible))
}

export const selectDressSize = (size, visible) => async dispatch => {
  await dispatch({
    type: SELECT_DRESS_SIZE,
    payload: size
  })
  await dispatch(showDressSize(visible))
}

