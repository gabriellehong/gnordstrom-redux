import { CURRENT_DRESS_IMAGE, CURRENT_SHOE_IMAGE, CURRENT_PURSE_IMAGE} from './types';

let dresslength = 0;
let shoelength = 0;
let purselength = 0;

export const currentDressImage = () => {
  const arr = [ 'dress1.jpeg', 'dress2.jpeg', 'dress3.jpeg'];

  if (dresslength === arr.length-1) {
    dresslength = arr.length-1
  } else {
    dresslength+=1;
  }
  console.log('dresslength',dresslength)
  return {
    type: CURRENT_DRESS_IMAGE,
    payload: arr[dresslength]
  }
}

export const currentPurseImage = () => {
  const arr = [ 'purse1.jpeg', 'purse2.jpeg'];

  if (purselength === arr.length-1) {
    purselength = arr.length-1
  } else {
    purselength+=1;
  }
  return {
    type: CURRENT_PURSE_IMAGE,
    payload: arr[purselength]
  }
}

export const currentShoeImage = () => {
  const arr = [ 'shoe1.jpeg', 'shoe2.jpeg', 'shoe3.jpeg'];

  if (shoelength === arr.length-1) {
    shoelength = arr.length-1
  } else {
    shoelength+=1;
  }
  return {
    type: CURRENT_SHOE_IMAGE,
    payload: arr[shoelength]
  }
}