import React from 'react';
import Card from "react-bootstrap/Card";

class CardItem extends React.Component {
	state={
		
		
		
	}
	render() { 
		let food_data = require('../data/food_data.json');
		let i = this.props.index-1;
		var styling;
		if(food_data[i].difficulty=="h"){
		styling = {
			width:"14em",
			border: "5px solid red",
			cursor: "pointer"
		};
		}else if(food_data[i].difficulty=="m"){
		styling = {
			width:"14em",
			border: "5px solid #FFD700	",
			cursor: "pointer"
		};}else{
		styling = {
			width:"14em",
			border: "5px solid #00CD00",
			cursor: "pointer"
		};	
		}
		function clicked(e){
			alert("Ahhh");
		}
		return (
			<Card onClick={clicked} style={styling}>
				<Card.Header className="text-center">{food_data[i].name}
				</Card.Header>
				<Card.Img variant="top" src={require("../image_sources/"+food_data[i].id.toString()+".png")} />
			</Card>
		);
	}
}
export default CardItem;
