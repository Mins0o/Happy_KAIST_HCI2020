import React, {Component} from 'react';
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';
import './InfoModal.css';
import MenuInfo from './MenuInfo';
import DescriptionInfo from './DescriptionInfo'

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
                <MenuInfo></MenuInfo>
                <DescriptionInfo></DescriptionInfo> 
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