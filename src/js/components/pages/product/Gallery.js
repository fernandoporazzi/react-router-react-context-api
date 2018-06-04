import React, { Component } from 'react';
import { getThumbnails, getGalleryImages } from '../../../services/image';
export default class Gallery extends Component {
  constructor() {
    super();

    this.changeImage = this.changeImage.bind(this);

    this.state = {
      thumbnails: [],
      galleryImages: [],
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
    const { images } = this.props;
    this.setState(getGalleryImages(images))
    this.setState(getThumbnails(images))
  }

  changeImage(index) {
    this.setState({activeIndex: index});
  }

  render() {
    let galleryImages = this.state.galleryImages[this.state.activeIndex] ? <img src={this.state.galleryImages[this.state.activeIndex].url} /> : ''
    
    const thumbs = this.state.thumbnails.map((image, index) => (
      <div key={index} onClick={() => this.changeImage(index)} className={`pdp-thumbs-item` + (index === this.state.activeIndex ? ' active' : '')}>
        <img src={image.url} />
      </div>
    ))

    return (
      
      <React.Fragment>
        <div className="pdp-gallery-big">
          {galleryImages}
        </div>
        
        <div className="pdp-gallery-thumbs">
          {thumbs}
        </div>
      </React.Fragment>

    )
  }
}