import { DRESS_REVIEW_COUNT, SHOE_REVIEW_COUNT } from './types';

export const shoeReviewCount = () => {
  let num = Math.floor(Math.random() * 15)

  return {
    type: SHOE_REVIEW_COUNT,
    payload: num,
  }
}

export const dressReviewCount = () => {
  let num = Math.floor(Math.random() * 15)

  return {
    type: DRESS_REVIEW_COUNT,
    payload: num,
  }
}
