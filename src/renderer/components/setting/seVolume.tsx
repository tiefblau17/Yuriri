import React, { Component } from 'react';
import { connect } from 'react-redux';

import store from './../../renderer';
import StoreState from '../../storeState';
import { setSeVolume } from '../../actions/settingActions';

interface SeVolumeProps {
  seVolume: number;
}

interface SeVolumeState {
  seVolume: number;
}

class SeVolume extends Component<SeVolumeProps, SeVolumeState> {
  
  constructor(props: SeVolumeProps) {
    super(props);
    this.state = {seVolume: this.props.seVolume};
  }

  changeSeVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    var newSeVolume = (document.getElementById('seVolume') as HTMLInputElement).value;
    this.setState({ seVolume: +newSeVolume});
    store.dispatch(setSeVolume(+newSeVolume));
  }

  preloadSeVolume = (): void => {
    var seVolumeInput = document.getElementById('seVolume') as HTMLInputElement;
    seVolumeInput.value = String(this.props.seVolume);
  }

  render() {
    return (
      <div>
        <input 
          type="range" 
          min="1" 
          max="100" 
          className="slider" 
          id="seVolume" 
          onChange={this.changeSeVolume}>
        </input>
      </div>
    );
  }

  componentDidMount() {
    this.preloadSeVolume();
  }
}

const mapStateToProps = (state: StoreState) => ({
  seVolume: state.setting.seVolume
})

export default connect(mapStateToProps)(SeVolume);