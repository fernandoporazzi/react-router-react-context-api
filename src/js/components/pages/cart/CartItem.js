import React, { Component } from 'react';

import { Consumer } from '../../../Context';

import { getThumbnails } from '../../../services/image';

export default class CartItem extends Component {

  render() {
    console.log('CartItem render');

    const { data } = this.props;
    const { thumbnails } = getThumbnails(data.images);
    const image = thumbnails.find(thumb => thumb.galleryIndex === 0);

    return (
      <div className="cart-item">
        <div className="cart-item-img">
          <img src={image.url}/>
        </div>
        <div className="cart-item-detail">
          <strong>{data.name}</strong>
        </div>
        <div className="cart-item-price">
          ${data.price.value}
        </div>
        <div className="cart-item-qty">
          <Consumer>
            {
              ( ({changeQuantity}) => (
                <React.Fragment>
                  <button className="btn primary sm" onClick={() => changeQuantity(data.code, 'minus')}>-</button>
                  <span>{data.quantity}</span>
                  <button className="btn primary sm" onClick={() => changeQuantity(data.code, 'plus')}>+</button>
                </React.Fragment>
              ) )
            }
          </Consumer>
        </div>
        <div className="cart-item-total">
          {data.quantity * data.price.value}
        </div>
        <div className="cart-item-remove">
          <span>remove</span>
        </div>
      </div>
    );
  }
}