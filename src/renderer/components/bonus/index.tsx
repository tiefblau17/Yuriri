import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

import BonusPicture from './picture';
import BonusMusic from './music';
import BonusVideo from './video';

enum BonusContent {
  picture,
  music,
  video
}

interface BonusIndexProps {

}

interface BonusIndexState {
  bonusContent: BonusContent
}

class BonusIndex extends Component<BonusIndexProps, BonusIndexState> {

  state = {
    bonusContent: BonusContent.picture
  }

  changeContent = (newContent: BonusContent) => (e: React.MouseEvent<HTMLButtonElement>) => {
    this.setState({bonusContent: newContent});
    this.forceUpdate();
  }

  render() {
    let content;
    switch (this.state.bonusContent) {
      case BonusContent.picture:
        content = <BonusPicture />;
        break;
      case BonusContent.music:
        content = <BonusMusic />;
        break;
      case BonusContent.video:
        content = <BonusVideo />;
        break;
      default:
        content = <BonusPicture />;
    }
    return (
      <div>
        <div>
          <h1>
            <Link to="/main_window">home</Link>
          </h1>
          <button onClick={this.changeContent(BonusContent.picture)}>
            picture
          </button>
          <button onClick={this.changeContent(BonusContent.music)}>
            music
          </button>
          <button onClick={this.changeContent(BonusContent.video)}>
            video
          </button>
        </div>
        {content}
      </div>
    );
  }
}

export default BonusIndex;