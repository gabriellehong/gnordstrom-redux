import React from 'react';
import { connect } from 'react-redux';
import { showDressSize } from '../../../actions/sizeContainer';
import DressSizeChart from './dressSizeChart.jsx';
import style from '../../styling/dressModal.css';



const DressModal = ({ dress, dressstarcount, dressreviewcount, showdresssize, showDressSize, dresssize }) => {
  return (
    <div>
      <div className={style.componentContainer}>
        <div className={style.componentWrapper}>

          <div className={style.firstComponent}>
            <img className={style.image} src="dress1.jpeg" height="550px" width="350px" />
          </div>

          <div className={style.secondComponent}>
            {dressstarcount}
            <span className={style.randomLikes}>({dressreviewcount})</span>

            <div className={style.productName}>
              {dress.productname}
            </div>

            <div className={style.designer}>
              <span className={style.designerSpan}>{dress.designer}</span>
            </div>

            <div className={style.price}>
              ${dress.price} <span className={style.shipping}>Free Shipping</span>
            </div>

            <div className={style.description}>
              {dress.description}
            </div>

            <div className={style.sizeContainer}>
              <div>
                <div className={style.fitting}>
                  Fit <span className={style.fittingStyle}>True to Size</span>
                </div>
                {showdresssize !== 'true' ? (
                  <div className={`${style.size}`} onClick={() => showDressSize('true')}>
                    {dresssize}
                    <span className={style.bottomBorder}></span>
                  </div>
                ) : ''}
              </div>
            </div>


            {showdresssize === 'true' ? <DressSizeChart /> : ''}

            <div className={style.container}>
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
    </div >
  )
}

const mapStateToProps = state => {
  return {
    modal: state.modal,
    dress: state.dress,
    dressstarcount: state.dressstarcount,
    dressreviewcount: state.dressreviewcount,
    showdresssize: state.showdresssize,
    dresssize: state.dresssize
  }
}

export default connect(
  mapStateToProps,
  {
    showDressSize,
  }
)(DressModal);