import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Minicart from './Minicart';

import { Consumer } from '../../Context';

export default class Header extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // fetch menus and set state
    // this.s
  }

  render() {
    return (
      <header className="header">
        <div className="header-left">
          <h1>
            <Link to="/">SCHUTZ</Link>
          </h1>

          <nav className="header-nav">
            <ul>
              <Consumer>
                {
                  ( ({nav}) => (
                    nav.map((n, i) => (
                      <li key={i}>
                        <Link to={`/c/${n.url}`} className="nav-link">{n.label}</Link>
                      </li>
                    ) )
                  ) )
                }
              </Consumer>
            </ul>
          </nav>
        </div>

        <div className="header-right">
          <Minicart />
        </div>
      </header>
    )
  }
}