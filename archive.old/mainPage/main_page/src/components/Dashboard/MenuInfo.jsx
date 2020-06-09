import React, {Component} from 'react';
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';
import './InfoModal.css';

class MenuInfo extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
        <div className ="menu-info-container">
            
        <div id="food-name">Spaggheti Carbonara</div>
        <div id="photo-box" className="square"></div>
        <div id="lvl-exp-container">
            <div id="level">Level 1 - 3</div>
            <div id="exp">Exp +520</div>
        </div>
        </div>  
        )
    }
}

export default MenuInfo