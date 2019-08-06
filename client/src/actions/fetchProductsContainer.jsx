import { FETCH_EARRING, FETCH_BRACELET, FETCH_DRESS, FETCH_PURSE, FETCH_SHOE } from './types';
import { product } from '../apiRequests/apiGetRequest';
import '@babel/polyfill';


export const fetchEarring = () => async dispatch => {
  let request = await product.get('/morelooks/api/earrings')

  dispatch({
    type: FETCH_EARRING,
    payload: request.data
  })
}

export const fetchBracelet = () => async dispatch => {
  let request = await product.get('/morelooks/api/bracelets')

  dispatch({
    type: FETCH_BRACELET,
    payload: request.data
  })
}

export const fetchPurse = () => async dispatch => {
  let request = await product.get('/morelooks/api/purses')

  dispatch({
    type: FETCH_PURSE,
    payload: request.data
  })
}

export const fetchShoe = () => async dispatch => {
  let request = await product.get('/morelooks/api/shoes')

  dispatch({
    type: FETCH_SHOE,
    payload: request.data
  })
}

export const fetchDress = () => async dispatch => {
  let request = await product.get('/morelooks/api/dress')

  dispatch({
    type: FETCH_DRESS,
    payload: request.data
  })
}