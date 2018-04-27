import React, { Component } from 'react';
import './Styles/Burger.css';

export default class Burger extends Component {
  render(){
    return(
      <div className={'Burger-Wrapper ' + this.props.fallingBurger} onClick={this.props.handleClick}>
        <div/>
        <div/>
        <div/>
      </div>
    )
  }
}
