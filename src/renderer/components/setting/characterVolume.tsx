import React, { Component } from 'react';
import { connect } from 'react-redux';

import store from './../../renderer';
import StoreState from '../../storeState';
import { setCharacterVolume } from '../../actions/settingActions';

interface CharacterVolumeProps {
  characterVolume: number;
}

interface CharacterVolumeState {
  characterVolume: number;
}

class CharacterVolume extends Component<CharacterVolumeProps, CharacterVolumeState> {
  
  constructor(props: CharacterVolumeProps) {
    super(props);
    this.state = {characterVolume: this.props.characterVolume};
  }

  changeCharacterVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    var newCharacterVolume = (document.getElementById('characterVolume') as HTMLInputElement).value;
    this.setState({ characterVolume: +newCharacterVolume});
    store.dispatch(setCharacterVolume(+newCharacterVolume));
  }

  preloadCharacterVolume = (): void => {
    var characterVolumeInput = document.getElementById('characterVolume') as HTMLInputElement;
    characterVolumeInput.value = String(this.props.characterVolume);
  }

  render() {
    return (
      <div>
        <input 
          type="range" 
          min="1" 
          max="100" 
          className="slider" 
          id="characterVolume" 
          onChange={this.changeCharacterVolume}>
        </input>
      </div>
    );
  }

  componentDidMount() {
    this.preloadCharacterVolume();
  }
}

const mapStateToProps = (state: StoreState) => ({
  characterVolume: state.setting.characterVolume
})

export default connect(mapStateToProps)(CharacterVolume);