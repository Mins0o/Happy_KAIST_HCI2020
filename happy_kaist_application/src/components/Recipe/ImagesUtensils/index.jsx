import React from 'react';
//import Image from '../Image';
import BuyButton from '../BuyButton';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import RentButton from '../RentButton';

import knife from './knife.png';
import pan from './pan.png';
import stove from './stove.png';
import spatula from './spatula.jpg';
import tick from './tick.jpg';
import * as ut from '../../login/utensils/ut.js';

class ImagesUtensils extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const { utensils } = this.props;
       
        return(
            <div>
            <br></br>
            <Container>
                <Row>
                    <Col md="1" lg="3"><img src={knife} style={{width:'150px', height:'150px' }}></img> </Col>
                    <Col md="1" lg="3"><img src={pan} style={{width:'150px', height:'150px' }}></img> </Col>
                    <Col md="1" lg="3"><img src={spatula} style={{width:'150px', height:'150px' }}></img> </Col>
                    <Col md="1" lg="3"><img src={stove} style={{width:'150px', height:'150px' }}></img> </Col>
                </Row>
                <Row>
                    {ut.utGetCheck(4) ?
                    <Col md="1" lg="3"><p style={{color:"green", fontWeight:"bold", fontSize:"20px"}}>Owned</p> </Col> : <Col md="1" lg="3"> <RentButton name = {"knife"}/> </Col>}
                    {ut.utGetCheck(10) ?
                    <Col md="1" lg="3"><p style={{color:"green", fontWeight:"bold", fontSize:"20px"}}>Owned</p> </Col> : <Col md="1" lg="3"> <RentButton name = {"frying pan"}/> </Col>}
                    {false ?
                    <Col md="1" lg="3"><p style={{color:"green", fontWeight:"bold", fontSize:"20px"}}>Owned</p> </Col> : <Col md="1" lg="3"> <RentButton name = {"spatula"}/> </Col>}
                    {ut.utGetCheck(3) ?
                    <Col md="1" lg="3"><p style={{color:"green", fontWeight:"bold", fontSize:"20px"}}>Owned</p> </Col> : <Col md="1" lg="3"> <RentButton name = {"stove"}/> </Col>}
                </Row>

            </Container>
            <br></br>
            </div>
        )
    }
}

export default ImagesUtensils;