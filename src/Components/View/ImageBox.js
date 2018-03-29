import React, { Component } from 'react';
import './Styles/ImageBox.css';
import Gradient from '../Loaders/Gradient';

export default class ImageBox extends Component {
  constructor(props){
    super(props);
    this.state = {
      loaded: false,
      error: false,
    }
    this.handleClick = this.handleClick.bind(this);
    // this.handleImageLoad = this.handleImageLoad.bind(this);
  }

  handleClick(){
    this.props.handleClick(this.props.imageLink, this.props.title, this.props.description)
  }
  // sorta of a trick for background img loaded https://jsfiddle.net/tovic/gmzSG/
  componentDidMount(){
    const temp_img = new Image();
    temp_img.onload = ()=>{
      this.setState({loaded: true})
    }
    temp_img.onerror = ()=>{
      this.setState({error:true})
    }
    temp_img.src = this.props.imageLink
  }
  render() {
    const style = {
      image: {
        display: this.state.error ? 'none' : '',
        backgroundImage: 'url('+this.props.imageLink + ')',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        height: '300px',
        float: 'left',
      },
      loaderWrapper: {
        display: this.state.loaded ? 'none' : 'flex',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
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
      <div className={'imageBox ' + (this.state.loaded ? 'loaded' : '')} style={style.image} onClick={this.handleClick}>
        <div style={style.loaderWrapper}>
          <Gradient
            width={'100%'}
            height={'100%'}
            colors={'rgba(95, 95, 95, 0.5), rgba(255, 255, 255, 0.14), rgba(95, 95, 95, 0.5)'}
            delay={4000}/>
        </div>
        <div style={style.hover} className='imageBox-hover'>
          {this.props.title}
        </div>
      </div>
    )
  }
}
