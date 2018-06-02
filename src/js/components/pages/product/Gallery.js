import React, { Component } from 'react';

export default class Gallery extends Component {
  constructor() {
    super();

    this.changeImage = this.changeImage.bind(this);

    this.state = {
      thumbnails: [],
      big: [],
      activeIndex: 0
    }
  }

  componentDidMount() {
    this.filterImages();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.product !== this.props.product) {
      this.filterImages();
    }
  }

  filterImages() {
    const thumbnails = this.props.images.filter(image => image.format === 'thumbnail');
    const big = this.props.images.filter(image => image.format === 'product')
    this.setState({thumbnails, big})
  }

  changeImage(index) {
    this.setState({activeIndex: index});
  }

  render() {
    let big = this.state.big[this.state.activeIndex] ? <img src={this.state.big[this.state.activeIndex].url} /> : ''
    
    const thumbs = this.state.thumbnails.map((image, index) => (
      <div key={index} onClick={() => this.changeImage(index)} className={`pdp-thumbs-item` + (index === this.state.activeIndex ? ' active' : '')}>
        <img src={image.url} />
      </div>
    ))

    return (
      
      <React.Fragment>
        <div className="pdp-gallery-big">
          {big}
        </div>
        
        <div className="pdp-gallery-thumbs">
          {thumbs}
        </div>
      </React.Fragment>

    )
  }
}