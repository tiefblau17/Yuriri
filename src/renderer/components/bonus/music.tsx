import React, { Component } from 'react';
import { connect } from 'react-redux';

import audioLoader from '../../mediaLoaders/audioLoader';
import StoreState from '../../storeState';

interface BonusMusicProps {
  discoveredMusic: boolean[]
}

interface BonusMiusicState {
  currentPlayingId: number
}

class BonusMusic extends Component<BonusMusicProps, BonusMiusicState> {

  state = {
    currentPlayingId: -1 //No music playing
  }

  togglePlayMusic = (id: number) => (e: React.MouseEvent<HTMLButtonElement>) => {
    if (this.state.currentPlayingId != -1 && this.state.currentPlayingId == id) {
      audioLoader.pauseMusicById();
      this.setState({currentPlayingId: -1});
    } else {
      audioLoader.playMusicById(id);
      this.setState({currentPlayingId: id});
    }
  }

  pauseMusic = (e: React.MouseEvent<HTMLButtonElement>) => {
    audioLoader.pauseMusicById();
  }

  render() {
    let musicButtons;
    musicButtons = this.props.discoveredMusic.map((isMusicDiscovered, index) => {
      if (isMusicDiscovered) {
        return <button key={index} onClick={this.togglePlayMusic(index)}>{audioLoader.getNameById(index)}</button>;
      } else {
        return <button key={index} onClick={this.pauseMusic}>?????</button>
      }
    });

    return (
      <div>
        Muisc
        {musicButtons}
      </div>
    );
  }
}

const mapStateToProps = (state: StoreState) => ({
  discoveredMusic: state.bonus.discoveredMusic
})

export default connect(mapStateToProps)(BonusMusic);