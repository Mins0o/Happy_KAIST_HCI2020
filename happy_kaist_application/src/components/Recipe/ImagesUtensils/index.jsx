import React from 'react';
import Image from '../Image';
import BuyButton from '../BuyButton';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import RentButton from '../RentButton';

import knive from './knive.png';
import pan from './pan.png';
import stove from './stove.png';
import spatula from './spatula.jpg';
import tick from './tick.jpg';


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
                    <Col md="1" lg="3"><img src={knive} style={{width:'150px', height:'150px' }}></img> </Col>
                    <Col md="1" lg="3"><img src={pan} style={{width:'150px', height:'150px' }}></img> </Col>
                    <Col md="1" lg="3"><img src={spatula} style={{width:'150px', height:'150px' }}></img> </Col>
                    <Col md="1" lg="3"><img src={stove} style={{width:'150px', height:'150px' }}></img> </Col>
                </Row>
                <Row>
                    <Col md="1" lg="3"><img src={tick} style={{width:'50px', height:'50px'}}></img> </Col>
                    <Col md="1" lg="3"><img src={tick} style={{width:'50px', height:'50px'}}></img> </Col>
                    <Col md="1" lg="3"> <RentButton/> </Col>
                    <Col md="1" lg="3"><img src={tick} style={{width:'50px', height:'50px'}}></img> </Col>
                </Row>

            </Container>
            <br></br>
            </div>
        )
    }
}

export default ImagesUtensils;