import React from 'react';
import { connect } from 'react-redux';
import { selectDressSize } from '../../../actions/sizeContainer';
import style from '../../styling/dressModal.css';

const DressSizeChart = ({ dress, selectDressSize }) => {
  return (
    <div>
      <div className={style.optiontags}>
        <div className={style.chooseSizeContainer}>
          <div className={`${style.chooseSize}`}>Choose a size. </div>
          <div className={style.trueToSize}>True to size. XS=00, S=0-2, M=4-6, L=8-10, XL=12.</div>
        </div>
      </div>

      <div className={style.availableSizesContainer}>
        {dress.clothingsizes.map((size, indx) => {
          return (
            <div key={indx} className={style.availableSizes} onClick={() => selectDressSize(size, 'false')}>{size}</div>
          )
        })}
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  console.log(state)
  return {
    dress: state.dress,
    showdresssize: state.showdresssize,
    dresssize: state.dresssize

  }
}

export default connect(
  mapStateToProps,
  {
    selectDressSize,
  }
  )(DressSizeChart);