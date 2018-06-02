import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import ProductListing from './ProductListing';

export default class Category extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentCategory: props.match.params.category
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.match.params.category !== this.props.match.params.category;
  }

  render() {
    return (
      <div>
        categoria: {this.props.match.params.category}
        
        <ProductListing category={this.props.match.params.category} />
      </div>
    )
  }
}