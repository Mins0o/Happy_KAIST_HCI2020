import React from 'react';
//import Image from '../Image';
import BuyButton from '../BuyButton';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import bun from './bun.jpg';
import ham from './ham.png';
import lettuce from './lettuce.jpg';
import bacon from './bacon.png'

class ImagesIngredients extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const { ingredients } = this.props;
        const { inCount } = this.props;
       
        return(
            <div>
            <br></br>
            <Container>
                <Row>
                    <Col md="1" lg="3"><p style={{fontWeight:'bold'}} >Bun 2pcs</p></Col>
                    <Col md="1" lg="3"><p style={{fontWeight:'bold'}} >Ham 200gr</p></Col>
                    <Col md="1" lg="3"><p style={{fontWeight:'bold'}} >Lettuce</p></Col>
                    <Col md="1" lg="3"><p style={{fontWeight:'bold'}} >Bacon 200gr</p></Col>
                </Row>

                <Row>
                    <Col md="1" lg="3"><img src={bun} style={{width:'150px', height:'150px' }}></img> </Col>
                    <Col md="1" lg="3"><img src={ham} style={{width:'150px', height:'150px' }}></img> </Col>
                    <Col md="1" lg="3"><img src={lettuce} style={{width:'150px', height:'150px' }}></img> </Col>
                    <Col md="1" lg="3"><img src={bacon} style={{width:'150px', height:'150px' }}></img> </Col>
                </Row>
                
                <Row float='center'>
                    <Col md="1" lg="3"><BuyButton name = {"bun"}/></Col>
                    <Col md="1" lg="3"><BuyButton name = {"ham"}/></Col>
                    <Col md="1" lg="3"><BuyButton name = {"lettuce"}/></Col>
                    <Col md="1" lg="3"><BuyButton name = {"bacon"}/></Col>
                </Row>
                
                {/* <Row>
                    <Col md="1" lg="3"><p style={{fontWeight:'bold'}} >Bacon 200gr</p></Col>
                </Row>
                <Row>
                    <Col md="1" lg="3"><img src={bacon} style={{width:'150px', height:'150px' }}></img> </Col>
                </Row>
                <Row float='center'>
                    <Col md="1" lg="3"><BuyButton inCount={ inCount }/></Col>
                </Row> */}

            </Container>
            <br></br>
            </div>
        )
    }
}

export default ImagesIngredients;