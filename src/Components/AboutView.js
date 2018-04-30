import React, { Component } from 'react';
import './Styles/About.css';

// TODO change or add aother box to make text clear to read
export default class AboutView extends Component {
  render() {
    return(
      <div className='About'>
        <div className='info-wrapper'>
          <div className='title'>About</div>
          <div className='text'>
            Although this is a simple react gallery, the point is to use <a href='https://www.google.com/sheets/about/'>google sheets</a> as backend and get user inputs using <a href='https://www.google.com/forms/about/'>google forms</a>. The form updates the sheet and the data is pulled from there to here.
          </div>
          <div className='title'>Benefits</div>
          <div className='text'>
            There aren't really many benefits using sheets as backend. The only one I can think of is it removes the need to manage a database (then again this isn't a big database).
          </div>
          <div className='title'>Anyway</div>
          <div className='text'>
            Check out the responce sheet <a href='https://docs.google.com/spreadsheets/d/e/2PACX-1vTMpkQJCt2pnGtnCQ5S1Xu6HXKGdy7NDJC5Q8P9xk-DBm6CYVlmCS2haDVa3XnZ_Xf1AAIWYq2Nf2CQ/pubhtml'>here</a>
          </div>
        </div>
      </div>
    )
  }
}
