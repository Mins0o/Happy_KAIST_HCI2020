import React from 'react';
import CardItem from "./Card.js";

class CardList extends React.Component {
	constructor(props){
		super(props);
		this.state={}
	}

	render() {
	  return (
		this.props.menus.map((menu) =>(
			<CardItem click={this.props.cardClick} key={menu.id} index={menu.id}/>
			
	  ))
	  );
	}
}
export default CardList;
