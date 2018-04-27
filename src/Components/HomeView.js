import React, { Component } from 'react';
import './Styles/HomeView.css';
import ImageBox from './ImageBox';
import FullImage from './FullImage';


export default class HomeView extends Component {
  constructor(props) {
    super(props);
    this.state = {
     hasData: false,
     imageFullActive: false,
     imageFullSrc: '',
     imageFullTitle: '',
     imageFullDescription: '',
     imageBox: [],
   }
   this.imageClick = this.imageClick.bind(this);
  }

  componentDidMount(){
    fetch('https://spreadsheets.google.com/feeds/list/1zMxMQObYBTBHPHRinU0qN0avLBWMx0QL7o_KPszkwhk/1/public/values?alt=json')
    .then((responce) => {
      return responce.json();
    })
    .then((data) => {
      const imageBox = [];
      for(let i = 0 ; i < data.feed.entry.length; i++){
        imageBox.push(
          <ImageBox
            imageLink={data.feed.entry[i]['gsx$linktoimage']['$t']}
            title={data.feed.entry[i]['gsx$titleofimage']['$t']}
            description={data.feed.entry[i]['gsx$description']['$t']}
            handleClick={this.imageClick}/>
        )
      }
      this.setState({
        imageBox: imageBox,
        hasData: true,
      })
    })
  }

  imageClick(link, title, description) {
    this.setState({
      imageFullSrc: link,
      imageFullTitle: title,
      imageFullDescription: description
    })
    this.props.clickImage(true);
  }

  render() {
    return(
      <div className='HomeView'>
        <FullImage
          fullImageActive={this.props.fullImageActive}
          clickImage={()=>this.props.clickImage(false)}
          title={this.state.imageFullTitle}
          description={this.state.imageFullDescription}
          link={this.state.imageFullSrc}/>
        <div class='images-boxes'>
          {this.state.imageBox}
        </div>
      </div>
    )
  }
}
