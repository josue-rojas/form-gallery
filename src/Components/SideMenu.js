import React, { Component } from 'react';
import './Styles/SideMenu.css';
import Burger from './Burger';
import Footer from './Footer';

export default class SideMenu extends Component {
  render() {
    return (
      <div className={'SideMenu ' + (this.props.isActive ? 'active' : 'not-active')}>
        <div className='SideMenu-Burger'>
          <Burger
            handleClick={this.props.onClick}
            fallingBurger={true}/>
        </div>
        <div className='links-wrapper'>
          <div className='links'>
            <a href='#' onClick={this.props.linkClick}>Home <div className='line'/></a>
            <a href='#about' onClick={this.props.linkClick}>About<div className='line'/></a>
            <a href='https://goo.gl/forms/KmZMP8oJ0B5mKMUr1'>Submit<div className='line'/></a>
            <a href='https://github.com/josuerojasrojas/form-gallery'>Source<div className='line'/></a>
        </div>
        </div>
        <Footer/>
      </div>
    )
  }
}
