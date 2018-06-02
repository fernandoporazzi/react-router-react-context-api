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
      addToCart: (item) => this.setState( (state) => ({cartItems: state.cartItems.concat(item)}) )
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