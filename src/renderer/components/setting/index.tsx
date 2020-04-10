import React, { Component } from 'react';
import { connect } from 'react-redux';

import Resolution from './resolution';
import TextSpeed from './textSpeed';
import AutoModeSpeed from './autoModeSpeed';
import SystemVolume from './systemVolume';
import CharacterVolume from './characterVolume';
import SeVolume from './seVolume';

class SettingIndex extends Component {

  render() {
    return (
      <div>
        <ul>
          <li>
            <Resolution />
          </li>
          <li>
            <TextSpeed />
          </li>
          <li>
            <AutoModeSpeed />
          </li>
          <li>
            <SystemVolume />
          </li>
          <li>
            <CharacterVolume />
          </li>
          <li>
            <SeVolume />
          </li>
        </ul>
      </div>
    );
  }
}

export default SettingIndex;