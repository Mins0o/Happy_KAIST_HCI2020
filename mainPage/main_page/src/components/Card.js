import React from 'react';
import Card from "react-bootstrap/Card";

class CardItem extends React.Component {
	state={
		
		
		
	}
	render() {
		return (
			<Card
				style={{width : "12rem"}}
			>
				<Card.Img variant="top" src={require("../image_sources/"+(this.props.numbering).toString()+".png")} />
				<Card.Body>
					<Card.Text>{require('../data/food_data.json')[this.props.numbering-1].name}
					</Card.Text>
				</Card.Body>
			</Card>
		);
	}
}
export default CardItem;
