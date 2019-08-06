import { RANDOM_LIKES, OUTFIT_NAME, SHOW_MODAL } from './types.jsx';

export const getLikes = () => {
  let num = Math.floor(Math.random() * 10)
  return {
    type: RANDOM_LIKES,
    payload: num
  }
}

export const outfitNames = () => {
  let outfitNames = [
    'MODERN OFFICE LOOK',
    'VACATION READY',
    'SUMMER FUN',
    'STEPPING OUT',
    'DATE NIGHT WINNER'
  ];
  let randomIndex = Math.floor(Math.random() * 5)

  return {
    type: OUTFIT_NAME,
    payload: outfitNames[randomIndex]
  }
}

export const showModal = modal => {
  return {
    type: SHOW_MODAL,
    payload: modal
  }
}



