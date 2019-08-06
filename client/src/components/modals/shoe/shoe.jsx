import React from 'react';
import style from '../../styling/dressModal.css';
import { connect } from 'react-redux';
import { showShoeSize } from '../../../actions/sizeContainer';
import ShoeSizeChart from './shoeSizeChart';


const ShoeModal = ({shoe, shoestarcount, shoereviewcount, shownshoesize, showShoeSize, shoesize}) => {
  return (
    <div>
      <div className={style.componentContainer}>
        <div className={style.componentWrapper}>
          <div className={style.firstComponent}>
            <img className={style.image} src="shoe1.jpeg" height="400px" width="400px"/>
          </div>

          <div className={style.secondComponent}>
            {shoestarcount}
            <span className={style.randomLikes}> ({shoereviewcount})</span>
          
            <div className={style.productName}>
              {shoe.productname}
            </div>
            <div className={style.designer}>
              {shoe.designer}
            </div>
            <div className={style.price}>
              ${shoe.price} <span className={style.shipping}>Free Shipping</span>
            </div>
            <div className={style.description}>
              {shoe.description}
            </div>

            <div className={style.sizeContainer}>
              <div>
              <div className={style.fitting}>
                Fit <span className={style.fittingStyle}>True to Size</span>
              </div>
              
                {shownshoesize !== 'true' ? (
                  <div className={`${style.size}`} onClick={() => showShoeSize('true')}>
                    {shoesize}
                    <span className={style.bottomBorder}></span>
                  </div>
                ) : ''}
              </div>
            </div>

            {shownshoesize === 'true' ? <ShoeSizeChart /> : <div> </div>}

              <div className={style.sizeGuideContainer}>
                <span className={style.sizeGuide}>Size guides.</span>
              </div>

              <div className={style.addBag}>
                <div className={style.addToBag}>Add to bag</div>
              </div>

              <div className={style.detailsContainer}>
                <a href="#" className={style.details}> See full details</a>
              </div>

          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  console.log(state)
  return {
    shoe: state.shoe,
    shoestarcount: state.shoestarcount,
    shownshoesize: state.shownshoesize,
    shoesize: state.shoesize,
    shoereviewcount: state.shoereviewcount,
  }
}

export default connect(
  mapStateToProps,
  {
    showShoeSize
  }
  )(ShoeModal);