import React, {Component} from 'react';
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';
import './InfoModal.css';

export class InfoModal extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
        <Modal
            {...this.props}
            size="xl"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                Modal heading
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <div className="modal-page">
                <div className="body-container">
                <div className ="menu-info-container">
                </div>
                <div className ="description-container">
                </div>  
                </div>
                <div className="proceed-button" onClick={this.props.onHide}>
                            Press to Proceed
                </div>
            </div>
            </Modal.Body>
        </Modal>   
        )
    }
}