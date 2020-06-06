import React from 'react';
import CardItem from "./Card.js";

class CardList extends React.Component {
	state={
		
		
		
	}
	render() {
	console.log(this.props.menus);
	  return (
		this.props.menus.map((menu) =>(
			<CardItem key={menu.id} index={menu.id}/>
			
	  ))
	  );
	}
}
export default CardList;
