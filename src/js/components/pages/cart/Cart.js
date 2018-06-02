import React, { Component } from 'react';

import { Consumer } from '../../../Context';
import CartEmpty from './CartEmpty';
import CartNotEmpty from './CartNotEmpty';

export default class Cart extends Component {
  render() {
    return (
      <div className="cart">
        <div className="cart-content">
          <Consumer>
            {
              ( ({cartItems}) => (
                <React.Fragment>
                  {
                    cartItems.length > 0
                      ? <CartNotEmpty />
                      : <CartEmpty />
                  }
                </React.Fragment>
              ))
            }
          </Consumer>
        </div>
      </div>
    );
  }
}