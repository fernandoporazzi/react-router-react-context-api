import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import { API_ENDPOINT } from '../../../constants';

import Gallery from './Gallery';
import { Consumer } from '../../../Context';

export default class Product extends Component {
  constructor() {
    super();

    this.state = {};
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.product !== this.props.match.params.product) {
      this.getProductData(this.props.match.params.product);
    }
  }

  componentDidMount() {
    this.getProductData(this.props.match.params.product);
  }

  getProductData(sku) {
    fetch(`${API_ENDPOINT}/${sku}?options=GALLERY,VARIANT_FULL,PRICE`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => this.setState( (state) => ({product: data}) ));
  }

  getRenderContent() {
    const { product } = this.state;

    if (product) {
      return (
        <React.Fragment>
          <h2>{product.name}</h2>

          <div className="pdp-price">
            <strong>${product.price.value}</strong>
          </div>

          <div className="pdp-desc">
            <ul>
              <li><strong>Material:</strong> {product.material}</li>
              <li><strong>Color:</strong> {product.color}</li>
              
              {
                product.bagDimension ? 
                  <li><strong>Bag Dimension:</strong> {product.bagDimension}</li> 
                : 
                  '' 
              }
              
            </ul>
          </div>

          <div className="pdp-actions">
          <Consumer>
              {
                ( ({ addToCart })  => (
                  <button className="btn secondary md" onClick={() => addToCart(product)}>Add to cart</button>
                ) )
              }
            </Consumer>

            <button className="btn primary md">Buy now</button>
          </div>
        </React.Fragment>
      )
    }

    return (
      <React.Fragment>
        <h2 className="loading-placeholder title"></h2>
        <div className="pdp-price">
          <span className="loading-placeholder">&nbsp;</span>
        </div>
        <div>
          <ul>
            <li className="loading-placeholder li">&nbsp;</li>
            <li className="loading-placeholder li">&nbsp;</li>
            <li className="loading-placeholder li">&nbsp;</li>
            <li className="loading-placeholder li">&nbsp;</li>
          </ul>
        </div>
        <div className="pdp-actions">
          <div className="loading-placeholder button">&nbsp;</div>
          <div className="loading-placeholder button">&nbsp;</div>
        </div>
      </React.Fragment>
    );
  }

  render() {
    const content = this.getRenderContent();

    return (
      <div className="pdp">
        <div className="pdp-gallery">
          {
            this.state.product 
            ? 
              <Gallery images={this.state.product.images} product={this.state.product.code} /> 
            : 
            'Loading...'
          }
        </div>

        <div className="pdp-details">
          {content}
        </div>
        
      </div>
    )
  }
}