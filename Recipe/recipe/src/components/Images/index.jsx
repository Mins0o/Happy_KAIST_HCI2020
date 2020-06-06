import React from 'react';
import Image from '../Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Images extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const { ingredients } = this.props;
        return(
            <Container>
            <Row>
                {
                    ingredients.map((val,idx) => {
                        return(
                        <Col xs="12" sm="4">
                            <Image></Image>
                        </Col>
                        )
                    })

                }
            </Row>
            </Container>
            
        )
    }
}

export default Images;