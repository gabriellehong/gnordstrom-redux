import React from 'react';
import { connect } from 'react-redux';
import style from '../styling/dressModal.css';

const BraceletModal = ({ bracelet }) => {
  return (
    <div>
      <div className={style.componentContainer}>
        <div className={style.componentWrapper}>
          <div className={style.firstComponent}>
            <img src="bracelet.jpeg" className={`${style.image} ${style.earring}`} height="350px" width="350px" />
          </div>
          <div className={`${style.secondComponent} ${style.secondComponentSpacing}`}>
            <div className={style.productName}>
              {bracelet.productname}
            </div>
            <div className={style.designer}>
              {bracelet.designer}
            </div>
            <div className={style.price}>
              ${bracelet.price} <span className={style.shipping}>Free Shipping</span>
            </div>
            <div className={style.description}>
              {bracelet.description}
            </div>

            <div className={style.addToBag}>Add to bag</div>

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
  return {
    bracelet: state.bracelet,
    modal: state.modal
  }
}

export default connect(mapStateToProps)(BraceletModal);