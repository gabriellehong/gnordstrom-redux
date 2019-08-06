import React, { Component } from 'react';
import style from './styling/app.css';

import Bracelet from './carousel/braceletCarousel';
import Dress from './carousel/dressCarousel';
import Purse from './carousel/purseCarousel';
import Earring from './carousel/earringCarousel';
import Shoe from './carousel/shoeCarousel';
import DressModal from './modals/dress/dress';
import EarringModal from './modals/earring';
import PurseModal from './modals/purse';
import ShoeModal from './modals/shoe/shoe';
import BraceletModal from './modals/bracelet';

import { getLikes, outfitNames, showModal } from '../actions/carousel';
import { dressReviewCount, shoeReviewCount } from '../actions/reviewCountContainer';
import { dressStarCount, shoeStarCount } from '../actions/starCountContainer'
import { connect } from 'react-redux';

class App extends Component {

  componentDidMount() {
    this.props.getLikes()
    this.props.outfitNames()
    this.props.dressReviewCount();
    this.props.shoeReviewCount();
    this.props.dressStarCount();
    this.props.shoeStarCount();
  }

  render() {
    return (
      <div>
        <div className={style.looksDiv}>
          <span className={style.looksText}>LOOKS</span>
          <a href="#" className={style.moreLooks}>   Shop more looks</a>
        </div>

        <div className={style.componentContainer}>
          <div className={style.componentOne}>
            <div className={style.borderBox} >

              <div className={style.outfitNameContainer}>
                <div className={style.outfitNameText}>
                  {!this.props.outfitName ? '' : this.props.outfitName}
                </div>
                <a href="#" className={style.nordstromLink}>nordstrom</a>
              </div>

              <div className={style.gridContainer}>
                <div className={style.column1}>
                  <div className={style.item} onClick={() => this.props.showModal('earring')}>
                    <Earring />
                  </div>
                  <div className={style.item} onClick={() => this.props.showModal('bracelet')}>
                    <Bracelet />
                  </div>
                </div>
                <div className={style.column2}>
                  <div className={style.item} className={style.item} onClick={() => this.props.showModal('dress')}>
                    <Dress />
                  </div>
                </div>
                <div className={style.column3}>
                  <div className={style.item} onClick={() => this.props.showModal('purse')}>
                    <Purse />
                  </div>
                  <div className={style.item} onClick={() => this.props.showModal('shoe')}>
                    <Shoe />
                  </div>
                </div>
              </div>

              <div className={style.bottomBox}>
                <span className={style.svg}>
                  <svg xmlns="http://www.w3.org/2000/svg" focusable="false" height="24" width="24" className="nui-icon nui-icon-large-heart-empty ">
                    <path className="nui-icon-large-heart-empty-32" d="M17.75 2.185a5.73 5.73 0 0 0-4.044 1.666l-.003.003-.007.008L12 5.556l-1.694-1.694-.009-.009-.004-.003a5.75 5.75 0 0 0-8.125 8.132L12 21.815l9.831-9.834a5.748 5.748 0 0 0-4.081-9.796z" stroke="#393939" fill="none" strokeWidth="1px"></path>
                  </svg>


                  <svg xmlns="http://www.w3.org/2000/svg" focusable="false" height="24" width="24" className="nui-icon nui-icon-large-heart-empty ">
                    <path className="nui-icon-large-heart-empty-32" d="M17.75 2.185a5.73 5.73 0 0 0-4.044 1.666l-.003.003-.007.008L12 5.556l-1.694-1.694-.009-.009-.004-.003a5.75 5.75 0 0 0-8.125 8.132L12 21.815l9.831-9.834a5.748 5.748 0 0 0-4.081-9.796z" stroke="#393939" fill="none" strokeWidth="1px"></path>
                  </svg>
                </span>

                <span className={style.randomLikes}> {!this.props.likes ? '' : this.props.likes} love this look</span>
                <div className={style.designerName}>
                  From {this.props.earring.designer}, {this.props.bracelet.designer}, {this.props.dress.designer}, {this.props.purse.designer},
                    and {!this.props.shoe ? '' : this.props.shoe.designer}
                </div>
              </div>

            </div>
          </div>

          <div className={style.componentTwo}>
            {this.props.modal === 'dress' ? (
              <div className={style.modal}>
                <div> <DressModal /></div>
              </div>
            ) : <div></div>}
            {this.props.modal === 'earring' ? (
              <div className={style.modal}>
                <div className={style.modal}>
                  <div><EarringModal /></div>
                </div>
              </div>
            ) : <div></div>}
            {this.props.modal === 'bracelet' ? (
              <div className={style.modal}>
                <div className={style.modal}>
                  <div><BraceletModal /></div>
                </div>
              </div>
            ) : <div></div>}
            {this.props.modal === 'purse' ? (
              <div className={style.modal}>
                <div className={style.modal}>
                  <div><PurseModal /></div>
                </div>
              </div>
            ) : <div></div>}
            {this.props.modal === 'shoe' ? (
              <div className={style.modal}>
                <div className={style.modal}>
                  <div><ShoeModal /></div>
                </div>
              </div>
            ) : <div></div>}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    likes: state.likes,
    outfitName: state.outfitName,
    bracelet: state.bracelet,
    dress: state.dress,
    earring: state.earring,
    purse: state.purse,
    shoe: state.shoe,
    modal: state.modal
  }
}

export default connect(mapStateToProps,
  {
    showModal,
    outfitNames,
    getLikes,
    shoeReviewCount,
    dressReviewCount,
    dressStarCount,
    shoeStarCount,
  }
)(App);