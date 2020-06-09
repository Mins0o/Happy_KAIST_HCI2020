import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import bowlmix from './bowl mix.jpg';
import grill from './grill.png';

class RecipeText extends React.Component{
    render(){
        return(
            <div>
                <br></br>
                <Container>
                    <Row>
                        <Col><img src={bowlmix} style={{width:'150px', height:'150px', borderRadius:'20px'}} ></img></Col>
                        <Col>
                        <div className='step'>Step 1</div><br></br>
                        In a bowl, mix ground beef, egg, onion, bread crumbs, Worcestershire, garlic, 1/2 teaspoon salt, and 1/4 teaspoon pepper until well blended. Divide mixture into four equal portions and shape each into a patty about 4 inches wide.
                        </Col>
                    </Row>
                    <br></br>
                    <Row>
                        <Col><img src={grill} style={{width:'150px', height:'150px', borderRadius:'20px'}} ></img></Col>
                        <Col>
                        <div className='step'>Step 2</div><br></br>
                        Lay burgers on an oiled barbecue grill over a solid bed of hot coals or high heat on a gas grill (you can hold your hand at grill level only 2 to 3 seconds); close lid on gas grill. Cook burgers, turning once, until browned on both sides and no longer pink inside (cut to test), 7 to 8 minutes total. Remove from grill
                        </Col>
                    </Row>
                </Container>
                
                    
                
            </div>
        )
    }
}

export default RecipeText;