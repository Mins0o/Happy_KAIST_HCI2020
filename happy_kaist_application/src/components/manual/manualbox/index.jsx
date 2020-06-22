import React, {Component} from 'react';
import './index.css';
import Image from "react-bootstrap/Image";
import manualImage from '../../../images/manual.png';
import {Modal, Button, Row, Col, Form, ButtonToolbar} from 'react-bootstrap';
import './index.css';


export class Manual extends Component{
    constructor(props){
        super(props);
        this.displayId = this.props.displayId;
    }

    render(){
        return(
        <Modal className = "manualForm"
            {...this.props}
            size="xl"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            backdrop = "static"
            >
            {/* <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                </Modal.Title>
            </Modal.Header> */}
            <Modal.Body className = "manual_body">
                <Image src ={manualImage} style={{width: '1068px', height: '600px'}}/>
            </Modal.Body>
            <Modal.Footer>
                <div className="understand-button" onClick={this.props.onHide}>
                                I understand
                    </div>
            </Modal.Footer>
        </Modal>   
        )
    }
}