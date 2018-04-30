import React, { Component } from 'react';
import SideMenu from './Components/SideMenu';
import Burger from './Components/Burger';
import HomeView from './Components/HomeView';
import AboutView from './Components/AboutView';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.VIEWS = {
      '#': true, // umm...
      '#about': true,
    }
    this.state = {
      isMenuActive: false,
      fullImageActive: false,
      activeView: this.VIEWS[window.location.hash] ? window.location.hash : '#',
    }
    this.changeWindow = this.changeWindow.bind(this);
    this.menuClick = this.menuClick.bind(this);
    this.clickImage = this.clickImage.bind(this);
  }

  componentDidMount(){
    window.addEventListener("hashchange", this.changeWindow, false);
  }

  componentWillUnmount() {
    window.removeEventListener("hashchange", this.changeWindow, false);
  }

  changeWindow(h){
    this.setState({
      activeView: this.VIEWS[window.location.hash] ? window.location.hash : '#',
    })
  }

  menuClick(state) {
    this.setState({ isMenuActive: state });
  }

  clickImage(state) {
    this.setState({ fullImageActive: state });
  }

  render() {
    const view = {
      '#': (<HomeView
        fullImageActive={this.state.fullImageActive}
        clickImage={this.clickImage}/>),
      '#about': (<AboutView/>)
    }[this.state.activeView]
    return (
      <div className={'App ' + (this.state.isMenuActive ? 'menu-active' : '') +  (this.state.fullImageActive ? 'full-image-active' : '')}>
        <div className='Background'/>
        <SideMenu
          onClick={()=> this.menuClick(false)}
          isActive={this.state.isMenuActive}
          linkClick={()=> this.menuClick(false)}/>
        <div className='view-wrapper'>
          {view}
        </div>
        <div className='App-Burger '>
          <Burger
            handleClick={()=> this.menuClick(true)}
            fallingBurger={false}/>
        </div>
      </div>
    );
  }
}
