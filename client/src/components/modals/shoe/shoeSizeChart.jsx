import React from 'react';
import { connect } from 'react-redux';
import { selectShoeSize } from '../../../actions/sizeContainer';
import style from '../../styling/dressModal.css';

const ShoeSizeChart = ({ shoe, selectShoeSize }) => {
  return (
    <div>
      <div className={style.optiontags}>
        <div className={style.chooseSizeContainer}>
          <div className={`${style.chooseSize}`}>Choose a size. </div>
          <div className={style.trueToSize}>True to size. </div>
        </div>
      </div>

      <div className={style.availableSizesContainer}>
        {shoe.shoesizes.map((size, indx) => {
          return (
            <div key={indx} className={style.availableSizes} onClick={() => selectShoeSize(size, 'false')}>{size}</div>
          )
        })}
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  console.log(state)
  return {
    shoe: state.shoe,
    showshoesize: state.showshoesize,
    shoesize: state.shoesize

  }
}

export default connect(
  mapStateToProps,
  {
    selectShoeSize,
  }
  )(ShoeSizeChart);