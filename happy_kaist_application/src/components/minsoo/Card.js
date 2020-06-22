import React from 'react';
import Card from "react-bootstrap/Card";
import Form from 'react-bootstrap/Form';
import './Card.css';

class CardItem extends React.Component {
	constructor(props){
		super(props);
		this.state={
		}
	}

	click(){
		this.props.click(this.props.index-1);
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
		diffText="Difficult";
		}else if(food_data[i].difficulty=="m"){
		color="warning";
		borderColor="#f7bc07";
		diffText="Challenging";
		}else{
		color="success";
		borderColor="#27a243";
		diffText="Easy";
		}
		return (
			<Card bg={color} onClick = {this.click.bind(this)}
				style={{
					width :"20vw",
					cursor: "pointer", 
					fontWeight:"bold",
					fontSize: "1.8vw",
					border:"0.5vw solid "+borderColor,
					color: "#FFFFFF",
					marginBottom: "1.5vw"
				}}
			>
				{/* <Card.Header style={{bgColor : "red", paddingLeft:"10px", paddingRight:"10px", fontSize:"17pt", paddingBottom:"10px", maxHeight:"0.1vw"}}> */}
				<div id="header-card">
					<div class ="inv-color" style={{float:"left",fontSize:"1vw"}}><img style={{height:"2.7vw"}} src={require("../../images/"+"cooking.png")}/> {food_data[i].owned.toString()}</div>
					<div class ="inv-color" style={{float:"right",fontSize:"1vw"}}><img style={{height:"1.8vw"}} src={require("../../images/"+"time.png")}/> ~ {food_data[i].time.toString()} mins</div>
				</div>
				{/* </Card.Header> */}
				<Card.Img variant="top" style={{maxHeight:"26vw"}}src={require("../../images/"+food_data[i].id.toString()+".png")} />
				<Card.Footer style={{bgColor : "red", paddingLeft:"0px", paddingRight:"0px", fontSize:"1.35vw", padding:"auto", maxHeight:"3.5vw", position:"relative"}} className="text-center">
				<span >{food_data[i].name}</span>
				<span style={{fontSize:"0.9vw",position:"absolute",bottom:"0px",right:"0px",height:"1vw"}}>{diffText}</span>
				</Card.Footer>
			</Card>
		);
	}
}
export default CardItem;
