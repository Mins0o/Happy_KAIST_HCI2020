import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import * as ch from '../../checkout/checkoutbox/check.js';

class RentButton extends React.Component{
    constructor(props){
        super(props);
        this.state = {rent:false}
        this.name = this.props.name;
        this.clickRent = this.clickRent.bind(this);
        this.clickCancel = this.clickCancel.bind(this);
    }

    clickRent(){
        this.setState(prevState=>({
            rent: true 
        }));
        ch.setIngredientCount(this.name, 1);
    }

    clickCancel(){
        this.setState(prevState=>({
            rent: false
        }));
        ch.setIngredientCount(this.name, 0);
    }

    render(){
        const { rent } = this.state;
        if (rent == false){
            return(
                <ButtonGroup aria-label="Basic example">
                    <Button variant="primary" onClick={this.clickRent}>  Rent   </Button>
                    <Button variant="secondary" disabled>x</Button>
                </ButtonGroup>     
            )
        }
        else{
            return(
                <ButtonGroup aria-label="Basic example">
                    <Button variant="success" disabled> in cart </Button>
                    <Button variant="danger" onClick={this.clickCancel}>x</Button>
                </ButtonGroup>     
            )   
        }
        
    }
}

export default RentButton;