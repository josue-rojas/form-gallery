import React, { Component } from 'react';
import './Styles/ImageBox.css'

export default class ImageBox extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.props.handleClick(this.props.imageLink, this.props.title, this.props.description)
  }

  render() {
    const style = {
      image: {
        backgroundImage: 'url('+this.props.imageLink + ')',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        height: '300px',
        float: 'left'
      },
      hover: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transition: '400ms',
        backgroundColor: 'rgba(255,255,255,.75)',
        cursor: 'pointer',
      }
    }
    return(
      <div className='imageBox' style={style.image} onClick={this.handleClick}>
        <div style={style.hover} className='imageBox-hover'>
          {this.props.title}
        </div>
      </div>
    )
  }
}
