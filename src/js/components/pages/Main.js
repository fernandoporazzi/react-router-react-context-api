import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Home from './home/Home';
import About from './about/About';
import Category from './category/Category';
import Product from './product/Product';
import Cart from './cart/Cart';

export default class Main extends Component {
  constructor() {
    super();

  }

  render() {
    return (
      <main>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />

        <Route path="/c/:category" component={Category} />

        <Route path="/p/:product" component={Product} />
        <Route path="/cart" component={Cart} />
      </main>
    )
  }
}