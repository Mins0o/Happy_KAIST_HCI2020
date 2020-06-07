import React from 'react';
import Card from "react-bootstrap/Card";
import Form from 'react-bootstrap/Form';

class CardItem extends React.Component {
	state={
		
		
		
	}
	render() { 
		let food_data = require('../../data/food_data.json');
		let i = this.props.index-1;
		var color;
		var borderColor="";
		var diffText;
		if(food_data[i].difficulty=="h"){
		color="danger";
		borderColor="#d73343 ";
		diffText="Hard";
		}else if(food_data[i].difficulty=="m"){
		color="warning";
		borderColor="#f7bc07";
		diffText="Good";
		}else{
		color="success";
		borderColor="#27a243";
		diffText="Easy";
		}
		function clicked(e){
			alert("Ahhh");
		}
		return (
			<Card bg={color} onClick={clicked} 
				style={{
					width :"26vw",
					cursor: "pointer", 
					fontWeight:"bold",
					fontSize: "1.8vw",
					border:"15px solid "+borderColor,
					color: "#FFFFFF"
				}}
			>
				<Card.Img variant="top" style={{maxHeight:"26vw"}}src={require("../../images/"+food_data[i].id.toString()+".png")} />
				<Card.Footer style={{bgColor : "red", paddingLeft:"0px", paddingRight:"0px", fontSize:"17pt", padding:"auto", maxHeight:"4vw"}} className="text-center">
				{food_data[i].name}
				</Card.Footer>
			</Card>
		);
	}
}
export default CardItem;
