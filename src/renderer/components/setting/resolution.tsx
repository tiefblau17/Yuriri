import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

import store from './../../renderer';
import StoreState from '../../storeState';
import { setResolution } from './../../actions/settingActions';

const ipc = require('electron').ipcRenderer;

interface ResolutionProps {
  resolution: string;
}

interface ResolutionState {
  resolution: string;
}

class Resolution extends Component<ResolutionProps, ResolutionState> {

  constructor(props: ResolutionProps) {
    super(props);
    this.state = {resolution: this.props.resolution};
  }

  changeResolution = (e: React.ChangeEvent<HTMLSelectElement>) => {
    var newResolution = (document.getElementById('resolution') as HTMLSelectElement).value;
    this.setState({ resolution: newResolution});
    ipc.send('setting:resolution', newResolution);
    store.dispatch(setResolution(newResolution));
  }

  preloadResolution = (): void => {
    var resolutionSelect = document.getElementById('resolution') as HTMLSelectElement;
    var options = resolutionSelect.options;
    for (var option, i = 0; option = options[i]; i++) {
      if (option.value == this.props.resolution) {
        resolutionSelect.selectedIndex = i;
        break;
      }
    }
  }

  render() {
    return (
      <div>
        <select id="resolution" onChange={this.changeResolution}>
          <option value="480">640x480</option>
          <option value="720">1280x720</option>
          <option value="1080">1920x1080</option>
          <option value="1440">2560x1440</option>
          <option value="2160">3840x2160</option>
          <option value="full">Full Screen</option>
        </select>
        <h1>
          <Link to="/main_window">home</Link>
        </h1>
      </div>
    );
  }

  componentDidMount() {
    this.preloadResolution();
  }
}

const mapStateToProps = (state: StoreState) => ({
  resolution: state.setting.resolution
})

export default connect(mapStateToProps)(Resolution);