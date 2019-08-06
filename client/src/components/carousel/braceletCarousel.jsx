import React, { Component } from 'react';
import style from '../styling/column1.css';
import { fetchBracelet } from '../../actions/fetchProductsContainer';
import { connect } from 'react-redux';


class Bracelet extends Component {
  componentDidMount() {
    this.props.fetchBracelet()
  }
  render() {
    return (
      <div>
        <img src="bracelet.jpeg" height="150px" width="100px"/>
        <div className={style.price}>
          ${!this.props.bracelet ? '' : this.props.bracelet.price}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { bracelet: state.bracelet }
}


export default connect(
  mapStateToProps,
  { fetchBracelet },
)(Bracelet);