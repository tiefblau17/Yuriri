import React, { Component } from 'react';
import { connect } from 'react-redux';

import imageLoader from '../../mediaLoaders/imageLoader';
import StoreState from '../../storeState';
import FullScreenVideoModal from './fullScreenVideoModal';

interface BonusVideoProps {
  discoveredVideos: boolean[]
}

interface BonusVideoState {
  currentPage: number
  totalPages: number
  videosPerPage: number
  modalShow: boolean
}

class BonusVideo extends Component<BonusVideoProps, BonusVideoState> {
  
  constructor(props: BonusVideoProps) {
    super(props);
    this.state = {
      videosPerPage: 12,
      currentPage: 1,
      totalPages: Math.ceil(props.discoveredVideos.length / 12),
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
    
    let videoDisplays;
    videoDisplays = this.props.discoveredVideos.map((isVideoDiscovered, index) => {
      if (index >= (this.state.currentPage - 1) * this.state.videosPerPage && index < this.state.currentPage * this.state.videosPerPage) {
        if (isVideoDiscovered) {
          return (
            <div key={index}>
              <img src={imageLoader.getPictureByID(index)} width="160" height="90" onClick={() => this.setState({ modalShow: true })}></img>
              <FullScreenVideoModal 
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
        {videoDisplays}
      </div>
    );
  }
}

const mapStateToProps = (state: StoreState) => ({
  discoveredVideos: state.bonus.discoveredVideos
})

export default connect(mapStateToProps)(BonusVideo);