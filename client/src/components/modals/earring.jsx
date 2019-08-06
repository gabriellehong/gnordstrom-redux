import React from 'react';
import { connect } from 'react-redux';
import style from '../styling/dressModal.css';

const EarringModal = ({earring}) => {
  return (
    <div>
      <div className={style.componentContainer}>
        <div className={style.componentWrapper}>
          <div className={style.firstComponent}>
            <img src="earring.jpeg" height="550px" width="350px" className={`${style.image} ${style.earring}`}/>
          </div>

          <div className={`${style.secondComponent} ${style.earring}`}>
            <div className={style.productName}>
              {earring.productname}
            </div>
            <div>
              <div className={style.designer}>
                {earring.designer}
              </div>
            </div>
            <div className={style.price}>
              ${earring.price} <span className={style.shipping}> Free Shipping</span>
            </div>
            <div className={style.description}>
              {earring.description}
            </div>
            <div className={style.addBag}>
              <div className={`${style.addToBag} ${style.spacing}`}>Add to bag</div>
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
    modal: state.modal ,
    earring: state.earring,
  }
}

export default connect(mapStateToProps)(EarringModal)