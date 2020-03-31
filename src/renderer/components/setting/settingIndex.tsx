import React, { Component } from 'react';
import { connect } from 'react-redux';

import Resolution from './resolution';

class SettingIndex extends Component {

  render() {
    return (
      <div>
        <ul>
          <li>
            <Resolution />
          </li>
        </ul>
      </div>
    );
  }
}

export default SettingIndex;