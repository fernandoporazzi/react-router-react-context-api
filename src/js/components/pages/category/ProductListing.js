import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import { API_ENDPOINT } from '../../../constants';

export default class ProductListing extends Component {
  constructor() {
    super();

    this.state = {
      products: []
    }
  }

  getProductsByCategory(category) {
    const skus = {
      shoes: [
        "2057600010002U",
        "2057600010003U",
        "2057600010009U",
        "2057600010001U",
        "2057600010014U"
      ],
      bags: [
        "5001503010009U",
        "5001503470004U"
      ]
    }
  
    // simulate ajax
    fetch(`${API_ENDPOINT}/list/${skus[category].join(',')}?options=VARIANT_FULL,PRICE`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      return response.json();
    })
    .then(data => {
      this.setState({products: data});
    })
  }

  componentDidUpdate(prevProps) {
    if (prevProps.category !== this.props.category) {
      this.getProductsByCategory(this.props.category);
    }
  }

  componentDidMount() {
    this.getProductsByCategory(this.props.category);
  }

  render() {
    return (
      <React.Fragment>
        {this.state.products.map( (product, index) => (
          <div key={index}>
            <Link to={`/p/${product.code}`}>
              {product.code}
            </Link>
          </div>
        ))}
      </React.Fragment>
    )
  }
}