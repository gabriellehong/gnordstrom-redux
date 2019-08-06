import React, { Component } from 'react';
import style from '../styling/column3.css';
import { connect } from 'react-redux';
import { fetchShoe } from '../../actions/fetchProductsContainer';


class Shoe extends Component {
  componentDidMount() {
    this.props.fetchShoe();
  }

  render() {
    return (
      <div>
        <div className={style.carouselWrapper}>

          <div className={style.backButton}>
            <div className={style.carouselBackButton}>
              <svg className="nui-icon-nui-icon-medium-chevron-right " xmlns="http://www.w3.org/2000/svg" focusable="false" height="16" width="9">
                <path d="M1 8l7 7M8 1L1 8" stroke="#737373" fill="none" strokeWidth="1px"></path>
              </svg>
            </div>
          </div>

          <img src="shoe1.jpeg" height="60%" width="72%" className={style.image} />

          <div className={style.forwardButton} >
            <div className={style.svgForwardButton}>
              <svg className="nui-icon-nui-icon-medium-chevron-right " xmlns="http://www.w3.org/2000/svg" focusable="false" height="16" width="9" className="nui-icon nui-icon-medium-chevron-left ">
                <path d="M1 8l7 7M8 1L1 8" stroke="#737373" fill="none" strokeWidth="1px"></path>
              </svg>
            </div>
          </div>

        </div>
        <div className={style.price}>
          ${!this.props.shoe ? '' : this.props.shoe.price }
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { shoe: state.shoe }
}

export default connect(
  mapStateToProps,
  { fetchShoe }
)(Shoe);