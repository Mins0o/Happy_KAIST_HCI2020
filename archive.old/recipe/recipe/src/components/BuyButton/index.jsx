import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

class BuyButton extends React.Component{
    constructor(props){
        super(props);
        this.state = {count:0}
        this.clickUp = this.clickUp.bind(this);
        this.clickDown = this.clickDown.bind(this);
    }

    clickUp(){
        this.setState(prevState=>({
            count: prevState.count + 1
        }));
    }

    clickDown(){
        if (this.state.count != 0){
            this.setState(prevState=>({
                count: prevState.count - 1
            }));
        }
    }

    render(){
        const { count } = this.state;
        return(
            <ButtonGroup aria-label="Basic example">
                <Button variant="secondary" onClick={this.clickDown}>-</Button>
                <Button variant="primary">in cart: {count} </Button>
                <Button variant="secondary" onClick={this.clickUp}>+</Button>
            </ButtonGroup>
        )
            
    }
}



export default BuyButton;