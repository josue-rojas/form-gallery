import React, { Component } from 'react';
import GalleryView from './Components/View/GalleryView';
import AboutView from './Components/View/AboutView';
import NavBar from './Components/View/NavBar';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      activeView: window.location.hash,
    }
    this.changeWindow = this.changeWindow.bind(this);
  }

  componentDidMount(){
    window.addEventListener("hashchange", this.changeWindow, false);
  }

  componentWillUnmount() {
    window.removeEventListener("hashchange", this.changeWindow, false);
  }

  changeWindow(h){
    this.setState({
      activeView: window.location.hash,
    })
  }

  render() {
    const galleryView = (<GalleryView/>)
    const aboutView = (<AboutView/>)
    const active_view = this.state.activeView === '#About' ? aboutView : galleryView;
    return (
      <div className="View">
        <NavBar
          title={'Form Gallery'}
          subtitle={'A simple react gallery'}
          activeView={this.state.activeView}/>
        {active_view}
      </div>
    );
  }
}
