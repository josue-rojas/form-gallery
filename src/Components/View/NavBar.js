import React, { Component } from 'react';
import './Styles/NavBar.css';

class Burger extends Component {
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

export default class NavBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      isActive: false,
    }
    this.menuTrigger = this.menuTrigger.bind(this);
  }
  menuTrigger(close){
    this.setState({isActive:close})
  }
  render(){
    const style = {
      menu: {
        padding: '15px 10px',
        display: 'flex',
      },
      textWrapper: {
        marginRight: 'auto',
      },
      title: {
        fontSize: '1.5rem',
      },
      subtitle: {
        fontSize: '.95rem',
      },
      burgerWrapper: {
        display: 'flex',
        alignItems: 'center',
      },
      links: {
        display: 'flex',
        alignItems: 'center',
      },
      closeIcon: {
        marginLeft: 'auto',
      },
    }
    return(
      <div style={style.menu}>
        <div style={style.textWrapper}>
          <div style={style.title}>{this.props.title}</div>
          <div style={style.subtitle}>{this.props.subtitle}</div>
        </div>
        <div style={style.burgerWrapper}>
          <Burger
            handleClick={()=>this.menuTrigger(true)}/>
        </div>
        <div style={style.links} className={'Menu ' + this.state.isActive}>
          <div style={style.closeIcon}>
            <Burger
              fallingBurger={true}
              handleClick={()=>this.menuTrigger(false)}/>
          </div>
          <a href='/#'>Home</a>
          <a href='/#About'>About</a>
          <a href='https://goo.gl/forms/KmZMP8oJ0B5mKMUr1'>Submit</a>
          <a href='https://github.com/josuerojasrojas/form-gallery'>Source</a>
        </div>
      </div>
    )
  }
}
