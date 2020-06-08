import React, {Component} from 'react';
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';
import './InfoModal.css';
import MenuInfo from './MenuInfo';
import DescriptionInfo from './DescriptionInfo';
import { Link } from 'react-router-dom';
import foodData from '../../data/food_data.json'

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
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <div className="modal-page">
                <div className="body-container">
                <MenuInfo id={this.props.displayId} foodname={foodData[this.props.displayId].name} difficulty ={foodData[this.props.displayId].difficulty}></MenuInfo>
                <DescriptionInfo></DescriptionInfo> 
                </div>
                <Link to = "/recipe">
                    <div className="proceed-button" onClick={this.props.onHide}>
                                Press to Proceed
                    </div>
                </Link>
            </div>
            </Modal.Body>
        </Modal>   
        )
    }
}