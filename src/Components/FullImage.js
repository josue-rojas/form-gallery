import React, { Component } from 'react';
import Burger from './Burger';
import './Styles/FullImage.css';

export default class FullImage extends Component {
  render() {
    return(
      <div className={'FullImage ' + (this.props.fullImageActive ? 'active' : '')}>
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
      </div>
    )
  }
}
