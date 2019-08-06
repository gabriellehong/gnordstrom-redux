import getLikesReducer from './getLikesReducer';
import outfitNameReducer from './outfitNameReducer';
import { shoeStarCount, dressStarCount } from './starCountReducer';
import { shoeReviewCount, dressReviewCount } from './reviewCountReducer';
import { showShoeSize, showDressSize, selectShoeSize, selectDressSize } from './sizeReducer';
import { earring, bracelet, purse, shoe, dress, modal } from './productReducer.jsx';
import { dressArrows, purseArrows, shoeArrows } from './arrowReducer.jsx';
import { currentDressImg, currentPurseImg, currentShoeImg } from './currentImageReducer.jsx';
import { combineReducers } from 'redux';


export default combineReducers({
  likes: getLikesReducer,
  outfitName: outfitNameReducer,
  dressstarcount: dressStarCount,
  shoestarcount: shoeStarCount,
  shoereviewcount: shoeReviewCount,
  dressreviewcount: dressReviewCount,
  shownshoesize: showShoeSize,
  showdresssize: showDressSize,
  shoesize: selectShoeSize,
  dresssize: selectDressSize,
  dressarrow: dressArrows,
  pursearrow: purseArrows,
  shoearrow: shoeArrows,
  dressimg: currentDressImg,
  purseimg: currentPurseImg,
  shoeimg: currentShoeImg,
  earring,
  bracelet,
  purse,
  shoe,
  dress,
  modal,
})
