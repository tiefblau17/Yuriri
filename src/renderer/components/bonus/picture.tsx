import React, { Component } from 'react';
import { connect } from 'react-redux';
import CSS from 'csstype';

import imageLoader from '../../mediaLoaders/imageLoader';
import StoreState from '../../storeState';
import FullScreenPicModal from './fullScreenPicModal';

interface BonusPictureProps {
  discoveredPictures: boolean[]
}

interface BonusPictureState {
  currentPage: number
  totalPages: number
  picturesPerPage: number
  modalShow: boolean
}

class BonusPicture extends Component<BonusPictureProps, BonusPictureState> {
  
  constructor(props: BonusPictureProps) {
    super(props);
    this.state = {
      picturesPerPage: 12,
      currentPage: 1,
      totalPages: Math.ceil(props.discoveredPictures.length / 12),
      modalShow: false
    }
  }

  changePage = (page: number) => (e: React.MouseEvent<HTMLButtonElement>) => {
    this.setState({currentPage: page});
  }

  render() {
    let pageButtons: JSX.Element[] = [];
    for (let i = 1; i <= this.state.totalPages; i++) {
      pageButtons.push(<button key={i} onClick={this.changePage(i)}>{i}</button>);
    }
    
    let pictureDisplays;
    pictureDisplays = this.props.discoveredPictures.map((isPictureDiscovered, index) => {
      if (index >= (this.state.currentPage - 1) * this.state.picturesPerPage && index < this.state.currentPage * this.state.picturesPerPage) {
        if (isPictureDiscovered) {
          return (
            <div key={index}>
              <img src={imageLoader.getPictureByID(index)} width="160" height="90" onClick={() => this.setState({ modalShow: true })}></img>
              <FullScreenPicModal 
                fullscreenpictureid={index}
                show={this.state.modalShow}
                onHide={() => this.setState({ modalShow: false })}
              />
            </div>
          )
        } else {
          return <img key={index} src={imageLoader.getBlankPicture()} width="160" height="90"></img>;
        }
      }
    });
    
    return (
      <div>
        Picture
        {pageButtons}
        {pictureDisplays}
      </div>
    );
  }
}

const mapStateToProps = (state: StoreState) => ({
  discoveredPictures: state.bonus.discoveredPictures
})

export default connect(mapStateToProps)(BonusPicture);