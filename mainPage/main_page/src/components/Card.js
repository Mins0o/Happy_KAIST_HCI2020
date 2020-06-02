import React from 'react';
import Card from "react-bootstrap/Card";

class CardItem extends React.Component {
	state={
		
		
		
	}
	render() {
		return (
			<Card
				style={{width : "18rem"}}
			>
				<Card.Img variant="top" src={require("../image_sources/0"+(this.props.numbering).toString()+".png")} />
				<Card.Body>
					<Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.
					</Card.Text>
				</Card.Body>
			</Card>
		);
	}
}
export default CardItem;
