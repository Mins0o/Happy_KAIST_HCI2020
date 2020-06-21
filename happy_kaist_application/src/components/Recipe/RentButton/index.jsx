import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import * as ch from '../../checkout/checkoutbox/check.js';
import './index.css';

class RentButton extends React.Component{
    constructor(props){
        super(props);
        this.state = {rent:ch.getIngredientCount(this.props.name)}
        this.name = this.props.name;
        this.clickRent = this.clickRent.bind(this);
        this.clickCancel = this.clickCancel.bind(this);
    }

    clickRent(){
        this.setState(prevState=>({
            rent: 1
        }));
        ch.setIngredientCount(this.name, 1);
    }

    clickCancel(){
        this.setState(prevState=>({
            rent: 0
        }));
        ch.setIngredientCount(this.name, 0);
    }

    render(){
        
        var {rent} = this.state;
        if (rent == 0){
            return(
                <ButtonGroup aria-label="Basic example">
                    <Button className = "rentButton" onClick={this.clickRent}>  Rent   </Button>
                    <Button variant="secondary" disabled>x</Button>
                </ButtonGroup>     
            )
        }
        else{
            return(
                <ButtonGroup aria-label="Basic example">
                    <Button className = "clickedRentButton" disabled> in cart </Button>
                    <Button variant="secondary" onClick={this.clickCancel}>x</Button>
                </ButtonGroup>     
            )   
        }
        
    }
}

export default RentButton;