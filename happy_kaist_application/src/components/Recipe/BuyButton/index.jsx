import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import * as ch from '../../checkout/checkoutbox/check.js';
import './index.css';


class BuyButton extends React.Component{
    constructor(props){
        super(props);
        this.state = {count:0}
        this.name = this.props.name;
        this.clickUp = this.clickUp.bind(this);
        this.clickDown = this.clickDown.bind(this);
    }

    clickUp(){
        this.setState(prevState=>({
            count: prevState.count + 1,
        }));
        ch.setIngredientCount(this.name, this.state.count + 1);
    }

    clickDown(){
        if (this.state.count != 0){
            this.setState(prevState=>({
                count: prevState.count - 1
            }));
            ch.setIngredientCount(this.name, this.state.count - 1);
        }
    }

    render(){
        const { count } = this.state;
        return(
            <ButtonGroup aria-label="Basic example">
                <Button className = "buybutton_style" variant="secondary" onClick={this.clickDown}>-</Button>
                <Button className = "buybuttonMiddle_style" variant="primary" disabled>in cart: {count} </Button>
                <Button className = "buybutton_style" variant="secondary" onClick={this.clickUp}>+</Button>
            </ButtonGroup>
        )
            
    }
}



export default BuyButton;