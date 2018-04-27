import React, { Component } from 'react';
import Gradient from './Loaders/Gradient';
import './Styles/ImageBox.css'

export default class ImageBox extends Component {
  constructor(props){
    super(props);
    this.state = {
      loaded: false,
      error: false,
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.props.handleClick(this.props.imageLink, this.props.title, this.props.description)
  }

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
      },
      loaderWrapper: {
        display: this.state.loaded ? 'none' : 'flex',
      },
    }
    return(
      <div className={'ImageBox ' + (this.state.loaded ? 'loaded' : '')} style={style.image} onClick={this.handleClick}>
        <div style={style.loaderWrapper} className='loader-wrapper'>
          <Gradient
            width={'100%'}
            height={'100%'}
            colors={'rgba(95, 95, 95, 0.5), rgba(255, 255, 255, 0.14), rgba(95, 95, 95, 0.5)'}
            delay={4000}/>
        </div>
        <div className='ImageBox-hover'>
          {this.props.title}
        </div>
      </div>
    )
  }
}
