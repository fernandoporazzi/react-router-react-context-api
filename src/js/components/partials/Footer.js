import React, { Component } from 'react';

import { Link } from 'react-router-dom';

export default class Footer extends Component {
  constructor() {
    super();

  }

  render() {
    return (
      <footer>
        <Link to="/about">About</Link>
      </footer>
    )
  }
}