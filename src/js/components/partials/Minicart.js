import React, { Component } from 'react';

import MinicartItem from './MinicartItem';

import { Consumer } from '../../Context';

export default class Minicart extends Component {
  constructor() {
    super();
  }

  getDropdownList(items) {
    let newArray = [];
    let set = [];

    for (let i = 0; i < items.length; i++) {
      const self =  items[i];
      const indexOf = set.indexOf(self.code);

      if (indexOf > -1) {
        newArray[indexOf].quantity += 1;
      } else {
        self.quantity = 1;
        newArray = newArray.concat(self);
        set = set.concat(self.code)
      }
    }

    return (
      <ul>
        {newArray.map( (item, index) => (
          <MinicartItem item={item} key={index} />
        ))}
      </ul>
    );
  }

  render() {

    return (
      <div className="header-minicart">
        <Consumer>
          {
            ( ({cartItems}) => (
              <React.Fragment>
                <span>{cartItems.length}</span>
                {cartItems.length > 0 ? 
                    <div className="header-minicart-dropdown">
                      {this.getDropdownList(cartItems)}
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