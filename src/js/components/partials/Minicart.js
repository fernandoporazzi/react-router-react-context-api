import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import MinicartItem from './MinicartItem';

import { Consumer } from '../../Context';

export default class Minicart extends Component {
  constructor() {
    super();
  }

  countItems(items) {
    let count = 0;
    for (let i = 0; i < items.length; i++) {
      count += items[i].quantity;
    }
    return count;
  }

  render() {

    return (
      <div className="header-minicart">
        <Consumer>
          {
            ( ({cartItems}) => (
              <React.Fragment>
                <span>{this.countItems(cartItems)}</span>
                {cartItems.length > 0 ? 
                    <div className="header-minicart-dropdown">
                      <ul>
                        {cartItems.map( (item, index) => (
                          <MinicartItem item={item} key={index} />
                        ))}
                      </ul>
                      <div className="header-minicart-footer">
                        <div>
                          Showing 1 of XX
                        </div>

                        <div>
                          <Link to="/cart" className="btn primary sm">Go To Cart</Link>
                        </div>
                      </div>
                      
                    </div>
                  :
                    ''
                }
                
              </React.Fragment>
            ) )
          }
        </Consumer>
      </div>
    );
  }
}