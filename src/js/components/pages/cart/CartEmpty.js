import React, { Component } from 'react';

import { Consumer } from '../../../Context';

export default class CartEmpty extends Component {
  render() {
    return (
      <span>cart is empty</span>
    );
  }
}