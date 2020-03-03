import React from 'react';

import Modal from 'react-bootstrap/Modal';

// import './Modal.css';

const modalUI = (props) => (
    <Modal show={props.show}  onHide={props.handle} centered>
        <Modal.Header closeButton>
            <Modal.Title>Order Preview</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.children}</Modal.Body>
        <Modal.Footer>
            <button className="btn btn-secondary" onClick={props.handle}>Back</button>
            <button className="btn btn-primary" onClick={props.purchase}>Check Out</button>
        </Modal.Footer>
    </Modal>
);

export default modalUI;