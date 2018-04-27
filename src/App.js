import React, { Component } from 'react';
import SideMenu from './Components/SideMenu';
import Burger from './Components/Burger';
import HomeView from './Components/HomeView';
import AboutView from './Components/AboutView';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.VIEWS = {
      '#': true, // umm...
      '#about': true,
    }
    this.state = {
      isMenuActive: false,
      activeView: this.VIEWS[window.location.hash] ? window.location.hash : '#',
    }
    this.changeWindow = this.changeWindow.bind(this);
    this.menuClick = this.menuClick.bind(this);
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
    this.setState({ isMenuActive: state })
  }

  render() {
    const view = {
      '#': (<HomeView/>),
      '#about': (<AboutView/>)
    }[this.state.activeView]
    return (
      <div className="App">
        <div className='SideMenu-wrapper'>
          <SideMenu
            onClick={()=> this.menuClick(false)}
            isActive={this.state.isMenuActive}
            linkClick={()=> this.menuClick(false)}/>
        </div>
        <div className={'App-Burger ' + this.state.isMenuActive}>
          <Burger
            handleClick={()=> this.menuClick(true)}
            fallingBurger={false}/>
        </div>
        <div className={'view-wrapper ' + this.state.isMenuActive}>
          {view}
        </div>
      </div>
    );
  }
}

export default App;
