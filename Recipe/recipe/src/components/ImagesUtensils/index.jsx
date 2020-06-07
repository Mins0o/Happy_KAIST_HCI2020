import React from 'react';
import Image from '../Image';
import BuyButton from '../BuyButton';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import RentButton from '../RentButton';

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
                {
                    utensils.map((val,idx) => {
                        return(
                        <Col md="2" lg="3">
                            <Image/>
                        </Col>
                        )
                    })

                }
                </Row>
                <br></br>
                <Row float='center'>
                    {
                    utensils.map((val,idx) => {
                        return(
                        <Col md='2' lg="3" >
                            <RentButton/>
                        </Col>
                        )
                    })
                    }
                </Row>

            </Container>
            <br></br>
            </div>
        )
    }
}

export default ImagesUtensils;