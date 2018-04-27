import React, { Component } from 'react';
import './Styles/SideMenu.css';
import Burger from './Burger';

export default class SideMenu extends Component {
  render() {
    return (
      <div className={'SideMenu ' + (this.props.isActive ? 'active' : '')}>
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
        <div className='footer'>
          <div className='icon-links'>
            <div
              onClick={()=> window.location = 'https://github.com/josuerojasrojas' }
              className='icon github-icon'/>
            <div
              onClick={()=> window.location = 'https://www.linkedin.com/in/josuerojasz/' }
              className='icon linkedin-icon'/>
            <div
              onClick={()=> window.location = 'https://www.facebook.com/withcheesepls' }
              className='icon facebook-icon'/>
            <div
              onClick={()=> window.location = 'https://www.instagram.com/withcheesepls/' }
              className='icon instagram-icon'/>
          </div>
          <div className='credits'>
            Developed by<a href="http://josuerojasrojas.github.io">&nbsp;Josue Rojas</a>
          </div>
        </div>
      </div>
    )
  }
}
