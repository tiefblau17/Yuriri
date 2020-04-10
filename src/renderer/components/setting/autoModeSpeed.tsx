import React, { Component } from 'react';
import { connect } from 'react-redux';

import store from './../../renderer';
import StoreState from '../../storeState';
import { setAutoModeSpeed } from '../../actions/settingActions';

interface AutoModeSpeedProps {
  autoModeSpeed: number;
}

interface AutoModeSpeedState {
  autoModeSpeed: number;
}

class AutoModeSpeed extends Component<AutoModeSpeedProps, AutoModeSpeedState> {
  
  constructor(props: AutoModeSpeedProps) {
    super(props);
    this.state = {autoModeSpeed: this.props.autoModeSpeed};
  }

  changeAutoModeSpeed = (e: React.ChangeEvent<HTMLInputElement>) => {
    var autoModeSpeed = (document.getElementById('autoModeSpeed') as HTMLInputElement).value;
    this.setState({ autoModeSpeed: +autoModeSpeed});
    store.dispatch(setAutoModeSpeed(+autoModeSpeed));
  }

  preloadTextSpeed = (): void => {
    var autoModeSpeedInput = document.getElementById('autoModeSpeed') as HTMLInputElement;
    autoModeSpeedInput.value = String(this.props.autoModeSpeed);
  }

  render() {
    return (
      <div>
        <input 
          type="range" 
          min="1" 
          max="100" 
          className="slider" 
          id="autoModeSpeed" 
          onChange={this.changeAutoModeSpeed}>
        </input>
      </div>
    );
  }

  componentDidMount() {
    this.preloadTextSpeed();
  }
}

const mapStateToProps = (state: StoreState) => ({
  autoModeSpeed: state.setting.autoModeSpeed
})

export default connect(mapStateToProps)(AutoModeSpeed);