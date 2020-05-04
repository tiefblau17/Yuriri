import React from 'react';
import { Modal } from 'react-bootstrap';
import CSS from 'csstype';

import './fullScreenModal.css';
import videoLoader from '../../mediaLoaders/videoLoader';


const fullScreenVideoStyle: CSS.Properties = {
  maxWidth: '100%',
  maxHeight: '100%',
  width: '100%',
  height: '100%',
  padding: 0,
  margin: 0
}

interface fullScreenVideoModalProps {
  fullscreenpictureid: number,
  show: boolean,
  onHide: () => void
}

export default function FullScreenVideoModal(props: fullScreenVideoModalProps) {
  return (
    <Modal
      {...props}
      centered
      animation={false}
      dialogClassName="modal"
    >
      <video src={videoLoader.getVideoById(props.fullscreenpictureid)}
            style={fullScreenVideoStyle} 
            onClick={props.onHide}
            autoPlay></video>
    </Modal>
  );
}