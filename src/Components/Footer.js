import React, { Component } from 'react';
import './Styles/Footer.css';


export default class SideMenu extends Component {
  render() {
    return(
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
    )
  }
}
