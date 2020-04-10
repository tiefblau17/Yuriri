import React, { Component } from 'react';
import { connect } from 'react-redux';

import store from './../../renderer';
import StoreState from '../../storeState';
import { setTextSpeed } from '../../actions/settingActions';

interface TextSpeedProps {
  textSpeed: number;
}

interface TextSpeedState {
  textSpeed: number;
}

class TextSpeed extends Component<TextSpeedProps, TextSpeedState> {
  
  constructor(props: TextSpeedProps) {
    super(props);
    this.state = {textSpeed: this.props.textSpeed};
  }

  changeTextSpeed = (e: React.ChangeEvent<HTMLInputElement>) => {
    var newTextSpeed = (document.getElementById('textSpeed') as HTMLInputElement).value;
    this.setState({ textSpeed: +newTextSpeed});
    store.dispatch(setTextSpeed(+newTextSpeed));
  }

  preloadTextSpeed = (): void => {
    var textSpeedInput = document.getElementById('textSpeed') as HTMLInputElement;
    textSpeedInput.value = String(this.props.textSpeed);
  }

  render() {
    return (
      <div>
        <input 
          type="range" 
          min="1" 
          max="100" 
          className="slider" 
          id="textSpeed" 
          onChange={this.changeTextSpeed}>
        </input>
      </div>
    );
  }

  componentDidMount() {
    this.preloadTextSpeed();
  }
}

const mapStateToProps = (state: StoreState) => ({
  textSpeed: state.setting.textSpeed
})

export default connect(mapStateToProps)(TextSpeed);