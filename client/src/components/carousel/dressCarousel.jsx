import React, { Component } from 'react';
import style from '../styling/column2.css';
import { connect } from 'react-redux';
import { fetchDress } from '../../actions/fetchProductsContainer';
import { showDressArrows } from '../../actions/showArrowsContainer';
import { currentDressImage } from '../../actions/currentImageContainer';


class Dress extends Component {
  componentDidMount() {
    this.props.fetchDress();
  }
  render() {
    let { showDressArrows, dressarrow, currentDressImage, dressimg } = this.props;
    return (
      <div>
        <div className={style.carouselWrapper}>
          {dressarrow === 'true' ? (
              <svg xmlns="http://www.w3.org/2000/svg" focusable="false" height="16" width="9" className={style.backButton}>
                <path className="nui-icon-medium-chevron-left-0" d="M1 8l7 7M8 1L1 8" stroke="#737373" fill="none" strokeWidth="1px"></path>
              </svg>
          ) : ''}
          <div className={style.dressImageContainer}>
            <img
              onMouseOver={() => showDressArrows('true')}
              onMouseOut={() => showDressArrows('false')}
              onClick={() => currentDressImage('true')}
              src={dressimg} className={style.dressImage} height="300px" width="180px"
            />
          </div>
          {dressarrow === 'true' ? (
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" focusable="false" height="16" width="9" className={style.svgForwardButton}>
                <path className="nui-icon-medium-chevron-left-0" d="M1 8l7 7M8 1L1 8" stroke="#737373" fill="none" strokeWidth="1px"></path>
              </svg>
            </div>
          ) : ''}
        </div>

        <div className={style.dressPrice}>
          ${!this.props.dress ? '' : this.props.dress.price}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    dress: state.dress,
    dressarrow: state.dressarrow,
    dressimg: state.dressimg,
  }
}

export default connect(
  mapStateToProps,
  {
    fetchDress,
    showDressArrows,
    currentDressImage
  }
)(Dress);