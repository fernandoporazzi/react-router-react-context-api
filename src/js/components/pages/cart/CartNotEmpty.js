import React, { Component } from 'react';
import CartItem from './CartItem';
import { Consumer } from '../../../Context';

export default class CartNotEmpty extends Component {
  componentDidMount() {

  }

  render() {
    return (
      <React.Fragment>
        <div className="cart-products">
          <div className="cart-box">
            <Consumer>
              {({ cartItems }) => (
                cartItems.map((item, index) => <CartItem data={item} key={index} /> )
              )}
            </Consumer>
          </div>
        </div>

        <div className="cart-sidebar">
          <div className="cart-box">
          oi
          </div>
        </div>
      </React.Fragment>
    );
  }
}