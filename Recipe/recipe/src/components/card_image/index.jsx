import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { images } from './image_list';

class card_image extends React.Component{
    constructor(props){
        super(props);
        this.state = {active:false};
        this.clickBuy = this.clickBuy.bind(this);
    }

    render(){
        const style = this.state.active ? {border: '3px solid green', height: '150px', width: '150px'}:{border: '3px solid black', height: '150px', width: '150px'};
        let  imgSrc = images.dog.src;
        return(
            
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src= './anjeng.jpg'/>
                <Card.Body>
                    <Button variant="primary">Buy</Button>
                </Card.Body>
                </Card>
            
        )
    }
}

export default card_image;