import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

class HomePage extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/">New Game</Link>
          </li>
          <li>
            <Link to="/">Continue</Link>
          </li>
          <li>
            <Link to="/setting">Config</Link>
          </li>
          <li>
            <Link to="/">Bonus</Link>
          </li>
          <li>
            <Link to="/">Quit</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default HomePage;