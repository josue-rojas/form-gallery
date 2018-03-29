import React, { Component } from 'react';
import './Styles/AboutView.css';

export default class AboutView extends Component{
  render() {
    const style = {
      aboutwrapper: {
        textAlign: 'center',
      },
      title: {
        fontSize: '1.4rem'
      },
      text: {
        margin: '5px 0 10px',
      },
      image: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
      }
    }
    return(
      <div style={style.aboutwrapper} className='About'>
        <div style={style.title}>About</div>
        <div style={style.text}>
          Although this is a simple react gallery, the point is to use <a href='https://www.google.com/sheets/about/'>google sheets</a> as backend and get user inputs using <a href='https://www.google.com/forms/about/'>google forms</a>. The form updates the sheet and the data is pulled from there to here.
        </div>
        <div style={style.title}>Benefits</div>
        <div style={style.text}>
          There aren't really many benefits using sheets as backend. The only one I can think of is it removes the need to manage a database (then again this isn't a big database).
        </div>
        <div>Anyway</div>
      </div>
    )
  }
}
