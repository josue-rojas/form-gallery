import React, { Component } from 'react';
import ImageBox from './Components/View/ImageBox'
import ImageFull from './Components/View/ImageFull'

export default class App extends Component {
  constructor(props){
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
    this.imageFullHide = this.imageFullHide.bind(this);
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

  imageClick(imageLink, title, description) {
    this.setState({
      imageFullSrc: imageLink,
      imageFullTitle: title,
      imageFullDescription: description,
      imageFullActive: true,
    })
  }

  imageFullHide(){
    this.setState({
      imageFullActive: false,
    })
  }

  render() {
    const style = {
      imageBoxWrapper: {
        position: this.state.imageFullActive ? 'fixed' : '',
        width: '100vw',
      },
    }
    return (
      <div className="View">
        <ImageFull
          imageSrc={this.state.imageFullSrc}
          title={this.state.imageFullTitle}
          description={this.state.imageFullDescription}
          isActive={this.state.imageFullActive}
          handleClick={this.imageFullHide}/>
        <div style={style.imageBoxWrapper}>
          {this.state.imageBox}
        </div>
      </div>
    );
  }
}
