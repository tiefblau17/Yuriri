import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ipc = require('electron').ipcRenderer;

interface QuitModalProps {
  show: boolean,
  onHide: () => void
}

export default function QuitModal(props: QuitModalProps) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <h4>
          Do you want to exit the game?
        </h4>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>No</Button>
        <Button onClick={() => ipc.send('system:quit', )}>Yes</Button>
      </Modal.Footer>
    </Modal>
  );
}
