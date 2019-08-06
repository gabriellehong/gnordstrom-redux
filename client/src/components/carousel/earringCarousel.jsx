import React, { Component } from 'react';
import style from '../styling/column1.css';
import { connect } from 'react-redux';
import { fetchEarring } from '../../actions/fetchProductsContainer' ;

class Earring extends Component {
  componentDidMount() {
    this.props.fetchEarring()
  }
  render() {
    return (
      <div>
        <img src="earring.jpeg" height="30%" width="50%" className={style.earringImage}/>
        <div className={style.price}>
          ${ !this.props.earring ? '' : this.props.earring.price }
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { 
    earring: state.earring,
  }
}

export default connect(
  mapStateToProps,
  { 
    fetchEarring,
  }
)(Earring);