import React from 'react';
import Image from '../Image';
import BuyButton from '../BuyButton';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

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
                {
                    ingredients.map((val,idx) => {
                        return(
                        <Col xs="12" sm="4">
                            <Image/>
                        </Col>
                        )
                    })

                }
                </Row>
                <br></br>
                <Row float='center'>
                    {
                    ingredients.map((val,idx) => {
                        return(
                        <Col xs="12" sm="4" >
                            <BuyButton inCount={ inCount }/>
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

export default ImagesIngredients;