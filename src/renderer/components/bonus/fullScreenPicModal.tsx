import React from 'react';
import { Modal } from 'react-bootstrap';
import CSS from 'csstype';

import './fullScreenModal.css';
import imageLoader from '../../mediaLoaders/imageLoader';


const fullScreenPictureStyle: CSS.Properties = {
  maxWidth: '100%',
  maxHeight: '100%',
  width: '100%',
  height: '100%',
}

interface fullScreenPicModalProps {
  fullscreenpictureid: number,
  show: boolean,
  onHide: () => void
}

export default function FullScreenPicModal(props: fullScreenPicModalProps) {
  return (
    <Modal
      {...props}
      centered
      dialogClassName="modal"
    >
      <img src={imageLoader.getPictureByID(props.fullscreenpictureid)}
            style={fullScreenPictureStyle} 
            onClick={props.onHide}></img>
    </Modal>
  );
}