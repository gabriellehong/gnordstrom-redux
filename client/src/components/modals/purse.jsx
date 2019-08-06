import React from 'react';
import style from '../styling/dressModal.css';
import { connect } from 'react-redux';

const PurseModal = ({ purse }) => {
  return (
    <div>
      <div className={style.componentContainer}>
        <div className={style.componentWrapper}>
          <div className={style.firstComponent}>
            <img className={`${style.image} ${style.earring}`} src="purse1.jpeg" height="400px" width="400px"/>
          </div>
          <div className={style.secondComponent}>
            <div className={style.productName}>
              {purse.productname}
            </div>
            <div className={style.designer}>
              {purse.designer}
            </div>
            <div className={style.price}>
              ${purse.price} <span className={style.shipping}>Free Shipping</span>
            </div>
            <div className={style.description}>
              {purse.description}
            </div>
            <div className={style.addBag}>
              <div className={style.addToBag}>Add to bag</div>
            </div>
            <div className={style.detailsContainer}>
              <a href="#" className={style.details}>See full details</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    purse: state.purse
  }
}

export default connect(mapStateToProps)(PurseModal);