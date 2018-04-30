import React, { Component } from 'react';
import Burger from './Burger';
import Footer from './Footer';
import './Styles/FullImage.css';

export default class FullImage extends Component {
  render() {
    return(
      <div className={'FullImage ' + (this.props.fullImageActive ? 'active' : 'not-active')}>
        <div className='image'>
          <div className='image-wrapper'>
            <img src={this.props.link}/>
          </div>
        </div>
        <div className='sidebar'>
          <div className='sidebar-Burger'>
            <Burger
              handleClick={this.props.clickImage}
              fallingBurger={true}/>
          </div>
          <div className='info-wrapper'>
            <div className='info'>
              <div className='title'>{this.props.title}</div>
              <div className='description'>{this.props.description}</div>
              <a className='link' href={this.props.link}>Direct Link<div className='line'/></a>
            </div>
          </div>
        <Footer/>
        </div>
      </div>
    )
  }
}
