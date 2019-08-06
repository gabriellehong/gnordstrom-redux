import React, { Component } from 'react';
import style from '../styling/column3.css';
import { connect } from 'react-redux';
import { fetchPurse } from '../../actions/fetchProductsContainer' ;
import { showPurseArrows } from '../../actions/showArrowsContainer';
import { currentPurseImage } from '../../actions/currentImageContainer';

class Purse extends Component {
  componentDidMount() {
    this.props.fetchPurse()
  }
  render() {
    let { purse, pursearrow, currentPurseImage, purseimg, showPurseArrows } = this.props;
    return (
      <div>
        <div className={style.carouselWrapper} >
          {pursearrow === 'true' ? (
            <svg xmlns="http://www.w3.org/2000/svg" focusable="false" height="16" width="9" className={style.backButton}>
              <path d="M1 8l7 7M8 1L1 8" stroke="#737373" fill="none" strokeWidth="1px"></path>
            </svg>
          ) : ''}

          <div className={style.purseDiv}>
            <img 
              onMouseOver={() => showPurseArrows('true')}
              onMouseOut={() => showPurseArrows('false')}
              onClick={() => currentPurseImage('true')} 
              src={purseimg} height="60%" width="60%" 
              className={style.image} 
            />
          </div>

          {pursearrow === 'true' ? (
            <div className={style.forwardButton}>
              <svg className={style.svgForwardButton} xmlns="http://www.w3.org/2000/svg" focusable="false" height="16" width="9">
                <path d="M1 8l7 7M8 1L1 8" stroke="#737373" fill="none" strokeWidth="1px"></path>
              </svg>
            </div>
          ) : ''}
        </div>

        <div className={style.price}>
          ${!purse ? '' : purse.price }
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { 
    purse: state.purse,
    purseimg: state.purseimg,
    pursearrow: state.pursearrow,
  }
}

export default connect(
  mapStateToProps,
  { 
    fetchPurse,
    currentPurseImage,
    showPurseArrows,
  }
)(Purse);