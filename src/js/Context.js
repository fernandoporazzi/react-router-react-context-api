import React, { Component } from 'react';

const Context = React.createContext();

const { Provider, Consumer } = Context;

class ContextProvider extends Component {
  constructor() {
    super();

    this.state = {
      nav: [
        {label: 'Shoes', url: 'shoes'},
        {label: 'Bags', url: 'bags'}
      ],
      cartItems: [],
      addToCart: (item) => {
        let items = this.state.cartItems;

        if (items.length > 0) {
          let isItemInArray = false;

          for (let i = 0; i < items.length; i++) {
            if (items[i].code === item.code) {
              isItemInArray = true;
              items[i].quantity += 1;
              break;
            }
          }

          if (!isItemInArray) {
            item.quantity = 1;
            items = items.concat(item);
          }

          this.setState( (state) => ({cartItems: items}) );
        } else {
          item.quantity = 1;
          this.setState( (state) => ({cartItems: state.cartItems.concat(item)}) )
        }
      },
      changeQuantity: (code, operation) => {
        let { cartItems } = this.state;
        let changed = false;

        for (let i = 0; i < cartItems.length; i++) {
          if (cartItems[i].code === code) {
            if (operation === 'plus') {
              cartItems[i].quantity += 1;
              changed = true;
            }
            if (operation === 'minus') {
              if (cartItems[i].quantity > 1) {
                cartItems[i].quantity -= 1;
                changed = true;
              }
            }

            break;
          }
        }
        changed && this.setState({cartItems});
      }
    }
  }

  render() {
    return (
      <Provider value={this.state}>
        {this.props.children}
      </Provider>
    );
  }
}

export {ContextProvider as default, Consumer};