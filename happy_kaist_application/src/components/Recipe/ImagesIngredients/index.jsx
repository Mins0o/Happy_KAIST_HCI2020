import React from 'react';
import ImageIng from '../ImageIng';
import BuyButton from '../BuyButton';
import * as di from '../DisplayID.js';
import imgList from '../../../data/image_list.json'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import * as ch from '../../checkout/checkoutbox/check.js';


class ImagesIngredients extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            optionState: false,
            ingState: true
        };
        this.handleCheck = this.handleCheck.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleCheck(){
        this.setState(prevState=>({
            optionState: !(prevState.optionState),
            ingState: !(prevState.ingState)
        }));
    }

    handleChange(event){
        {this.props.imgIngredients.map(group=>{return(
            group.map(value=>{
                ch.setIngredientCount(value.ing, parseInt(event.target.value));
            })        
            )
        })}
    }

    render(){
        var {optcount} = this.state;
        return(
            <div>
            <br></br>
            <Container>
                <Row>
                <Col>
                <p style={{textAlign: 'left', color: "rgba(0,0,255,0.8)", fontWeight:'700'}}>*each ingredient's quantity accounts for one portion</p>
                </Col>
                <Col>
                
                </Col>
                <Col>
                <div id="cb">
                <Form>
                    <Form.Row className="align-items-center">
                    <Col xs="auto" className="my-1">
                        {this.state.optionState == false ? 
                            null
                            :
                            <Form.Control
                                as="select"
                                onChange={this.handleChange}
                                custom    
                             >
                            <option value="0">Choose portion</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                            </Form.Control>}
                    </Col>
                    <Col>
                    <Form.Check
                        type="checkbox"
                        className="my-1 mr-sm-2"
                        id="customControlInline"
                        label="Buy all ingredients"
                        onChange={this.handleCheck}
                    custom
                    />      
                    </Col>
                    </Form.Row>
                </Form>
                </div></Col>
                </Row>
                {this.props.imgIngredients.map(group=>{
                    return(
                    <div>
                    <Row>
                        {group.map(value=>{
                            const style = {height: '9.2vw', width: '9.2vw'};
                            if (this.state.ingState==true){
                            return <Col md="1" lg="3"><ImageIng ing = {value.ing} qty = {value.qty} ingState={this.state.ingState}/></Col>;
                            }
                            else{
                                return null
                            }    
                        })
                        }
                    </Row>
                    <br></br>
                    </div>
                    )
            })}
                
            </Container>
            <br></br>
            </div>
        )
    }
}

export default ImagesIngredients;