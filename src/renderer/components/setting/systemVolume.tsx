import React, { Component } from 'react';
import { connect } from 'react-redux';

import store from './../../renderer';
import StoreState from '../../storeState';
import { setSystemVolume } from '../../actions/settingActions';

interface SystemVolumeProps {
  systemVolume: number;
}

interface SystemVolumeState {
  systemVolume: number;
}

class SystemVolume extends Component<SystemVolumeProps, SystemVolumeState> {
  
  constructor(props: SystemVolumeProps) {
    super(props);
    this.state = {systemVolume: this.props.systemVolume};
  }

  changeSystemVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    var newSystemVolume = (document.getElementById('systemVolume') as HTMLInputElement).value;
    this.setState({ systemVolume: +newSystemVolume});
    store.dispatch(setSystemVolume(+newSystemVolume));
  }

  preloadSystemVolume = (): void => {
    var systemVolumeInput = document.getElementById('systemVolume') as HTMLInputElement;
    systemVolumeInput.value = String(this.props.systemVolume);
  }

  render() {
    return (
      <div>
        <input 
          type="range" 
          min="1" 
          max="100" 
          className="slider" 
          id="systemVolume" 
          onChange={this.changeSystemVolume}>
        </input>
      </div>
    );
  }

  componentDidMount() {
    this.preloadSystemVolume();
  }
}

const mapStateToProps = (state: StoreState) => ({
  systemVolume: state.setting.systemVolume
})

export default connect(mapStateToProps)(SystemVolume);